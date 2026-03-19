import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.deepak-kumar.space"; // Should ideally be dynamic, hardcoded for portfolio

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
