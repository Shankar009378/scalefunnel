import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | ScaleFunnel",
    description: "Terms and conditions for ScaleFunnel services",
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-background py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
                <p className="text-sm text-muted-foreground mb-8">
                    Last updated: {new Date().toLocaleDateString("en-IN")}
                </p>

                <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">1. Agreement to Terms</h2>
                        <p className="text-muted-foreground">
                            By accessing or using ScaleFunnel's services at{" "}
                            <a href="https://scalefunnel.com" className="text-primary hover:underline">
                                scalefunnel.com
                            </a>
                            , you agree to be bound by these Terms of Service. If you do not agree to these
                            terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">2. Services Offered</h2>
                        <p className="text-muted-foreground mb-3">ScaleFunnel provides:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>
                                <strong>1:1 Guidance Sessions:</strong> Personalized mentorship for career
                                roadmaps, placements, and internships
                            </li>
                            <li>
                                <strong>Portfolio Upgrade Services:</strong> Portfolio strategy, GitHub
                                optimization, and LinkedIn positioning
                            </li>
                            <li>
                                <strong>Product Development:</strong> Full-stack web/app development with
                                production-ready quality
                            </li>
                        </ul>
                        <p className="text-muted-foreground mt-3">
                            All services are delivered digitally via video calls, email, or project
                            deliverables unless otherwise agreed.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">3. Booking and Payment</h2>
                        <p className="text-muted-foreground mb-3">
                            <strong>Booking:</strong> Sessions and services must be booked through our
                            website or by contacting us directly. Availability is subject to our schedule.
                        </p>
                        <p className="text-muted-foreground mb-3">
                            <strong>Payment:</strong> Full payment is required at the time of booking unless
                            otherwise agreed for custom projects. We accept payments via UPI, cards, net
                            banking, and wallets through Razorpay.
                        </p>
                        <p className="text-muted-foreground mb-3">
                            <strong>Pricing:</strong> All prices are listed in Indian Rupees (₹) and are
                            inclusive of applicable taxes. For "Get Your Product Built" services, pricing is
                            custom-quoted based on project scope.
                        </p>
                        <p className="text-muted-foreground">
                            <strong>Payment Confirmation:</strong> You will receive a payment confirmation
                            via email after successful transaction. Keep this for your records.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">4. Scheduling and Delivery</h2>
                        <p className="text-muted-foreground mb-3">
                            <strong>1:1 Sessions:</strong> After payment, you will receive a scheduling link
                            or direct communication to book your session within 7 days. Sessions are typically
                            60-90 minutes via Google Meet or Zoom.
                        </p>
                        <p className="text-muted-foreground mb-3">
                            <strong>Portfolio Services:</strong> Delivered within 7-14 business days from
                            booking, depending on complexity.
                        </p>
                        <p className="text-muted-foreground">
                            <strong>Product Development:</strong> Timeline agreed in the project proposal.
                            Standard projects: 2-4 weeks. Complex projects: custom timeline.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">5. Rescheduling and Cancellations</h2>
                        <p className="text-muted-foreground mb-3">
                            <strong>By You:</strong> You may reschedule or cancel a session up to 24 hours
                            before the scheduled time without penalty. Cancellations made less than 24 hours
                            before the session may forfeit the session unless rescheduling is mutually agreed.
                        </p>
                        <p className="text-muted-foreground mb-3">
                            <strong>By Us:</strong> If we need to cancel or reschedule, you will be notified
                            at least 12 hours in advance and offered alternative times or a full refund.
                        </p>
                        <p className="text-muted-foreground">
                            <strong>No-Shows:</strong> If you miss a scheduled session without prior notice,
                            the session is considered complete and no refund will be issued.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">6. Refund Policy</h2>
                        <p className="text-muted-foreground">
                            See our dedicated{" "}
                            <a href="/refund-policy" className="text-primary hover:underline">
                                Refund Policy
                            </a>{" "}
                            for complete details. In summary: 1:1 Guidance sessions offer a satisfaction
                            guarantee with full refunds available if requested within 48 hours of the session.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">
                            7. Intellectual Property and Deliverables
                        </h2>
                        <p className="text-muted-foreground mb-3">
                            <strong>Your Content:</strong> You retain all rights to any materials (resumes,
                            portfolios, project ideas) you share with us. We will not use or disclose them
                            without your permission.
                        </p>
                        <p className="text-muted-foreground mb-3">
                            <strong>Deliverables:</strong> For paid services, you receive full ownership of
                            the final deliverables (portfolio reviews, code, designs) upon completion and full
                            payment.
                        </p>
                        <p className="text-muted-foreground">
                            <strong>Our Content:</strong> All educational materials, frameworks, templates,
                            and methodologies used during sessions remain our intellectual property but you
                            may use the knowledge gained for personal career development.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">8. Confidentiality</h2>
                        <p className="text-muted-foreground">
                            We treat all client information as confidential. Your project details, career
                            goals, and personal information will not be shared with third parties except as
                            required by law or necessary service providers (payment processors, scheduling
                            tools).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">9. Limitation of Liability</h2>
                        <p className="text-muted-foreground mb-3">
                            Our services are provided "as is" for educational and professional development
                            purposes. While we strive to provide high-quality guidance:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>
                                We do not guarantee specific outcomes (job placements, interview success, etc.)
                            </li>
                            <li>
                                We are not liable for third-party actions (recruiters, companies, platforms)
                            </li>
                            <li>
                                Our total liability is limited to the amount you paid for the specific service
                            </li>
                            <li>We are not liable for indirect, consequential, or incidental damages</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">10. User Conduct</h2>
                        <p className="text-muted-foreground mb-3">You agree to:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Provide accurate information when booking services</li>
                            <li>Attend scheduled sessions on time and prepared</li>
                            <li>Treat our team and services with respect</li>
                            <li>Not record sessions without prior written consent</li>
                            <li>Not resell, redistribute, or commercially exploit our services</li>
                            <li>Not use our services for any illegal or unauthorized purpose</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">11. Testimonials and Reviews</h2>
                        <p className="text-muted-foreground">
                            By providing feedback, testimonials, or reviews, you grant us permission to use
                            them for marketing purposes (website, social media) with your first name and
                            profession unless you request otherwise.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">12. Dispute Resolution</h2>
                        <p className="text-muted-foreground">
                            Any disputes arising from these terms or our services will be resolved through
                            good-faith negotiation. If unresolved, disputes will be subject to the
                            jurisdiction of courts in Jamshedpur, Jharkhand, India.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">13. Changes to Terms</h2>
                        <p className="text-muted-foreground">
                            We reserve the right to modify these Terms at any time. Changes will be effective
                            immediately upon posting. Your continued use of our services after changes
                            constitutes acceptance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">14. Governing Law</h2>
                        <p className="text-muted-foreground">
                            These Terms are governed by the laws of India. Any legal proceedings must be
                            conducted in English or Hindi.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">15. Contact Information</h2>
                        <p className="text-muted-foreground">
                            For questions about these Terms of Service, contact:
                        </p>
                        <div className="mt-3 text-muted-foreground">
                            <p>
                                <strong>ScaleFunnel</strong>
                            </p>
                            <p>Shankar Kumar Nanda</p>
                            <p>Email: nandashankar26@gmail.com</p>
                            <p>Location: Jamshedpur, Jharkhand, India</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}