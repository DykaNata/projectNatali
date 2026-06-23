import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { useI18n } from "@/shared/i18n/useI18n";
import styles from "./Header.module.scss";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandName}>Nataliia Dyka</span>
          <span className={styles.brandMeta}>
            IP&nbsp;Law
          </span>
        </Link>

        <nav className={styles.desktopNav}>
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={styles.navLink}
              activeProps={{ className: styles.activeLink }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.languageSwitch}>
            <button
              onClick={() => setLang("uk")}
              className={lang === "uk" ? styles.currentLanguage : styles.languageButton}
              aria-label="Українська"
            >
              UA
            </button>
            <span className={styles.languageDivider}>/</span>
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? styles.currentLanguage : styles.languageButton}
              aria-label="English"
            >
              EN
            </button>
          </div>
          <button
            className={styles.menuButton}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobilePanel}>
          <nav className={styles.mobileNav}>
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={styles.mobileLink}
                activeProps={{ className: styles.activeLink }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
