import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = Object.keys(env).reduce((acc, key) => {
    acc[`process.env.${key}`] = JSON.stringify(env[key]);
    return acc;
  }, {});

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(new URL('.', import.meta.url).pathname, "./src"),
      },
    },
    define: {
      ...processEnv,
    },
  }
});
