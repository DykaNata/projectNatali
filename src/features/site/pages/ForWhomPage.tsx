import { WHO_FOR_CONTENT } from "@/content/site";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/useI18n";
import { Section } from "@/shared/ui/Section";
import styles from "./ForWhomPage.module.scss";

export function ForWhomPage() {
  const { lang } = useI18n();
  const content = WHO_FOR_CONTENT[lang];

  usePageMeta({
    title: "Для кого — Nataliia Dyka | Patent Attorney of Ukraine",
    description:
      "Кому потрібен патентний повірений: стартапам, FMCG-виробникам, креативним індустріям, агенціям, юридичним фірмам та адвокатам.",
    ogTitle: "Who It Is For — Nataliia Dyka",
    path: "/for-whom",
  });

  return (
    <Section eyebrow={content.eyebrow} title={content.title}>
      <div className={styles.intro}>
        {content.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.groups}>
        {content.groups.map((group, index) => (
          <article key={group.title} className={styles.group}>
            <div className={styles.number}>0{index + 1}</div>
            <h3>{group.title}</h3>
            <div className={styles.body}>
              {group.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
