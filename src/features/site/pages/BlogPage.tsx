import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/useI18n";
import { Section } from "@/shared/ui/Section";
import styles from "./BlogPage.module.scss";

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
      <div className={styles.list}>
        {[1, 2, 3].map((i) => (
          <div key={i} className={styles.placeholder}>
            <div className={styles.dash}>—</div>
            <div className={styles.teaser}>
              <div className={styles.eyebrow}>{t("blog.soon")}</div>
              <h3>···</h3>
            </div>
            <div className={styles.year}>2026</div>
          </div>
        ))}
        <p className={styles.empty}>{t("blog.empty")}</p>
      </div>
    </Section>
  );
}
