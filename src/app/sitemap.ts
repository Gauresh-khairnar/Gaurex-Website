import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gaurex.vercel.app";
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/privacy",
    "/terms",
    "/blog",
    "/blog/how-to-automate-business-processes",
    "/blog/10-business-processes-to-automate",
    "/blog/ai-business-automation-use-cases",
    "/blog/workflow-automation-vs-manual-processes",
    "/blog/how-to-choose-a-business-automation-company",
    "/services/business-automation",
    "/services/ai-solutions",
    "/services/custom-software",
    "/services/erp-systems",
    "/services/business-analytics",
    "/services/web-applications",
  ];

  return routes.map((route) => {
    let priority = 0.5;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route.startsWith("/services")) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (route.startsWith("/blog")) {
      priority = 0.8;
      changeFrequency = "weekly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
