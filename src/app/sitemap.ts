import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gaurex.vercel.app";
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/privacy",
    "/terms",
    "/services/ai-solutions",
    "/services/business-automation",
    "/services/custom-software",
    "/services/erp-systems",
    "/services/web-applications",
    "/services/business-analytics",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.5,
  }));
}

