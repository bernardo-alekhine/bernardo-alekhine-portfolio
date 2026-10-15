import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      date: z.date(),
      coverImage: image(),
      coverImageAlt: z.string(),
      tags: z.array(z.string()),
      featured: z.boolean().default(false),
    }),
});

export const collections = {
  projects: projectsCollection,
};
