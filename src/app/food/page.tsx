import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";
import styles from "@/app/page.module.css";

export const metadata: Metadata = buildMetadata({
  path: "/food",
  title: "Best Restaurants & Cafes in Jabalpur",
  description:
    "Discover the best restaurants, cafes and street food in Jabalpur. Find where to eat, drink and enjoy local cuisine in Jabalpur, Madhya Pradesh.",
});

const cafes = [
  { title: "Urban Coffee House", badge: "Popular",   desc: "A relaxed cafe for coffee, conversations and casual meetups.",      meta: "📍 Wright Town · ₹₹ · ⭐ 4.5",    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80" },
  { title: "Roast & Co.",        badge: "Coffee",    desc: "Specialty-style coffee and a comfortable space to unwind.",         meta: "📍 Vijay Nagar · ₹₹ · ☕ Coffee",  image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80" },
  { title: "The Garden Cafe",    badge: "Date Spot", desc: "A cozy atmosphere with outdoor seating and snacks.",               meta: "📍 Jabalpur · ₹₹ · 🌿 Outdoor",  image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80" },
];

export default function FoodPage() {
  return (
    <>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>EAT &amp; EXPLORE</div>
          <h1>Best Cafes in Jabalpur</h1>
          <p>Discover cafes in Jabalpur for coffee, conversations, dates, work, study and relaxed evenings.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <div className={styles.filters}>
          {["All", "Popular", "Coffee", "Family", "Outdoor"].map((f) => (
            <span key={f} className={`${styles.filter}${f === "All" ? " " + styles.active : ""}`}>{f}</span>
          ))}
        </div>
        <div className={styles.cards}>
          {cafes.map((c) => (
            <article key={c.title} className={styles.card}>
              <img src={c.image} alt={c.title} className={styles.cardImage} loading="lazy" />
              <div className={styles.cardBody}>
                <span className={styles.badge}>{c.badge}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className={styles.meta}>{c.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
