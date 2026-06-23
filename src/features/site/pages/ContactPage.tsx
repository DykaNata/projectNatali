import { CONTACT } from "@/content/site";
import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { Section } from "@/shared/ui/Section";

export function ContactPage() {
  const { t } = useI18n();

  usePageMeta({
    title: "Контакти — Nataliia Dyka | IP Law",
    description: "Зв'язатися з Наталі Дика, патентним повіреним України. Київ, Україна.",
    ogTitle: "Contact — Nataliia Dyka",
    path: "/contact",
  });

  const items = [
    { label: t("contact.phone"), value: CONTACT.phone.label, href: CONTACT.phone.href },
    { label: t("contact.email"), value: CONTACT.email.label, href: CONTACT.email.href },
    { label: t("contact.location"), value: t("contact.city") },
    { label: t("contact.hours"), value: t("contact.hoursValue") },
  ];

  return (
    <Section eyebrow={t("contact.eyebrow")} title={<span className="text-accent-red">{t("contact.title")}</span>}>
      <p className="-mt-6 mb-14 max-w-2xl text-base text-muted-foreground md:text-lg">
        {t("contact.sub")}
      </p>
      <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
        {items.map((it) => (
          <div key={it.label} className="bg-background p-8 md:p-10">
            <div className="eyebrow mb-3">{it.label}</div>
            {it.href ? (
              <a href={it.href} className="font-display text-2xl text-ink hover:text-accent-red md:text-3xl">
                {it.value}
              </a>
            ) : (
              <div className="font-display text-2xl text-ink md:text-3xl">{it.value}</div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
