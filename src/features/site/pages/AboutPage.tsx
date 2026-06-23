import portraitImage from "@/assets/natalii-street.png";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { Section } from "@/shared/ui/Section";

export function AboutPage() {
  const { t } = useI18n();

  usePageMeta({
    title: "Про мене — Nataliia Dyka | Patent Attorney of Ukraine",
    description:
      "Наталі Дика — патентний повірений України № 526. Понад 10 років практики у сфері інтелектуальної власності.",
    ogTitle: "About — Nataliia Dyka",
    path: "/about",
  });

  return (
    <>
      <Section eyebrow={t("about.eyebrow")} title={t("about.title")}>
        <p className="-mt-6 mb-12 max-w-2xl text-sm text-muted-foreground">{t("about.role")}</p>
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
          <aside className="border-t border-foreground pt-6">
            <div className="eyebrow mb-5">{t("about.factsTitle")}</div>
            <ul className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex gap-4 border-b border-border pb-4 text-sm">
                  <span className="font-display text-muted-foreground/60">0{i}</span>
                  <span>{t(`about.fact${i}`)}</span>
                </li>
              ))}
            </ul>
            <img
              src={portraitImage}
              alt="Nataliia Dyka in Kyiv"
              loading="lazy"
              className="mt-10 aspect-[3/4] w-full object-cover grayscale"
            />
            <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Kyiv · 2026
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
