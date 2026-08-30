import type { Metadata } from "next";
import { siteConfig } from "./config";

/**
 * Call in each page/layout to get consistent metadata.
 * Pass overrides to customise title, description, OG image, or canonical per page.
 */
export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.seo.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.seo.description,
    keywords: [...siteConfig.seo.keywords],
    openGraph: {
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      url: siteConfig.url,
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}
