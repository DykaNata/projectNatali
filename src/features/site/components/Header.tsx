import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { useI18n } from "@/shared/i18n/useI18n";
import styles from "./Header.module.scss";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const mobileNavId = "site-mobile-nav";

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/for-whom", label: t("nav.forWhom") },
    { to: "/services", label: t("nav.services") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandName}>Nataliia Dyka</span>
          <span className={styles.brandMeta}>IP&nbsp;Law</span>
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
              type="button"
              onClick={() => setLang("uk")}
              className={
                lang === "uk" ? styles.currentLanguage : styles.languageButton
              }
              aria-label="Українська"
              aria-pressed={lang === "uk"}
            >
              UA
            </button>
            <span className={styles.languageDivider}>/</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={
                lang === "en" ? styles.currentLanguage : styles.languageButton
              }
              aria-label="English"
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls={mobileNavId}
            aria-expanded={open}
          >
            {open ? (
              <X className={styles.menuIcon} aria-hidden="true" />
            ) : (
              <Menu className={styles.menuIcon} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id={mobileNavId} className={styles.mobilePanel}>
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
