import streetImage from "@/assets/nataliia-portrait-ivory.png";
import knuImage from "@/assets/knu-ivory.png";
import { ABOUT_CONTENT } from "@/content/site";
import { useI18n } from "@/shared/i18n/useI18n";
import styles from "./AboutSection.module.scss";

export function AboutSection({ standalone = false }: { standalone?: boolean }) {
  const { t, lang } = useI18n();
  const about = ABOUT_CONTENT[lang];
  const uk = lang === "uk";
  const Heading = standalone ? "h1" : "h2";
  return (
    <section id="about" className={styles.about}>
        <div className={styles.eyebrowRow}>
          <span className={styles.rule} />
          <span className={styles.eyebrow}>{t("home.about.eyebrow")}</span>
        </div>

        <Heading className={styles.aboutTitle}>{about.title}</Heading>
        <p className={styles.aboutRole}>{about.role}</p>

        <div className={styles.aboutContent}>
          <figure className={styles.streetFigure}>
            <img src={streetImage} alt={uk ? "Наталія Дика" : "Nataliia Dyka"}
              loading="lazy" className={styles.streetPhoto} />
          </figure>
          <div className={styles.aboutParagraphs}>
            {about.paragraphs.slice(0, 3).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className={styles.aboutContinuation}>
          <div className={styles.aboutParagraphs}>
            {about.paragraphs.slice(3).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className={styles.knuFigure}>
            <img src={knuImage}
              alt={uk ? "Червоний корпус КНУ імені Тараса Шевченка" : "Red building of Taras Shevchenko National University"}
              loading="lazy" className={styles.knuPhoto} />
            <figcaption className={styles.caption}>{t("home.about.knuCaption")}</figcaption>
          </figure>
        </div>
        <figure className={styles.aboutQuotePanel}>
          <blockquote className={styles.aboutQuote}>
            {about.quote.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </blockquote>
          <figcaption className={styles.aboutSignature}>{about.signature}</figcaption>
        </figure>
      </section>
  );
}
