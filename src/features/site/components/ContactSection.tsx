import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/content/site";
import { useI18n } from "@/shared/i18n/useI18n";
import { TelegramContact } from "./TelegramContact";
import styles from "./ContactSection.module.scss";

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  const { t } = useI18n();
  const Heading = standalone ? "h1" : "h2";
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.eyebrow}><span aria-hidden="true" />{t("contact.eyebrow")}</div>
      <Heading className={styles.title}>{t("contact.title")}</Heading>
      <p className={styles.intro}>{t("contact.sub")}</p>
      <div className={styles.contacts}>
        {[CONTACT.phone, CONTACT.email].map((item, index) => (
          <a key={item.href} href={item.href} className={styles.row}>
            <span className={styles.label}>{index === 0 ? t("contact.phone") : t("contact.email")}</span>
            <span className={styles.value}>{item.label}</span>
            <ArrowUpRight className={styles.arrow} aria-hidden="true" />
          </a>
        ))}
      </div>
      <TelegramContact />
      <dl className={styles.details}>
        <div><dt>{t("contact.location")}</dt><dd>{t("contact.city")}</dd></div>
        <div><dt>{t("contact.hours")}</dt><dd>{t("contact.hoursValue")}</dd></div>
      </dl>
    </section>
  );
}
