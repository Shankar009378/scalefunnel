import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | ScaleFunnel",
    description: "Privacy policy for ScaleFunnel services",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
                <p className="text-sm text-muted-foreground mb-8">
                    Last updated: {new Date().toLocaleDateString("en-IN")}
                </p>

                <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
                        <p className="text-muted-foreground">
                            ScaleFunnel ("we," "us," or "our") operates the website{" "}
                            <a href="https://scalefunnel.com" className="text-primary hover:underline">
                                scalefunnel.com
                            </a>
                            . This Privacy Policy explains how we collect, use, and protect your personal
                            information when you use our mentorship and development services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
                        <p className="text-muted-foreground mb-3">
                            We collect the following types of information:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>
                                <strong>Personal Information:</strong> Name, email address, phone number when
                                you book a session or service
                            </li>
                            <li>
                                <strong>Payment Information:</strong> Payment details are processed securely
                                through Razorpay. We do not store your card/UPI details on our servers.
                            </li>
                            <li>
                                <strong>Usage Data:</strong> Information about how you interact with our
                                website (pages visited, time spent, device type)
                            </li>
                            <li>
                                <strong>Communications:</strong> Content of emails, messages, or feedback you
                                send us
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
                        <p className="text-muted-foreground mb-3">We use your information to:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Provide and deliver the services you requested</li>
                            <li>Process payments and send transaction confirmations</li>
                            <li>Communicate with you about your sessions, projects, or inquiries</li>
                            <li>Send important updates about scheduled sessions or deliverables</li>
                            <li>Improve our services and website experience</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">4. Data Sharing and Disclosure</h2>
                        <p className="text-muted-foreground mb-3">
                            We do not sell, rent, or trade your personal information. We may share your data
                            only in the following cases:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>
                                <strong>Payment Processors:</strong> Razorpay processes payments on our
                                behalf. Their privacy policy governs their use of your data.
                            </li>
                            <li>
                                <strong>Legal Requirements:</strong> When required by law, court order, or
                                government authorities
                            </li>
                            <li>
                                <strong>Service Providers:</strong> Third-party tools we use for email
                                delivery, scheduling, or analytics (e.g., Google Analytics, Calendly)
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
                        <p className="text-muted-foreground">
                            We implement industry-standard security measures to protect your personal
                            information from unauthorized access, disclosure, or misuse. All payment
                            transactions are encrypted and processed through PCI DSS-compliant gateways.
                            However, no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
                        <p className="text-muted-foreground mb-3">You have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate or incomplete data</li>
                            <li>Request deletion of your data (subject to legal retention requirements)</li>
                            <li>Opt-out of marketing communications at any time</li>
                            <li>Withdraw consent where processing is based on consent</li>
                        </ul>
                        <p className="text-muted-foreground mt-3">
                            To exercise these rights, contact us at{" "}
                            <a
                                href="mailto:nandashankar26@gmail.com"
                                className="text-primary hover:underline"
                            >
                                nandashankar26@gmail.com
                            </a>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">7. Cookies and Tracking</h2>
                        <p className="text-muted-foreground">
                            We use cookies and similar tracking technologies to improve your browsing
                            experience and analyze website traffic. You can disable cookies in your browser
                            settings, but this may affect website functionality.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">8. Data Retention</h2>
                        <p className="text-muted-foreground">
                            We retain your personal information for as long as necessary to provide our
                            services and comply with legal obligations. Payment records are retained for 7
                            years as required by Indian tax and financial regulations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">9. Children's Privacy</h2>
                        <p className="text-muted-foreground">
                            Our services are not directed to individuals under 18 years of age. We do not
                            knowingly collect personal information from minors.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">10. Changes to This Policy</h2>
                        <p className="text-muted-foreground">
                            We may update this Privacy Policy from time to time. Changes will be posted on
                            this page with an updated "Last updated" date. Continued use of our services
                            after changes constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">11. Contact Information</h2>
                        <p className="text-muted-foreground">
                            For questions or concerns about this Privacy Policy, contact:
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