# Indexing your React app (Firebase Hosting)

This guide covers how to get your Laura CV site indexed by search engines (Google, Bing, etc.) while hosted on Firebase.

## What’s already in place

- **Firebase rewrites** – `firebase.json` sends all routes to `index.html`, so deep links work and crawlers get your app shell.
- **robots.txt** – Allows all crawlers and points to your sitemap.
- **sitemap.xml** – Lists main pages and all gallery project URLs so search engines can discover them.
- **Meta tags** – `index.html` has a descriptive `meta name="description"` and `meta name="robots" content="index, follow"`.

## 1. Deploy the latest build

After any change to `public/` (including `sitemap.xml` and `robots.txt`):

```bash
npm run build
firebase deploy
```

## 2. Submit to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add a **property** with your site URL: `https://laurawalden.com`
3. **Verify ownership** (e.g. HTML file in `public/` or DNS record; Domain verification works well for custom domains).
4. After verification, open **Sitemaps** and submit:  
   `https://laurawalden.com/sitemap.xml`
5. Use **URL Inspection** to request indexing for your homepage and important URLs.

Indexing can take from a few days to a few weeks. Search Console will show coverage and any errors.

## 3. Optional: Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Add your site and verify (e.g. XML file or meta tag in `index.html`).
3. Submit the same sitemap URL as in Search Console.

## 4. How search engines see your app

Your app is a **single-page application (SPA)**. The HTML is the same for every URL; content is rendered by React. Google and Bing can run JavaScript and index SPAs, so your main pages and gallery URLs can be indexed. The sitemap helps them find those URLs faster. The static meta description in `index.html` is used for the main entry; for per-page titles and descriptions you’d need something like `react-helmet-async` and to set tags per route.

## 5. Quick checklist

- [ ] `npm run build` and `firebase deploy` after changing `public/`
- [ ] Search Console property for **https://laurawalden.com** added and verified
- [ ] Sitemap submitted: `https://laurawalden.com/sitemap.xml` (and Bing if you use it)
- [ ] Optional: request indexing for key URLs in URL Inspection
