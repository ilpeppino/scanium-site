import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const animations = {
  name: "scanium-animations",
  hooks: {
    "astro:config:setup": ({ injectScript }) => {
      injectScript("page", 'import "/src/scripts/animations.js";');
    },
  },
};

export default defineConfig({
  integrations: [tailwind(), animations],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
