/**
 * Formats a price (in ₹) with Indian digit grouping.
 */
export function formatPrice(value) {
  if (value == null) return null
  return '₹' + new Intl.NumberFormat('en-IN').format(value)
}

/**
 * Derives an ayurveda-flavoured "essence" tag per product so the UI can
 * show a badge without hand-curating data. Deterministic per id.
 */
const TAGS = [
  { label: 'Vitality', emoji: '🌿' },
  { label: 'Strength', emoji: '🐂' },
  { label: 'Nourish', emoji: '🥛' },
  { label: 'Immunity', emoji: '🛡️' },
  { label: 'Balance', emoji: '⚖️' },
  { label: 'Energy', emoji: '☀️' },
]

export function essenceTag(product) {
  const key = String(product.id ?? product.name ?? '')
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0
  }
  return TAGS[hash % TAGS.length]
}

/**
 * Maps a product category to a leaf/animal emoji used as a category icon.
 */
export function categoryEmoji(category) {
  const c = (category || '').toLowerCase()
  if (c.includes('calcium')) return '🦴'
  if (c.includes('liver')) return '🌿'
  if (c.includes('feed')) return '🌾'
  if (c.includes('milk')) return '🥛'
  if (c.includes('injection') || c.includes('capsule')) return '💊'
  if (c.includes('gel')) return '🫙'
  if (c.includes('mineral')) return '⛰️'
  return '🐄'
}

/**
 * Picks the best available image for a product.
 */
export function productImage(product) {
  return product.imageHighResGuess || product.thumbnailImage || null
}

/**
 * True when a product is usable in the shop (has an id and image).
 */
export function isListed(product) {
  return Boolean(product.id)
}
