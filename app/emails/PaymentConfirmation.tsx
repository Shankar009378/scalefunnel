import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface PaymentConfirmationEmailProps {
    customerName: string;
    plan: string;
    amount: string;
    paymentId: string;
    calendlyUrl: string;
    thankYouUrl: string;
}

export function PaymentConfirmationEmail({
    customerName,
    plan,
    amount,
    paymentId,
    calendlyUrl,
    thankYouUrl,
}: PaymentConfirmationEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Your {plan} booking is confirmed — schedule your session</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Payment confirmed 🎉</Heading>

                    <Text style={text}>Hey {customerName},</Text>

                    <Text style={text}>
                        Your payment for <strong>{plan}</strong> has been received.
                        I&apos;m excited to work with you.
                    </Text>

                    <Section style={detailsBox}>
                        <Text style={detailLine}>
                            <strong>Service:</strong> {plan}
                        </Text>
                        <Text style={detailLine}>
                            <strong>Amount:</strong> {amount}
                        </Text>
                        <Text style={detailLine}>
                            <strong>Payment ID:</strong> {paymentId}
                        </Text>
                    </Section>

                    <Heading as="h2" style={h2}>
                        Next: book your session
                    </Heading>

                    <Text style={text}>
                        Pick a time that works for you. You&apos;ll get a Google Meet
                        invite automatically once you book.
                    </Text>

                    <Section style={buttonContainer}>
                        <Button href={calendlyUrl} style={button}>
                            Schedule Your Session
                        </Button>
                    </Section>

                    <Text style={smallText}>
                        Or visit your{" "}
                        <Link href={thankYouUrl} style={link}>
                            confirmation page
                        </Link>{" "}
                        to schedule directly there.
                    </Text>

                    <Hr style={hr} />

                    <Text style={smallText}>
                        Questions? Just reply to this email — it goes straight to me.
                    </Text>

                    <Text style={signature}>
                        — Shankar Kumar Nanda
                        <br />
                        ScaleFunnel
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

// Styles — inline because email clients don't support external CSS
const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
};
const container = { margin: "0 auto", padding: "40px 20px", maxWidth: "560px" };
const h1 = {
    color: "#0f172a",
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: 1.3,
    margin: "0 0 16px",
};
const h2 = {
    color: "#0f172a",
    fontSize: "20px",
    fontWeight: 600,
    margin: "32px 0 12px",
};
const text = {
    color: "#334155",
    fontSize: "16px",
    lineHeight: 1.6,
    margin: "0 0 16px",
};
const smallText = {
    color: "#64748b",
    fontSize: "14px",
    lineHeight: 1.5,
    margin: "16px 0",
};
const detailsBox = {
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    padding: "20px",
    margin: "24px 0",
};
const detailLine = { color: "#334155", fontSize: "15px", margin: "6px 0" };
const buttonContainer = { textAlign: "center" as const, margin: "32px 0" };
const button = {
    backgroundColor: "#F97316",
    borderRadius: "8px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: 600,
    textDecoration: "none",
    padding: "14px 28px",
    display: "inline-block",
};
const link = { color: "#F97316", textDecoration: "underline" };
const hr = { borderColor: "#e2e8f0", margin: "32px 0" };
const signature = {
    color: "#64748b",
    fontSize: "14px",
    lineHeight: 1.6,
    margin: "16px 0 0",
};