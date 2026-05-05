import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { z } from "zod";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const orderSchema = z.object({
    plan: z.enum(["1:1 Guidance", "Portfolio Upgrade", "Get Your Product Built"]),
    // amount: z.number().int().positive(), // in paise (₹999 = 99900)
    customerName: z.string().min(2),
    customerEmail: z.string().email(),
});

// Server-authoritative pricing — never trust client to set the amount.
const PLAN_PRICES: Record<string, number> = {
    "1:1 Guidance": 99900,        // ₹999.00
    "Portfolio Upgrade": 150000,   // ₹1,500.00
    "Get Your Product Built": 500000, // ₹5,000.00 (minimum, custom quotes after)
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const parsed = orderSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid request", details: parsed.error.issues },
                { status: 400 }
            );
        }

        const { plan, customerName, customerEmail } = parsed.data;

        // Force server-side pricing — ignore whatever the client sent.
        const amount = PLAN_PRICES[plan];
        if (!amount) {
            return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
        }

        const order = await razorpay.orders.create({
            amount, // in paise
            currency: "INR",
            receipt: `rcpt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            notes: {
                plan,
                customerName,
                customerEmail,
            },
        });

        return NextResponse.json({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        });
    } catch (error: any) {
        console.error("[razorpay/create-order]", error);
        return NextResponse.json(
            { error: error.message || "Failed to create order" },
            { status: 500 }
        );
    }
}