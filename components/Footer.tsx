"use client";

import React from "react";

function Footer2() {
    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Tech", href: "#tech" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Refund Policy", href: "/refund-policy" },
    ];

    const socialIcons = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/shankar-kumar-nanda-04304a263",
            svg: (
                <svg
                    className="size-6 transition-transform duration-200 hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    ></path>
                </svg>
            ),
        },
        {
            name: "GitHub",
            href: "https://github.com/Shankar009378",
            svg: (
                <svg
                    className="size-6 transition-transform duration-200 hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.94c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.84-2.34 4.68-4.57 4.93c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    ></path>
                </svg>
            ),
        },
        {
            name: "X",
            href: "https://x.com/shankarnanda26",
            svg: (
                <svg
                    className="size-6 transition-transform duration-200 hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                    ></path>
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/0_shankar7",
            svg: (
                <svg
                    className="size-6 transition-transform duration-200 hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                    ></path>
                </svg>
            ),
        },
    ];

    return (
        <footer className="relative z-10 border-t border-border bg-background overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col items-center">
                    <a
                        href="#"
                        className="text-2xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
                    >
                        Scale<span className="text-primary"> Funnel</span>
                    </a>
                </div>

                <nav className="mt-6 w-full">
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-4">
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
                        {legalLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6 flex justify-center gap-3">
                    {socialIcons.map((icon) => (
                        <a
                            key={icon.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={icon.name}
                            className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                            href={icon.href}
                        >
                            {icon.svg}
                        </a>
                    ))}
                </div>

                <div className="w-full h-px bg-border my-8" />

                <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 text-xs text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Scale Funnel. Built by Shankar Kumar Nanda 🩵.
                    </p>
                    <p>
                        Currently booking new projects.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer2;
