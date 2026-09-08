import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";
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
    return buildMetadata({
      path: `/places/${slug}`,
      title: "Place Not Found",
      robots: { index: false, follow: true },
    });
  }

  return buildMetadata({
    path: `/places/${place.slug}`,
    title: `${place.title} - Places to Visit in Jabalpur`,
    description: place.description,
    openGraph: { images: [place.image] },
  });
}

export default async function PlacePage({ params }: PageProps) {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);
  const photos = place?.photos ?? [];

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

            <section className={styles.section}>
              <h2>Photos</h2>
              <div className={styles.photoGrid}>
                {(photos.length > 0 ? photos : [place.image]).map((photo, index) => (
                  <div key={photo} className={styles.photoPlaceholder}>
                    <a
                      href={photo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${place.title} photo ${index + 1}`}
                    >
                      <img src={photo} alt={`${place.title} photo ${index + 1}`} />
                    </a>
                  </div>
                ))}
                {Array.from({ length: Math.max(0, 3 - (photos.length || 1)) }).map((_, index) => (
                  <div key={`placeholder-${index}`} className={styles.photoPlaceholder}>
                    <div className={styles.comingSoon}>More photos coming soon</div>
                  </div>
                ))}
              </div>
              {place.slug === "dhuandhar-falls" && (
                <a
                  href="https://www.google.com/search?q=Dhuandhar+Falls"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.seeMore}
                >
                  See more
                </a>
              )}
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

            <div className={styles.mapCard}>
              <h3>Location</h3>
              {place.slug === "dhuandhar-falls" ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14676.809879185364!2d79.80754110000001!3d23.12627345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b41586923e59%3A0x647f072cfb1ee18e!2sDhuandhar%20Waterfall!5e0!3m2!1sen!2sin!4v1788878413534!5m2!1sen!2sin"
                  className={styles.mapEmbed}
                  title="Dhuandhar Waterfall location"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <div className={styles.mapPlaceholder}>
                  <span>🗺️</span>
                  <p>Map coming soon</p>
                </div>
              )}
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
