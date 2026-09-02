import Link from "next/link";
import { siteConfig } from "@/lib/config";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.brand}>ONE JABALPUR</h3>
            <p>Discover &bull; Explore &bull; Experience Jabalpur.</p>
          </div>
          <div>
            <h3>Explore</h3>
            {siteConfig.footer.explore.map((item) => (
              <Link key={item.label} href={item.href}>{item.label}</Link>
            ))}
          </div>
          <div>
            <h3>Local</h3>
            {siteConfig.footer.local.map((item) => (
              <Link key={item.label} href={item.href}>{item.label}</Link>
            ))}
          </div>
          <div>
            <h3>One Jabalpur</h3>
            {siteConfig.footer.about.map((item) => (
              <Link key={item.label} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          &copy; {new Date().getFullYear()} One Jabalpur. Built for Jabalpur.
        </div>
      </div>
    </footer>
  );
}
