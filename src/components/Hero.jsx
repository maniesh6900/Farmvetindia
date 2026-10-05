/**
 * Hero section — big ayurveda + animal theme statement.
 */
export default function Hero({ onShop }) {
  return (
    <section className="hero" id="top">
      <div className="hero-inner container">
        <div className="hero-copy">
          <p className="hero-eyebrow">🌱 Ayurveda · Nutrition · Care</p>
          <h1>
            Ancient herbs. <em>Modern</em> animal care.
          </h1>
          <p className="hero-sub">
            Farm Vet India blends classical ayurvedic wisdom with veterinary science — mineral
            mixtures, calcium gels and liver tonics that keep your cows &amp; buffaloes healthy,
            productive and content.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onShop}>
              Shop Remedies <span aria-hidden="true">→</span>
            </button>
            <a className="btn btn-ghost" href="#remedies">
              Explore Categories
            </a>
          </div>
          <ul className="hero-stats" aria-label="Trust indicators">
            <li><strong>2,000+</strong><span>Happy farmers</span></li>
            <li><strong>100%</strong><span>Natural ingredients</span></li>
            <li><strong>ISO</strong><span>Certified unit</span></li>
          </ul>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-leaf hero-leaf-1">🌿</div>
          <div className="hero-leaf hero-leaf-2">🍃</div>
          <div className="hero-leaf hero-leaf-3">🌾</div>
          <div className="hero-cow">
            <svg viewBox="0 0 220 180" width="220" height="180">
              {/* body */}
              <ellipse cx="110" cy="105" rx="62" ry="42" fill="var(--cream-deep)" />
              {/* head */}
              <ellipse cx="52" cy="82" rx="26" ry="30" fill="var(--cream-deep)" />
              {/* ears */}
              <ellipse cx="30" cy="60" rx="10" ry="6" fill="var(--cream-deep)" transform="rotate(-25 30 60)" />
              <ellipse cx="74" cy="60" rx="10" ry="6" fill="var(--cream-deep)" transform="rotate(25 74 60)" />
              {/* horns */}
              <path d="M38 52c-6-8-4-16 2-18 2 8 6 10 8 14z" fill="var(--tan)" />
              <path d="M66 52c6-8 4-16-2-18-2 8-6 10-8 14z" fill="var(--tan)" />
              {/* hump */}
              <ellipse cx="120" cy="58" rx="20" ry="16" fill="var(--cream-deep)" />
              {/* eyes */}
              <circle cx="44" cy="78" r="3" fill="var(--bark)" />
              <circle cx="62" cy="78" r="3" fill="var(--bark)" />
              {/* muzzle */}
              <ellipse cx="53" cy="96" rx="14" ry="9" fill="var(--tan)" />
              <circle cx="47" cy="96" r="2" fill="var(--bark)" />
              <circle cx="59" cy="96" r="2" fill="var(--bark)" />
              {/* legs */}
              <rect x="70" y="140" width="9" height="30" rx="4" fill="var(--cream-deep)" />
              <rect x="92" y="142" width="9" height="28" rx="4" fill="var(--cream-deep)" />
              <rect x="128" y="142" width="9" height="28" rx="4" fill="var(--cream-deep)" />
              <rect x="150" y="140" width="9" height="30" rx="4" fill="var(--cream-deep)" />
              {/* leaf garland */}
              <path d="M40 66q10 10 24 2" stroke="var(--leaf)" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="52" cy="68" r="4" fill="var(--leaf)" />
            </svg>
          </div>
        </div>
      </div>
      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path
            d="M0,60 C240,110 480,10 720,45 C960,80 1200,20 1440,55 L1440,90 L0,90 Z"
            fill="var(--cream)"
          />
        </svg>
      </div>
    </section>
  )
}
