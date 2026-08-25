import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { locales } from "./i18n";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(locales),
    order: z.number().default(0),
  }),
});

export const collections = { docs };
