import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_KEYS } from "@/content/site";
import { useI18n } from "@/shared/i18n/useI18n";
import styles from "./ServicesSection.module.scss";

export function ServicesSection({ standalone = false }: { standalone?: boolean }) {
  const { t, lang } = useI18n();
  const uk = lang === "uk";
  const Heading = standalone ? "h1" : "h2";
  return (
    <section id="services" className={styles.section}>
      <div className={styles.eyebrow}><span aria-hidden="true" />{t("services.eyebrow")}</div>
      <Heading className={styles.title}>{uk ? "Напрями практики" : "Areas of practice"}</Heading>
      <div className={styles.list}>
        {SERVICE_KEYS.map((key, index) => (
          <Link to="/contact" key={key} className={styles.row}>
            <span className={styles.number}>0{index + 1}</span>
            <h3 className={styles.name}>{t(`svc.${key}.title`)}</h3>
            <p className={styles.description}>{t(`svc.${key}.desc`)}</p>
            <ArrowUpRight className={styles.arrow} aria-hidden="true" />
          </Link>
        ))}
      </div>
      <div className={styles.actions}>
        <Link to="/contact" className={styles.cta}>
          {uk ? "Обговорити ваше питання" : "Discuss your matter"}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
