import { Send, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/content/site";
import { useI18n } from "@/shared/i18n/useI18n";
import styles from "./TelegramContact.module.scss";

export function TelegramContact() {
  const { lang } = useI18n();
  return (
    <div className={styles.wrapper}>
      <a className={styles.button} href={CONTACT.telegram.href} target="_blank" rel="noopener noreferrer">
        <Send aria-hidden="true" />
        <span>{lang === "uk" ? "Написати в Telegram" : "Message on Telegram"}</span>
        <ArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}
