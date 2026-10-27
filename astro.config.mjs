import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mountaingate.ca",
  compressHTML: true,
  //base: "mountain-gate",
  integrations: [sitemap(), icon()],
});
