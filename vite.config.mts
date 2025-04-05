import { fileURLToPath } from "node:url";
import { extname, relative, resolve, dirname } from "path";

import react from "@vitejs/plugin-react-swc";
import { glob } from "glob";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

const inputs = ["assets", "components", "theme", "typings", "utils"];

export default defineConfig({
  build: {
    lib: {
      entry: inputs
    },
    rollupOptions: {
      external: [/react/g, /react-dom/g, /basic-styled/g],
      input: Object.fromEntries(
        inputs
          .map((input) =>
            glob
              .sync(`${input}/**/*.{ts,tsx}`, {
                ignore: [
                  "**/*.d.ts",
                  "**/*.styles.{ts,tsx}",
                  "**/*.stories.tsx",
                  "**/typing.ts",
                  "**/*.typing.ts",
                  "typings/utility.ts",
                  "typings/component.ts"
                ]
              })
              .map((file) => [
                file.slice(0, file.length - extname(file).length),
                fileURLToPath(new URL(file, import.meta.url))
              ])
          )
          .flat()
      ),
      output: [
        {
          interop: "auto",
          format: "es",
          manualChunks: (id) => {
            if (id.includes("assets")) {
              return id.slice(id.lastIndexOf("assets"), id.length);
            }

            return undefined;
          },
          entryFileNames: "[name].mjs"
        }
      ]
    }
  },
  plugins: [
    react(),
    dts({
      beforeWriteFile: (filePath, content) => {
        return {
          filePath,
          content: content.replace(
            /@assets/g,
            relative(dirname(filePath), resolve(__dirname, "dist/assets"))
          )
        };
      },
      exclude: ["**/*.stories.tsx", "**/*.styles.{ts,tsx}"]
    }),
    svgr({
      include: "**/*.svg"
    })
  ],
  resolve: {
    alias: inputs.map((input) => ({
      find: `@${input}`,
      replacement: resolve(__dirname, input)
    }))
  }
});
