import { useI18n } from "@/shared/i18n/useI18n";
import { useRouter } from "@tanstack/react-router";

import styles from "./StatusPage.module.scss";

export function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const { lang } = useI18n();

  console.error(error);

  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        <h1 className={styles.errorTitle}>{lang === "uk" ? "Щось пішло не так" : "Something went wrong"}</h1>
        <p className={styles.message}>{lang === "uk" ? "Спробуйте ще раз або поверніться на головну." : "Please try again or head home."}</p>
        <div className={styles.actions}>
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className={styles.primaryAction}
          >
            {lang === "uk" ? "Спробувати ще раз" : "Try again"}
          </button>
          <a href={import.meta.env.BASE_URL} className={styles.secondaryAction}>
            {lang === "uk" ? "На головну" : "Go home"}
          </a>
        </div>
      </div>
    </div>
  );
}
