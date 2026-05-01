"use client";

import Marquee from "./ui/marquee";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function TechStack() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <section
            id="tech"
            className="relative z-10 py-20 px-4 bg-white dark:bg-black"
        >
            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <div className="text-center max-w-2xl mx-auto">

                    {/* MAIN HEADING */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                        Tech Arsenal
                    </h2>

                    {/* SUBTEXT */}
                    <p className="mt-4 text-muted-foreground text-sm sm:text-base">
                        The stack behind every high-impact product I build
                    </p>

                </div>

                {/* MARQUEE */}
                <div className="mt-10">
                    <Marquee
                        pauseOnHover
                        speed={40}
                        className="py-8 border-y border-primary"
                    >
                        {[
                            {
                                name: "HTML5",
                                logo: "https://cdn.simpleicons.org/html5/E34C26",
                            },
                            {
                                name: "CSS3",
                                logo: "https://cdn.simpleicons.org/css/1572B6",
                            },
                            {
                                name: "JavaScript",
                                logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
                            },
                            {
                                name: "MySQL",
                                logo: "https://cdn.simpleicons.org/mysql/00758F",
                            },
                            {
                                name: "TypeScript",
                                logo: "https://cdn.simpleicons.org/typescript/3178C6",
                            },
                            {
                                name: "React.js",
                                logo: "https://cdn.simpleicons.org/react/61DAFB",
                            },
                            {
                                name: "Next.js",
                                logo: `https://cdn.simpleicons.org/nextdotjs/${isDark ? "ffffff" : "000000"}`,
                            },
                            {
                                name: "Node.js",
                                logo: "https://cdn.simpleicons.org/nodedotjs/339933",
                            },
                            {
                                name: "Express.js",
                                logo: `https://cdn.simpleicons.org/express/${isDark ? "ffffff" : "000000"}`,
                            },
                            {
                                name: "MongoDB",
                                logo: "https://cdn.simpleicons.org/mongodb/47A248",
                            },
                            {
                                name: "Tailwind",
                                logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
                            },
                            {
                                name: "Git",
                                logo: "https://cdn.simpleicons.org/git/F05032",
                            },
                            {
                                name: "Docker",
                                logo: "https://cdn.simpleicons.org/docker/2496ED",
                            },
                            {
                                name: "Firebase",
                                logo: "https://cdn.simpleicons.org/firebase/FFCA28",
                            },
                            {
                                name: "Cloudinary",
                                logo: "https://cdn.simpleicons.org/cloudinary/24C4F6",
                            },
                            {
                                name: "PostgreSQL",
                                logo: "https://cdn.simpleicons.org/postgresql/4169E1",
                            },
                            {
                                name: "React Native",
                                logo: "https://cdn.simpleicons.org/react/61DAFB",
                            },
                            {
                                name: "Android Studio",
                                logo: "https://cdn.simpleicons.org/androidstudio/3DDC84",
                            },
                            {
                                name: "Xcode",
                                logo: "https://cdn.simpleicons.org/xcode/1572B6",
                            },
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center gap-2 min-w-[80px]"
                            >
                                {/* LOGO */}
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                                />

                                {/* TEXT */}
                                <span className="text-xs sm:text-sm text-muted-foreground">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </Marquee>
                </div>

            </div>
        </section>
    );
}