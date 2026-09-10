import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      // --- Card Metadata ---
      title: z.string(),
      tagline: z.string(),
      coverImage: image(),
      tags: z.array(z.string()),

      // --- Page Header & Structured Data ---
      role: z.string(),
      client: z.string().optional(),
      liveUrl: z.url().optional(),
      githubUrl: z.url().optional(),
      metrics: z
        .array(
          z.object({
            label: z.string(),
            value: z.string(),
          }),
        )
        .optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
