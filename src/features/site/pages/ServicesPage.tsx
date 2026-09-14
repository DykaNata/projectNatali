import { useI18n } from "@/shared/i18n/useI18n";
import { ServicesSection } from "../components/ServicesSection";
import { usePageMeta } from "@/shared/lib/usePageMeta";
export function ServicesPage() {
  const { lang } = useI18n();
  usePageMeta({
    title: lang === "uk" ? "Послуги — Nataliia Dyka | IP Law" : "Services — Nataliia Dyka | IP Law",
    description: lang === "uk" ? "Консультації, торговельні марки, авторське право, промислові зразки, договори ІВ, міжнародна охорона, недобросовісна конкуренція та FMCG." : "IP consultations, trademarks, copyright, industrial designs, agreements, international protection, unfair competition and FMCG.",
    ogTitle: "Services — Nataliia Dyka",
    path: "/services",
  });


  return <ServicesSection standalone />;
}
