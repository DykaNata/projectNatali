import { useRouter } from "@tanstack/react-router";

import styles from "./StatusPage.module.scss";

export function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  console.error(error);

  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        <h1 className={styles.errorTitle}>Something went wrong</h1>
        <p className={styles.message}>Please try again or head home.</p>
        <div className={styles.actions}>
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className={styles.primaryAction}
          >
            Try again
          </button>
          <a href="/" className={styles.secondaryAction}>
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
