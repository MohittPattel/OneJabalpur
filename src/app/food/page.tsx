import type { Metadata } from "next";
import Link from "next/link";
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

const foodSections = [
  { href: "/food/jabalpur-special", title: "Jabalpur Special", badge: "Start Here", desc: "Khoya Jalebi, poha-jalebi, Dal Bafla and the foods that make Jabalpur distinctive.", meta: "🍬 Local flavours", image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=900&q=80" },
  { href: "/food/restaurants", title: "Restaurants", badge: "Curated Dining", desc: "A handpicked set of restaurants for your next lunch, dinner or family meal.", meta: "🍛 Sit-down dining", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80" },
  { href: "/food/cafes", title: "Cafes", badge: "Coffee & Conversation", desc: "Modern coffee stops, art cafes, bakery cafes and classic Jabalpur experiences.", meta: "☕ Relaxed outings", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80" },
  { href: "/food/street-food", title: "Street Food", badge: "Iconic Food Places", desc: "Discover Sarafa, Civic Centre Chaupati, parathas and casual local food stops.", meta: "🌶️ Evening food", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80" },
  { href: "/food/sweets", title: "Sweets", badge: "Traditional Mithai", desc: "Explore Khoya Jalebi, barfi, peda, imarti, kulfi and other sweet Jabalpur favourites.", meta: "🍨 Dessert trail", image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=900&q=80" },
  { href: "/food/food-trails", title: "Food Trails", badge: "Food by Area", desc: "Plan where to eat across Sadar, Civic Centre, Wright Town, Sarafa and more.", meta: "📍 Explore neighbourhoods", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80" },
];

export default function FoodPage() {
  return (
    <>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>EAT &amp; EXPLORE</div>
          <h1>Food & Cafes in Jabalpur</h1>
          <p>Discover the city through its signature sweets, cafés, restaurants, street food and neighbourhood food trails.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <div className={styles.filters}>
          {foodSections.map((section) => (
            <Link key={section.href} href={section.href} className={styles.filter}>
              {section.title}
            </Link>
          ))}
        </div>
        <section>
          <div className={styles.eyebrow}>DISCOVER JABALPUR THROUGH FOOD</div>
          <h2 style={{ marginBottom: "12px" }}>Choose Your Food Experience</h2>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "28px" }}>
            Browse curated guides made for visitors, from the city&apos;s signature sweets to the best areas for an evening food walk.
          </p>
          <div className={styles.cards}>
            {foodSections.map((section) => (
              <Link key={section.href} href={section.href} className={styles.card}>
                <img src={section.image} alt={section.title} className={styles.cardImage} loading="lazy" />
                <div className={styles.cardBody}>
                  <span className={styles.badge}>{section.badge}</span>
                  <h3>{section.title}</h3>
                  <p>{section.desc}</p>
                  <div className={styles.meta}>{section.meta} · Explore →</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ marginTop: "64px" }}>
          <div className={styles.eyebrow}>A GREAT PLACE TO START</div>
          <h2 style={{ marginBottom: "12px" }}>Try Jabalpur&apos;s Signature Food</h2>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>
            Begin with Khoya Jalebi, then build your day around poha for breakfast, a café break, and street food in the evening.
          </p>
          <Link href="/food/jabalpur-special" className={`${styles.filter} ${styles.active}`} style={{ display: "inline-block" }}>
            Explore Jabalpur Specialties
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
