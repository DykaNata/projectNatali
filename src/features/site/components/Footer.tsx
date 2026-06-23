import { Link } from "@tanstack/react-router";

import { CONTACT } from "@/content/site";
import { useI18n } from "@/shared/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="font-display text-lg text-ink">Nataliia Dyka</div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{t("footer.tagline")}</p>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-3">{t("nav.contact")}</div>
          <ul className="space-y-1.5">
            <li><a href={CONTACT.phone.href} className="hover:text-foreground">{CONTACT.phone.label}</a></li>
            <li><a href={CONTACT.email.href} className="hover:text-foreground break-all">{CONTACT.email.label}</a></li>
            <li className="text-muted-foreground">{t("contact.city")}</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-3">Navigation</div>
          <ul className="space-y-1.5">
            <li><Link to="/about" className="hover:text-foreground">{t("nav.about")}</Link></li>
            <li><Link to="/services" className="hover:text-foreground">{t("nav.services")}</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">{t("nav.blog")}</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">{t("nav.contact")}</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">{t("footer.privacy")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {year} Nataliia Dyka. {t("footer.rights")}</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-foreground">{t("footer.privacy")}</Link>
            <span>Patent Attorney of Ukraine № 526</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
