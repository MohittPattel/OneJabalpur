import Link from "next/link";
import { siteConfig } from "@/lib/config";
import styles from "./Header.module.css";

interface NavChild {
  label: string;
  href: string;
  children?: NavChild[];
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          ONE <span>JABALPUR</span>
        </Link>
        <nav className={styles.nav}>
          {(siteConfig.nav as NavItem[]).map((item) =>
            item.children ? (
              <div key={item.href} className={styles.dropdown}>
                <Link href={item.href} className={styles.dropdownTrigger}>
                  {item.label}
                  <span className={styles.chevron}>▾</span>
                </Link>
                <div className={styles.dropdownMenu}>
                  {item.children.map((child) =>
                    child.children ? (
                      <div key={child.href} className={styles.submenu}>
                        <Link href={child.href} className={styles.submenuTrigger}>
                          {child.label}
                          <span className={styles.chevronRight}>›</span>
                        </Link>
                        <div className={styles.submenuPanel}>
                          {child.children.map((subChild) => (
                            <Link key={subChild.href} href={subChild.href}>
                              {subChild.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link key={child.href} href={child.href}>
                        {child.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
