import Link from "next/link";
import { siteConfig } from "@/lib/config";
import styles from "./CardGrid.module.css";

export default function CardGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <h2>Explore Jabalpur</h2>
            <p>Start with what you&apos;re looking for.</p>
          </div>
          <a href="#" className={styles.link}>View all &rarr;</a>
        </div>
        <div className={styles.grid}>
          {siteConfig.sections.map((cat) => (
            <Link key={cat.href} href={cat.href} className={styles.category}>
              <div className={styles.icon}>{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
