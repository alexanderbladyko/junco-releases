import { defineConfig, presetWind3 } from "unocss";

export default defineConfig({
  presets: [presetWind3()],
  theme: {},
  shortcuts: {
    "page-shell": "mx-auto w-full max-w-6xl px-5 sm:px-8",
    eyebrow: "text-xl uppercase tracking-[0.18em] text-zinc-500",
    "button-base":
      "inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition duration-200",
    "button-dark":
      "button-base border-zinc-800 bg-zinc-800 text-zinc-200 shadow-sm hover:-translate-y-0.5 hover:bg-zinc-700 hover:shadow-lg",
    "button-light":
      "button-base border-zinc-300 bg-zinc-200 text-zinc-800 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-white hover:shadow-lg",
  },
});
