import { useMemo } from 'react'
import { formatPrice, essenceTag, categoryEmoji, productImage } from '../lib/helpers.js'

/**
 * Product card — ayurveda-styled with image, price, category chip, essence tag.
 */
export default function ProductCard({ product, onOpen }) {
  const img = productImage(product)
  const tag = useMemo(() => essenceTag(product), [product])
  const chip = categoryEmoji(product.category)

  return (
    <article className="card" onClick={() => onOpen(product)}>
      <div className="card-media">
        {img ? (
          <img
            src={img}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.parentElement.classList.add('no-img')
            }}
          />
        ) : null}
        <span className="card-fallback" aria-hidden="true">🐄</span>
        <span className="card-chip" aria-hidden="true">{chip}</span>
        <span className="card-tag">{tag.emoji} {tag.label}</span>
      </div>

      <div className="card-body">
        <p className="card-cat">{product.category}</p>
        <h3 className="card-name">{product.name}</h3>
        <p className="card-desc">
          {product.description
            ? product.description.slice(0, 90) + (product.description.length > 90 ? '…' : '')
            : 'Traditional formulation for daily cattle wellness.'}
        </p>
        <div className="card-foot">
          <span className="card-price">
            {product.price != null ? (
              <>
                {formatPrice(product.price)}
                <small> / {product.priceUnit ?? 'unit'}</small>
              </>
            ) : (
              <span className="card-ask">Ask for price</span>
            )}
          </span>
          <button
            className="btn btn-mini"
            onClick={(e) => {
              e.stopPropagation()
              onOpen(product)
            }}
          >
            View
          </button>
        </div>
      </div>
    </article>
  )
}
