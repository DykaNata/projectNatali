import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/content/site";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/useI18n";
import styles from "./BlogPage.module.scss";

export function BlogPage() {
  const { t, lang } = useI18n();
  const intro = lang === "uk"
    ? "Зміни в законодавстві, цікаві кейси, практичні поради та професійний погляд на інтелектуальну власність."
    : "Legislative updates, interesting cases, practical advice and a professional perspective on intellectual property.";
  usePageMeta({ title: `${t("blog.title")} — Nataliia Dyka`, description: intro, ogTitle: `${t("blog.title")} — Nataliia Dyka`, path: "/blog" });
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{t("blog.title")}</h1>
        <p className={styles.intro}>{intro}<span>{lang === "uk" ? "Простими словами." : "In simple terms."}</span></p>
        <div className={styles.posts}>
          {BLOG_POSTS.map((post, index) => (
            <Link to="/blog/$postId" params={{ postId: post.id }} className={styles.post} key={post.id}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <h2 className={styles.postTitle}>{post.title[lang]}</h2>
              <div className={styles.preview}>
                <p>{post.id === "why-register-trademark"
                  ? (lang === "uk" ? "Як реєстрація торговельної марки допомагає захистити назву та логотип вашого бізнесу." : "How trademark registration helps protect your business name and logo.")
                  : post.blocks[lang].find(block => block.type === "paragraph")?.text}</p>
                <span className={styles.read}>{lang === "uk" ? "Читати статтю" : "Read article"} <ArrowUpRight aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <a className={styles.instagram} href="https://www.instagram.com/nataliia.dyka/" target="_blank" rel="noopener noreferrer">
        <span>{lang === "uk" ? "Більше цікавого" : "More to discover"}</span>
        <span className={styles.handle}>@nataliia.dyka <ArrowUpRight aria-hidden="true" /></span>
      </a>
    </section>
  );
}
