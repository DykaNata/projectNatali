import type { ReactNode } from "react";

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
    <section className={`container-page py-20 md:py-28 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-12 max-w-3xl">
          {eyebrow && (
            <div className="mb-4 flex items-center gap-3">
              <span className="rule" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
          )}
          {title && (
            <h2 className="text-3xl leading-tight md:text-5xl">{title}</h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
