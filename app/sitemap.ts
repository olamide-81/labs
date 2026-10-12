import type { MetadataRoute } from "next";
import { studio } from "@/lib/site";
import { projects } from "@/lib/projects";
import { research } from "@/lib/research";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work", "/services", "/pricing", "/studio", "/contact", "/approach", "/data", ...research.map(r => `/data/${r.slug}`), ...projects.map(p => `/work/${p.slug}`)].map(path => ({ url: `${studio.url}${path}` }));
}
