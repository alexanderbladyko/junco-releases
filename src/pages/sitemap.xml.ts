import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { locales, type Locale } from "../i18n";

export const prerender = true;

const site = "https://junco.app";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function documentPath(id: string, locale: Locale) {
  const slug = id.replace(/^[^/]+\//, "");
  return locale === "en" ? `/docs/${slug}` : `/${locale}/docs/${slug}`;
}

export const GET: APIRoute = async () => {
  const docs = await getCollection("docs");
  const pages = new Set<string>(["/", "/docs"]);

  for (const locale of locales as Locale[]) {
    if (locale !== "en") {
      pages.add(`/${locale}`);
      pages.add(`/${locale}/docs`);
    }
  }

  for (const entry of docs) {
    pages.add(documentPath(entry.id, entry.data.locale as Locale));
  }

  const urls = [...pages]
    .sort()
    .map((path) => `  <url><loc>${escapeXml(new URL(path, site).toString())}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
