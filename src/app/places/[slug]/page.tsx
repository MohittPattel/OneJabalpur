import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { places, getPlaceBySlug, getPlacesByCategory } from "@/lib/places-data";
import styles from "./place.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return places.map((place) => ({
    slug: place.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);

  if (!place) {
    return { title: "Place Not Found" };
  }

  return {
    title: `${place.title} - Places to Visit in Jabalpur | OneJabalpur`,
    description: place.description,
    openGraph: {
      title: place.title,
      description: place.shortDesc,
      images: [place.image],
    },
  };
}

export default async function PlacePage({ params }: PageProps) {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);

  if (!place) {
    notFound();
  }

  // Get related places from same category
  const related = getPlacesByCategory(place.category[0])
    .filter((p) => p.slug !== place.slug)
    .slice(0, 3);

  return (
    <div className={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <img
          src={place.image}
          alt={place.title}
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <Link href="/places">Places</Link>
            <span>/</span>
            <span>{place.title}</span>
          </div>
          <div className={styles.badges}>
            {place.isMustVisit && (
              <span className={styles.mustVisitBadge}>⭐ Must Visit</span>
            )}
            {place.tags.slice(0, 2).map((tag) => (
              <span key={tag} className={styles.tagBadge}>
                {tag}
              </span>
            ))}
          </div>
          <h1>{place.title}</h1>
          <p className={styles.location}>📍 {place.location}</p>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.content}>
          {/* Main Content */}
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <h2>About {place.title}</h2>
              <p className={styles.description}>{place.description}</p>
            </section>

            {/* Highlights */}
            <section className={styles.section}>
              <h2>Highlights</h2>
              <div className={styles.highlights}>
                {place.highlights.map((highlight, i) => (
                  <div key={i} className={styles.highlight}>
                    <span className={styles.highlightIcon}>✓</span>
                    {highlight}
                  </div>
                ))}
              </div>
            </section>

            {/* Photo Placeholder */}
            <section className={styles.section}>
              <h2>Photos</h2>
              <div className={styles.photoGrid}>
                <div className={styles.photoPlaceholder}>
                  <img src={place.image} alt={place.title} />
                </div>
                <div className={styles.photoPlaceholder}>
                  <div className={styles.comingSoon}>More photos coming soon</div>
                </div>
                <div className={styles.photoPlaceholder}>
                  <div className={styles.comingSoon}>More photos coming soon</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Quick Info Card */}
            <div className={styles.infoCard}>
              <h3>Visitor Information</h3>
              <div className={styles.infoList}>
                {place.timings && (
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>🕐</span>
                    <div>
                      <strong>Timings</strong>
                      <p>{place.timings}</p>
                    </div>
                  </div>
                )}
                {place.bestTime && (
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>📅</span>
                    <div>
                      <strong>Best Time to Visit</strong>
                      <p>{place.bestTime}</p>
                    </div>
                  </div>
                )}
                {place.entryFee && (
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>🎫</span>
                    <div>
                      <strong>Entry Fee</strong>
                      <p>{place.entryFee}</p>
                    </div>
                  </div>
                )}
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <strong>Location</strong>
                    <p>{place.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className={styles.tagsCard}>
              <h3>Categories</h3>
              <div className={styles.tagsList}>
                {place.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className={styles.mapCard}>
              <h3>Location</h3>
              <div className={styles.mapPlaceholder}>
                <span>🗺️</span>
                <p>Map coming soon</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Places */}
        {related.length > 0 && (
          <section className={styles.relatedSection}>
            <h2>Related Places</h2>
            <div className={styles.relatedGrid}>
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/places/${p.slug}`}
                  className={styles.relatedCard}
                >
                  <img src={p.image} alt={p.title} />
                  <div className={styles.relatedContent}>
                    <h3>{p.title}</h3>
                    <p>{p.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
