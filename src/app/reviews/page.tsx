import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import { buildMetadata } from "@/lib/metadata";
import styles from "@/app/page.module.css";

export const metadata: Metadata = buildMetadata({
  path: "/reviews",
  title: "Reviews",
  description: "Read and share reviews of local places and businesses in Jabalpur.",
  // Coming Soon placeholder — unindex until real content ships (SEO doc §21).
  robots: { index: false, follow: true },
});

export default function ReviewsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>COMMUNITY</div>
          <h1>Reviews</h1>
          <p>Read and share reviews of local places and businesses in Jabalpur.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <ComingSoon
          icon="⭐"
          title="Reviews Coming Soon"
          message="Read honest reviews from locals and visitors. Share your own experiences of places, restaurants and businesses in Jabalpur."
        />
      </main>
      <Footer />
    </div>
  );
}
