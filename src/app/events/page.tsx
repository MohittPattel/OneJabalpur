import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";
import styles from "@/app/page.module.css";

export const metadata: Metadata = buildMetadata({
  path: "/events",
  title: "Events in Jabalpur",
  description:
    "Find upcoming events in Jabalpur — concerts, festivals, workshops, comedy shows, family events and more happening near you.",
});

const events = [
  { title: "Live Music Night",       badge: "Music",     desc: "An evening of live performances and good vibes.",                      meta: "📍 Jabalpur · 🕖 7:00 PM", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80", day: "24", month: "AUG" },
  { title: "Comedy Night Jabalpur",  badge: "Comedy",    desc: "A stand-up evening featuring local and visiting comedians.",           meta: "📍 City Venue · 🕖 8:00 PM", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=900&q=80", day: "29", month: "AUG" },
  { title: "Community Fest",         badge: "Community", desc: "Food, activities, music and experiences for the whole family.",         meta: "📍 Jabalpur · 👨\u200d👩\u200d👧 Family", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80", day: "31", month: "AUG" },
];

export default function EventsPage() {
  return (
    <>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>WHAT&apos;S HAPPENING</div>
          <h1>Jabalpur Events</h1>
          <p>Find upcoming events, live music, comedy, workshops, family activities and things happening in Jabalpur.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <div className={styles.filters}>
          {["All", "Popular", "Music", "Comedy", "Family", "Weekend"].map((f) => (
            <span key={f} className={`${styles.filter}${f === "All" ? " " + styles.active : ""}`}>{f}</span>
          ))}
        </div>
        <div className={styles.cards}>
          {events.map((e) => (
            <article key={e.title} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={e.image} alt={e.title} className={styles.cardImage} loading="lazy" />
                <div className={styles.eventDate}>
                  <strong>{e.day}</strong>
                  <span>{e.month}</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.badge}>{e.badge}</span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <div className={styles.meta}>{e.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
