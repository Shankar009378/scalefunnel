import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://scalefunnel.in";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/refund-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];
}