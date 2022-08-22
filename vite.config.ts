import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    svelte(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  server: { port: 8888 }
});
