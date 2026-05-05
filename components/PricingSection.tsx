'use client'
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

// TypeScript interfaces
interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  pricePeriod: string | null;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
}


// SVG Icon for included features
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

// SVG Icon for excluded features
const TimesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-3 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// Data for the pricing plans
const pricingPlans: PricingPlan[] = [
  {
    name: '1:1 Guidance',
    price: '₹999',
    pricePeriod: '/session',
    description: 'Personalized call to help you crack internships, placements, and build a strong roadmap.',
    features: [
      { text: 'Resume + LinkedIn review', included: true },
      { text: 'Personal roadmap strategy', included: true },
      { text: 'Internship & placement guidance', included: true },
      { text: 'Live doubt solving', included: true },
      { text: 'Project & portfolio advice', included: true },
    ],
    buttonText: 'Secure Your Slot',
    isPopular: true,
  },
  {
    name: 'Portfolio Upgrade',
    price: '₹1.5K',
    pricePeriod: null,
    description: 'Build a portfolio that actually gets you shortlisted and noticed by recruiters.',
    features: [
      { text: 'Portfolio strategy & planning', included: true },
      { text: 'Project selection guidance', included: true },
      { text: 'GitHub optimization', included: true },
      { text: 'LinkedIn positioning', included: true },
      { text: 'Resume refinement', included: true },
    ],
    buttonText: 'Build My Portfolio',
    isPopular: false,
  },
  {
    name: 'Get Your Product Built',
    price: '₹5K+',
    pricePeriod: null,
    description: 'Get your product built with production-ready quality using modern technologies.',
    features: [
      { text: 'Full-stack web/app development', included: true },
      { text: 'High-performance UI/UX', included: true },
      { text: 'Scalable architecture', included: true },
      { text: 'SEO & optimization', included: true },
      { text: 'Post-delivery support', included: true },
    ],
    buttonText: 'Get My Product Built',
    isPopular: false,
  },
];

// Individual Pricing Card Component
const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handlePayment = async () => {
    // For "Get Your Product Built" — custom quote, route to contact instead.
    if (plan.name === "Get Your Product Built") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Quick prompt for name + email. For v1 this is fine; later you can build a proper modal.
    const customerName = prompt("Your name?");
    if (!customerName || customerName.length < 2) return;

    const customerEmail = prompt("Your email?");
    if (!customerEmail || !customerEmail.includes("@")) return;

    setIsLoading(true);

    try {
      // 1. Create order on server
      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: plan.name,
          amount: 0, // ignored — server enforces price
          customerName,
          customerEmail,
        }),
      });

      if (!orderRes.ok) {
        throw new Error("Could not create order");
      }

      const { orderId, amount, currency, keyId } = await orderRes.json();

      // 2. Open Razorpay checkout
      const options: RazorpayOptions = {
        key: keyId,
        amount,
        currency,
        name: "ScaleFunnel",
        description: plan.name,
        order_id: orderId,
        prefill: {
          name: customerName,
          email: customerEmail,
        },
        theme: {
          color: "#F97316", // your primary
        },
        handler: async (response) => {
          // 3. Verify signature on server
          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const data = await verifyRes.json();

          console.log("[verify response]", data);

          if (data.verified) {
            // ✅ Success — redirect or show confirmation
            alert(
              "Payment successful! I'll reach out within 24 hours to schedule your session."
            );
            const params = new URLSearchParams({
              payment_id: data.paymentId ?? "",
              plan: data.plan ?? "",
              name: data.customerName ?? "",
              email: data.customerEmail ?? "",
            });
            // Optional: redirect to a thank-you page
            // window.location.href = "/thank-you";
            router.push(`/thank-you?${params.toString()}`);
          } else {
            alert(
              "Payment captured but verification failed. Don't worry — I'll see it in my dashboard and reach out."
            );
          }
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        alert(`Payment failed: ${response.error.description}`);
        setIsLoading(false);
      });
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Please try the contact form instead.");
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const cardClasses = `
    pricing-card bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl
    ${plan.isPopular
      ? 'border-2 border-primary dark:border-primary-400 relative shadow-lg shadow-primary/20 dark:shadow-primary-400/20 scale-105 z-10'
      : 'border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600'
    }
  `;

  const buttonClasses = `
    w-full py-3 px-6 rounded-full px-6 py-3 font-semibold mt-auto transition-all duration-300 cursor-pointer
    ${plan.isPopular
      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90'
      : `
        bg-card border border-border bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 focus:ring-gray-900 dark:focus:ring-gray-300
       `
    }
  `;

  return (
    <div className={cardClasses}>
      {plan.isPopular && (
        <div className="absolute top-0 right-4 -mt-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
      <p className="text-white text-4xl font-bold mb-2">
        {plan.price}
        {plan.pricePeriod && (
          <span className="text-lg text-muted-foreground font-medium">{plan.pricePeriod}</span>
        )}
      </p>
      <p className="text-muted-foreground mb-8 text-sm h-10">{plan.description}</p>
      {plan.name === "1:1 Guidance" && (
        <p className="text-xs text-primary font-medium mb-4">
          Only 5 slots available this week
        </p>
      )}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature: PricingFeature, index: number) => (
          <li
            key={index}
            className={`flex items-center ${feature.included
              ? 'text-foreground'
              : 'text-foreground'
              }`}
          >
            {feature.included ? <CheckIcon /> : <TimesIcon />}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handlePayment}
        disabled={isLoading}
        className={`${buttonClasses} group disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {isLoading ? "Processing..." : plan.buttonText}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
      {plan.name === "1:1 Guidance" && (
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Not satisfied? Get a full refund.
        </p>
      )}
    </div>
  );
};


// Main Pricing Section Component
const PricingSection: React.FC = () => {
  return (
    <section id="services" className="relative py-16 sm:py-24 overflow-hidden bg-white dark:bg-black">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-zinc-100 mb-6 tracking-tight">
            Work With Me
          </h2>
          <p className="text-sm text-primary font-medium">
            Trusted by 1000+ students & real product builds
          </p>
          <p className="text-lg md:text-xl text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto mt-4">
            Choose the path that fits your goal — whether it's cracking placements or building real products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan: PricingPlan, index: number) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;