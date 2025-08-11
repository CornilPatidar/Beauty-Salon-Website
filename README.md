## Kumkum Beauty — Salon Website (React + TypeScript + Vite)

Modern, responsive beauty salon website for showcasing services, brands, and booking appointments.

Live Demo: [kumkumbeauty.in](https://kumkumbeauty.in)

### Features
- Responsive layout with modern UI components
- Service highlights and image carousels (hero, haircuts, skin care)
- Booking form with calendar/date picker
- Brand showcase and contact shortcuts
- Client-side routing for sections like Hair Care, Skin Care, and Book Now

### Tech Stack
- React 18 + TypeScript
- Vite 5 (fast dev server and build)
- Tailwind CSS
- Radix UI/shadcn-style components and MUI where appropriate
- Embla Carousel / Swiper for sliders

### Getting Started
1) Install dependencies
```
npm install
```
2) Start the dev server
```
npm run dev
```
3) Open the app
```
http://localhost:5173
```

### Scripts
- dev: start the Vite dev server
- build: type-check and create a production build
- preview: preview the production build locally
- lint: run ESLint

```
npm run dev
npm run build
npm run preview
npm run lint
```

### Project Structure (high level)
- `src/components` — UI components (navbar, hero, carousels, booking form, sections)
- `src/pages` — Routed pages (`haircare`, `skincare`, `book`)
- `public` — Static assets (images, icons, brand logos)
- `src/styles` — Global and module CSS

### Deployment
- Optimized for static hosting. A `vercel.json` is included; deploy easily with Vercel.
- Build and deploy:
```
npm run build
```
Upload the `dist` folder to your hosting provider, or use the Vercel CLI.

### License
This project is proprietary to Kumkum Beauty. All rights reserved.
