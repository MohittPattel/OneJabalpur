import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";
import styles from "@/app/page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Jabalpur Business Directory",
  description:
    "Find local businesses, hotels, gyms, salons, shops and services in Jabalpur. Your complete Jabalpur business directory.",
});

export default function BusinessesPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <h1>Businesses in Jabalpur</h1>
        <p>Hotels, gyms, salons, shops and local services across Jabalpur.</p>
      </section>
      <main className={styles.pageContent}>
        <div className={styles.emptyState}>
          <h2>Coming Soon</h2>
          <p>We&apos;re building the Jabalpur business directory.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
