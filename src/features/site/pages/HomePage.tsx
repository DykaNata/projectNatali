import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import heroImage from "@/assets/hero-main.png";
import streetImage from "@/assets/natalii-street.png";
import knuImage from "@/assets/knu-real.png";
import { CONTACT, SERVICE_KEYS } from "@/content/site";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/useI18n";
import { Section } from "@/shared/ui/Section";
import styles from "./HomePage.module.scss";

export function HomePage() {
  const { t, lang } = useI18n();

  usePageMeta({
    title: "Nataliia Dyka — Own Your Ideas | Патентний повірений України",
    description:
      "Комплексний супровід у сфері інтелектуальної власності для бізнесу та митців. Торговельні марки, авторське право, дизайни, договори ІВ.",
    ogTitle: "Nataliia Dyka — Own Your Ideas",
    path: "/",
  });

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroName}>{t("hero.name")}</h1>

          <div className={styles.eyebrowRow}>
            <span className={styles.rule} />
            <span className={styles.eyebrow}>{t("hero.eyebrow")}</span>
          </div>

          <h2 className={styles.heroTitle}>
            Own Your
            <br />
            <span>Ideas</span>.
          </h2>

          {lang === "uk" && <p className={styles.heroTranslation}>Стань власником своїх ідей</p>}

          <p className={styles.heroIntro}>{t("hero.sub")}</p>
        </div>

        <div className={styles.heroMedia}>
          <img
            src={heroImage}
            alt={lang === "uk" ? "Наталія Дика — патентний повірений України" : "Nataliia Dyka — Patent Attorney of Ukraine"}
          />
          <span className={styles.heroFadeLeft} aria-hidden />
          <span className={styles.heroFadeBottom} aria-hidden />
        </div>
      </section>

      <nav className={styles.quickNav}>
        <div className={styles.quickNavInner}>
          {[
            { to: "/about", key: "nav.about" },
            { to: "/services", key: "nav.services" },
            { to: "/contact", key: "nav.contact" },
            { to: "/blog", key: "nav.blog" },
          ].map((item) => (
            <Link key={item.to} to={item.to} className={styles.quickNavLink}>
              <span>{t(item.key)}</span>
              <ArrowUpRight className={styles.quickNavIcon} />
              <span className={styles.quickNavUnderline} />
            </Link>
          ))}
        </div>
      </nav>

      <section id="about" className={styles.about}>
        <div className={styles.eyebrowRow}>
          <span className={styles.rule} />
          <span className={styles.eyebrow}>{t("home.about.eyebrow")}</span>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutPhotos}>
            <figure className={styles.photoFrame}>
              <img
                src={streetImage}
                alt={lang === "uk" ? "Наталія Дика на вулиці Києва" : "Nataliia Dyka in Kyiv"}
                loading="lazy"
                className={styles.streetPhoto}
              />
              <span className={styles.photoFadeRight} aria-hidden />
              <span className={styles.photoFadeBottom} aria-hidden />
            </figure>

            <figure className={styles.photoFrame}>
              <img
                src={knuImage}
                alt={lang === "uk" ? "Червоний корпус КНУ імені Тараса Шевченка" : "Red building of Taras Shevchenko National University"}
                loading="lazy"
                className={styles.knuPhoto}
              />
              <span className={styles.photoFadeRight} aria-hidden />
              <span className={styles.photoFadeTop} aria-hidden />
              <figcaption className={styles.caption}>{t("home.about.knuCaption")}</figcaption>
            </figure>
          </div>

          <div className={styles.aboutText}>
            <h2>{t("home.about.title")}</h2>
            <div className={styles.aboutParagraphs}>
              <p>{t("home.about.p1")}</p>
              <p>{t("home.about.p2")}</p>
              <p>{t("home.about.p3")}</p>
              <p>{t("home.about.p4")}</p>
              <p>{t("home.about.p5")}</p>
              <p className={styles.aboutSignature}>{t("home.about.p6")}</p>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow={t("services.eyebrow")} title={t("services.title")}>
        <div className={styles.serviceCards}>
          {SERVICE_KEYS.map((k, i) => (
            <article key={k} className={styles.serviceCard}>
              <div className={styles.serviceNumber}>0{i + 1}</div>
              <h3>{t(`svc.${k}.title`)}</h3>
              <p>{t(`svc.${k}.desc`)}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow={t("contact.eyebrow")} title={<span className={styles.accentText}>{t("contact.title")}</span>}>
        <div className={styles.contactCards}>
          <a href={CONTACT.phone.href} className={styles.contactCard}>
            <div className={styles.eyebrow}>{t("contact.phone")}</div>
            <div className={styles.contactValue}>{CONTACT.phone.label}</div>
          </a>
          <a href={CONTACT.email.href} className={styles.contactCard}>
            <div className={styles.eyebrow}>{t("contact.email")}</div>
            <div className={styles.contactValue}>{CONTACT.email.label}</div>
          </a>
          <div className={styles.contactCard}>
            <div className={styles.eyebrow}>{t("contact.location")}</div>
            <div className={styles.contactValue}>{t("contact.city")}</div>
          </div>
        </div>
      </Section>

      <Section eyebrow={t("blog.eyebrow")} title={<span className={styles.accentText}>{t("blog.title")}</span>}>
        <p className={styles.blogIntro}>{t("blog.empty")}</p>
        <div className={styles.blogActions}>
          <Link to="/blog" className={styles.primaryButton}>
            {t("blog.openBlog")} <ArrowUpRight className={styles.buttonIcon} />
          </Link>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
            {t("blog.instagram")} <ArrowUpRight className={styles.buttonIcon} />
          </a>
        </div>
      </Section>
    </>
  );
}
