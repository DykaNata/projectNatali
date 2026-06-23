import { usePageMeta } from "@/shared/lib/usePageMeta";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { Section } from "@/shared/ui/Section";

export function PrivacyPage() {
  const { lang } = useI18n();
  const isUk = lang === "uk";

  usePageMeta({
    title: "Політика конфіденційності — Nataliia Dyka",
    description: "Політика конфіденційності сайту Nataliia Dyka, патентного повіреного України.",
    ogTitle: "Privacy Policy — Nataliia Dyka",
    path: "/privacy",
  });

  return (
    <Section
      eyebrow={isUk ? "Юридична інформація" : "Legal"}
      title={isUk ? "Політика конфіденційності" : "Privacy Policy"}
    >
      <div className="max-w-3xl space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
        {isUk ? (
          <>
            <p>
              Ця Політика конфіденційності описує, як збираються, використовуються та
              захищаються персональні дані відвідувачів сайту патентного повіреного
              України Наталії Дикої.
            </p>
            <p>
              <strong>Які дані збираються.</strong> При зверненні через електронну пошту
              або телефон ви можете передати своє ім'я, контактні дані та опис ситуації.
              Сайт не використовує форм для збору даних та не встановлює маркетингових
              cookie.
            </p>
            <p>
              <strong>Як використовуються дані.</strong> Виключно для надання
              консультацій та юридичних послуг, відповіді на ваш запит та виконання
              договірних зобов'язань. Дані не передаються третім особам без вашої згоди,
              крім випадків, передбачених законом.
            </p>
            <p>
              <strong>Зберігання та захист.</strong> Дані зберігаються протягом строку,
              необхідного для надання послуг або відповіді на запит. Вживаються розумні
              організаційні та технічні заходи для запобігання несанкціонованому
              доступу.
            </p>
            <p>
              <strong>Ваші права.</strong> Ви маєте право отримати інформацію про
              обробку ваших даних, вимагати їх виправлення або видалення. Для цього
              напишіть на{" "}
              <a className="underline" href="mailto:Nataliia.dikaya@gmail.com">
                Nataliia.dikaya@gmail.com
              </a>
              .
            </p>
            <p className="text-sm text-muted-foreground">
              Останнє оновлення: червень 2026 року.
            </p>
          </>
        ) : (
          <>
            <p>
              This Privacy Policy explains how personal data of visitors to the website
              of Nataliia Dyka, Patent Attorney of Ukraine, is collected, used and
              protected.
            </p>
            <p>
              <strong>Data collected.</strong> When you contact us by email or phone,
              you may share your name, contact details and a description of your matter.
              The website does not use intake forms or marketing cookies.
            </p>
            <p>
              <strong>How data is used.</strong> Solely to provide consultations and
              legal services, respond to your request, and perform contractual
              obligations. Data is not shared with third parties without your consent,
              except as required by law.
            </p>
            <p>
              <strong>Storage and protection.</strong> Data is stored for as long as
              necessary to provide services or respond to your request. Reasonable
              organisational and technical measures are taken to prevent unauthorised
              access.
            </p>
            <p>
              <strong>Your rights.</strong> You may request information about the
              processing of your data and request its correction or deletion by writing
              to{" "}
              <a className="underline" href="mailto:Nataliia.dikaya@gmail.com">
                Nataliia.dikaya@gmail.com
              </a>
              .
            </p>
            <p className="text-sm text-muted-foreground">Last updated: June 2026.</p>
          </>
        )}
      </div>
    </Section>
  );
}
