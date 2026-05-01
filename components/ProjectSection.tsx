"use client";

import React from "react";
import { Rocket, TrendingUp, Smartphone, Globe, ArrowUpRight } from "lucide-react";

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    tags: string[];
    metrics: { label: string; value: string }[];
    link: string;
    icon: React.ElementType;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "inverted";
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    className = "",
    ...props
}) => {
    const baseClasses =
        "rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";

    const variants = {
        primary:
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30",
        secondary:
            "bg-card text-foreground hover:bg-background border border-border shadow-sm",
        outline:
            "bg-transparent text-foreground border border-border hover:bg-background",
        inverted:
            "bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/20",
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

const projects: Project[] = [
    {
        id: 1,
        title: "Students Global Summit",
        description:
            "A high-scale event platform that turned manual registration chaos into a self-running system the team didn't have to babysit.",
        category: "Web Platform",
        tags: ["Next.js", "React", "Tailwind CSS", "Automation"],
        metrics: [
            { label: "Users handled", value: "5000+" },
            { label: "Manual work cut", value: "80%" },
            { label: "Engagement", value: "+40%" },
        ],
        icon: Globe,
        link: "https://www.studentsglobalsummit.com",
    },
    {
        id: 2,
        title: "Daily Stock Hunt",
        description:
            "A real-time stock tracker built for traders who keep it open all day — fast, focused, no friction.",
        category: "FinTech",
        tags: ["Next.js", "Chart.js", "Tailwind CSS", "SSR"],
        metrics: [
            { label: "Initial load", value: "−38%" },
            { label: "Insight speed", value: "+45%" },
            { label: "Session time", value: "+30%" },
        ],
        icon: TrendingUp,
        link: "https://dailystockhunt.com/home",
    },
    {
        id: 3,
        title: "Karma ERP",
        description:
            "A cross-platform ERP with role-based access and real-time inventory — replacing brittle spreadsheets with a system operations actually trusts.",
        category: "Mobile + Web",
        tags: ["React Native", "Node.js", "MongoDB", "Redux"],
        metrics: [
            { label: "Render perf", value: "+35%" },
            { label: "Unauth access", value: "−50%" },
            { label: "Manual errors", value: "−45%" },
        ],
        icon: Smartphone,
        link: "https://play.google.com/store/apps/details?id=com.user.karma",
    },
    {
        id: 4,
        title: "Bfast Express Platform",
        description:
            "Rebuilt the company's web presence with a client onboarding dashboard and SEO-first architecture — sign-ups and traffic moved in the first month.",
        category: "Business Platform",
        tags: ["MERN", "SEO", "Analytics", "Dashboard"],
        metrics: [
            { label: "Sign-ups", value: "+28%" },
            { label: "Organic traffic", value: "+35%" },
            { label: "Load time", value: "−22%" },
        ],
        icon: Rocket,
        link: "https://www.bfastservices.com",
    },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const Icon = project.icon;

    const handleClick = () => {
        window.open(project.link, "_blank", "noopener,noreferrer");
    };

    return (
        <div
            onClick={handleClick}
            className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/40 cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Gradient accent top bar */}
            <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/60" />

            <div className="relative p-6 md:p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded-full">
                            {project.category}
                        </span>
                    </div>

                    <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:rotate-0 -rotate-45">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-foreground mb-2 leading-tight transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                    {project.metrics.map((metric, i) => (
                        <div key={i} className="bg-background border border-border rounded-xl p-3 text-center">
                            <div className="text-sm font-bold text-primary leading-tight">
                                {metric.value}
                            </div>
                            <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[11px] text-muted-foreground bg-background border border-border px-2.5 py-1 rounded-lg font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="relative z-10 py-20 md:py-28 px-4 bg-background overflow-hidden">
            {/* Subtle background accents (matches hero glow) */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Selected Work
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                        Shipped to production. <span className="text-primary">Built to perform.</span>
                    </h2>

                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        A few engagements where the metric was decided before the code was. Click any project to see it live.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border p-8 md:p-10 text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none" />

                    <div className="relative">
                        <p className="text-sm text-primary font-semibold tracking-widest uppercase mb-3">
                            Currently booking new projects
                        </p>

                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                            Bring me a number you need to move.
                        </h3>

                        <p className="text-muted-foreground mb-7 max-w-lg mx-auto text-sm leading-relaxed">
                            Two-week scoping, fixed-fee builds, and a written hypothesis before any code is written. If I can't move your metric, I'll say so on the first call.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button
                                variant="primary"
                                onClick={() => {
                                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="w-full sm:w-auto px-6 py-2 text-base cursor-pointer"
                            >
                                Start a Project -&gt;
                            </Button>

                            <Button
                                variant="inverted"
                                onClick={() => {
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="w-full sm:w-auto px-8 py-3 text-base cursor-pointer"
                            >
                                Get in Touch
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;