import { useMemo, useState } from "react";

import { BLOG_CATEGORIES, BLOG_POSTS, type BlogCategory } from "@/content/site";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/useI18n";
import { Section } from "@/shared/ui/Section";
import styles from "./BlogPage.module.scss";

export function BlogPage() {
  const { t, lang } = useI18n();
  const [activeCategory, setActiveCategory] = useState<"all" | BlogCategory>("all");
  const filteredPosts = useMemo(
    () =>
      activeCategory === "all"
        ? BLOG_POSTS
        : BLOG_POSTS.filter((post) => post.category === activeCategory),
    [activeCategory],
  );

  usePageMeta({
    title: "Блог — Nataliia Dyka | IP Notes",
    description: "Короткі статті та новини зі сфери інтелектуальної власності.",
    ogTitle: "Journal — Nataliia Dyka",
    path: "/blog",
  });

  return (
    <Section eyebrow={t("blog.eyebrow")} title={t("blog.title")}>
      <div className={styles.tabs} role="tablist" aria-label={t("blog.title")}>
        {(["all", "cases"] as const).map((category) => (
          <button
            key={category}
            type="button"
            className={activeCategory === category ? styles.activeTab : styles.tab}
            onClick={() => setActiveCategory(category)}
          >
            {BLOG_CATEGORIES[category][lang]}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {filteredPosts.map((post, index) => (
          <article key={post.id} className={styles.article}>
            <div className={styles.number}>0{index + 1}</div>
            <div className={styles.articleBody}>
              <div className={styles.eyebrow}>{BLOG_CATEGORIES[post.category][lang]}</div>
              <h3>{post.title[lang]}</h3>
              <div className={styles.blocks}>
                {post.blocks[lang].map((block, blockIndex) =>
                  block.type === "heading" ? (
                    <h4 key={`${block.text}-${blockIndex}`}>{block.text}</h4>
                  ) : (
                    <p key={`${block.text}-${blockIndex}`}>{block.text}</p>
                  ),
                )}
              </div>
            </div>
          </article>
        ))}
        {filteredPosts.length === 0 && <p className={styles.empty}>{t("blog.empty")}</p>}
      </div>
    </Section>
  );
}
