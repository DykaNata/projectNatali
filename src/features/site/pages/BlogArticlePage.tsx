import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/content/site";
import { NotFoundPage } from "@/app/NotFoundPage";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/useI18n";
import styles from "./BlogPage.module.scss";

export function BlogArticlePage() {
  const { postId } = useParams({ from: "/blog/$postId" });
  const { lang } = useI18n();
  const post = BLOG_POSTS.find(item => item.id === postId);
  const next = BLOG_POSTS.find(item => item.id !== postId);
  usePageMeta({
    title: `${post?.title[lang] ?? "Блог"} — Nataliia Dyka`,
    ogTitle: post?.title[lang] ?? "Блог",
    description: post?.blocks[lang].find(block => block.type === "paragraph")?.text ?? "",
    path: `/blog/${postId}`,
  });
  if (!post) return <NotFoundPage />;
  return (
    <article className={styles.article}>
      <Link to="/blog" className={styles.back}><ArrowLeft aria-hidden="true" />{lang === "uk" ? "Усі статті" : "All articles"}</Link>
      <h1 className={styles.articleTitle}>{post.title[lang]}</h1>
      <div className={styles.blocks}>
        {post.blocks[lang].map((block, index) => block.type === "heading"
          ? <h2 key={index}>{block.text}</h2>
          : <p key={index}>{block.text}</p>)}
      </div>
      <div className={styles.articleActions}>
        {next && <Link className={styles.next} to="/blog/$postId" params={{ postId: next.id }}>{next.title[lang]} <ArrowUpRight aria-hidden="true" /></Link>}
        <Link className={styles.cta} to="/contact">{lang === "uk" ? "Обговорити ваше питання" : "Discuss your matter"}<ArrowUpRight aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
