import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: "./src/content/posts", pattern: "**/index.{md,mdx}" }),
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
      tags: reference("tags").array().default([]),
    }),
});

const authors = defineCollection({
  // Load JSON files in the `src/content/authors/` directory.
  loader: glob({ base: "./src/content/authors", pattern: "**/index.json" }),
  // Type-check using a schema
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      displayName: z.string(),
      bio: z.string(),
      icon: image(),
    }),
});

const tags = defineCollection({
  // Load tags from a single JSON file (keys are used as IDs)
  loader: file("./src/content/tags.json"),
  // Type-check using a schema
  schema: z.object({
    displayName: z.string(),
    description: z.string().optional(),
    color: z.string().optional(),
  }),
});

export const collections = { posts, authors, tags };
