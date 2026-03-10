# Security Review — AdvanceSafe React App

## Summary

A security review was performed on the codebase. **No critical vulnerabilities** were found. Findings and mitigations are below.

---

## ✅ What’s in good shape

| Area | Status |
|------|--------|
| **XSS** | React escapes output by default. Form feedback shows only app-defined strings, not raw user input as HTML. No `dangerouslySetInnerHTML`, `eval()`, or `innerHTML` usage. |
| **Dependencies** | `npm audit` reports **0 vulnerabilities** (React 18, Vite 6, @vitejs/plugin-react). |
| **External links** | `advancesafe.in`, `tel:`, `mailto:` use `rel="noopener noreferrer"` where relevant. No `target="_blank"` without it. |
| **Form** | Honeypot (`_gotcha`) present. Client-side validation (name regex, phone, email, required fields). Inputs use `maxLength` (e.g. name 100, message 1000). |
| **Secrets** | No API keys or secrets in repo. Google Apps Script URL is a public web app URL (acceptable in client code). |
| **Storage** | Only non-sensitive data in `sessionStorage` (rate-limit count/window). |

---

## ⚠️ Recommendations

### 1. Rate limiting is client-side only

- **Risk:** Bypass by disabling JS, using a different browser, or calling the script URL directly.
- **Mitigation:** Implement **server-side rate limiting** (and optionally CAPTCHA) in Google Apps Script (e.g. by IP or identifier). Client-side limit is UX only.

### 2. Server-side validation

- **Risk:** Malicious or malformed payloads can be POSTed directly to the script URL.
- **Mitigation:** In Apps Script `doPost(e)`, validate and sanitize all fields (type, length, format, required). Reject invalid requests and don’t trust client checks.

### 3. Content Security Policy (CSP)

- **Risk:** No CSP in place; if a future XSS appears, impact could be higher.
- **Mitigation:** Add a strict CSP in `index.html` (or via server headers) once all required script/style/font sources are known. Example (tune as needed):

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; connect-src 'self' https://script.google.com;">
```

### 4. Feedback message content

- **Current:** `feedback.msg` is only set from app-controlled strings.
- **Recommendation:** If you ever display user-supplied text in the UI, keep using React’s default escaping and avoid `dangerouslySetInnerHTML` for that content.

---

## Changes made in this review

- **index.html:** Added `X-Content-Type-Options: nosniff` and `Referrer-Policy: strict-origin-when-cross-origin`.
- **Contact.jsx:** Comment noting that rate limiting is client-side and that server-side rate limiting should be implemented in Apps Script.

---

## Checklist for production

- [ ] Enforce rate limiting (and optional CAPTCHA) in Google Apps Script.
- [ ] Validate and sanitize all inputs in `doPost(e)`.
- [ ] Consider adding CSP (and testing all features under it).
- [ ] Serve the app over HTTPS only.
- [ ] Keep dependencies updated (`npm audit`, `npm update`).
