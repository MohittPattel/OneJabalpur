import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

// sitemap.xml compiles to a Route Handler, which `output: "export"` only
// supports when explicitly prerendered.
export const dynamic = "force-static";

/**
 * Generates /sitemap.xml — the URL already referenced by public/robots.txt.
 *
 * Per ONE_JABALPUR_SEO.md §28, this must list only canonical, indexable URLs.
 * Deliberately excluded: /cities, /creators, /reviews, /users — those are
 * "Coming Soon" empty states with no content to index yet (§21 thin-content
 * rule). Add them here once they carry real information.
 *
 * `lastModified` is an explicit date per route rather than `new Date()`, so a
 * rebuild does not claim every page changed. Update a route's date when that
 * page's content meaningfully changes.
 */
const routes = [
  { path: "",              lastModified: "2026-09-01", changeFrequency: "daily",   priority: 1.0 },
  { path: "/places",       lastModified: "2026-09-01", changeFrequency: "weekly",  priority: 0.9 },
  { path: "/events",       lastModified: "2026-09-01", changeFrequency: "daily",   priority: 0.9 },
  { path: "/food",         lastModified: "2026-09-01", changeFrequency: "weekly",  priority: 0.9 },
  { path: "/things-to-do", lastModified: "2026-09-01", changeFrequency: "weekly",  priority: 0.8 },
  { path: "/businesses",   lastModified: "2026-09-01", changeFrequency: "weekly",  priority: 0.8 },
  { path: "/guides",       lastModified: "2026-09-01", changeFrequency: "monthly", priority: 0.7 },
] as const satisfies ReadonlyArray<{
  path: string;
  lastModified: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
