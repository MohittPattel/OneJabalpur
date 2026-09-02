import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import { buildMetadata } from "@/lib/metadata";
import styles from "@/app/page.module.css";

export const metadata: Metadata = buildMetadata({
  path: "/businesses",
  title: "Jabalpur Business Directory",
  description:
    "Find local businesses, hotels, gyms, salons, shops and services in Jabalpur. Your complete Jabalpur business directory.",
  // Coming Soon placeholder — unindex until the directory has real listings (SEO doc §21).
  robots: { index: false, follow: true },
});

export default function BusinessesPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>LOCAL BUSINESSES</div>
          <h1>Businesses in Jabalpur</h1>
          <p>Hotels, gyms, salons, shops and local services across Jabalpur.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <ComingSoon
          icon="🏪"
          title="Business Directory Coming Soon"
          message="We're building the ultimate Jabalpur business directory. Find hotels, gyms, salons, shops and local services — all in one place."
        />
      </main>
      <Footer />
    </div>
  );
}
