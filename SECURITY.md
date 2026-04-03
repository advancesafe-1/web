# Security — AdvanceSafe Web App

This is a **Vite + React** SPA (not Next.js). Security headers are set at **deploy time** via `vercel.json` (Vercel) or `public/_headers` (Netlify).

---

## ✅ Implemented

| Control | Where |
|--------|--------|
| **Security headers** | `vercel.json` and `public/_headers`: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection, Content-Security-Policy |
| **HTTPS** | Enforced via Strict-Transport-Security header; host over HTTPS only |
| **security.txt** | `public/.well-known/security.txt` — researchers can report issues to security@advancesafe.in |
| **XSS** | React escapes output; no unsafe `dangerouslySetInnerHTML` on user input |
| **Secrets** | `.env` and `.env.*.local` in `.gitignore`; no API secrets in repo. **Only use `VITE_` prefix for non-sensitive, public config** (e.g. `VITE_SITE_URL`). Server secrets must stay on the server (e.g. in Google Apps Script, not in client code). |
| **Form** | Honeypot, client-side validation, `maxLength` on inputs. Client-side rate limit (sessionStorage) for UX; **server-side rate limiting must be in your form backend** (e.g. Google Apps Script). |
| **Dependencies** | Run `npm audit` regularly; fix high/critical. Dependabot recommended. |

---

## 🔴 Do next (priority)

1. **Headers** — Deploy so that your host uses the headers in `vercel.json` (Vercel) or copies `public/_headers` (Netlify). For other hosts (Apache/Nginx), copy the same header names and values into server config.
2. **Rate limiting** — Add **server-side** rate limiting (and optionally CAPTCHA) in the backend that receives the contact/demo form (e.g. Google Apps Script or future API). Client-side limits can be bypassed.
3. **Env review** — If you add `.env`, never put secrets in variables that start with `VITE_`; they are bundled into the client.
4. **SSL** — If not on Vercel/Netlify, set a reminder to renew SSL before expiry (e.g. UptimeRobot for monitoring).

---

## 🟠 Recommended (this month)

- **Cookie consent** — For DPDPA 2023 (India), add a cookie/consent banner if you use non-essential cookies or analytics before consent.
- **CAPTCHA** — Add reCAPTCHA v3 (or similar) to contact/demo forms and verify the token on the server before accepting the submission.
- **Uptime + SSL monitoring** — e.g. UptimeRobot (free) for uptime and SSL expiry.
- **WAF** — Cloudflare (or similar) in front of the site for DDoS and common attacks.

---

## Security contact

Report vulnerabilities to **security@advancesafe.in**. See `https://www.advancesafe.in/.well-known/security.txt` for details.
