import styles from "./StatusPage.module.scss";

export function NotFoundPage() {
  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        <h1 className={styles.notFoundTitle}>404</h1>
        <p className={styles.message}>
          The page you're looking for doesn't exist.
        </p>
        <a href="/" className={styles.primaryAction}>
          Go home
        </a>
      </div>
    </div>
  );
}
