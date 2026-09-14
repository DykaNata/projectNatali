import { ContactSection } from "../components/ContactSection";
import { ServicesSection } from "../components/ServicesSection";
import { AboutSection } from "../components/AboutSection";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Instagram } from "lucide-react";

import heroImage from "@/assets/hero-main.png";
import {
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
    title: lang === "uk" ? "Nataliia Dyka — Захищені ідеї — твоя перевага. | Патентний повірений України" : "Nataliia Dyka — Protected ideas — your advantage. | Patent Attorney of Ukraine",
    description: lang === "uk" ? "Комплексний супровід у сфері інтелектуальної власності для бізнесу та митців. Торговельні марки, авторське право, дизайни, договори ІВ." : "Comprehensive intellectual property support for businesses and creators. Trademarks, copyright, industrial designs and IP agreements.",
    ogTitle: lang === "uk" ? "Nataliia Dyka — Захищені ідеї — твоя перевага." : "Nataliia Dyka — Protected ideas — your advantage.",
    path: "/",
  });

  const uk = lang === "uk";
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
      <ServicesSection />

      {/* CONTACT */}
      <ContactSection />

      {/* BLOG AND INSTAGRAM */}
      <section id="journal" className={styles.journal}>
        <div className={styles.blogPanel}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrow}>{t("blog.eyebrow")}</span>
            <span className={styles.rule} aria-hidden="true" />
          </div>
          <h2 className={styles.journalTitle}>{t("blog.title")}</h2>
          <Link to="/blog" className={styles.blogButton}>
            {uk ? "Читати блог" : "Read the blog"}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <a href="https://www.instagram.com/nataliia.dyka/"
          target="_blank" rel="noopener noreferrer"
          className={styles.instagramPanel}
          aria-label={uk ? "Перейти в Instagram @nataliia.dyka" : "Visit Instagram @nataliia.dyka"}>
          <Instagram className={styles.instagramIcon} aria-hidden="true" />
          <h2 className={styles.instagramTitle}>
            {uk ? "Слідкуйте" : "Follow me"}<br />{uk ? "в Instagram" : "on Instagram"}
          </h2>
          <span className={styles.instagramHandle}>@nataliia.dyka</span>
          <span className={styles.instagramButton}>
            {uk ? "Перейти в Instagram" : "Visit Instagram"}
            <ArrowUpRight aria-hidden="true" />
          </span>
        </a>
      </section>
    </>
  );
}
