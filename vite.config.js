import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  let base = "/";

  if (mode === "github") {
    base = "/kanau-lab/";
  } else if (mode === "github-preview") {
    base = "/kanau-lab/preview/";
  }

  return {
    base,
    plugins: [react()],
  };
});
