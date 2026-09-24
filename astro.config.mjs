// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      hmr: {
        // Enforces that HMR traffic routes strictly over Astro's default dev port
        // preventing WebSocket drops when accessing via an external local IP host
        clientPort: 4321,
      },
    },
  },

  integrations: [mdx()],
});
