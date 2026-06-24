import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import heroImage from "@/assets/hero-main.png";
import streetImage from "@/assets/natalii-street.png";
import knuImage from "@/assets/knu-real.png";
import { CONTACT, SERVICE_KEYS } from "@/content/site";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/useI18n";
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

  const uk = lang === "uk";
  const servicesTitle = uk ? "Напрями практики" : "Areas of practice";
  const heroName = uk ? "Наталія Дика" : "Nataliia Dyka";
  const heroRole = uk
    ? "Патентний повірений · Юрист з інтелектуальної власності"
    : "Patent Attorney · Intellectual Property Lawyer";
  const heroCaption = uk ? "Київ · Патентний повірений України" : "Kyiv · Patent Attorney of Ukraine";

  const quickNav = [
    { to: "/about", key: "nav.about" },
    { to: "/services", key: "nav.services" },
    { to: "/contact", key: "nav.contact" },
    { to: "/blog", key: "nav.blog" },
  ] as const;

  return (
    <>
      {/* HERO */}
      <section id="top" className={styles.hero}>
        <div className={styles.heroText}>
          <div className={styles.eyebrowRow}>
            <span className={styles.rule} />
            <span className={styles.eyebrow}>{t("hero.eyebrow")}</span>
          </div>

          <h1 className={styles.heroTitle}>
            Own&nbsp;Your
            <br />
            <span>Ideas</span>
            <span className={styles.dot}>.</span>
          </h1>

          {uk && <p className={styles.heroTranslation}>{t("hero.titleUa")}</p>}

          <div className={styles.heroNameRow}>
            <span className={styles.heroNameRule} />
            <div>
              <div className={styles.heroName}>{heroName}</div>
              <div className={styles.heroRole}>{heroRole}</div>
            </div>
          </div>

          <p className={styles.heroIntro}>{t("hero.sub")}</p>

          <div className={styles.heroActions}>
            <Link to="/services" className={styles.primaryButton}>
              {t("hero.ctaServices")} <ArrowUpRight className={styles.buttonIcon} />
            </Link>
            <Link to="/contact" className={styles.secondaryButton}>
              {t("hero.ctaContact")} <ArrowUpRight className={styles.buttonIcon} />
            </Link>
          </div>
        </div>

        <div className={styles.heroMedia}>
          <span className={styles.heroFrame} aria-hidden />
          <div className={styles.heroImageWrap}>
            <img
              src={heroImage}
              alt={uk ? "Наталія Дика — патентний повірений України" : "Nataliia Dyka — Patent Attorney of Ukraine"}
            />
            <figcaption className={styles.heroCaption}>{heroCaption}</figcaption>
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <nav className={styles.quickNav}>
        <div className={styles.quickNavInner}>
          {quickNav.map((item) => (
            <Link key={item.to} to={item.to} className={styles.quickNavLink}>
              <span>{t(item.key)}</span>
              <ArrowUpRight className={styles.quickNavIcon} />
            </Link>
          ))}
        </div>
      </nav>

      {/* ABOUT */}
      <section id="about" className={styles.about}>
        <div className={styles.eyebrowRow}>
          <span className={styles.rule} />
          <span className={styles.eyebrow}>{t("home.about.eyebrow")}</span>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutPhotos}>
            <div className={styles.streetWrap}>
              <span className={styles.aboutFrame} aria-hidden />
              <figure className={styles.streetFigure}>
                <img
                  src={streetImage}
                  alt={uk ? "Наталія Дика на вулиці Києва" : "Nataliia Dyka in Kyiv"}
                  loading="lazy"
                  className={styles.streetPhoto}
                />
              </figure>
            </div>

            <figure className={styles.knuFigure}>
              <img
                src={knuImage}
                alt={uk ? "Червоний корпус КНУ імені Тараса Шевченка" : "Red building of Taras Shevchenko National University"}
                loading="lazy"
                className={styles.knuPhoto}
              />
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
            </div>
            <p className={styles.aboutSignature}>{t("home.about.p6")}</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <div className={styles.eyebrowRow}>
            <span className={styles.rule} />
            <span className={styles.eyebrow}>{t("services.eyebrow")}</span>
          </div>
          <h2 className={styles.servicesTitle}>{servicesTitle}</h2>

          <div className={styles.serviceList}>
            {SERVICE_KEYS.map((k, i) => (
              <Link key={k} to="/contact" className={styles.serviceRow}>
                <div className={styles.serviceNumber}>0{i + 1}</div>
                <div className={styles.serviceBody}>
                  <h3 className={styles.serviceName}>
                    {t(`svc.${k}.title`)}
                    <ArrowUpRight className={styles.serviceArrow} />
                  </h3>
                  <p>{t(`svc.${k}.desc`)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.contact}>
        <div className={styles.eyebrowRow}>
          <span className={styles.rule} />
          <span className={styles.eyebrow}>{t("contact.eyebrow")}</span>
        </div>
        <h2 className={styles.contactTitle}>{t("contact.title")}</h2>
        <p className={styles.contactSub}>{t("contact.sub")}</p>

        <div className={styles.contactCards}>
          <a href={CONTACT.phone.href} className={styles.contactCard}>
            <div className={styles.contactLabel}>{t("contact.phone")}</div>
            <div className={styles.contactValue}>{CONTACT.phone.label}</div>
          </a>
          <a href={CONTACT.email.href} className={styles.contactCard}>
            <div className={styles.contactLabel}>{t("contact.email")}</div>
            <div className={styles.contactValue}>{CONTACT.email.label}</div>
          </a>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>{t("contact.location")}</div>
            <div className={styles.contactValue}>{t("contact.city")}</div>
            <div className={styles.contactHours}>{t("contact.hoursValue")}</div>
          </div>
        </div>
      </section>

      {/* JOURNAL (light band) */}
      <section id="journal" className={styles.journal}>
        <div className={styles.journalInner}>
          <div className={styles.eyebrowRow}>
            <span className={styles.rule} />
            <span className={styles.eyebrow}>{t("blog.eyebrow")}</span>
          </div>
          <h2 className={styles.journalTitle}>{t("blog.title")}</h2>
          <p className={styles.journalIntro}>{t("blog.empty")}</p>
          <div className={styles.journalActions}>
            <Link to="/blog" className={styles.journalPrimary}>
              {t("blog.openBlog")} <ArrowUpRight className={styles.buttonIcon} />
            </Link>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.journalSecondary}
            >
              {t("blog.instagram")} <ArrowUpRight className={styles.buttonIcon} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
