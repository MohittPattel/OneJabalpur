import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Users – OneJabalpur",
  description: "Connect with the OneJabalpur community.",
};

export default function UsersPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <h1>Users</h1>
        <p>Connect with the OneJabalpur community.</p>
      </section>
      <main className={styles.pageContent}>
        <div className={styles.emptyState}>
          <h2>Coming Soon</h2>
          <p>Community member profiles will appear here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
