import type { MetadataRoute } from "next";
import { studio } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/billing", "/invoice/", "/checkout"] }, sitemap: `${studio.url}/sitemap.xml` };
}
