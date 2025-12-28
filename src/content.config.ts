import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/index.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      authors: reference("authors").array(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const authors = defineCollection({
  // Load Markdown and MDX files in the `src/content/authors/` directory.
  loader: glob({ base: "./src/content/authors", pattern: "**/index.json" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      displayName: z.string(),
      bio: z.string(),
      icon: image(),
    }),
});

export const collections = { blog, authors };
