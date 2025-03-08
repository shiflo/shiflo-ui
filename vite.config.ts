import path from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg"
    })
  ],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "components")
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "assets")
      },
      {
        find: "@theme",
        replacement: path.resolve(__dirname, "theme")
      },
      {
        find: "@typings",
        replacement: path.resolve(__dirname, "typings")
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "utils")
      }
    ]
  }
});
