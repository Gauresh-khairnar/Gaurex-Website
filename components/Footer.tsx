import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-logo">Gaur<span>ex</span></div>
            <p className="footer-tagline">Crafting intelligent software solutions for businesses that refuse to settle for ordinary.</p>
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">in</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">gh</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">ig</a>
              <a href="https://wa.me/919579098477" target="_blank" rel="noreferrer">wa</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Pages</div>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/calculator">Cost Calculator</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><Link href="/services">Websites & Apps</Link></li>
              <li><Link href="/services">AI Agents & Chatbots</Link></li>
              <li><Link href="/services">WhatsApp Automation</Link></li>
              <li><Link href="/services">ERP Systems</Link></li>
              <li><Link href="/services">BI Dashboards</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Direct Contact</div>
            <ul className="footer-links">
              <li><a href="tel:+919579098477">+91 9579098477</a></li>
              <li><a href="https://wa.me/919579098477" target="_blank" rel="noreferrer">WhatsApp Direct</a></li>
              <li><a href="mailto:gaurex.ai@gmail.com">gaurex.ai@gmail.com</a></li>
              <li><a href="mailto:Khairnargauresh01@gmail.com">Founder Direct</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© {new Date().getFullYear()} Gaurex. All rights reserved. Founded by Gauresh Deepak Khairnar.</p>
          <div className="footer-bottom-links">
            <Link href="/contact">Privacy</Link>
            <Link href="/contact">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
