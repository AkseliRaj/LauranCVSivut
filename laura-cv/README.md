# Laura Walden CV

A React-based portfolio and CV site for **Laura Walden**, lighting designer. The site is bilingual (Finnish/English), includes a project gallery with carousel, and is deployed on Firebase Hosting.

**Live site:** [laurawalden.com](https://laurawalden.com)

## Tech stack

- **React** (Create React App)
- **React Router** – routing and gallery item pages
- **i18next** – Finnish/English localization
- **Bootstrap** – layout and components
- **Embla Carousel** – project image carousel
- **Firebase Hosting** – deployment
- **EmailJS** – contact form

## Getting started

### Prerequisites

- Node.js (and npm)

### Install and run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for production

```bash
npm run build
```

Output goes to the `build` folder. For deployment to Firebase:

```bash
npm run build
firebase deploy
```

### Tests

```bash
npm test
```

## Project structure

- `public/` – static assets, `index.html`, `robots.txt`, `sitemap.xml`
- `src/` – React app: components, styles, locales (fi/en), projects data, Firebase config
- `INDEXING.md` – guide for search engine indexing (Google Search Console, sitemap, etc.)

## Search engine indexing

The app is set up for indexing with `robots.txt`, `sitemap.xml`, and meta tags. See **[INDEXING.md](./INDEXING.md)** for submitting to Google Search Console and Bing Webmaster Tools.

## License

Private project.
