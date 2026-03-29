import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

// Pin Turbopack to this app folder so `tailwindcss` resolves from `web/node_modules`
// when the repo root (`blissio-app`) has no package.json / node_modules.
const appRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: appRoot,
    // PostCSS can resolve from the repo root in a folder layout like `blissio-app/web/`;
    // force these packages to `web/node_modules` explicitly.
    resolveAlias: {
      tailwindcss: path.join(appRoot, "node_modules/tailwindcss"),
      "@tailwindcss/postcss": path.join(appRoot, "node_modules/@tailwindcss/postcss"),
    },
  },
};

export default nextConfig;
