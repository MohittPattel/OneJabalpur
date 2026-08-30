import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Reviews – OneJabalpur",
  description: "Read and share reviews of local places and businesses in Jabalpur.",
};

export default function ReviewsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <h1>Reviews</h1>
        <p>Read and share reviews of local places and businesses in Jabalpur.</p>
      </section>
      <main className={styles.pageContent}>
        <div className={styles.emptyState}>
          <h2>Coming Soon</h2>
          <p>Reviews will appear here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
