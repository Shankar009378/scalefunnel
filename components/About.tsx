"use client";

import Image from "next/image";

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
        "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105";

    const variants = {
        primary:
            "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 focus:ring-gray-900 dark:focus:ring-gray-300",
        secondary:
            "bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 focus:ring-gray-300 dark:focus:ring-gray-600 shadow-sm border border-gray-200 dark:border-gray-700",
        outline:
            "bg-white dark:bg-black text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-900 focus:ring-gray-300 dark:focus:ring-gray-600",
    };

    return (
        <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default function About() {
    const handleScrollToServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section id="about" className="relative z-10 py-20 px-4 bg-white dark:bg-black">

            <div className="max-w-7xl mx-auto">

                {/* GRID LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT: ORBIT */}
                    <div className="flex items-center justify-center mt-0 lg:mt-2">
                        <div className="relative w-[320px] h-[400px] sm:w-[360px] sm:h-[460px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
                            <Image
                                src="/images/profile.jpg"
                                alt="Shankar Kumar Nanda"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* 🔥 Gradient Overlay (premium effect) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        </div>
                    </div>

                    {/* RIGHT: CONTENT */}
                    <div>

                        {/* TAG */}
                        <span className="inline-block text-sm text-muted-foreground mb-3">
                            About Me
                        </span>

                        {/* HEADING */}
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                            Building products that deliver real results
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mt-6 text-muted-foreground leading-relaxed">
                            Full Stack Developer focused on building scalable web and mobile applications with measurable impact — from performance to user growth.
                        </p>

                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            I work with modern stacks like MERN and React Native to deliver production-ready solutions, and help others do the same with clarity and direction.
                        </p>

                        {/* STATS */}
                        <div className="mt-8 bg-card border border-border rounded-xl p-6 grid grid-cols-3 sm:grid-cols-3 text-xs sm:text-sm text-center">

                            <div>
                                <p className="text-xl font-bold text-primary">5k+</p>
                                <p className="text-sm text-muted-foreground mt-1 whitespace-nowrap">
                                    Users Handled
                                </p>
                            </div>

                            <div className="border-l border-border">
                                <p className="text-xl font-bold text-primary">40%+</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Performance Boost
                                </p>
                            </div>

                            <div className="border-l border-border">
                                <p className="text-xl font-bold text-primary">80%</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Process Automation
                                </p>
                            </div>

                        </div>

                        {/* CTA */}
                        <div className="mt-10">
                            <Button
                                onClick={handleScrollToServices}
                                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 text-base font-semibold shadow-lg shadow-primary/30 cursor-pointer transition-all duration-300 border border-border"
                            >
                                Explore My Services -&gt;
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}