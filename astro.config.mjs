import { defineConfig } from "astro/config";
import { envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        PUBLIC_VARIABLE: envField.string({
          context: "server",
          access: "public",
        }),
      },
    },
  },
});
