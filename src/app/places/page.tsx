import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";
import {
  places,
  placeCategories,
  getMustVisitPlaces,
  getNearbyDestinations,
} from "@/lib/places-data";
import styles from "./places.module.css";

export const metadata: Metadata = buildMetadata({
  path: "/places",
  title: "Places to Visit in Jabalpur",
  description:
    "Explore the best places to visit in Jabalpur — Dhuandhar Falls, Marble Rocks, Madan Mahal Fort, Bargi Dam, temples, ghats and more attractions in Jabalpur, MP.",
});

export default function PlacesPage() {
  const mustVisit = getMustVisitPlaces();
  const featured = places.filter((p) => p.isFeatured).slice(0, 3);
  const nearby = getNearbyDestinations();
  const allPlaces = places.filter((p) => !p.category.includes("nearby"));

  return (
    <div className={styles.placesPage}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>Explore Jabalpur</div>
          <h1>Places to Visit in Jabalpur</h1>
          <p>
            Discover waterfalls, heritage sites, temples, nature reserves and
            memorable destinations across Jabalpur and nearby Central India.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <div className={styles.categories}>
        <div className={styles.categoriesInner}>
          <Link href="/places" className={`${styles.categoryBtn} ${styles.active}`}>
            <span className={styles.categoryIcon}>🗺️</span>
            All Places
          </Link>
          {placeCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/places/category/${cat.id}`}
              className={styles.categoryBtn}
            >
              <span className={styles.categoryIcon}>{cat.icon}</span>
              {cat.label}
            </Link>
          ))}
        </div>
      </div>

      <main className={styles.main}>
        {/* Featured Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>⭐</span>
              Must Visit in Jabalpur
            </h2>
          </div>
          <div className={styles.featuredGrid}>
            {featured[0] && (
              <Link
                href={`/places/${featured[0].slug}`}
                className={`${styles.featuredCard} ${styles.large}`}
              >
                <img
                  src={featured[0].image}
                  alt={featured[0].title}
                  className={styles.featuredImage}
                />
                <div className={styles.featuredOverlay} />
                <div className={styles.featuredContent}>
                  <span className={styles.featuredBadge}>
                    ⭐ Must Visit
                  </span>
                  <h3>{featured[0].title}</h3>
                  <p>{featured[0].shortDesc}</p>
                </div>
              </Link>
            )}
            <div>
              {featured.slice(1, 3).map((place) => (
                <Link
                  key={place.slug}
                  href={`/places/${place.slug}`}
                  className={styles.featuredCard}
                  style={{ marginBottom: featured.indexOf(place) === 1 ? "20px" : 0 }}
                >
                  <img
                    src={place.image}
                    alt={place.title}
                    className={styles.featuredImage}
                  />
                  <div className={styles.featuredOverlay} />
                  <div className={styles.featuredContent}>
                    <span className={styles.featuredBadge}>
                      {place.category[0] === "must-visit" ? "⭐ Must Visit" : place.tags[0]}
                    </span>
                    <h3>{place.title}</h3>
                    <p>{place.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Places Grid */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📍</span>
              All Places in Jabalpur
            </h2>
          </div>
          <div className={styles.grid}>
            {allPlaces.map((place) => (
              <Link
                key={place.slug}
                href={`/places/${place.slug}`}
                className={styles.card}
              >
                <div className={styles.cardImageWrap}>
                  <img
                    src={place.image}
                    alt={place.title}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                  {place.isMustVisit && (
                    <span className={`${styles.cardBadge} ${styles.mustVisitBadge}`}>
                      ⭐ Must Visit
                    </span>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <h3>{place.title}</h3>
                  <p>{place.shortDesc}</p>
                  <div className={styles.cardMeta}>
                    <span>📍 {place.location.split(",")[0]}</span>
                    {place.bestTime && <span>🗓️ {place.bestTime.split(" ")[0]}</span>}
                  </div>
                  <div className={styles.cardTags}>
                    {place.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Nearby Destinations */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🚗</span>
              Explore Near Jabalpur
            </h2>
          </div>
          <div className={styles.nearbyGrid}>
            {nearby.map((place) => (
              <Link
                key={place.slug}
                href={`/places/${place.slug}`}
                className={styles.nearbyCard}
              >
                <div className={styles.nearbyIcon}>
                  {place.category.includes("wildlife") ? "🦁" : "🏔️"}
                </div>
                <h3>{place.title}</h3>
                <p>{place.shortDesc}</p>
                <div className={styles.nearbyDistance}>
                  📍 {place.location.split(",")[1]?.trim() || place.location}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
