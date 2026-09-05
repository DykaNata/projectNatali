import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";

import heroImage from "@/assets/hero-main.png";
import streetImage from "@/assets/natalii-street.png";
import knuImage from "@/assets/knu-real.png";
import {
  ABOUT_CONTENT,
  CONTACT,
  SERVICE_KEYS,
  TRADEMARKS_CONTENT,
} from "@/content/site";
import { REGISTERED_TRADEMARKS } from "@/content/trademarks";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/useI18n";
import styles from "./HomePage.module.scss";

export function HomePage() {
  const { t, lang } = useI18n();
  const [logosPaused, setLogosPaused] = useState(false);

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
    ? "Юрист з інтелектуальної власності · Патентний повірений"
    : "Intellectual Property Lawyer · Patent Attorney";
  const heroCaption = uk
    ? "Київ · Інтелектуальна власність"
    : "Kyiv · Intellectual Property";
  const about = ABOUT_CONTENT[lang];
  const trademarks = TRADEMARKS_CONTENT[lang];
  const logoMotionLabel = uk
    ? logosPaused
      ? "Відновити рух логотипів"
      : "Зупинити рух логотипів"
    : logosPaused
      ? "Resume logo motion"
      : "Pause logo motion";

  const heroProof = uk
    ? [
        { value: "№ 526", label: "Патентний повірений України" },
        { value: "10+", label: "років практики у сфері ІВ" },
        { value: "UA / INTL", label: "реєстрація та захист брендів" },
      ]
    : [
        { value: "No. 526", label: "Patent Attorney of Ukraine" },
        { value: "10+", label: "years in IP practice" },
        { value: "UA / INTL", label: "brand registration and protection" },
      ];

  const quickNav = [
    { to: "/about", key: "nav.about" },
    { to: "/for-whom", key: "nav.forWhom" },
    { to: "/services", key: "nav.services" },
    { to: "/blog", key: "nav.blog" },
    { to: "/contact", key: "nav.contact" },
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
              {t("hero.ctaServices")}{" "}
              <ArrowUpRight className={styles.buttonIcon} aria-hidden="true" />
            </Link>
            <Link to="/contact" className={styles.secondaryButton}>
              {t("hero.ctaContact")}{" "}
              <ArrowUpRight className={styles.buttonIcon} aria-hidden="true" />
            </Link>
          </div>

          <ul
            className={styles.heroProofList}
            aria-label={
              uk ? "Професійні підтвердження" : "Professional proof points"
            }
          >
            {heroProof.map((item) => (
              <li key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.heroMedia}>
          <span className={styles.heroFrame} aria-hidden />
          <div className={styles.heroImageWrap}>
            <img
              src={heroImage}
              alt={
                uk
                  ? "Портрет Наталії Дикої"
                  : "Portrait of Nataliia Dyka"
              }
            />
            <figcaption className={styles.heroCaption}>
              {heroCaption}
            </figcaption>
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <nav className={styles.quickNav}>
        <div className={styles.quickNavInner}>
          {quickNav.map((item) => (
            <Link key={item.to} to={item.to} className={styles.quickNavLink}>
              <span>{t(item.key)}</span>
              <ArrowUpRight
                className={styles.quickNavIcon}
                aria-hidden="true"
              />
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
                  alt={
                    uk
                      ? "Наталія Дика на вулиці Києва"
                      : "Nataliia Dyka in Kyiv"
                  }
                  loading="lazy"
                  className={styles.streetPhoto}
                />
              </figure>
            </div>

            <figure className={styles.knuFigure}>
              <img
                src={knuImage}
                alt={
                  uk
                    ? "Червоний корпус КНУ імені Тараса Шевченка"
                    : "Red building of Taras Shevchenko National University"
                }
                loading="lazy"
                className={styles.knuPhoto}
              />
              <figcaption className={styles.caption}>
                {t("home.about.knuCaption")}
              </figcaption>
            </figure>
          </div>

          <div className={styles.aboutText}>
            <h2>{about.title}</h2>
            <p className={styles.aboutRole}>{about.role}</p>
            <div className={styles.aboutParagraphs}>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className={styles.aboutQuote}>
              {about.quote.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <cite>{about.signature}</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* TRADEMARKS */}
      <section id="trademarks" className={styles.trademarks}>
        <div className={styles.trademarksInner}>
          <div className={styles.eyebrowRow}>
            <span className={styles.rule} />
            <span className={styles.eyebrow}>{trademarks.eyebrow}</span>
          </div>
          <div className={styles.trademarksHeader}>
            <h2>{trademarks.title}</h2>
            <div>
              {trademarks.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {REGISTERED_TRADEMARKS.length > 0 ? (
          <>
            <div className={styles.marqueeControls}>
              <button
                type="button"
                className={styles.marqueeButton}
                onClick={() => setLogosPaused((value) => !value)}
                aria-pressed={logosPaused}
              >
                {logosPaused ? (
                  <Play className={styles.marqueeIcon} aria-hidden="true" />
                ) : (
                  <Pause className={styles.marqueeIcon} aria-hidden="true" />
                )}
                {logoMotionLabel}
              </button>
            </div>
            <div
              className={[
                styles.logoMarquee,
                logosPaused ? styles.logoMarqueePaused : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-label={trademarks.title}
            >
              {[0, 1].map((track) => (
                <div
                  key={track}
                  className={styles.logoTrack}
                  aria-hidden={track === 1}
                >
                  {REGISTERED_TRADEMARKS.map((logo) => (
                    <div
                      key={`${track}-${logo.src}`}
                      className={styles.logoItem}
                    >
                      <img src={logo.src} alt={logo.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className={styles.trademarkEmpty}>{trademarks.empty}</p>
        )}
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
                    <ArrowUpRight
                      className={styles.serviceArrow}
                      aria-hidden="true"
                    />
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
          <div className={styles.journalActions}>
            <Link to="/blog" className={styles.journalPrimary}>
              {t("blog.openBlog")}{" "}
              <ArrowUpRight className={styles.buttonIcon} aria-hidden="true" />
            </Link>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.journalSecondary}
            >
              {t("blog.instagram")}{" "}
              <ArrowUpRight className={styles.buttonIcon} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
