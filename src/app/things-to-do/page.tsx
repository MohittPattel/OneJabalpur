import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import { buildMetadata } from "@/lib/metadata";
import styles from "@/app/page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Things To Do in Jabalpur",
  description:
    "Discover the best things to do in Jabalpur — activities, adventures, experiences and places to hang out in Jabalpur, Madhya Pradesh.",
});

export default function ThingsToDoPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>ACTIVITIES</div>
          <h1>Things To Do in Jabalpur</h1>
          <p>Activities, adventures and experiences for everyone in Jabalpur.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <ComingSoon
          icon="🎯"
          title="Activities Guide Coming Soon"
          message="Discover the best things to do in Jabalpur — from outdoor adventures to cultural experiences, we're curating it all."
        />
      </main>
      <Footer />
    </div>
  );
}
