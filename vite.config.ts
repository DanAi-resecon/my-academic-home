// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // CI renders with Node only during export; GitHub serves the client files.
  ...(process.env['GITHUB_PAGES'] === "true"
    ? { nitro: { preset: "node-server", output: { dir: "dist", publicDir: "dist/client", serverDir: "dist/server" } } }
    : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages: [{ path: "/" }, { path: "/cv" }, { path: "/research" }, { path: "/teaching" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false, crawlLinks: false, failOnError: true },
  },
});
