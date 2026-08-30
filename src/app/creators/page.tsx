import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Creators – OneJabalpur",
  description: "Meet local content creators, artists, and influencers from Jabalpur.",
};

export default function CreatorsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <h1>Creators</h1>
        <p>Meet local content creators, artists, and influencers from Jabalpur.</p>
      </section>
      <main className={styles.pageContent}>
        <div className={styles.emptyState}>
          <h2>Coming Soon</h2>
          <p>Creator profiles will appear here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
