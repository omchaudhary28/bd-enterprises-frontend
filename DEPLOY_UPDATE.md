# Update Live Site (bdenterprises.in)

After making UI changes, push to git and **redeploy** so the live site reflects updates.

## Vercel (auto-deploy from GitHub)

1. Push changes: `git push origin main`
2. Vercel auto-deploys from the connected repo. Wait 1–2 minutes.
3. Visit https://www.bdenterprises.in — changes should appear.

If you don’t see updates, check [Vercel Dashboard](https://vercel.com) → Project → Deployments for the latest build.

## GoDaddy (manual upload)

1. Build locally: `npm run build`
2. Upload contents of the `build/` folder to your GoDaddy `public_html/` (or the folder serving the site).

---

**Note:** Until you redeploy, the live site will show the previous version.
