import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy | ScaleFunnel",
    description: "Refund and cancellation policy for ScaleFunnel services",
};

export default function RefundPolicy() {
    return (
        <div className="min-h-screen bg-background py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-4">
                    Refund & Cancellation Policy
                </h1>
                <p className="text-sm text-muted-foreground mb-8">
                    Last updated: {new Date().toLocaleDateString("en-IN")}
                </p>

                <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Our Commitment</h2>
                        <p className="text-muted-foreground">
                            At ScaleFunnel, customer satisfaction is our priority. We stand behind the quality
                            of our services and offer fair refund policies tailored to each service type.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">
                            1. 1:1 Guidance Sessions (₹999) — Satisfaction Guarantee
                        </h2>
                        <p className="text-muted-foreground mb-3">
                            <strong>100% Money-Back Guarantee:</strong> If you're not satisfied with your 1:1
                            mentorship session, you can request a full refund with no questions asked.
                        </p>
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
                            <p className="text-muted-foreground mb-2">
                                <strong>Refund Window:</strong> 48 hours after the session ends
                            </p>
                            <p className="text-muted-foreground mb-2">
                                <strong>How to Claim:</strong> Email{" "}
                                <a
                                    href="mailto:nandashankar26@gmail.com"
                                    className="text-primary hover:underline"
                                >
                                    nandashankar26@gmail.com
                                </a>{" "}
                                with "Refund Request" in the subject line
                            </p>
                            <p className="text-muted-foreground">
                                <strong>Processing Time:</strong> 5-7 business days to your original payment
                                method
                            </p>
                        </div>
                        <p className="text-muted-foreground mb-3">
                            <strong>Conditions:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>You must have attended the scheduled session</li>
                            <li>Refund request must be made within 48 hours of session completion</li>
                            <li>No-shows or last-minute cancellations (less than 24 hours notice) are not eligible for refunds</li>
                            <li>One refund per customer for this service type</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">
                            2. Portfolio Upgrade Services (₹1,500)
                        </h2>
                        <p className="text-muted-foreground mb-3">
                            <strong>Partial Refund Policy:</strong> Due to the time and effort involved in
                            portfolio strategy and optimization:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>
                                <strong>Before Work Begins:</strong> 100% refund if requested before we start
                                the initial portfolio review
                            </li>
                            <li>
                                <strong>After Initial Review:</strong> 50% refund if requested within 3 days
                                of receiving our initial assessment
                            </li>
                            <li>
                                <strong>After Delivery:</strong> No refunds once final deliverables are
                                provided, but we offer one round of revisions included
                            </li>
                        </ul>
                        <p className="text-muted-foreground mt-3">
                            <strong>Processing Time:</strong> 7-10 business days from approval
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">
                            3. Product Development Services (₹5,000+)
                        </h2>
                        <p className="text-muted-foreground mb-3">
                            <strong>Milestone-Based Refunds:</strong> Since these are custom projects with
                            defined scopes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>
                                <strong>Before Work Begins:</strong> 100% refund (minus payment processing
                                fees of 2.5%)
                            </li>
                            <li>
                                <strong>During Development:</strong> Refund of unused milestone payments per
                                the project agreement
                            </li>
                            <li>
                                <strong>After Delivery:</strong> No refunds, but we offer warranty support as
                                specified in the project agreement (typically 30 days for bug fixes)
                            </li>
                        </ul>
                        <p className="text-muted-foreground mt-3">
                            <strong>Note:</strong> Work-in-progress (partially completed features,
                            designs, code) remains our property until final payment. You receive full
                            ownership and source code only upon project completion and payment.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">4. Cancellation by Customer</h2>
                        <p className="text-muted-foreground mb-3">You may cancel services as follows:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>
                                <strong>1:1 Sessions:</strong> Cancel up to 24 hours before scheduled time for
                                full refund or free rescheduling
                            </li>
                            <li>
                                <strong>Portfolio Services:</strong> Cancel before work begins for full refund
                            </li>
                            <li>
                                <strong>Product Development:</strong> Cancellation terms specified in project
                                agreement
                            </li>
                        </ul>
                        <p className="text-muted-foreground mt-3">
                            <strong>How to Cancel:</strong> Email us at{" "}
                            <a
                                href="mailto:nandashankar26@gmail.com"
                                className="text-primary hover:underline"
                            >
                                nandashankar26@gmail.com
                            </a>{" "}
                            with your booking details and reason for cancellation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">5. Cancellation by ScaleFunnel</h2>
                        <p className="text-muted-foreground">
                            If we need to cancel or cannot deliver a service due to unforeseen circumstances:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-2">
                            <li>You will be notified as soon as possible</li>
                            <li>You will receive a 100% refund within 5-7 business days</li>
                            <li>Or we will offer rescheduling at your convenience</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">6. Refund Processing</h2>
                        <p className="text-muted-foreground mb-3">
                            <strong>Payment Method:</strong> Refunds are issued to your original payment
                            method (UPI, card, net banking, wallet).
                        </p>
                        <p className="text-muted-foreground mb-3">
                            <strong>Timeline:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Refund initiated: 1-2 business days after approval</li>
                            <li>Credit to your account: 5-7 business days (depending on your bank/payment provider)</li>
                            <li>You will receive email confirmation when refund is processed</li>
                        </ul>
                        <p className="text-muted-foreground mt-3">
                            <strong>Payment Gateway Fees:</strong> Razorpay charges are non-refundable (approximately 2-3% of transaction amount). For small refunds, we absorb this cost; for large custom projects, processing fees may be deducted from refund amount.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">7. Non-Refundable Situations</h2>
                        <p className="text-muted-foreground mb-3">
                            Refunds will <strong>not</strong> be provided in the following cases:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>No-shows: You miss a scheduled session without prior notice</li>
                            <li>Late cancellations: Less than 24 hours before session time</li>
                            <li>
                                Change of mind after service completion and satisfactory delivery
                            </li>
                            <li>Technical issues on your end (internet, device) preventing session attendance</li>
                            <li>Violation of our Terms of Service</li>
                            <li>Requesting refund beyond the specified time windows</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">8. Rescheduling vs. Refunds</h2>
                        <p className="text-muted-foreground">
                            We encourage rescheduling over refunds for 1:1 sessions. If you need to change
                            your appointment, contact us at least 24 hours in advance and we'll find an
                            alternative time at no additional cost.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">9. Disputes and Resolution</h2>
                        <p className="text-muted-foreground">
                            If you have concerns about a refund decision or service quality:
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4 mt-2">
                            <li>Contact us at nandashankar26@gmail.com explaining your concern</li>
                            <li>We will respond within 48 hours</li>
                            <li>We will work with you in good faith to find a fair resolution</li>
                            <li>
                                If unresolved, you may escalate to Razorpay's dispute resolution process
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">10. Changes to This Policy</h2>
                        <p className="text-muted-foreground">
                            This refund policy may be updated periodically. Changes will be effective
                            immediately upon posting. Services purchased before policy changes will be subject
                            to the policy in effect at the time of purchase.
                        </p>
                    </section>

                    <section className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-3">Contact for Refunds</h2>
                        <p className="text-muted-foreground mb-3">
                            To request a refund or discuss cancellation:
                        </p>
                        <div className="text-muted-foreground space-y-1">
                            <p>
                                <strong>Email:</strong>{" "}
                                <a
                                    href="mailto:nandashankar26@gmail.com"
                                    className="text-primary hover:underline"
                                >
                                    nandashankar26@gmail.com
                                </a>
                            </p>
                            <p>
                                <strong>Subject Line:</strong> "Refund Request - [Service Name] - [Your Name]"
                            </p>
                            <p>
                                <strong>Include:</strong> Booking confirmation, payment receipt, reason for refund
                            </p>
                            <p>
                                <strong>Response Time:</strong> Within 24-48 hours
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}