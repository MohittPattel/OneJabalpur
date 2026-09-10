"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { cafes, jabalpurSweets, jabalpurSpecials, restaurants, streetFoodPlaces } from "@/lib/food-data";
import { placeCategories, places } from "@/lib/places-data";
import styles from "./search.module.css";

const foodSearchItems = [
  ...restaurants.map((item) => ({ ...item, href: "/food/restaurants" })),
  ...cafes.map((item) => ({ ...item, href: "/food/cafes" })),
  ...streetFoodPlaces.map((item) => ({ ...item, href: "/food/street-food" })),
  ...jabalpurSpecials.map((item) => ({ ...item, href: "/food/jabalpur-special" })),
  ...jabalpurSweets.map((item) => ({ ...item, href: "/food/sweets" })),
];

function getQueryValue(value: string | null): string {
  return (value ?? "").trim();
}

function getExternalSearchUrl(query: string): string | null {
  const isHashtagSearch = query.startsWith("#");

  if (!isHashtagSearch) {
    return null;
  }

  const searchTerm = query.slice(1).trim().toLowerCase();
  const normalizedTerm = searchTerm === "gwarigaht" ? "Gwarighat" : searchTerm;
  const googleQuery = `${normalizedTerm} Jabalpur`;

  return `https://www.google.com/search?q=${encodeURIComponent(googleQuery)}`;
}

function getGoogleSearchUrl(query: string): string {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

export default function SearchContent() {
  const searchParams = useSearchParams();
  const query = getQueryValue(searchParams.get("q"));
  const normalizedQuery = query.toLowerCase();

  const placeResults = normalizedQuery
    ? places.filter((place) => {
        const searchableText = [
          place.title,
          place.shortDesc,
          place.description,
          place.location,
          ...place.category,
          ...place.tags,
          ...place.highlights,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedQuery);
      })
    : [];

  const results = [
    ...placeResults.map((place) => ({
      title: place.title,
      shortDesc: place.shortDesc,
      location: place.location,
      href: `/places/${place.slug}`,
    })),
    ...foodSearchItems
      .filter(
        (item) =>
          Boolean(normalizedQuery) &&
          [item.title, item.badge, item.desc, item.meta]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery)
      )
      .map((item) => ({
        title: item.title,
        shortDesc: item.desc,
        location: item.meta,
        href: item.href,
      })),
  ];

  const externalSearchUrl =
    getExternalSearchUrl(query) ??
    (query && results.length === 0 ? getGoogleSearchUrl(query) : null);

  useEffect(() => {
    if (externalSearchUrl) {
      window.location.replace(externalSearchUrl);
    }
  }, [externalSearchUrl]);

  if (externalSearchUrl) {
    return (
      <div className={styles.heading}>
        <div className={styles.eyebrow}>Opening Google</div>
        <h1>Finding &quot;{query.replace(/^#\s*/, "")}&quot;</h1>
        <p>Redirecting you to the relevant search results.</p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.heading}>
        <div className={styles.eyebrow}>Search Jabalpur</div>
        <h1>{query ? `Results for “${query}”` : "What are you looking for?"}</h1>
        <p>
          {query
            ? `${results.length} ${results.length === 1 ? "result" : "results"} found across places and experiences.`
            : "Search for places, cafes, events, businesses and experiences across the city."}
        </p>
      </div>

      {query && results.length > 0 && (
        <section className={styles.results} aria-label="Search results">
            {results.map((result) => (
              <Link href={result.href} key={`${result.href}-${result.title}`} className={styles.result}>
              <div>
                  <span className={styles.resultType}>Place or Food</span>
                  <h2>{result.title}</h2>
                  <p>{result.shortDesc}</p>
                  <span className={styles.location}>{result.location}</span>
              </div>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </Link>
          ))}
        </section>
      )}

      {query && results.length === 0 && (
        <div className={styles.empty}>
          <h2>No results yet</h2>
          <p>Try a broader search such as “waterfalls”, “temples” or “Narmada”.</p>
        </div>
      )}

      {!query && (
        <section className={styles.categories} aria-label="Browse categories">
          <h2>Browse by category</h2>
          <div className={styles.categoryGrid}>
            {placeCategories.slice(0, 6).map((category) => (
              <Link href={`/places/category/${category.id}`} key={category.id} className={styles.category}>
                <span>{category.icon}</span>
                {category.label}
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
