/**
 * Contact configuration, sourced from Vite env vars (.env).
 *
 * VITE_WHATSAPP_NUMBER — digits only, with country code (e.g. 919876543210).
 * VITE_CONTACT_PHONE   — optional pretty display string (e.g. +91 98765 43210).
 *
 * Any change requires a dev-server restart / rebuild, since env vars are
 * inlined at build time by Vite.
 */

const raw = import.meta.env.VITE_WHATSAPP_NUMBER ?? ''

/** Digits-only WhatsApp number with country code, or '' if not configured. */
export const WHATSAPP_NUMBER = String(raw).replace(/\D/g, '')

/** Contact email, or '' if not configured. */
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? ''

/** Pretty display phone, falling back to auto-formatting the WhatsApp number. */
export const CONTACT_PHONE =
  import.meta.env.VITE_CONTACT_PHONE ?? (WHATSAPP_NUMBER ? autoFormat(WHATSAPP_NUMBER) : '')

function autoFormat(digits) {
  // 91 + 10-digit Indian mobile → +91 98765 43210
  if (digits.length === 12 && digits.startsWith('91')) {
    const d = digits.slice(2)
    return `+91 ${d.slice(0, 5)} ${d.slice(5)}`
  }
  return `+${digits}`
}

/** True when a WhatsApp number is configured. */
export const hasWhatsApp = WHATSAPP_NUMBER.length >= 10

/**
 * Build a wa.me checkout link with the order summary, or null when unconfigured.
 *
 * The message lists product names and quantities only — no total is sent;
 * the shop confirms price/total on WhatsApp.
 */
export function whatsappOrderLink(items) {
  if (!hasWhatsApp) return null
  const lines = items.map((it) => `• ${it.name} × ${it.qty}`).join('\n')
  const message =
    'Hello Farm Vet India! I would like to order:\n' +
    (lines ? lines + '\n' : '') +
    'Please confirm the total price and delivery details.'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
