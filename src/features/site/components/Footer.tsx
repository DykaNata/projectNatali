import { Link } from "@tanstack/react-router";

import { CONTACT } from "@/content/site";
import { useI18n } from "@/shared/i18n/useI18n";
import styles from "./Footer.module.scss";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div>
          <div className={styles.brand}>Nataliia Dyka</div>
          <p className={styles.tagline}>{t("footer.tagline")}</p>
        </div>
        <div className={styles.column}>
          <div className={styles.eyebrow}>{t("nav.contact")}</div>
          <ul className={styles.list}>
            <li><a href={CONTACT.phone.href}>{CONTACT.phone.label}</a></li>
            <li><a className={styles.breakable} href={CONTACT.email.href}>{CONTACT.email.label}</a></li>
            <li className={styles.muted}>{t("contact.city")}</li>
          </ul>
        </div>
        <div className={styles.column}>
          <div className={styles.eyebrow}>Navigation</div>
          <ul className={styles.list}>
            <li><Link to="/about">{t("nav.about")}</Link></li>
            <li><Link to="/services">{t("nav.services")}</Link></li>
            <li><Link to="/blog">{t("nav.blog")}</Link></li>
            <li><Link to="/contact">{t("nav.contact")}</Link></li>
            <li><Link to="/privacy">{t("footer.privacy")}</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomWrap}>
        <div className={styles.bottom}>
          <div>© {year} Nataliia Dyka. {t("footer.rights")}</div>
          <div className={styles.bottomLinks}>
            <Link to="/privacy">{t("footer.privacy")}</Link>
            <span>Patent Attorney of Ukraine № 526</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
