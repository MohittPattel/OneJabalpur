import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";
import { placeCategories, getPlacesByCategory } from "@/lib/places-data";
import styles from "../../places.module.css";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return placeCategories.map((cat) => ({
    category: cat.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = placeCategories.find((c) => c.id === category);

  if (!cat) {
    return buildMetadata({
      path: `/places/category/${category}`,
      title: "Category Not Found",
      robots: { index: false, follow: true },
    });
  }

  return buildMetadata({
    path: `/places/category/${cat.id}`,
    title: `${cat.label} - Places to Visit in Jabalpur`,
    description: `Explore ${cat.label.toLowerCase()} in and around Jabalpur. Discover the best destinations for your trip.`,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = placeCategories.find((c) => c.id === category);

  if (!cat) {
    notFound();
  }

  const categoryPlaces = getPlacesByCategory(category);

  return (
    <div className={styles.placesPage}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>Places in Jabalpur</div>
          <h1>
            {cat.icon} {cat.label}
          </h1>
          <p>
            Explore {cat.label.toLowerCase()} in and around Jabalpur.
            {category === "must-visit" && " These are the top destinations you shouldn't miss."}
            {category === "nature" && " Discover waterfalls, scenic spots and natural wonders."}
            {category === "heritage" && " Step back in time with Jabalpur's rich history."}
            {category === "temples" && " Find peace at sacred temples and spiritual sites."}
            {category === "parks" && " Escape to green spaces and nature reserves."}
            {category === "narmada" && " Experience the holy Narmada river and its ghats."}
            {category === "wildlife" && " Safari adventures and wildlife experiences await."}
            {category === "nearby" && " Plan trips to destinations near Jabalpur."}
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <div className={styles.categories}>
        <div className={styles.categoriesInner}>
          <Link href="/places" className={styles.categoryBtn}>
            <span className={styles.categoryIcon}>🗺️</span>
            All Places
          </Link>
          {placeCategories.map((c) => (
            <Link
              key={c.id}
              href={`/places/category/${c.id}`}
              className={`${styles.categoryBtn} ${c.id === category ? styles.active : ""}`}
            >
              <span className={styles.categoryIcon}>{c.icon}</span>
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      <main className={styles.main}>
        {categoryPlaces.length > 0 ? (
          <div className={styles.grid}>
            {categoryPlaces.map((place) => (
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
        ) : (
          <div className={styles.emptyState}>
            <p>No places found in this category yet.</p>
            <Link href="/places">← Back to all places</Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
