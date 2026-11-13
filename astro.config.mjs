// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      ws: {
        protocol: "ws",
        clientPort: 4321,
      },
    },
  },
  server: {
    host: true, // or '0.0.0.0'
    port: 4321,
  },

  integrations: [mdx()],
});
