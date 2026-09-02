import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import { buildMetadata } from "@/lib/metadata";
import { guideCategories } from "@/lib/guides-data";
import styles from "@/app/page.module.css";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return guideCategories.map((cat) => ({ category: cat.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = guideCategories.find((c) => c.id === category);

  return buildMetadata({
    path: `/guides/${category}`,
    title: cat ? `${cat.label} | Jabalpur Guides` : "Category Not Found",
    description: cat
      ? `${cat.label} — a Jabalpur travel guide, coming soon.`
      : undefined,
    // Coming Soon placeholder — unindex until real content ships (SEO doc §21).
    robots: { index: false, follow: true },
  });
}

export default async function GuideCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = guideCategories.find((c) => c.id === category);

  if (!cat) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>LOCAL KNOWLEDGE</div>
          <h1>{cat.label}</h1>
          <p>A local Jabalpur guide — {cat.label.toLowerCase()}.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <ComingSoon
          icon="🧭"
          title={`${cat.label} Coming Soon`}
          message={`We're writing this guide — ${cat.label.toLowerCase()} in Jabalpur. Check back soon!`}
        />
      </main>
      <Footer />
    </div>
  );
}
