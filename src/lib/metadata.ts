import type { Metadata } from "next";
import { siteConfig } from "./config";

type BuildMetadataOptions = Omit<Partial<Metadata>, "title" | "description"> & {
  title?: string;
  description?: string;
  /** Route path (e.g. "/places/bhedaghat") used for canonical + OG url. Defaults to the homepage. */
  path?: string;
};

/**
 * Call in each page/layout to get consistent metadata.
 * Pass `path` so canonical/OG urls point at that page, not the homepage.
 */
export function buildMetadata(options: BuildMetadataOptions = {}): Metadata {
  const { path = "/", title, description, openGraph, twitter, ...rest } = options;

  const pageTitle = title ?? siteConfig.seo.title;
  const pageDescription = description ?? siteConfig.seo.description;
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: title ?? {
      default: siteConfig.seo.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: pageDescription,
    keywords: [...siteConfig.seo.keywords],
    alternates: { canonical: url },
    openGraph: {
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      url,
      title: pageTitle,
      description: pageDescription,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      ...twitter,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...rest,
  };
}
