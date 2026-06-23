import { SERVICE_KEYS } from "@/content/site";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/useI18n";
import { Section } from "@/shared/ui/Section";
import styles from "./ServicesPage.module.scss";

export function ServicesPage() {
  const { t } = useI18n();

  usePageMeta({
    title: "Послуги — Nataliia Dyka | IP Law",
    description:
      "Консультації, торговельні марки, авторське право, промислові зразки, договори ІВ, міжнародна охорона, недобросовісна конкуренція та FMCG.",
    ogTitle: "Services — Nataliia Dyka",
    path: "/services",
  });

  return (
    <Section eyebrow={t("services.eyebrow")} title={t("services.title")}>
      <div className={styles.services}>
        {SERVICE_KEYS.map((k, i) => (
          <article key={k} className={styles.service}>
            <div className={styles.number}>0{i + 1}</div>
            <h3>{t(`svc.${k}.title`)}</h3>
            <p>{t(`svc.${k}.desc`)}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
