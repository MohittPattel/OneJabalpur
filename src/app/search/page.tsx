import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";
import SearchContent from "./SearchContent";
import styles from "./search.module.css";

export const metadata: Metadata = buildMetadata({
  path: "/search",
  title: "Search Jabalpur",
  description: "Search places and experiences across Jabalpur.",
});

export default function SearchPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<div className={styles.heading}>Loading search...</div>}>
          <SearchContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
