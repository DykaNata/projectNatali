import { Outlet } from "@tanstack/react-router";

import { Footer } from "@/features/site/components/Footer";
import { Header } from "@/features/site/components/Header";
import { useI18n } from "@/shared/i18n/useI18n";
import styles from "./Layout.module.scss";

export function Layout() {
  const { lang } = useI18n();

  return (
    <div className={styles.app}>
      <a href="#main-content" className={styles.skipLink}>
        {lang === "uk" ? "Перейти до основного вмісту" : "Skip to main content"}
      </a>
      <Header />
      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
