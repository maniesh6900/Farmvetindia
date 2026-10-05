import { formatPrice } from '../lib/helpers.js'
import { whatsappOrderLink } from '../lib/contact.js'

/**
 * Cart drawer — slide-in panel listing items with qty controls and total.
 */
export default function CartDrawer({ open, items, onClose, onQty, onClear }) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0)
  const waLink = whatsappOrderLink(items)

  return (
    <>
      <div className={`drawer-overlay ${open ? 'show' : ''}`} onClick={onClose} />
      <div className="drawer-root">
        <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open} aria-label="Shopping cart">
        <header className="drawer-head">
          <h3>🛒 Your Basket</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close cart">×</button>
        </header>

        {items.length === 0 ? (
          <div className="drawer-empty">
            <span aria-hidden="true">🌿</span>
            <p>Your basket is empty.</p>
            <small>Add some ayurvedic goodness for your animals.</small>
          </div>
        ) : (
          <>
            <ul className="drawer-list">
              {items.map((it) => (
                <li key={it.id} className="drawer-item">
                  <div className="drawer-item-info">
                    <strong>{it.name}</strong>
                    <small>{formatPrice(it.price)} / {it.unit}</small>
                  </div>
                  <div className="qty">
                    <button onClick={() => onQty(it.id, -1)} aria-label={`Decrease ${it.name}`}>−</button>
                    <span>{it.qty}</span>
                    <button onClick={() => onQty(it.id, +1)} aria-label={`Increase ${it.name}`}>+</button>
                  </div>
                  <strong className="drawer-item-total">{formatPrice(it.price * it.qty)}</strong>
                  <button
                    className="drawer-remove"
                    onClick={() => onQty(it.id, -it.qty)}
                    aria-label={`Remove ${it.name}`}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            <footer className="drawer-foot">
              <div className="drawer-total">
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <p className="drawer-note">🌱 Free delivery above ₹2,000 · COD available</p>
              {waLink ? (
                <a
                  className="btn btn-primary drawer-checkout"
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order on WhatsApp
                </a>
              ) : (
                <button className="btn btn-primary drawer-checkout" disabled>
                  WhatsApp not configured
                </button>
                )}
              <button className="btn btn-ghost" onClick={onClear}>Clear basket</button>
            </footer>
          </>
        )}
      </aside>
      </div>
    </>
  )
}
