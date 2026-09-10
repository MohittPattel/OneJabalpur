import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";
import styles from "@/app/page.module.css";

export const metadata: Metadata = buildMetadata({
  path: "/about",
  title: "About One Jabalpur",
  description:
    "Learn about One Jabalpur, a local discovery guide for places, events, food and businesses in Jabalpur, Madhya Pradesh.",
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>ABOUT ONE JABALPUR</div>
          <h1>One city. One guide.</h1>
          <p>One Jabalpur helps residents and visitors discover useful local information in Jabalpur.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <section className={styles.emptyState}>
          <h2>Discover Jabalpur with confidence</h2>
          <p>
            We bring together places, events, food, businesses and local experiences so you can plan your time in Jabalpur, Madhya Pradesh.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
