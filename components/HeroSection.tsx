"use client";
import React, { useState } from "react";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    navItems: string[];
}

const MenuIcon: React.FC = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
        />
    </svg>
);

const CloseIcon: React.FC = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);

const NavLink: React.FC<NavLinkProps> = ({
    href,
    children,
    isActive = false,
    onClick,
}) => (
    <a
        href={href}
        onClick={onClick}
        className={`px-3 py-2 rounded-md text-sm font-bold transition-colors duration-300 ${isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-primary"
            }`}
    >
        {children}
    </a>
);

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

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems }) => (
    <div
        className={`
      md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 shadow-lg
      transition-all duration-300 ease-in-out
      ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
  `}
    >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
                <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500 hover:bg-gray-50 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                    {item}
                </a>
            ))}
        </div>
        <div className="pt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="px-5">
                <Button className="w-full bg-primary text-white">
                    Book a Call
                </Button>
            </div>
        </div>
    </div>
);

const HeaderSection: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const navItems = ["About", "Services", "Projects", "Contact"];

    return (
        <header className="relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <a
                            href="#"
                            onClick={() => setActiveLink("")}
                            className="text-xl font-bold tracking-tight text-foreground cursor-pointer"
                        >
                            Scale<span className="text-primary"> Funnel</span>
                        </a>
                    </div>
                    <nav className="hidden md:flex items-center space-x-1 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-border px-2 py-1 rounded-full">
                        {navItems.map((item) => (
                            <NavLink
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                isActive={activeLink === item}
                                onClick={() => setActiveLink(item)}
                            >
                                {item}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="hidden md:block">
                        <Button
                            onClick={() => {
                                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 shadow-lg shadow-primary/30 cursor-pointer border border-border">
                            Book a 1:1 Call
                        </Button>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            <MobileMenu isOpen={isMenuOpen} navItems={navItems} />
        </header>
    );
};

const Hero: React.FC = () => (
    <section className="relative z-10 text-center pt-24 pb-16 sm:pt-32 sm:pb-24 px-4">
        <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-600 dark:text-orange-400 uppercase bg-orange-100 dark:bg-orange-900/30 rounded-full">
                Scale Funnel Ascend
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                Crack Internships & Placements{" "}
                <span className="text-primary">Faster</span> with{" "}
                <span className="text-primary">Proven Strategy</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                15+ Internships | Deloitte | Built High-Impact products(30%+ growth) | 1000+ students mentored.
                A clear strategy to crack internships and placements faster.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                    <span className="text-primary">✔</span> Personalized 1:1 Guidance (Not Generic)
                </span>
                <span className="flex items-center gap-1">
                    <span className="text-primary">✔</span> Clear Roadmap for Internships & Placements
                </span>
                <span className="flex items-center gap-1">
                    <span className="text-primary">✔</span> Real Results, Not Just Advice
                </span>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                    onClick={() => {
                        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 text-base font-semibold shadow-lg shadow-primary/30 cursor-pointer border border-border">
                    Book a 1:1 Call
                </Button>

                <Button
                    onClick={() => {
                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto bg-primary border border-border text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 text-base font-semibold cursor-pointer">
                    View My Work -&gt;
                </Button>
            </div>
        </div>
    </section>
);

export default function HeroSection() {
    return (
        <div className="relative w-full overflow-hidden bg-white dark:bg-black">
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-[40rem] h-[40rem] bg-gradient-to-tr from-orange-200 dark:from-orange-800/30 to-transparent opacity-20 dark:opacity-10 rounded-full blur-3xl" />
            </div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 pointer-events-none">
                <div className="w-[40rem] h-[40rem] bg-gradient-to-bl from-orange-200 dark:from-orange-800/30 to-transparent opacity-20 dark:opacity-10 rounded-full blur-3xl" />
            </div>
            <HeaderSection />
            <main>
                <Hero />
            </main>
        </div>
    );
}
