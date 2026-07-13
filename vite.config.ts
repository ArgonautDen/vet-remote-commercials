import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  // Serving from the vetremote.ru domain root (see public/CNAME). If ever
  // reverting to the bare github.io project subpath, this needs to become
  // "/vet-remote-commercials/" again, together with public/404.html's
  // pathSegmentsToKeep.
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
