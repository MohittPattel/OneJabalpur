"use client";

import Link from "next/link";
import { FormEvent, KeyboardEvent, useMemo, useState } from "react";
import { siteConfig } from "@/lib/config";
import {
  cafes,
  jabalpurSweets,
  jabalpurSpecials,
  restaurants,
  streetFoodPlaces,
} from "@/lib/food-data";
import { placeCategories, places } from "@/lib/places-data";
import styles from "./Hero.module.css";

type Suggestion = {
  label: string;
  type: "Place" | "Category" | "Web";
  href: string;
  detail: string;
};

type NavEntry = {
  label: string;
  href: string;
  children?: NavEntry[];
};

const foodSuggestions = [
  ...restaurants.map((item) => ({ ...item, href: "/food/restaurants" })),
  ...cafes.map((item) => ({ ...item, href: "/food/cafes" })),
  ...streetFoodPlaces.map((item) => ({ ...item, href: "/food/street-food" })),
  ...jabalpurSpecials.map((item) => ({ ...item, href: "/food/jabalpur-special" })),
  ...jabalpurSweets.map((item) => ({ ...item, href: "/food/sweets" })),
];

function flattenNavigation(entries: NavEntry[]): Suggestion[] {
  return entries.flatMap((entry) => [
    {
      label: entry.label,
      type: "Category" as const,
      href: entry.href,
      detail: "Browse on One Jabalpur",
    },
    ...(entry.children ? flattenNavigation(entry.children) : []),
  ]);
}

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const suggestions = useMemo<Suggestion[]>(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    const matchingPlaces = places
      .filter((place) => place.title.toLowerCase().startsWith(normalizedQuery))
      .slice(0, 5)
      .map((place) => ({
        label: place.title,
        type: "Place" as const,
        href: `/places/${place.slug}`,
        detail: place.location,
      }));

    const matchingFood = foodSuggestions
      .filter((item) => item.title.toLowerCase().startsWith(normalizedQuery))
      .slice(0, 5)
      .map((item) => ({
        label: item.title,
        type: "Category" as const,
        href: item.href,
        detail: item.badge,
      }));

    const matchingCategories = placeCategories
      .filter((category) => category.label.toLowerCase().startsWith(normalizedQuery))
      .slice(0, 2)
      .map((category) => ({
        label: category.label,
        type: "Category" as const,
        href: `/places/category/${category.id}`,
        detail: "Browse places",
      }));

    const matchingNavigation = flattenNavigation(siteConfig.nav as NavEntry[])
      .filter((entry) => entry.label.toLowerCase().startsWith(normalizedQuery))
      .filter((entry, index, entries) => entries.findIndex((item) => item.href === entry.href) === index)
      .slice(0, 5);

    const localSuggestions = [
      ...matchingPlaces,
      ...matchingFood,
      ...matchingCategories,
      ...matchingNavigation,
    ].slice(0, 6);

    if (localSuggestions.length > 0) {
      return localSuggestions;
    }

    return [{
      label: `Search the web for “${query.trim()}”`,
      type: "Web",
      href: `https://www.google.com/search?q=${encodeURIComponent(query.trim())}`,
      detail: "Open Google search",
    }];
  }, [query]);

  const showSuggestions = isFocused && query.trim().length > 0 && suggestions.length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (query.trim()) {
      return;
    }

    event.preventDefault();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!showSuggestions) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % suggestions.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + suggestions.length) % suggestions.length);
    }

    if (event.key === "Enter" && suggestions[activeIndex]) {
      event.preventDefault();
      window.location.href = suggestions[activeIndex].href;
    }

    if (event.key === "Escape") {
      setIsFocused(false);
    }
  }

  return (
    <form className={styles.searchBox} action="/search" method="get" onSubmit={handleSubmit}>
      <div className={styles.inputWrap}>
        <input
          name="q"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          onKeyDown={handleKeyDown}
          placeholder="Search places, cafes, events, businesses..."
          autoComplete="off"
          role="combobox"
          aria-expanded={showSuggestions}
          aria-controls="search-suggestions"
          aria-autocomplete="list"
        />
        {showSuggestions && (
          <div id="search-suggestions" className={styles.suggestions} role="listbox">
            {suggestions.map((suggestion, index) => (
              <Link
                href={suggestion.href}
                key={suggestion.href}
                className={`${styles.suggestion} ${index === activeIndex ? styles.suggestionActive : ""}`}
                role="option"
                aria-selected={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span className={styles.suggestionIcon} aria-hidden="true">
                  {suggestion.type === "Place" ? "📍" : suggestion.type === "Category" ? "✦" : "↗"}
                </span>
                <span>
                  <strong>{suggestion.label}</strong>
                  <small>{suggestion.detail}</small>
                </span>
                <em>{suggestion.type}</em>
              </Link>
            ))}
          </div>
        )}
      </div>
      <button type="submit" className={styles.searchBtn}>
        Search Jabalpur
      </button>
    </form>
  );
}
