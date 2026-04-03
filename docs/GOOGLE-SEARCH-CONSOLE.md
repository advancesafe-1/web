# Google Search Console — Get advancesafe.in Indexed

Your site is a **Vite + React** SPA. The following are already in place so Google can find and index you:

- **`public/robots.txt`** — Allows all crawlers and points to your sitemap.
- **`public/sitemap.xml`** — Lists homepage, /blog, all blog posts, /privacy, /terms. Update this file when you add or remove pages.
- **Security headers** — Set via `vercel.json` or `public/_headers` (Netlify) so crawlers and users get a secure response.

## Do this next (one-time)

1. **Add your property in Google Search Console**  
   Go to [search.google.com/search-console](https://search.google.com/search-console) → Add property → enter `https://www.advancesafe.in`.

2. **Verify ownership**  
   Use one of the methods Google offers (HTML file upload, DNS record, or HTML meta tag). If you use the meta tag, add it to `index.html` in the `<head>` and redeploy.

3. **Submit your sitemap**  
   In Search Console: Sitemaps → add `https://www.advancesafe.in/sitemap.xml` → Submit.

4. **Request indexing for the homepage**  
   URL Inspection → enter `https://www.advancesafe.in/` → Request indexing.

After that, Google will crawl according to its schedule. Indexing can take a few days to a few weeks for a new or low-authority site.

## When you add new blog posts

Edit **`public/sitemap.xml`** and add a new `<url>` block for each new post so Search Console continues to see all your pages.
