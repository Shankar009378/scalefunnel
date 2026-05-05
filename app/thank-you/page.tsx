"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import CalendlyInline from "@/components/CalendlyInline";

const CALENDLY_URL = "https://calendly.com/scalefunnel/strategy-call-paid-free";

function ThankYouContent() {
    const searchParams = useSearchParams();
    const paymentId = searchParams.get("payment_id") ?? "";
    const plan = searchParams.get("plan") ?? "1:1 Guidance";
    const name = searchParams.get("name") ?? "";
    const email = searchParams.get("email") ?? "";

    const calendlyUrl = CALENDLY_URL;

    return (
        <main className="min-h-screen bg-background py-16 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Success header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                        <svg
                            className="w-8 h-8 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                        Payment confirmed
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        {name ? `Thanks, ${name}! ` : ""}
                        Your{" "}
                        <span className="text-primary font-semibold">{plan}</span>{" "}
                        booking is locked in. A confirmation email is on its way.
                    </p>

                    {paymentId && (
                        <p className="text-xs text-muted-foreground mt-4 font-mono">
                            Payment ID: {paymentId}
                        </p>
                    )}
                </div>

                {/* Calendly embed */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                            Pick your time slot
                        </h2>
                        <p className="text-muted-foreground text-sm">
                            Choose a time that works for you. You&apos;ll get a Google
                            Meet invite immediately after booking.
                        </p>
                    </div>

                    <CalendlyInline url={calendlyUrl} prefill={{ name, email }} />

                    <p className="text-xs text-muted-foreground mt-4 text-center">
                        Select your service inside the booking form
                    </p>
                </div>

                {/* Help block */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        Didn&apos;t receive an email within 10 minutes?{" "}
                        <Link
                            href="/#contact"
                            className="text-primary hover:underline"
                        >
                            Reach out here
                        </Link>{" "}
                        and I&apos;ll sort it.
                    </p>
                </div>
            </div>
        </main>
    );
}

// Suspense boundary required because useSearchParams() needs it in App Router
export default function ThankYouPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <ThankYouContent />
        </Suspense>
    );
}