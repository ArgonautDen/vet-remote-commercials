import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  // Currently serving from the project's github.io subpath (DNS for
  // vetremote.ru isn't pointed at Pages yet). Switch back to "/" once the
  // custom domain is live — see public/CNAME and public/404.html, which
  // need to change together with this.
  base: "/vet-remote-commercials/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
