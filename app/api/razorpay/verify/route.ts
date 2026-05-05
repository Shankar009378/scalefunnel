import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import Razorpay from "razorpay";
import { z } from "zod";
import { sendPaymentConfirmation } from "@/lib/email";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const verifySchema = z.object({
    razorpay_order_id: z.string(),
    razorpay_payment_id: z.string(),
    razorpay_signature: z.string(),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const parsed = verifySchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json({ verified: false, error: "Invalid payload" }, { status: 400 });
        }

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            parsed.data;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        const isValid = expectedSignature === razorpay_signature;

        if (!isValid) {
            console.warn("[razorpay/verify] Signature mismatch", {
                razorpay_order_id,
                razorpay_payment_id,
            });
            return NextResponse.json({ verified: false }, { status: 400 });
        }

        // ✅ Payment verified. This is where you'd:
        // - Save the payment to your database
        // - Send a confirmation email
        // - Send yourself a WhatsApp/email notification
        // - Trigger Calendly invite


        // 2. Fetch the order to retrieve customer details from notes
        // (Server-side source of truth — never trust client-passed customer data)
        const order = await razorpay.orders.fetch(razorpay_order_id);
        const notes = (order.notes ?? {}) as Record<string, string>;

        const customerName = notes.customerName ?? "Customer";
        const customerEmail = notes.customerEmail ?? "";
        const plan = notes.plan ?? "Service";
        const amount = Number(order.amount);

        // 3. Send confirmation email — awaited so it completes before serverless exits
        // But errors don't fail the whole request: payment IS verified
        if (customerEmail) {
            const emailResult = await sendPaymentConfirmation({
                customerName,
                customerEmail,
                plan,
                amount,
                paymentId: razorpay_payment_id,
            });

            if (!emailResult.success) {
                // Payment succeeded but email failed. Log loudly, don't fail user.
                // Webhook acts as backup notification path.
                console.error("[verify] Email send failed (payment still verified)", {
                    paymentId: razorpay_payment_id,
                    error: emailResult.error,
                });
            }
        }

        // // For tonight: just log it. You'll see it in your Razorpay dashboard regardless.
        // console.log("[razorpay/verify] Payment verified", {
        //     razorpay_order_id,
        //     razorpay_payment_id,
        // });

        return NextResponse.json({
            verified: true,
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
            plan,
            customerName,
            customerEmail,
        });
    } catch (error) {
        console.error("[razorpay/verify]", error);
        return NextResponse.json({ verified: false, error: "Server error" }, { status: 500 });
    }
}