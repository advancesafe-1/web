/**
 * Optional Google reCAPTCHA v3 — set VITE_RECAPTCHA_SITE_KEY in env.
 * Verify the token server-side (e.g. Google Apps Script) before accepting the form.
 */
const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export function isRecaptchaConfigured() {
  return typeof SITE_KEY === 'string' && SITE_KEY.trim().length > 0;
}

function loadScript() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('No window'));
      return;
    }
    if (window.grecaptcha?.execute) {
      resolve();
      return;
    }
    const existing = document.querySelector('script[data-recaptcha-v3]');
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('reCAPTCHA script failed')));
      return;
    }
    const s = document.createElement('script');
    s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(SITE_KEY.trim())}`;
    s.async = true;
    s.defer = true;
    s.dataset.recaptchaV3 = '1';
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('reCAPTCHA script failed'));
    document.head.appendChild(s);
  });
}

/**
 * @param {string} [action='demo_request']
 * @returns {Promise<string|null>} token or null if reCAPTCHA is not configured
 */
export async function getRecaptchaToken(action = 'demo_request') {
  if (!isRecaptchaConfigured()) return null;
  await loadScript();
  const key = SITE_KEY.trim();
  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(key, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}
