import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

import rehypeGithubAlert from "rehype-github-alert";
import rehypeGithubEmoji from "rehype-github-emoji";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.zli.works",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    imageService: "compile",
  }),
  markdown: {
    rehypePlugins: [rehypeGithubAlert, rehypeGithubEmoji],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
