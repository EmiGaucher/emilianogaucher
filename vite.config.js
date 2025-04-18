import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // raíz del proyecto
  build: {
    outDir: "dist",
  },
});
