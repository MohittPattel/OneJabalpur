import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        <h1>Things To Do in Jabalpur</h1>
        <p>Activities, adventures and experiences for everyone in Jabalpur.</p>
      </section>
      <section className={styles.pageContent}>
        <div className={styles.emptyState}>
          <h2>Coming Soon</h2>
          <p>We&apos;re putting together the ultimate Jabalpur activity guide.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
