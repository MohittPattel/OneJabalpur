import Link from "next/link";
import styles from "./ComingSoon.module.css";

interface ComingSoonProps {
  title?: string;
  message?: string;
  icon?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  message = "We're working on something amazing. Check back soon!",
  icon = "🚀",
}: ComingSoonProps) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>
      <div className={styles.actions}>
        <Link href="/" className={styles.homeButton}>
          ← Back to Home
        </Link>
      </div>
      <div className={styles.decoration}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  );
}
