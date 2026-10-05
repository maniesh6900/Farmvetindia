import { CONTACT_PHONE, CONTACT_EMAIL, WHATSAPP_NUMBER } from '../lib/contact.js'

/**
 * Footer.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>🌿 Farm Vet India</h4>
          <p>
            Ayurvedic and nutraceutical animal health products — crafted for Indian dairy farmers
            who treat their cattle like family.
          </p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="#remedies">All Remedies</a></li>
            <li><a href="#remedies">Mineral Mixtures</a></li>
            <li><a href="#remedies">Calcium Gels</a></li>
            <li><a href="#remedies">Liver Tonics</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            {WHATSAPP_NUMBER && (
              <li>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                  📞 {CONTACT_PHONE || 'WhatsApp us'}
                </a>
              </li>
            )}
            {CONTACT_EMAIL && (
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`}>✉️ {CONTACT_EMAIL}</a>
              </li>
            )}
            <li>📍 India</li>
          </ul>
        </div>
        <div>
          <h4>Trust</h4>
          <ul>
            <li>✅ ISO Certified</li>
            <li>🐂 Vet Approved</li>
            <li>🚚 Pan-India Delivery</li>
          </ul>
        </div>
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} Farm Vet India · Ayurveda for Animals</span>
        <span>Made with 🌿 for happy cattle</span>
      </div>
    </footer>
  )
}
