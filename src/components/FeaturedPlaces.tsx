import Link from "next/link";
import { siteConfig } from "@/lib/config";
import styles from "./FeaturedPlaces.module.css";

export default function FeaturedPlaces() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <h2>Popular places</h2>
            <p>Some of Jabalpur&apos;s must-see experiences.</p>
          </div>
          <Link href="/places" className={styles.link}>Explore places &rarr;</Link>
        </div>
        <div className={styles.cards}>
          {siteConfig.featuredPlaces.map((place) => (
            <article key={place.title} className={styles.card}>
              <img
                src={place.image}
                alt={place.title}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.body}>
                <span className={styles.badge}>{place.badge}</span>
                <h3>{place.title}</h3>
                <p>{place.desc}</p>
                <div className={styles.meta}>{place.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
