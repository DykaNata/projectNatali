import { Outlet } from "@tanstack/react-router";

import { Footer } from "@/features/site/components/Footer";
import { Header } from "@/features/site/components/Header";
import styles from "./Layout.module.scss";

export function Layout() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
