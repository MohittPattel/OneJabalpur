"use client";

import { useEffect, useState } from "react";
import styles from "./VisitorCounter.module.css";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/one-jabalpur/visits/up")
      .then((response) => response.json())
      .then((data: { count?: number }) => setCount(data.count ?? null))
      .catch(() => setCount(null));
  }, []);

  return (
    <section className={styles.section} aria-label="Visitor count">
      <div className={styles.container}>
        <div className={styles.card}>
          <span className={styles.label}>Visitors so far</span>
          <strong className={styles.badge}>
            {count === null ? "Loading..." : count.toLocaleString("en-IN")}
          </strong>
        </div>
      </div>
    </section>
  );
}