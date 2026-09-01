import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
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
        <div className={styles.container}>
          <div className={styles.eyebrow}>LOCAL TALENT</div>
          <h1>Jabalpur Creators</h1>
          <p>Meet local content creators, artists, and influencers from Jabalpur.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <ComingSoon
          icon="🎨"
          title="Creator Profiles Coming Soon"
          message="Discover talented content creators, artists, photographers, and influencers from Jabalpur. Support local talent!"
        />
      </main>
      <Footer />
    </div>
  );
}
