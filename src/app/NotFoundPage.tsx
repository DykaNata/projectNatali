import { useI18n } from "@/shared/i18n/useI18n";
import styles from "./StatusPage.module.scss";

export function NotFoundPage() {
  const { lang } = useI18n();
  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        <h1 className={styles.notFoundTitle}>404</h1>
        <p className={styles.message}>
          {lang === "uk" ? "Сторінку не знайдено." : "The page you’re looking for doesn’t exist."}
        </p>
        <a href={import.meta.env.BASE_URL} className={styles.primaryAction}>
          {lang === "uk" ? "На головну" : "Go home"}
        </a>
      </div>
    </div>
  );
}
