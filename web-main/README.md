# AdvanceSafe — advancesafe.in

Marketing site for **AdvanceSafe** (Advanced SOS Max). Built for Plant Heads, HSE Managers, and CFOs of Indian industrial factories.

## Tech

- **React 18** + **Vite 6**
- Google Fonts: Rajdhani (headings), DM Sans (body)
- Contact form submits to **Google Apps Script** (Sheet + email)
- No backend; static build deployable anywhere

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in `dist/`. Deploy that folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

```bash
npm run preview   # preview the production build locally
```

## Project structure

- `src/` — React app
  - `App.jsx` — layout, scroll progress, parallax, reveal
  - `components/` — Header, Hero, Pillars, HowItWorks, Features, WhyAdvanceSafe, ROI, About, Contact, Footer
- `index.html` — Vite entry
- `index-static.html` — original single-file HTML (backup)

## Sections

1. Hero — legal obligation + CTAs  
2. The 4 SMS Pillars — Safety Policy, Risk Management, Assurance, Promotion  
3. How It Works — Connect, Go Live, Stay Compliant  
4. Key Features — feature tiles  
5. Why AdvanceSafe — vs camera-only, manual, doing nothing  
6. ROI — stats + note  
7. About — Indian factories, Gandhinagar  
8. Contact — demo request form + phone, email, location  
9. Footer — logo, tagline, legal  

---

© 2025 Advanced SOS Max. AdvanceSafe is a product of Advanced SOS Max.
