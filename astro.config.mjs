import { defineConfig } from "astro/config";
import UnoCSS from "@unocss/astro";

export default defineConfig({
  site: "https://junco.app",
  output: "static",
  integrations: [UnoCSS({ injectReset: true })],
});
