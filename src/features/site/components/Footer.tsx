import { Link } from "@tanstack/react-router";
import { ArrowUp, ArrowUpRight } from "lucide-react";

import { CONTACT } from "@/content/site";
import { useI18n } from "@/shared/i18n/useI18n";
import styles from "./Footer.module.scss";

export function Footer() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();
  const navigation = lang === "uk" ? "Навігація" : "Navigation";

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
    document.querySelector<HTMLElement>("header a")?.focus({ preventScroll: true });
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.statement}>
          <span>{lang === "uk" ? "Ваші ідеї заслуговують" : "Your ideas deserve"}</span>
          <em>{lang === "uk" ? "на успішне майбутнє." : "a successful future."}</em>
        </p>
        <div className={styles.main}>
          <div>
            <Link to="/" className={styles.brand}>Nataliia Dyka</Link>
            <p className={styles.tagline}>
              {lang === "uk" ? "Патентний повірений України № 526" : "Patent Attorney of Ukraine No. 526"}
            </p>
          </div>
          <div>
            <h2 className={styles.eyebrow}>{t("nav.contact")}</h2>
            <ul className={styles.list}>
              <li><a href={CONTACT.phone.href}>{CONTACT.phone.label}</a></li>
              <li><a className={styles.breakable} href={CONTACT.email.href}>{CONTACT.email.label}</a></li>
              <li><a href={CONTACT.telegram.href} target="_blank" rel="noopener noreferrer">Telegram <ArrowUpRight aria-hidden="true" /></a></li>
              <li><a href="https://www.instagram.com/nataliia.dyka/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight aria-hidden="true" /></a></li>
              <li className={styles.city}>{t("contact.city")}</li>
            </ul>
          </div>
          <nav aria-label={navigation}>
            <h2 className={styles.eyebrow}>{navigation}</h2>
            <ul className={styles.list}>
              <li><Link to="/about">{t("nav.about")}</Link></li>
              <li><Link to="/for-whom">{t("nav.forWhom")}</Link></li>
              <li><Link to="/services">{t("nav.services")}</Link></li>
              <li><Link to="/blog">{t("nav.blog")}</Link></li>
              <li><Link to="/contact">{t("nav.contact")}</Link></li>
            </ul>
            <button className={styles.toTop} type="button" onClick={scrollToTop}>
              {lang === "uk" ? "Нагору" : "Back to top"} <ArrowUp aria-hidden="true" />
            </button>
          </nav>
        </div>
        <div className={styles.bottom}>
          <span>© {year} Nataliia Dyka. {t("footer.rights")}</span>
          <Link to="/privacy">{t("footer.privacy")}</Link>
        </div>
      </div>
    </footer>
  );
}
