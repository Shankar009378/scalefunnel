"use client";

import React, { useState } from "react";
import { z } from "zod";

/* ============================================================
   CONFIG — update these before launch
   ============================================================ */

const WHATSAPP_NUMBER = "919798973975"; // your number, country code, no '+' or spaces
const EMAIL = "nandashankar26@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/shankar-kumar-nanda-04304a263";
const CALENDLY_URL = "https://calendly.com/nandashankar26/free-15-min-strategy-call";

/* ============================================================
   SVG ICONS (replacing lucide-react)
   ============================================================ */

const MailIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
    </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
    </svg>
);

const MessageSquareIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

const Loader2Icon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
);

const CheckCircle2Icon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const AlertCircleIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className={className}
    >
        <path d="M16.001 3C8.822 3 3 8.822 3 16c0 2.814.92 5.555 2.631 7.8L4 29l5.36-1.6A12.93 12.93 0 0 0 16.001 29C23.18 29 29 23.178 29 16S23.18 3 16.001 3zm0 23.4c-2.19 0-4.325-.584-6.2-1.687l-.444-.264-3.18.95.85-3.1-.29-.46A10.4 10.4 0 1 1 16.001 26.4zm5.77-7.71c-.315-.157-1.865-.92-2.155-1.025-.29-.105-.5-.157-.71.158s-.815 1.024-.999 1.234c-.184.21-.368.237-.683.08-.315-.157-1.33-.49-2.534-1.563-.936-.835-1.57-1.865-1.754-2.18-.184-.315-.02-.486.138-.643.142-.14.315-.368.473-.552.158-.184.21-.315.315-.525.105-.21.053-.394-.026-.552-.08-.157-.71-1.71-.973-2.34-.256-.614-.516-.53-.71-.54-.184-.01-.394-.012-.604-.012-.21 0-.552.08-.84.394s-1.104 1.078-1.104 2.63 1.13 3.055 1.29 3.266c.157.21 2.225 3.397 5.39 4.764.753.325 1.34.52 1.8.665.756.24 1.444.206 1.988.125.607-.09 1.865-.762 2.13-1.5.263-.736.263-1.368.184-1.5-.08-.13-.29-.21-.605-.368z" />
    </svg>
);

/* ============================================================
   BUTTON (matches your existing Button system)
   ============================================================ */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "outline" | "inverted";
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    className = "",
    ...props
}) => {
    const baseClasses =
        "rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-60 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30",
        outline: "bg-transparent text-foreground border border-border hover:bg-background",
        inverted:
            "bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/20",
    };

    return (
        <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

/* ============================================================
   VALIDATION SCHEMA
   ============================================================ */

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    serviceType: z.enum(["1:1 Guidance", "Portfolio Upgrade", "Build My Product"], {
        message: "Please select a service",
    }),
    message: z.string().min(20, "Tell me a bit more — at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

/* ============================================================
   CONTACT METHODS (left column rows)
   ============================================================ */

const contactMethods = [
    {
        Icon: MailIcon,
        label: "Email",
        value: EMAIL,
        href: `mailto:${EMAIL}`,
    },
    {
        Icon: LinkedinIcon,
        label: "LinkedIn",
        value: "Connect on LinkedIn",
        href: LINKEDIN_URL,
    },
    {
        Icon: CalendarIcon,
        label: "Book a Call",
        value: "Schedule on Calendly",
        href: CALENDLY_URL,
    },
];

/* ============================================================
   SERVICE OPTIONS (matches your pricing section)
   ============================================================ */

const serviceOptions = [
    { value: "1:1 Guidance", label: "1:1 Guidance" },
    { value: "Portfolio Upgrade", label: "Portfolio Upgrade" },
    { value: "Build My Product", label: "Build My Product" },
] as const;

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState<Partial<ContactFormData>>({
        name: "",
        email: "",
        serviceType: undefined,
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (field: keyof ContactFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const buildWhatsAppMessage = (data: ContactFormData): string => {
        const lines = [
            `Hey Shankar — new inquiry from your site:`,
            ``,
            `*Name:* ${data.name}`,
            `*Email:* ${data.email}`,
            `*Service:* ${data.serviceType}`,
            ``,
            `*Message:*`,
            data.message,
        ];
        return encodeURIComponent(lines.join("\n"));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const result = contactSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors: FormErrors = {};
            result.error.issues.forEach((issue) => {
                const field = issue.path[0] as keyof ContactFormData;
                fieldErrors[field] = issue.message;
            });
            setErrors(fieldErrors);
            setStatus("idle");
            return;
        }

        try {
            const message = buildWhatsAppMessage(result.data);
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

            setTimeout(() => {
                window.open(whatsappUrl, "_blank", "noopener,noreferrer");
                setStatus("success");
            }, 600);
        } catch {
            setStatus("error");
        }
    };

    const resetForm = () => {
        setFormData({ name: "", email: "", serviceType: undefined, message: "" });
        setErrors({});
        setStatus("idle");
    };

    return (
        <section
            id="contact"
            className="relative z-10 py-20 md:py-24 px-4 bg-background overflow-hidden"
        >
            {/* Background accents — matches Hero/Projects rhythm */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Get In Touch
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                        Let's talk about <span className="text-primary">what you need</span>.
                    </h2>

                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Whether you need guidance, a portfolio that lands interviews, or a product
                        built — tell me where you're stuck and I'll get back within 24 hours.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* LEFT: Contact methods + pitch */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        {/* Pitch card */}
                        <div className="bg-card border border-border rounded-2xl p-6 md:p-7">
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                Prefer a direct line?
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                The form on the right opens WhatsApp with your details
                                pre-filled. Or reach out directly through any of these:
                            </p>

                            <div className="flex flex-col gap-3">
                                {contactMethods.map((method) => {
                                    const Icon = method.Icon;
                                    return (
                                        <a
                                            key={method.label}
                                            href={method.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-4 p-3 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                                                    {method.label}
                                                </span>
                                                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                                                    {method.value}
                                                </span>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Trust line */}
                        <div className="bg-card border border-border rounded-2xl p-6 md:p-7">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                    <MessageSquareIcon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-foreground mb-1">
                                        Replies within 24 hours
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        If we're a fit, we'll set up a free 15-min call. If we're
                                        not, I'll say so honestly — no hard sell.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full">
                            {status === "success" ? (
                                <SuccessState onReset={resetForm} />
                            ) : (
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="flex flex-col gap-5">
                                        {/* Name + Email row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <FormField
                                                label="Your Name"
                                                id="name"
                                                error={errors.name}
                                            >
                                                <input
                                                    id="name"
                                                    type="text"
                                                    value={formData.name || ""}
                                                    onChange={(e) =>
                                                        handleChange("name", e.target.value)
                                                    }
                                                    placeholder="Shankar Kumar"
                                                    aria-invalid={!!errors.name}
                                                    aria-describedby={
                                                        errors.name ? "name-error" : undefined
                                                    }
                                                    className={inputClasses(!!errors.name)}
                                                />
                                            </FormField>

                                            <FormField
                                                label="Email"
                                                id="email"
                                                error={errors.email}
                                            >
                                                <input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email || ""}
                                                    onChange={(e) =>
                                                        handleChange("email", e.target.value)
                                                    }
                                                    placeholder="you@email.com"
                                                    aria-invalid={!!errors.email}
                                                    aria-describedby={
                                                        errors.email ? "email-error" : undefined
                                                    }
                                                    className={inputClasses(!!errors.email)}
                                                />
                                            </FormField>
                                        </div>

                                        {/* Service type — pill selector */}
                                        <FormField
                                            label="What do you need?"
                                            id="serviceType"
                                            error={errors.serviceType}
                                        >
                                            <div
                                                className="grid grid-cols-1 sm:grid-cols-3 gap-2"
                                                role="radiogroup"
                                                aria-invalid={!!errors.serviceType}
                                                aria-describedby={
                                                    errors.serviceType
                                                        ? "serviceType-error"
                                                        : undefined
                                                }
                                            >
                                                {serviceOptions.map((option) => {
                                                    const isSelected =
                                                        formData.serviceType === option.value;
                                                    return (
                                                        <button
                                                            key={option.value}
                                                            type="button"
                                                            role="radio"
                                                            aria-checked={isSelected}
                                                            onClick={() =>
                                                                handleChange(
                                                                    "serviceType",
                                                                    option.value
                                                                )
                                                            }
                                                            className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 cursor-pointer ${isSelected
                                                                ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                                                                : "bg-background text-foreground border-border hover:border-primary/40 hover:bg-primary/5"
                                                                }`}
                                                        >
                                                            {option.label}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </FormField>

                                        {/* Message */}
                                        <FormField
                                            label="Tell me what you're working on"
                                            id="message"
                                            error={errors.message}
                                        >
                                            <textarea
                                                id="message"
                                                value={formData.message || ""}
                                                onChange={(e) =>
                                                    handleChange("message", e.target.value)
                                                }
                                                rows={5}
                                                placeholder="What are you trying to build, fix, or figure out? The more specific, the better I can help."
                                                aria-invalid={!!errors.message}
                                                aria-describedby={
                                                    errors.message ? "message-error" : undefined
                                                }
                                                className={`${inputClasses(!!errors.message)} resize-none`}
                                            />
                                        </FormField>

                                        {/* Submit */}
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            disabled={status === "submitting"}
                                            className="w-full px-8 py-3 text-base cursor-pointer flex items-center justify-center gap-2"
                                        >
                                            {status === "submitting" ? (
                                                <>
                                                    <Loader2Icon className="w-4 h-4 animate-spin" />
                                                    Opening WhatsApp...
                                                </>
                                            ) : (
                                                <>
                                                    Send via WhatsApp
                                                    <WhatsAppIcon className="w-5 h-5 text-white" />
                                                </>
                                            )}
                                        </Button>

                                        {/* Status footer */}
                                        <p className="text-xs text-muted-foreground text-center">
                                            This will open WhatsApp with your message ready to send.
                                            Your details stay between us.
                                        </p>

                                        {status === "error" && (
                                            <div className="flex items-start gap-2 p-3 rounded-xl bg-destructive/10 border border-destructive/20">
                                                <AlertCircleIcon className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                                                <p className="text-xs text-destructive">
                                                    Something went wrong. Try again, or reach me
                                                    directly via the methods on the left.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

const FormField: React.FC<{
    label: string;
    id: string;
    error?: string;
    children: React.ReactNode;
}> = ({ label, id, error, children }) => (
    <div className="flex flex-col gap-2">
        <label htmlFor={id} className="text-sm font-semibold text-foreground">
            {label}
        </label>
        {children}
        {error && (
            <p
                id={`${id}-error`}
                className="text-xs text-destructive flex items-center gap-1.5"
            >
                <AlertCircleIcon className="w-3.5 h-3.5" />
                {error}
            </p>
        )}
    </div>
);

const inputClasses = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 ${hasError ? "border-destructive" : "border-border focus:border-primary/40"
    }`;

const SuccessState: React.FC<{ onReset: () => void }> = ({ onReset }) => (
    <div className="flex flex-col items-center text-center py-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
            <CheckCircle2Icon className="w-8 h-8 text-primary" />
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-3">WhatsApp opened.</h3>

        <p className="text-sm text-muted-foreground max-w-md mb-8 leading-relaxed">
            Your message is ready to send in WhatsApp. Hit send there and I'll get back
            within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 font-semibold text-base transition-all duration-300"
            >
                <CalendarIcon className="w-4 h-4" />
                Book a Call Directly
            </a>

            <button
                onClick={onReset}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-transparent text-foreground border border-border hover:bg-background font-semibold text-base transition-all duration-300 cursor-pointer"
            >
                Send Another
            </button>
        </div>
    </div>
);

export default ContactSection;