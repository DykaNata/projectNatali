import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import heroImage from "@/assets/hero-main.png";
import streetImage from "@/assets/natalii-street.png";
import knuImage from "@/assets/knu-real.png";
import { SERVICE_KEYS } from "@/content/site";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { Section } from "@/shared/ui/Section";

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
      {/* Hero: text left, photo right, text starts at head level */}
      <section className="container-page pt-10 pb-12 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-0">
          {/* Left: text sits to the left of the photo, aligned with the head */}
          <div className="relative z-10 lg:col-span-6 lg:col-start-1 lg:pr-6">
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              {t("hero.name")}
            </h1>

            <div className="mt-4 flex items-center gap-4 md:mt-5">
              <span className="rule" />
              <span className="eyebrow">{t("hero.eyebrow")}</span>
            </div>

            <h2 className="mt-10 font-display text-[2.75rem] leading-[1.02] tracking-tight text-ink md:mt-14 md:text-6xl">
              Own Your<br />
              <span className="italic text-accent-red">Ideas</span>.
            </h2>

            {lang === "uk" && (
              <p className="mt-4 font-display text-xl italic text-muted-foreground md:text-2xl">
                Стань власником своїх ідей
              </p>
            )}

            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
              {t("hero.sub")}
            </p>
          </div>

          {/* Right: original photo in top-right; subtle left & bottom edge fade */}
          <div className="relative lg:col-span-7 lg:col-start-6 lg:row-start-1">
            <img
              src={heroImage}
              alt={lang === "uk" ? "Наталія Дика — патентний повірений України" : "Nataliia Dyka — Patent Attorney of Ukraine"}
              width={1280}
              height={838}
              className="w-full object-cover"
            />
            {/* Subtle left edge fade */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background/50 to-transparent"
              aria-hidden
            />
            {/* Subtle bottom edge fade */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-b from-transparent to-background/50"
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* Full-width tabs — more pronounced but restrained */}
      <nav className="border-y border-ink/15 bg-secondary/40">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-ink/10">
            {[
              { to: "/about", key: "nav.about" },
              { to: "/services", key: "nav.services" },
              { to: "/contact", key: "nav.contact" },
              { to: "/blog", key: "nav.blog" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group relative flex items-center justify-between gap-2 px-5 py-6 text-[0.78rem] uppercase tracking-[0.22em] text-ink/85 transition-colors hover:text-ink"
              >
                <span className="font-medium">{t(item.key)}</span>
                <ArrowUpRight className="h-4 w-4 opacity-60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-x-5 bottom-3 h-px origin-left scale-x-0 bg-accent-red transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* About section — photos LEFT (right-edge blur), text RIGHT */}
      <section id="about" className="container-page py-20 md:py-28">
        <div className="mb-12 flex items-center gap-3">
          <span className="rule" />
          <span className="eyebrow">{t("home.about.eyebrow")}</span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column: photos */}
          <div className="space-y-8 lg:col-span-5 lg:order-1">
            <figure className="relative">
              <img
                src={streetImage}
                alt={lang === "uk" ? "Наталія Дика на вулиці Києва" : "Nataliia Dyka in Kyiv"}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover grayscale"
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background via-background/60 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-b from-transparent to-background"
                aria-hidden
              />
            </figure>

            <figure className="relative">
              <img
                src={knuImage}
                alt={lang === "uk" ? "Червоний корпус КНУ імені Тараса Шевченка" : "Red building of Taras Shevchenko National University"}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover brightness-110 contrast-90 saturate-[0.85]"
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background via-background/60 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-background via-background/50 to-transparent"
                aria-hidden
              />
              <figcaption className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {t("home.about.knuCaption")}
              </figcaption>
            </figure>
          </div>

          {/* Right column: text */}
          <div className="lg:col-span-7 lg:order-2">
            <h2 className="font-display text-3xl leading-tight text-accent-red md:text-5xl">
              {t("home.about.title")}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
              <p>{t("home.about.p1")}</p>
              <p>{t("home.about.p2")}</p>
              <p>{t("home.about.p3")}</p>
              <p>{t("home.about.p4")}</p>
              <p>{t("home.about.p5")}</p>
              <p className="font-display text-xl italic text-accent-red md:text-2xl">
                {t("home.about.p6")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section eyebrow={t("services.eyebrow")} title={t("services.title")}>
        <div className="grid grid-cols-1 border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_KEYS.map((k, i) => (
            <div
              key={k}
              className="group relative border-b border-border p-8 transition-colors hover:bg-secondary/50 md:border-r md:p-10 lg:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:md:[&:nth-child(2n)]:border-r"
            >
              <div className="mb-6 font-display text-2xl text-muted-foreground/60">
                0{i + 1}
              </div>
              <h3 className="text-xl text-ink md:text-2xl">{t(`svc.${k}.title`)}</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                {t(`svc.${k}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section eyebrow={t("contact.eyebrow")} title={<span className="text-accent-red">{t("contact.title")}</span>}>
        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          <a
            href="tel:+380954281528"
            className="bg-background p-8 transition-colors hover:bg-secondary/50 md:p-10"
          >
            <div className="eyebrow mb-3">{t("contact.phone")}</div>
            <div className="font-display text-xl text-ink md:text-2xl">+380 95 428 15 28</div>
          </a>
          <a
            href="mailto:Nataliia.dikaya@gmail.com"
            className="bg-background p-8 transition-colors hover:bg-secondary/50 md:p-10"
          >
            <div className="eyebrow mb-3">{t("contact.email")}</div>
            <div className="font-display text-xl text-ink md:text-2xl whitespace-nowrap">
              Nataliia.dikaya@gmail.com
            </div>
          </a>
          <div className="bg-background p-8 md:p-10">
            <div className="eyebrow mb-3">{t("contact.location")}</div>
            <div className="font-display text-xl text-ink md:text-2xl">{t("contact.city")}</div>
          </div>
        </div>
      </Section>

      {/* Blog teaser */}
      <Section eyebrow={t("blog.eyebrow")} title={<span className="text-accent-red">{t("blog.title")}</span>}>
        <p className="-mt-6 mb-10 max-w-2xl text-base text-muted-foreground md:text-lg">
          {t("blog.empty")}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm text-background hover:opacity-90"
          >
            {t("blog.openBlog")} <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm text-foreground hover:bg-secondary"
          >
            {t("blog.instagram")} <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Section>
    </>
  );
}
