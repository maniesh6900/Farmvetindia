import { useEffect } from 'react'
import { formatPrice, productImage, categoryEmoji } from '../lib/helpers.js'

/**
 * Product detail modal.
 */
export default function ProductModal({ product, onClose, onAdd }) {
  useEffect(() => {
    if (!product) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.classList.add('modal-open')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('modal-open')
    }
  }, [product, onClose])

  if (!product) return null
  const img = productImage(product)
  const chip = categoryEmoji(product.category)

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-media">
          {img ? (
            <img src={img} alt={product.name} onError={(e) => (e.currentTarget.style.display = 'none')} />
          ) : null}
          <span className="card-fallback" aria-hidden="true">🌿</span>
        </div>
        <div className="modal-info">
          <p className="card-cat">
            {chip} {product.category}
          </p>
          <h2>{product.name}</h2>
          <div className="modal-price">
            {product.price != null ? (
              <>
                {formatPrice(product.price)} <small>/ {product.priceUnit ?? 'unit'}</small>
              </>
            ) : (
              <span className="card-ask">Ask for price</span>
            )}
          </div>
          <p className="modal-desc">
            {product.description ??
              'A traditional Farm Vet India formulation crafted for daily cattle health and productivity.'}
          </p>

          {product.specs && (
            <ul className="modal-specs">
              {Object.entries(product.specs).map(([k, v]) => (
                <li key={k}>
                  <strong>{k.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}:</strong> {v}
                </li>
              ))}
            </ul>
          )}

          <div className="modal-actions">
            {product.price != null && (
              <button className="btn btn-primary" onClick={() => onAdd(product)}>
                Add to Cart
              </button>
            )}
            {product.productUrl && (
              <a className="btn btn-ghost" href={product.productUrl} target="_blank" rel="noreferrer">
                Source Listing ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
