import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";
import styles from "@/app/page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Jabalpur Travel Guides",
  description:
    "Read local guides about Jabalpur — travel tips, food guides, event guides and insider knowledge about life in Jabalpur, Madhya Pradesh.",
});

export default function GuidesPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <h1>Jabalpur Guides</h1>
        <p>Local travel guides, food guides and insider knowledge about Jabalpur.</p>
      </section>
      <section className={styles.pageContent}>
        <div className={styles.emptyState}>
          <h2>Coming Soon</h2>
          <p>Our local guides are being written. Check back soon.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
