import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    cssMinify: true,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks(id){
          if(id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString()
          }
        }
      }
    }
  },

  server: {
    host: true,
    proxy: {
      "/api": "http://localhost:5174",
    },
  },
});
