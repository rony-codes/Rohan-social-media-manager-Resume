# Rohan — Social Media Manager Portfolio

A single-page animated portfolio built with **React + Vite**, **Tailwind CSS**,
**Framer Motion** and **GSAP**.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Where to edit your content

Everything editable lives in **one file**: `src/siteConfig.js`.
You should not need to open any component file to change copy, links, numbers,
or your resume — just edit the values in that file. Anything marked `// TODO`
needs your input.

Things you'll want to fill in first:

1. **`resumeUrl`** — paste your Google Drive share link (set sharing to
   "Anyone with the link → Viewer"). It opens in a new tab from the nav bar,
   the hero button, and anywhere else "Résumé" appears.
2. **`fullName`, `email`, `phone`, `location`** — your real details.
3. **`bio`** — replace the placeholder paragraphs with your own voice.
4. **`socials`** — your own Instagram / LinkedIn / X / Threads / YouTube URLs.
5. **`featuredClient`** — double-check Dr. Suneha's Instagram URL (only the
   YouTube link was confirmed) and update the blurb if you'd like.
6. **`services`** — the 6th card is a placeholder; edit or delete it in the
   `services` array.
7. **Your photo** — in `src/components/About.jsx`, replace the dark
   placeholder block with an `<img>` tag pointing at a photo in `/public`.

## Structure

```
src/
  siteConfig.js        ← all editable content lives here
  App.jsx               ← assembles the page section by section
  index.css             ← global styles / tailwind
  components/
    Nav.jsx              nav bar + resume link + availability badge
    Hero.jsx              headline, rotating role word, CTAs
    Ticker.jsx            infinite scrolling "live numbers" strip (signature element)
    Counter.jsx           GSAP count-up number helper used across the site
    Services.jsx          the 6 services grid
    Platforms.jsx          Instagram / LinkedIn / X / Threads / YouTube strip
    FeaturedClient.jsx      Dr. Suneha case study + placeholder client slots
    About.jsx              bio + photo placeholder
    Contact.jsx             contact form + book-a-consultation + socials
    Footer.jsx
```

## Contact form

The form currently opens a pre-filled `mailto:` link — there's no backend,
so nothing gets stored. When you're ready, swap the `handleSubmit` function
in `src/components/Contact.jsx` for a service like
[Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/) so
submissions land in your inbox properly.

## Deploying

This is a static Vite app, so it deploys as-is to **Vercel**, **Netlify**, or
**GitHub Pages**. On Vercel/Netlify: import the repo, framework preset
"Vite", no config needed.
