import { mkdir, readFile, writeFile, stat } from "node:fs/promises";
import { resolve, dirname, relative, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

export const routes = ["/", "/cv", "/research", "/teaching"];
export const domain = "danai-econ.com";
const project = fileURLToPath(new URL("../", import.meta.url));
const output = resolve(project, "dist/client");
// This asset endpoint is publicly readable without a preview login and does
// not redirect to the custom domain when the domain moves to GitHub.
const assetOrigin = "https://id-preview--7d528ec7-cb8c-43be-ae92-2b8d008f9434.lovable.app";

export function assetDestination(root, url) {
  if (!url.startsWith("/__l5e/assets-v1/") || url.includes("?") || url.includes("#")) {
    throw new Error("Expected a Lovable Assets pointer URL");
  }
  const destination = resolve(root, `.${url}`);
  const path = relative(root, destination);
  if (path.startsWith("..") || isAbsolute(path)) throw new Error("Asset path escapes the output directory");
  return destination;
}

export function pageFile(root, route) {
  return resolve(root, `.${route}`, "index.html");
}

// Start the built Node server, save each page as static HTML, then stop it.
export async function renderPages() {
  const port = 4173 + Math.floor(Math.random() * 1000);
  const server = spawn(process.execPath, [resolve(project, "dist/server/index.mjs")], {
    env: { ...process.env, PORT: String(port), HOST: "127.0.0.1" },
    stdio: ["ignore", "inherit", "inherit"],
  });
  try {
    const base = `http://127.0.0.1:${port}`;
    for (let attempt = 0; ; attempt++) {
      try { await fetch(base); break; } catch {
        if (attempt > 100) throw new Error("Server did not start");
        await new Promise((r) => setTimeout(r, 200));
      }
    }
    for (const route of routes) {
      const response = await fetch(base + route, { redirect: "error", signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`Render failed: ${route} (${response.status})`);
      const html = await response.text();
      if (!html.includes("</html>")) throw new Error(`Incomplete page: ${route}`);
      const file = pageFile(output, route);
      await mkdir(dirname(file), { recursive: true });
      await writeFile(file, html);
    }
  } finally {
    server.kill();
  }
}

export async function preparePages() {
  await renderPages();
  for (const route of routes) {
    if ((await stat(pageFile(output, route))).size === 0) throw new Error(`Empty page: ${route}`);
  }
  for (const filename of ["portrait-dan.jpg.asset.json", "dan-ai-cv.pdf.asset.json"]) {
    const pointer = JSON.parse(await readFile(resolve(project, "src/assets", filename), "utf8"));
    const destination = assetDestination(output, pointer.url);
    const response = await fetch(new URL(pointer.url, assetOrigin), { redirect: "error" });
    if (!response.ok) throw new Error(`Asset download failed: ${filename} (${response.status})`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length !== pointer.size) throw new Error(`Asset size mismatch: ${filename}`);
    if (!response.headers.get("content-type")?.includes(pointer.content_type)) {
      throw new Error(`Unexpected asset content type: ${filename}`);
    }
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, bytes);
  }
  await writeFile(resolve(output, "CNAME"), `${domain}\n`);
  await writeFile(resolve(output, ".nojekyll"), "");
  console.log(`GitHub Pages artifact ready: ${output} (${routes.length} pages, photo, CV)`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await preparePages();
}