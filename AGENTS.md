<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Store the downloadable CV through a Lovable Assets pointer so the uploaded PDF remains available without committing a binary file.
- Prerender all four public content routes to directory index files; GitHub Pages serves static HTML and has no app server.
- For GitHub Pages builds, disable TanStack's built-in prerender and render pages in scripts/github-pages.mjs from the built Node server; the built-in prerender hangs with the node-server preset outside Lovable.
- GitHub Pages CI uses the Node export preset and publishes only dist/client; keep the default Lovable target for preview and Lovable publishing.
- Materialize pointer-backed photo and CV into the generated Pages artifact using scripts/github-pages.mjs, never into tracked source; their relative URLs need local files on external hosting.
