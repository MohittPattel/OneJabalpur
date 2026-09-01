import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
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
        <div className={styles.container}>
          <div className={styles.eyebrow}>LOCAL KNOWLEDGE</div>
          <h1>Jabalpur Guides</h1>
          <p>Local travel guides, food guides and insider knowledge about Jabalpur.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <ComingSoon
          icon="📚"
          title="Local Guides Coming Soon"
          message="In-depth travel guides, food trails, weekend itineraries and insider tips about Jabalpur — written by locals, for everyone."
        />
      </main>
      <Footer />
    </div>
  );
}
