# Update Live Site (bdenterprises.in)

**Important:** Deploy from the `bd-enterprises` folder. The live site must serve the build from this project.

## Vercel (auto-deploy from GitHub)

1. Ensure the Vercel project is linked to the `bd-enterprises` repo (or the repo containing this folder as root).
2. Push changes: `git push origin main`
3. Vercel auto-deploys. Wait 1–2 minutes.
4. Visit https://www.bdenterprises.in — changes should appear.

If you don't see updates, check [Vercel Dashboard](https://vercel.com) → Project → Deployments for the latest build. Ensure the project's **Root Directory** is set to `bd-enterprises` (if the repo contains a parent folder).

## GoDaddy (manual upload)

1. From project root: `cd bd-enterprises && npm run build`
2. Upload the **contents** of `bd-enterprises/build/` to your GoDaddy `public_html/` (or the folder serving the site). Include:
   - `index.html`
   - `static/` folder
   - `logo.png`, `favicon.ico`, and other files from the build root.

## What Gets Updated (Frontend Only)

- Logo, hero carousel, homepage layout
- Service pages, About, Contact, Footer
- Theme toggle, styling

**Backend update:** Not required for UI, images, or content changes. Only update the backend if you change APIs, environment variables, or server logic.
