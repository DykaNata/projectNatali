import { AboutSection } from "../components/AboutSection";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import heroImage from "@/assets/hero-main.png";
import {
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
  const [visibleBrands, setVisibleBrands] = useState(10);

  usePageMeta({
    title: "Nataliia Dyka — Захищені ідеї — твоя перевага. | Патентний повірений України",
    description:
      "Комплексний супровід у сфері інтелектуальної власності для бізнесу та митців. Торговельні марки, авторське право, дизайни, договори ІВ.",
    ogTitle: "Nataliia Dyka — Захищені ідеї — твоя перевага.",
    path: "/",
  });

  const uk = lang === "uk";
  const servicesTitle = uk ? "Напрями практики" : "Areas of practice";
  const heroName = uk ? "Наталія Дика" : "Nataliia Dyka";
  const heroRole = uk
    ? "Юрист з інтелектуальної власності · Патентний повірений"
    : "Intellectual Property Lawyer · Patent Attorney";
  const heroCaption = uk
    ? "Київ · Україна"
    : "Kyiv · Ukraine";
  const trademarks = TRADEMARKS_CONTENT[lang];
  const heroProof = uk
    ? [
        { value: "№ 526", label: "Патентний повірений України" },
        { value: "10+", label: "років практики у сфері ІВ" },
        { value: "Україна і світ", label: "Супровід українського та іноземного бізнесу" },
      ]
    : [
        { value: "No. 526", label: "Patent Attorney of Ukraine" },
        { value: "10+", label: "years in IP practice" },
        { value: "Ukraine & beyond", label: "Supporting Ukrainian and international businesses" },
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
          <h1 className={styles.heroTitle}>
            {uk ? "Захищені ідеї —" : "Protected ideas —"}
            <span>{uk ? "твоя перевага." : "your advantage."}</span>
          </h1>

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

        <figure className={styles.heroMedia}>
          <div className={styles.heroImageWrap}>
            <img
              src={heroImage}
              alt={uk ? "Портрет Наталії Дикої" : "Portrait of Nataliia Dyka"}
            />
          </div>
          <figcaption className={styles.heroCaption}>{heroCaption}</figcaption>
        </figure>
      </section>

      {/* QUICK NAV */}
      <nav className={styles.quickNav} aria-label={uk ? "Розділи сайту" : "Site sections"}>
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
      <AboutSection />

      {/* TRADEMARKS */}
      <section id="trademarks" className={styles.trademarks}>
        <div className={styles.trademarksInner}>
          <div className={styles.eyebrowRow}>
            <span className={styles.rule} />
            <span className={styles.eyebrow}>{trademarks.eyebrow}</span>
          </div>
          <div className={styles.trademarksHeader}>
            <h2>{uk ? <>Бренди, які довірили<span>свій захист</span></> : trademarks.title}</h2>
            <div>
              {trademarks.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {REGISTERED_TRADEMARKS.length > 0 ? (
          <>
            <ul id="brand-gallery" className={styles.logoGrid} aria-label={trademarks.eyebrow}>
              {REGISTERED_TRADEMARKS.slice(0, visibleBrands).map((logo) => (
                <li key={logo.src} className={styles.logoItem}>
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </li>
              ))}
            </ul>
            {REGISTERED_TRADEMARKS.length > 10 && (
              <div className={styles.brandControls}>
                <button type="button" className={styles.moreBrands}
                  aria-controls="brand-gallery"
                  aria-expanded={visibleBrands > 10}
                  onClick={() => {
                    const collapsing = visibleBrands > 10;
                    setVisibleBrands(collapsing ? 10 : REGISTERED_TRADEMARKS.length);
                    if (collapsing) {
                      document.getElementById("trademarks")?.scrollIntoView({
                        behavior: "instant",
                        block: "start",
                      });
                    }
                  }}>
                  {visibleBrands > 10
                    ? (uk ? "Показати менше" : "Show less")
                    : (uk ? "Показати більше" : "Show more")}
                  <ArrowUpRight aria-hidden="true" />
                </button>
              </div>
            )}
            <p className={styles.brandStatus} role="status">
              {uk ? `Показано ${Math.min(visibleBrands, REGISTERED_TRADEMARKS.length)} із ${REGISTERED_TRADEMARKS.length} брендів` : `Showing ${Math.min(visibleBrands, REGISTERED_TRADEMARKS.length)} of ${REGISTERED_TRADEMARKS.length} brands`}
            </p>
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
