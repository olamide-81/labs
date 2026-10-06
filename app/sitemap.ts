import type { MetadataRoute } from "next";
import { studio } from "@/lib/site";
import { projects } from "@/lib/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work", "/services", "/pricing", "/studio", "/contact", "/approach", ...projects.map(p => `/work/${p.slug}`)].map(path => ({ url: `${studio.url}${path}` }));
}
