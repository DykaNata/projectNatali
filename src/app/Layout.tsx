import { Outlet } from "@tanstack/react-router";

import { Footer } from "@/features/site/components/Footer";
import { Header } from "@/features/site/components/Header";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
