/**
 * Safe JSON-LD string for inline <script type="application/ld+json">.
 * Escapes "<" so a string cannot break out of the script block (defense in depth).
 */
export function serializeJsonLd(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}
