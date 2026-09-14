import { useI18n } from "@/shared/i18n/useI18n";
import { ContactSection } from "../components/ContactSection";
import { usePageMeta } from "@/shared/lib/usePageMeta";
export function ContactPage() {
  const { lang } = useI18n();
  usePageMeta({
    title: lang === "uk" ? "Контакти — Nataliia Dyka | IP Law" : "Contact — Nataliia Dyka | IP Law",
    description: lang === "uk" ? "Зв'язатися з Наталією Дикою, патентним повіреним України. Київ, Україна." : "Contact Nataliia Dyka, Ukrainian patent attorney. Kyiv, Ukraine.",
    ogTitle: "Contact — Nataliia Dyka",
    path: "/contact",
  });


  return <ContactSection standalone />;
}
