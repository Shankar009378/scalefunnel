"use client";

import Script from "next/script";

interface CalendlyInlineProps {
    url: string;
    prefill?: {
        name?: string;
        email?: string;
    };
}

export default function CalendlyInline({ url, prefill }: CalendlyInlineProps) {
    // Build URL with prefill params and clean UI flags
    const calendlyUrl = new URL(url);
    if (prefill?.name) calendlyUrl.searchParams.set("name", prefill.name);
    if (prefill?.email) calendlyUrl.searchParams.set("email", prefill.email);
    calendlyUrl.searchParams.set("hide_gdpr_banner", "1");

    return (
        <>
            <div
                className="calendly-inline-widget rounded-xl overflow-hidden"
                data-url={calendlyUrl.toString()}
                style={{ minWidth: "320px", height: "700px" }}
            />
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
            />
        </>
    );
}