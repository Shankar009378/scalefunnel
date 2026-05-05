import { PaymentConfirmationEmail } from "@/app/emails/PaymentConfirmation";
import { resend } from "@/lib/resend";

// Use onboarding@resend.dev for testing (sends only to your Resend-registered email)
// Switch to your verified domain after DNS verification: payments@scalefunnel.com
const FROM_EMAIL = "ScaleFunnel <payments@scalefunnel.in>";

const CALENDLY_URL = "https://calendly.com/scalefunnel/strategy-call-paid-free";

interface SendPaymentConfirmationParams {
    customerName: string;
    customerEmail: string;
    plan: string;
    amount: number; // in paise
    paymentId: string;
}

export async function sendPaymentConfirmation({
    customerName,
    customerEmail,
    plan,
    amount,
    paymentId,
}: SendPaymentConfirmationParams) {

    const calendlyBase = CALENDLY_URL;

    // Pre-fill Calendly with name and email so user doesn't re-type
    const prefilledCalendly = `${calendlyBase}?name=${encodeURIComponent(
        customerName
    )}&email=${encodeURIComponent(customerEmail)}`;

    const thankYouUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you?payment_id=${paymentId}`;

    const formattedAmount = `₹${(amount / 100).toLocaleString("en-IN")}`;

    try {
        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: customerEmail,
            subject: `Your ${plan} booking is confirmed — schedule your session`,
            react: PaymentConfirmationEmail({
                customerName,
                plan,
                amount: formattedAmount,
                paymentId,
                calendlyUrl: prefilledCalendly,
                thankYouUrl,
            }),
            // BCC yourself so you know about every booking immediately
            bcc: ["nandashankar26@gmail.com"],
        });

        if (error) {
            console.error("[email] Resend returned error:", error);
            return { success: false, error };
        }

        return { success: true, emailId: data?.id };
    } catch (error) {
        console.error("[email] Unexpected error:", error);
        return { success: false, error };
    }
}