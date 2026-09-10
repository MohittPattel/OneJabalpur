import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";
import styles from "@/app/page.module.css";

export const metadata: Metadata = buildMetadata({
  path: "/contact",
  title: "Contact One Jabalpur",
  description:
    "Contact One Jabalpur about corrections, local listings, events and partnership opportunities in Jabalpur.",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>GET IN TOUCH</div>
          <h1>Contact One Jabalpur</h1>
          <p>Share a correction, suggest a place or ask about listing a local business.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <section className={styles.emptyState}>
          <h2>Corrections and local listings</h2>
          <p>
            For updates to places, events, food or business information, email the One Jabalpur team.
          </p>
          <p>
            <a href="mailto:hello@onejabalpur.com">hello@onejabalpur.com</a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
