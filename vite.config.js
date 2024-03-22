import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';
import { dirname } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, 'src'),
    },
  },
});
