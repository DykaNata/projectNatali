import portraitImage from "@/assets/natalii-street.png";
import { ABOUT_CONTENT } from "@/content/site";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/useI18n";
import { Section } from "@/shared/ui/Section";
import styles from "./AboutPage.module.scss";

export function AboutPage() {
  const { t, lang } = useI18n();
  const about = ABOUT_CONTENT[lang];

  usePageMeta({
    title: "Про мене — Nataliia Dyka | Patent Attorney of Ukraine",
    description:
      "Наталі Дика — патентний повірений України № 526. Понад 10 років практики у сфері інтелектуальної власності.",
    ogTitle: "About — Nataliia Dyka",
    path: "/about",
  });

  return (
    <Section eyebrow={t("about.eyebrow")} title={about.title}>
      <p className={styles.role}>{about.role}</p>
      <div className={styles.content}>
        <div className={styles.copy}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <blockquote className={styles.quote}>
            {about.quote.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <cite>{about.signature}</cite>
          </blockquote>
        </div>

        <aside className={styles.aside}>
          <div className={styles.eyebrow}>{t("about.factsTitle")}</div>
          <ul className={styles.facts}>
            {[1, 2, 3, 4].map((i) => (
              <li key={i}>
                <span>0{i}</span>
                <span>{t(`about.fact${i}`)}</span>
              </li>
            ))}
          </ul>
          <img src={portraitImage} alt="Nataliia Dyka in Kyiv" loading="lazy" className={styles.photo} />
          <p className={styles.caption}>Kyiv · 2026</p>
        </aside>
      </div>
    </Section>
  );
}
