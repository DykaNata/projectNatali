import { CONTACT } from "@/content/site";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/useI18n";
import { Section } from "@/shared/ui/Section";
import styles from "./ContactPage.module.scss";

export function ContactPage() {
  const { t } = useI18n();

  usePageMeta({
    title: "Контакти — Nataliia Dyka | IP Law",
    description: "Зв'язатися з Наталі Дика, патентним повіреним України. Київ, Україна.",
    ogTitle: "Contact — Nataliia Dyka",
    path: "/contact",
  });

  const items = [
    { label: t("contact.phone"), value: CONTACT.phone.label, href: CONTACT.phone.href },
    { label: t("contact.email"), value: CONTACT.email.label, href: CONTACT.email.href },
    { label: t("contact.location"), value: t("contact.city") },
    { label: t("contact.hours"), value: t("contact.hoursValue") },
  ];

  return (
    <Section eyebrow={t("contact.eyebrow")} title={<span className={styles.accent}>{t("contact.title")}</span>}>
      <p className={styles.intro}>{t("contact.sub")}</p>
      <div className={styles.cards}>
        {items.map((it) => (
          <div key={it.label} className={styles.card}>
            <div className={styles.eyebrow}>{it.label}</div>
            {it.href ? (
              <a href={it.href} className={styles.value}>
                {it.value}
              </a>
            ) : (
              <div className={styles.value}>{it.value}</div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
