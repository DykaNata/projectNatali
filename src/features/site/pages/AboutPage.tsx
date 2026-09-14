import { AboutSection } from "../components/AboutSection";
import { usePageMeta } from "@/shared/lib/usePageMeta";

export function AboutPage() {
  usePageMeta({
    title: "Про мене — Nataliia Dyka | Patent Attorney of Ukraine",
    description:
      "Наталі Дика — патентний повірений України № 526. Понад 10 років практики у сфері інтелектуальної власності.",
    ogTitle: "About — Nataliia Dyka",
    path: "/about",
  });


  return <AboutSection standalone />;
}
