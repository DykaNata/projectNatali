import type { ReactNode } from "react";

import styles from "./Section.module.scss";

export function Section({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      {(eyebrow || title) && (
        <div className={styles.header}>
          {eyebrow && (
            <div className={styles.eyebrowRow}>
              <span className={styles.rule} />
              <span className={styles.eyebrow}>{eyebrow}</span>
            </div>
          )}
          {title && <h2 className={styles.title}>{title}</h2>}
        </div>
      )}
      {children}
    </section>
  );
}
