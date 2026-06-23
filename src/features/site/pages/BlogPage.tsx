import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { Section } from "@/shared/ui/Section";

export function BlogPage() {
  const { t } = useI18n();

  usePageMeta({
    title: "Блог — Nataliia Dyka | IP Notes",
    description: "Короткі статті та новини зі сфери інтелектуальної власності.",
    ogTitle: "Journal — Nataliia Dyka",
    path: "/blog",
  });

  return (
    <Section eyebrow={t("blog.eyebrow")} title={t("blog.title")}>
      <div className="border-t border-foreground">
        {[1, 2, 3].map((i) => (
          <div key={i} className="grid grid-cols-[5rem_1fr_auto] items-baseline gap-6 border-b border-border py-8 opacity-60">
            <div className="font-display text-xl text-muted-foreground">—</div>
            <div>
              <div className="eyebrow mb-2">{t("blog.soon")}</div>
              <h3 className="font-display text-xl text-ink md:text-2xl">···</h3>
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">2026</div>
          </div>
        ))}
        <p className="mt-10 max-w-xl text-sm text-muted-foreground">{t("blog.empty")}</p>
      </div>
    </Section>
  );
}
