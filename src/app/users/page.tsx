import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
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
        <div className={styles.container}>
          <div className={styles.eyebrow}>COMMUNITY</div>
          <h1>OneJabalpur Community</h1>
          <p>Connect with the OneJabalpur community.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <ComingSoon
          icon="👥"
          title="Community Coming Soon"
          message="Join our growing community of Jabalpur locals and visitors. Share experiences, connect with others, and be part of something special."
        />
      </main>
      <Footer />
    </div>
  );
}
