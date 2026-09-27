import { en } from "./en";
import { be } from "./be";
import { pl } from "./pl";
import { ru } from "./ru";
import { uk } from "./uk";
import type { I18nMessages } from "../types";

export const messages = { en, ru, be, uk, pl } as const;
export type Locale = keyof typeof messages;

export const locales = Object.keys(messages);
export const defaultLocale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  be: "Беларуская",
  uk: "Українська",
  pl: "Polski",
};

const defaultMessages = messages[defaultLocale];

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang && locales.includes(lang as keyof typeof messages)) {
    return lang as keyof typeof locales;
  }
  return defaultLocale;
}

export function useTranslations(locale: keyof typeof messages) {
  const msgs = messages[locale];
  return (key: keyof I18nMessages) => {
    return key in msgs ? msgs[key] : defaultMessages[key];
  };
}
