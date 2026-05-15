// @ts-check
import { defineConfig } from "astro/config";
import path from "path";
// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://web22des.github.io",
    base: "deeply-disk",
    vite: {
        resolve: {
            alias: {
                "@styles": path.resolve("./src/styles"),
            },
        },
    },
});
