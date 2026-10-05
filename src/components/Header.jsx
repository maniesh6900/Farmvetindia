import { useEffect } from 'react'
import { CONTACT_PHONE } from '../lib/contact.js'

const LOGO_URL =
  'https://5.imimg.com/data5/SELLER/Logo/2025/12/567174742/MV/OW/XX/251009785/whatsapp-image-2025-12-12-at-11-59-57-am-copy-120x120.jpeg'

/**
 * Navbar with brand, search, and cart button.
 */
export default function Header({ query, onQuery, cartCount, onOpenCart }) {
  // Lock body scroll when mobile menu open isn't needed; keep simple.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault()
        document.getElementById('search-input')?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="header">
      {/* <div className="header-top">
        <span>🌿 100% Ayurvedic &amp; Nutraceutical Care</span>
        <span>🚚 Free delivery above ₹2,000</span>
        {CONTACT_PHONE && <span>📞 {CONTACT_PHONE}</span>}
      </div> */}
      <div className="header-main container">
        <a className="brand" href="#top" aria-label="Farm Vet India home">
          <img
            className="brand-logo"
            src={LOGO_URL}
            alt="Farm Vet India logo"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling?.classList.add('show')
            }}
          />
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" width="40" height="40">
              <circle cx="24" cy="24" r="22" fill="var(--leaf)" />
              <path
                d="M24 8c-6 5-10 9-10 16a10 10 0 0 0 20 0c0-7-4-11-10-16z"
                fill="var(--cream)"
              />
              <path d="M24 12v22" stroke="var(--leaf)" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M24 20l5-4M24 30l-5-4" stroke="var(--leaf)" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </span>
          <span className="brand-text">
            <strong>Farm Vet India</strong>
            <small>Ayurveda for Animals</small>
          </span>
        </a>

        <div className="search-wrap">
          <svg className="search-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            id="search-input"
            type="search"
            placeholder="Search Products"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            aria-label="Search products"
          />
        </div>

        <button className="cart-btn" onClick={onOpenCart} aria-label={`Open cart, ${cartCount} items`}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.8h7.7a2 2 0 0 0 2-1.6L21 8H6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20.4" r="1.6" fill="currentColor" />
            <circle cx="17" cy="20.4" r="1.6" fill="currentColor" />
          </svg>
          <span className="cart-count" aria-hidden="true">{cartCount}</span>
        </button>
      </div>
    </header>
  )
}
