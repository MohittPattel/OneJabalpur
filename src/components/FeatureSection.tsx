import Link from "next/link";
import { siteConfig } from "@/lib/config";
import styles from "./FeatureSection.module.css";

export default function FeatureSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.feature}>
          <div className={styles.left}>
            <div className={styles.eyebrow}>One city. One guide.</div>
            <h2>Know what&apos;s happening in Jabalpur.</h2>
            <p>
              From weekend events and new cafes to hidden places and local
              businesses — discover the city through One Jabalpur.
            </p>
            <Link href="/events" className={styles.btn}>
              Explore events &rarr;
            </Link>
          </div>
          <div className={styles.stats}>
            {siteConfig.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
