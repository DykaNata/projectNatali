import { SERVICE_KEYS } from "@/content/site";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { Section } from "@/shared/ui/Section";

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
      <div className="border-t border-foreground">
        {SERVICE_KEYS.map((k, i) => (
          <article
            key={k}
            className="group grid grid-cols-[3rem_1fr] gap-6 border-b border-border py-10 transition-colors hover:bg-secondary/40 md:grid-cols-[5rem_1fr_1fr] md:gap-12 md:py-14"
          >
            <div className="font-display text-2xl text-muted-foreground/60 md:text-3xl">
              0{i + 1}
            </div>
            <h3 className="text-2xl text-ink md:text-3xl">{t(`svc.${k}.title`)}</h3>
            <p className="col-start-2 max-w-xl text-base leading-relaxed text-foreground/80 md:col-start-3">
              {t(`svc.${k}.desc`)}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
