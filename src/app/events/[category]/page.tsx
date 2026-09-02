import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import { buildMetadata } from "@/lib/metadata";
import { eventCategories } from "@/lib/events-data";
import styles from "@/app/page.module.css";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return eventCategories.map((cat) => ({ category: cat.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = eventCategories.find((c) => c.id === category);

  return buildMetadata({
    path: `/events/${category}`,
    title: cat ? `${cat.label} Events in Jabalpur` : "Category Not Found",
    description: cat
      ? `${cat.label} events in Jabalpur — coming soon.`
      : undefined,
    // Coming Soon placeholder — unindex until real content ships (SEO doc §21).
    robots: { index: false, follow: true },
  });
}

export default async function EventCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = eventCategories.find((c) => c.id === category);

  if (!cat) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>WHAT&apos;S HAPPENING</div>
          <h1>{cat.label} Events in Jabalpur</h1>
          <p>Find {cat.label.toLowerCase()} events happening in Jabalpur.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <ComingSoon
          icon="📅"
          title={`${cat.label} Events Coming Soon`}
          message={`We're curating the best ${cat.label.toLowerCase()} events in Jabalpur. Check back soon!`}
        />
      </main>
      <Footer />
    </div>
  );
}
