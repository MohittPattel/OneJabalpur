import type { Metadata } from "next";
import Script from "next/script";
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

type EventItem = {
  title: string;
  badge: string;
  desc: string;
  meta: string;
  image: string;
  day: string;
  month: string;
  startDate: string;
  location: string;
};

// Only add verified future events with an official source and date.
const events: EventItem[] = [];

const eventJsonLd = events.map((event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.title,
  description: event.desc,
  startDate: event.startDate,
  image: event.image,
  location: {
    "@type": "Place",
    name: event.location,
    address: { "@type": "PostalAddress", addressLocality: "Jabalpur", addressRegion: "Madhya Pradesh", addressCountry: "IN" },
  },
}));

export default function EventsPage() {
  return (
    <>
      <Header />
      {eventJsonLd.length > 0 && (
        <Script
          id="events-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      )}
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
        {events.length === 0 ? (
          <div className={styles.emptyState}>
            <h2>No upcoming events listed</h2>
            <p>Check back soon for verified events happening in Jabalpur.</p>
          </div>
        ) : (
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
        )}
      </main>
      <Footer />
    </>
  );
}
