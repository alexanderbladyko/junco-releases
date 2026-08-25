import { defaultLocale, locales, messages, type Locale } from "./i18n/locales";

export { defaultLocale, locales };
export type { Locale };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocale(pathname: string) {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : defaultLocale;
}

export function getMessages(locale: Locale) {
  return messages[locale];
}

export function localizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && isLocale(segments[0])) {
    segments.shift();
  }

  const path = segments.length ? "/" + segments.join("/") : "";
  return locale === defaultLocale ? path || "/" : "/" + locale + path;
}

export function docSlug(id: string) {
  return id.replace(/^[^/]+\//, "");
}
