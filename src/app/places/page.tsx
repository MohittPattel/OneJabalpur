import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";
import styles from "@/app/page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Places to Visit in Jabalpur",
  description:
    "Explore the best places to visit in Jabalpur — Dhuandhar Falls, Marble Rocks, Madan Mahal Fort, Bargi Dam and more tourist attractions in Jabalpur, MP.",
});

const places = [
  { title: "Dhuandhar Falls",  badge: "Nature",   desc: "One of Jabalpur's most famous natural attractions.",          meta: "📍 Bhedaghat · ⭐ Popular",    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" },
  { title: "Marble Rocks",     badge: "Nature",   desc: "Scenic marble cliffs along the Narmada River.",              meta: "📍 Bhedaghat · 🛶 Boating",    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80" },
  { title: "Dumna Nature Park", badge: "Nature",  desc: "A green escape for walks and outdoor time.",                meta: "📍 Jabalpur · 🌿 Outdoors",   image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80" },
  { title: "Madan Mahal Fort", badge: "Heritage", desc: "A historic landmark with panoramic city views.",            meta: "📍 Jabalpur · 🏛 Heritage",   image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80" },
  { title: "Gwarighat",        badge: "Spiritual",desc: "Sacred ghats on the Narmada, ideal for sunrise visits.",   meta: "📍 Jabalpur · 🌅 Sunrise",   image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80" },
  { title: "Bargi Dam",        badge: "Nature",   desc: "A scenic reservoir and picnic destination near Jabalpur.",  meta: "📍 Jabalpur · 🏞️ Scenic",   image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80" },
];

export default function PlacesPage() {
  return (
    <>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>EXPLORE JABALPUR</div>
          <h1>Places to Visit in Jabalpur</h1>
          <p>Discover waterfalls, heritage, nature, viewpoints and memorable places across Jabalpur and nearby areas.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <div className={styles.filters}>
          {["All", "Popular", "Nature", "Heritage", "Weekend"].map((f) => (
            <span key={f} className={`${styles.filter}${f === "All" ? " " + styles.active : ""}`}>{f}</span>
          ))}
        </div>
        <div className={styles.cards}>
          {places.map((p) => (
            <article key={p.title} className={styles.card}>
              <img src={p.image} alt={p.title} className={styles.cardImage} loading="lazy" />
              <div className={styles.cardBody}>
                <span className={styles.badge}>{p.badge}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className={styles.meta}>{p.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
