import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.zli.works",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    imageService: "compile",
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});
