import { useI18n } from "@/shared/i18n/useI18n";
import { AboutSection } from "../components/AboutSection";
import { usePageMeta } from "@/shared/lib/usePageMeta";

export function AboutPage() {
  const { lang } = useI18n();
  usePageMeta({
    title: lang === "uk" ? "Про мене — Nataliia Dyka | Patent Attorney of Ukraine" : "About — Nataliia Dyka | Patent Attorney of Ukraine",
    description: lang === "uk" ? "Наталія Дика — патентний повірений України № 526. Понад 10 років практики у сфері інтелектуальної власності." : "Nataliia Dyka, Ukrainian patent attorney No. 526. Over 10 years of experience in intellectual property.",
    ogTitle: "About — Nataliia Dyka",
    path: "/about",
  });


  return <AboutSection standalone />;
}
