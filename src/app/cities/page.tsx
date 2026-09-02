import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import { buildMetadata } from "@/lib/metadata";
import styles from "@/app/page.module.css";

export const metadata: Metadata = buildMetadata({
  path: "/cities",
  title: "Cities",
  description: "Explore cities and neighbourhoods across Jabalpur.",
  // Coming Soon placeholder — unindex until real content ships (SEO doc §21).
  robots: { index: false, follow: true },
});

export default function CitiesPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>EXPLORE</div>
          <h1>Cities & Neighbourhoods</h1>
          <p>Explore cities and neighbourhoods across Jabalpur.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <ComingSoon
          icon="🏘️"
          title="City Guides Coming Soon"
          message="Discover Jabalpur's diverse neighbourhoods, localities and surrounding areas with detailed guides and local insights."
        />
      </main>
      <Footer />
    </div>
  );
}
