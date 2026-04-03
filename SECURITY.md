# Security — AdvanceSafe Web App

This is a **Vite + React** SPA. Security headers are applied at the **edge** via `vercel.json` (Vercel) or `public/_headers` (Netlify). **Do not commit secrets**; use `VITE_` only for public configuration.

---

## Implemented controls

| Control | Details |
|--------|---------|
| **HTTPS + HSTS** | `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` |
| **Clickjacking** | `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'` |
| **MIME sniffing** | `X-Content-Type-Options: nosniff` |
| **Referrer** | `Referrer-Policy: strict-origin-when-cross-origin` |
| **Feature policy** | `Permissions-Policy` restricts camera, mic, geolocation, browsing-topics, payment, interest-cohort |
| **CSP** | See below; `object-src 'none'`; `upgrade-insecure-requests` |
| **XSS (baseline)** | React escapes text; JSON-LD uses `serializeJsonLd()` to escape `<` in inline scripts |
| **Analytics** | GA4 via gtag; init in `/gtag-init.js` (same-origin) so inline bootstrap is not required. Do not send PII in custom dimensions. |
| **Forms** | Honeypot field, client validation, sanitization of free-text fields, optional reCAPTCHA v3, sessionStorage rate limit (UX only) |
| **security.txt** | `public/.well-known/security.txt` |

---

## Content-Security-Policy (summary)

- **Scripts:** `'self'`, `'unsafe-inline'` (required for React-rendered JSON-LD `<script type="application/ld+json">`), Google tag manager / analytics, reCAPTCHA loader paths.
- **No `unsafe-eval`** in production headers (Vite production build does not rely on `eval`).
- **Styles:** `'self'`, `'unsafe-inline'`, `https://fonts.googleapis.com` (inline styles from React and Google Fonts CSS).
- **Fonts:** `'self'`, `https://fonts.gstatic.com`, `data:` (some UI fonts load as data URIs).
- **Images:** `'self'`, `data:`, `https:`.
- **Connect:** Analytics, Google Apps Script, Formspree (if used), Google endpoints for reCAPTCHA/GA as needed.
- **Frames:** reCAPTCHA domains only where needed.
- **SEO / crawlers:** CSP does not block bots; `robots` meta remains `index, follow`. Googlebot does not execute form spam; no change to crawlability.

Tightening further (e.g. **nonces** for every script) would require server-side HTML rewriting or a framework with SSR.

---

## Contact / demo form

1. **Client:** Validation, control-character stripping, worker-count pattern, honeypot, optional **reCAPTCHA v3** when `VITE_RECAPTCHA_SITE_KEY` is set.
2. **Server (required for enterprise):** Implement **rate limiting**, **reCAPTCHA secret verification**, and duplicate detection in **Google Apps Script** (or a future API). Client checks are **not** sufficient on their own.
3. **reCAPTCHA:** Add the site key to `.env` as `VITE_RECAPTCHA_SITE_KEY`. Store the **secret** only in Apps Script properties. Reject submissions when the token is missing, invalid, or score is below your threshold.

---

## Dependency hygiene

```bash
npm audit
npm audit fix
```

Use **Dependabot** or **Renovate** on the repo. Address **high/critical** findings promptly.

---

## Authentication

There is **no user login** in this marketing site. If you add an app with sessions, prefer **httpOnly, Secure, SameSite** cookies over localStorage tokens.

---

## Reporting

Report vulnerabilities to **security@advancesafe.in**. See `https://www.advancesafe.in/.well-known/security.txt`.
