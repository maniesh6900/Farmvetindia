import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import ProductModal from './components/ProductModal.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [query, setQuery] = useState('') // header search (shared)
  const [cart, setCart] = useState([]) // [{id, name, price, unit, qty}]
  const [cartOpen, setCartOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(null)

  const cartCount = cart.reduce((s, it) => s + it.qty, 0)

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((it) => it.id === product.id)
      if (found) {
        return prev.map((it) => (it.id === product.id ? { ...it, qty: it.qty + 1 } : it))
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, unit: product.priceUnit ?? 'unit', qty: 1 }]
    })
  }

  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: it.qty + delta } : it))
        .filter((it) => it.qty > 0)
    )
  }

  const clearCart = () => setCart([])

  return (
    <>
      <Header query={query} onQuery={setQuery} cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero onShop={() => document.getElementById('remedies')?.scrollIntoView({ behavior: 'smooth' })} />
        <ProductGrid onOpen={setActiveProduct} onAdd={addToCart} query={query} onClearQuery={() => setQuery('')} />
        <TrustStrip />
      </main>
      <Footer />

      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onAdd={(p) => {
          addToCart(p)
          setActiveProduct(null)
        }}
      />
      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onQty={changeQty}
        onClear={clearCart}
      />
    </>
  )
}

/**
 * Small trust strip between grid and footer.
 */
function TrustStrip() {
  return (
    <section className="trust container">
      <div className="trust-item"><span>🌿</span><div><strong>Natural</strong><small>Herbal formulations</small></div></div>
      <div className="trust-item"><span>🐂</span><div><strong>Vet Approved</strong><small>Tested on real farms</small></div></div>
      <div className="trust-item"><span>🚚</span><div><strong>Fast Delivery</strong><small>Pan-India shipping</small></div></div>
      {/* <div className="trust-item"><span>💬</span><div><strong>Support</strong><small>Talk to our vets</small></div></div> */}
    </section>
  )
}
