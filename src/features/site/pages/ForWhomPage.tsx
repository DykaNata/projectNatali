import { WHO_FOR_CONTENT } from "@/content/site";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/useI18n";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import styles from "./ForWhomPage.module.scss";

export function ForWhomPage() {
  const { lang } = useI18n();
  const content = WHO_FOR_CONTENT[lang];

  usePageMeta({
    title: lang === "uk" ? "Для кого — Nataliia Dyka | Patent Attorney of Ukraine" : "Who It Is For — Nataliia Dyka | Patent Attorney of Ukraine",
    description: lang === "uk" ? "Кому потрібен патентний повірений: стартапам, FMCG-виробникам, креативним індустріям, агенціям, юридичним фірмам та адвокатам." : "Intellectual property support for startups, manufacturers, creative industries, agencies, law firms and attorneys.",
    ogTitle: "Who It Is For — Nataliia Dyka",
    path: "/for-whom",
  });

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <div className={styles.eyebrow}><span aria-hidden="true" />{content.eyebrow}</div>
        <h1 className={styles.title}>
          <span>{lang === "uk" ? "Кому потрібен" : "Who needs"}</span>
          <em>{lang === "uk" ? "патентний повірений?" : "a patent attorney?"}</em>
        </h1>
      <div className={styles.intro}>
        {content.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      </div>
      <div className={styles.groups}>
        {content.groups.map((group, index) => (
          <article key={group.title} className={styles.group}>
            <div className={styles.number}>0{index + 1}</div>
            <h2>{group.title}</h2>
            <div className={styles.body}>
              {group.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className={styles.actions}>
        <Link to="/contact" className={styles.cta}>
          {lang === "uk" ? "Обговорити ваше питання" : "Discuss your matter"}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
