import { Geist_Mono, Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

/* ============================================================
   SITE CONFIG — edit these in one place
   ============================================================ */

const SITE = {
  name: "ScaleFunnel",
  title: "ScaleFunnel — Full-Stack Developer & Placement Mentor",
  description:
    "Full-Stack Developer (Deloitte). I build production-ready web and mobile products that move real numbers — and help students crack internships and placements with proven strategy.",
  url: "https://scalefunnel.in", // ← replace with your real domain
  author: "Shankar Kumar Nanda",
  twitterHandle: "@shankarnanda26", // ← replace
  locale: "en_US",
  keywords: [
    "Shankar Kumar Nanda",
    "ScaleFunnel",
    "Scale Funnel",
    "Full Stack Developer",
    "Freelance Developer India",
    "Next.js Developer",
    "React Developer",
    "Placement Mentor",
    "Internship Mentor",
    "MERN Stack Developer",
    "React Native Developer",
    "Hire Full Stack Developer",
    "Career Mentorship",
  ],
};

/* ============================================================
   METADATA — Next.js App Router auto-injects these into <head>
   ============================================================ */

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.author, url: SITE.url }],
  creator: SITE.author,
  publisher: SITE.author,

  appleWebApp: {
    title: "Scale Funnel",
    statusBarStyle: "black-translucent",
    capable: true,
  },

  // Search engine behavior
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp link previews)
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.author}`,
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: SITE.twitterHandle,
    images: ["/og-image.png"],
  },

  // Canonical URL
  alternates: {
    canonical: SITE.url,
  },

  category: "technology",
};

/* ============================================================
   VIEWPORT — separate export in Next.js 14+
   ============================================================ */

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ============================================================
   ROOT LAYOUT
   ============================================================ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
        <ThemeProvider>
          {children}

          {/* JSON-LD structured data — helps Google understand who you are */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: SITE.author,
                url: SITE.url,
                jobTitle: "Full-Stack Developer",
                worksFor: {
                  "@type": "Organization",
                  name: "Deloitte",
                },
                sameAs: [
                  "https://www.linkedin.com/in/shankar-kumar-nanda-04304a263",
                  "https://github.com/Shankar009378", // ← replace
                ],
                knowsAbout: [
                  "React",
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "MongoDB",
                  "React Native",
                  "Career Mentorship",
                ],
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}