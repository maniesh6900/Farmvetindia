import { useMemo, useState } from 'react'
import products from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import { isListed } from '../lib/helpers.js'

/**
 * Toolbar with category pills, sort dropdown, results count; renders grid.
 * `query` comes from the header search bar; parent clears it via onClearQuery.
 */
export default function ProductGrid({ onOpen, onAdd, query = '', onClearQuery }) {
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')
  const [localQuery, setLocalQuery] = useState('')

  // Header search is the primary query; the shelf filter refines it further.
  const effectiveQuery = query || localQuery

  const all = products.filter(isListed)

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(all.map((p) => p.category)))],
    [all]
  )

  const visible = useMemo(() => {
    let list = all
    if (category !== 'All') list = list.filter((p) => p.category === category)
    if (effectiveQuery.trim()) {
      const q = effectiveQuery.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.category ?? '').toLowerCase().includes(q) ||
          (p.description ?? '').toLowerCase().includes(q)
      )
    }
    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity))
        break
      case 'price-desc':
        list = [...list].sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity))
        break
      case 'name':
        list = [...list].sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }
    return list
  }, [all, category, effectiveQuery, sort])

  return (
    <section className="section container" id="remedies">
      <div className="section-head">
        <div>
          <p className="section-eyebrow">🧺 The Remedy Shelf</p>
          <h2>Handpicked for your herd</h2>
        </div>
        {/* <input
          type="search"
          className="grid-search"
          placeholder="Refine within results…"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          aria-label="Refine products"
        /> */}
      </div>

      <div className="toolbar">
        <div className="pills" role="tablist" aria-label="Categories">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              className={`pill ${category === c ? 'active' : ''}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <select className="sort" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
          <option value="featured">Sort: Featured</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="name">Name: A → Z</option>
        </select>
      </div>

      {(query || localQuery) && (
        <p className="results-meta">
          {visible.length} result{visible.length !== 1 ? 's' : ''} for “{query || localQuery}”
          {(query || localQuery) && (
            <button
              className="clear-search"
              onClick={() => {
                setLocalQuery('')
                onClearQuery?.()
              }}
            >
              Clear search ✕
            </button>
          )}
        </p>
      )}

      {visible.length === 0 ? (
        <div className="empty">
          <p>🌱 No remedies match “{effectiveQuery || category}”.</p>
          <button
            className="btn btn-ghost"
            onClick={() => {
              setLocalQuery('')
              setCategory('All')
              onClearQuery?.()
            }}
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={onOpen} onAdd={onAdd} />
          ))}
        </div>
      )}
    </section>
  )
}
