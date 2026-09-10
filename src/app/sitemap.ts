import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { publishedFoodCategoryIds } from "@/lib/food-data";
import { places, placeCategories } from "@/lib/places-data";

// sitemap.xml compiles to a Route Handler, which `output: "export"` only
// supports when explicitly prerendered.
export const dynamic = "force-static";

/**
 * Generates /sitemap.xml — the URL already referenced by public/robots.txt.
 *
 * This must list only canonical, indexable URLs.
 * Deliberately excluded: /cities, /creators, /reviews, /users, /businesses,
 * /things-to-do, /guides — those are "Coming Soon" empty states with no
 * content to index yet (§21 thin-content rule) and are marked `noindex`.
 * Add them here once they carry real content and are re-indexed.
 *
 * `lastModified` is an explicit date per route rather than `new Date()`, so a
 * rebuild does not claim every page changed. Update a route's date when that
 * page's content meaningfully changes.
 */
const routes = [
  { path: "",        lastModified: "2026-09-06", changeFrequency: "daily",  priority: 1.0 },
  { path: "/places", lastModified: "2026-09-01", changeFrequency: "weekly", priority: 0.9 },
  { path: "/events", lastModified: "2026-09-01", changeFrequency: "daily",  priority: 0.9 },
  { path: "/food",   lastModified: "2026-09-06", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about",  lastModified: "2026-09-10", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", lastModified: "2026-09-10", changeFrequency: "monthly", priority: 0.5 },
] as const satisfies ReadonlyArray<{
  path: string;
  lastModified: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Place detail pages are a top indexing priority.
  const placeRoutes = places.map((place) => ({
    url: `${siteConfig.url}/places/${place.slug}`,
    lastModified: "2026-09-01",
    changeFrequency: "monthly" as const,
    priority: place.isMustVisit ? 0.8 : 0.7,
  }));

  const categoryRoutes = placeCategories.map((cat) => ({
    url: `${siteConfig.url}/places/category/${cat.id}`,
    lastModified: "2026-09-01",
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const foodRoutes = publishedFoodCategoryIds.map((category) => ({
    url: `${siteConfig.url}/food/${category}`,
    lastModified: "2026-09-06",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...placeRoutes, ...categoryRoutes, ...foodRoutes];
}
