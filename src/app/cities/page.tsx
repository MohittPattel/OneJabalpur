import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Cities – OneJabalpur",
  description: "Explore cities and neighbourhoods across Jabalpur.",
};

export default function CitiesPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <h1>Cities</h1>
        <p>Explore cities and neighbourhoods across Jabalpur.</p>
      </section>
      <main className={styles.pageContent}>
        <div className={styles.emptyState}>
          <h2>Coming Soon</h2>
          <p>City listings will appear here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
