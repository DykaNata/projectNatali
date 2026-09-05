import { ArrowUpRight, BookOpenText } from "lucide-react";
import { useMemo, useRef, useState } from "react";

import { BLOG_CATEGORIES, BLOG_POSTS, type BlogCategory } from "@/content/site";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/useI18n";
import { Section } from "@/shared/ui/Section";
import styles from "./BlogPage.module.scss";

export function BlogPage() {
  const { t, lang } = useI18n();
  const [activeCategory, setActiveCategory] = useState<"all" | BlogCategory>("all");
  const [selectedPostId, setSelectedPostId] = useState(BLOG_POSTS[0]?.id ?? "");
  const articleRef = useRef<HTMLElement | null>(null);
  const filteredPosts = useMemo(
    () =>
      activeCategory === "all"
        ? BLOG_POSTS
        : BLOG_POSTS.filter((post) => post.category === activeCategory),
    [activeCategory],
  );
  const selectedPost =
    filteredPosts.find((post) => post.id === selectedPostId) ?? filteredPosts[0];

  const openPost = (postId: string) => {
    setSelectedPostId(postId);
    window.requestAnimationFrame(() => {
      articleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const selectCategory = (category: "all" | BlogCategory) => {
    setActiveCategory(category);
    const nextPost =
      category === "all"
        ? BLOG_POSTS[0]
        : BLOG_POSTS.find((post) => post.category === category);
    setSelectedPostId(nextPost?.id ?? "");
  };

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
            onClick={() => selectCategory(category)}
          >
            {BLOG_CATEGORIES[category][lang]}
          </button>
        ))}
      </div>

      <div className={styles.articlePicker} aria-label={t("blog.choose")}>
        {filteredPosts.map((post, index) => (
          <button
            key={post.id}
            type="button"
            className={
              selectedPost?.id === post.id ? styles.activeArticleButton : styles.articleButton
            }
            onClick={() => openPost(post.id)}
            aria-pressed={selectedPost?.id === post.id}
          >
            <span className={styles.articleIcon} aria-hidden="true">
              <BookOpenText />
            </span>
            <span className={styles.articleButtonText}>
              <span className={styles.articleButtonNumber}>0{index + 1}</span>
              <span>{post.title[lang]}</span>
            </span>
            <ArrowUpRight className={styles.articleButtonArrow} aria-hidden="true" />
          </button>
        ))}
      </div>

      {selectedPost ? (
        <article ref={articleRef} className={styles.article}>
          <div className={styles.number}>
            0{filteredPosts.findIndex((post) => post.id === selectedPost.id) + 1}
          </div>
          <div className={styles.articleBody}>
            <div className={styles.eyebrow}>
              {BLOG_CATEGORIES[selectedPost.category][lang]}
            </div>
            <h3>{selectedPost.title[lang]}</h3>
            <div className={styles.blocks}>
              {selectedPost.blocks[lang].map((block, blockIndex) =>
                block.type === "heading" ? (
                  <h4 key={`${block.text}-${blockIndex}`}>{block.text}</h4>
                ) : (
                  <p key={`${block.text}-${blockIndex}`}>{block.text}</p>
                ),
              )}
            </div>
          </div>
        </article>
      ) : (
        <p className={styles.empty}>{t("blog.empty")}</p>
      )}
    </Section>
  );
}
