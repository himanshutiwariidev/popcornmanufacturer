# TipTop Kernels — Popcorn Manufacturer Landing Page

A Next.js (App Router) + Tailwind CSS landing page for a popcorn
manufacturer, inspired by the layout patterns of manufacturer landing
pages / full company sites (hero banner, about, product lines, process,
why-us, testimonials, contact, footer).

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Adding your hero banner

The hero section (`components/Hero.jsx`) expects a banner image at:

```
/public/banner.jpg
```

Drop your banner image into the `public/` folder and name it `banner.jpg`
(or update the `src` in `Hero.jsx` to match your filename). Recommended
size: 1920×1000px or wider, landscape orientation — it fills the full
width of the hero and sits behind a dark gradient so the headline stays
readable.

## Folder structure

```
popcorn-landing/
├── app/
│   ├── layout.jsx        # Root layout, fonts, metadata
│   ├── page.jsx           # Composes all sections
│   └── globals.css        # Tailwind directives + base styles
├── components/
│   ├── Header.jsx          # Sticky nav + mobile menu
│   ├── Hero.jsx             # Banner image + headline (drop your banner here)
│   ├── Stats.jsx             # Stat strip under hero
│   ├── About.jsx              # Company intro, image + text
│   ├── Products.jsx            # Flavour/product line grid
│   ├── Process.jsx              # Kernel-to-bag numbered timeline
│   ├── WhyChooseUs.jsx           # Feature grid with icons
│   ├── Testimonials.jsx           # Client quote cards
│   ├── ContactCTA.jsx              # Enquiry form + contact details
│   └── Footer.jsx                   # Links, social, copyright
├── public/
│   └── banner.jpg           # <-- put your hero banner image here
├── jsconfig.json
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
└── package.json
```

## Design tokens (tailwind.config.js)

- `cream` `#FBF3E1` — page background
- `paper` `#FFFDF8` — card/section background
- `ink` `#201A14` — primary text / dark sections
- `butter` `#F0A93A` (+ `light` / `dark`) — accent gold
- `popred` `#C4361F` (+ `dark`) — accent red, CTAs
- `kernel` `#6B4A2B` — secondary brown accent
- Fonts: `font-display` (Fraunces, serif) for headings, `font-body`
  (Manrope, sans) for everything else — loaded via `next/font/google`
  in `app/layout.jsx`.

## Notes

- Product and testimonial images currently point to Unsplash URLs as
  placeholders — swap these for your own product photography.
- All copy is placeholder content written for a fictional brand
  ("TipTop Kernels") — replace with your real company name, contact
  details and certifications.
- The contact form is static markup only; wire up `onSubmit` to your
  backend, form service, or API route of choice.
