import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import { buildMetadata } from "@/lib/metadata";
import { businessCategories } from "@/lib/business-data";
import styles from "@/app/page.module.css";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return businessCategories.map((cat) => ({ category: cat.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = businessCategories.find((c) => c.id === category);

  return buildMetadata({
    path: `/businesses/${category}`,
    title: cat ? `${cat.label} in Jabalpur` : "Category Not Found",
    description: cat
      ? `${cat.label} in Jabalpur — coming soon.`
      : undefined,
    // Coming Soon placeholder — unindex until real content ships (SEO doc §21).
    robots: { index: false, follow: true },
  });
}

export default async function BusinessCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = businessCategories.find((c) => c.id === category);

  if (!cat) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>LOCAL BUSINESSES</div>
          <h1>{cat.label} in Jabalpur</h1>
          <p>Find the best {cat.label.toLowerCase()} in Jabalpur.</p>
        </div>
      </section>
      <main className={styles.pageContent}>
        <ComingSoon
          icon="🏪"
          title={`${cat.label} Directory Coming Soon`}
          message={`We're building the ${cat.label.toLowerCase()} directory for Jabalpur. Check back soon!`}
        />
      </main>
      <Footer />
    </div>
  );
}
