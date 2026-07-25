import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PROJECTS = [
  { title: 'SchoolSync ERP', category: 'Enterprise ERP', url: 'schoolsync.gaurex.ai', desc: 'Enterprise School Management ERP deployed across schools in Maharashtra.' },
  { title: 'NovaMind AI Sales Bot', category: 'AI Agent', url: 'novamind.ai', desc: 'LLM-powered sales qualification bot handling 800+ leads/month.' },
  { title: 'LuxeCommerce Platform', category: 'Web App', url: 'luxecommerce.store', desc: 'Headless Next.js e-commerce store with Sub-second loading.' },
  { title: 'DataVault BI Suite', category: 'Analytics', url: 'datavault.io', desc: 'Executive business intelligence dashboard with real-time SQL sync.' },
  { title: 'SwiftServe Logistics', category: 'Android App', url: 'play.google.com', desc: 'Cross-platform mobile logistics app with real-time GPS.' },
  { title: 'ReachBot WhatsApp', category: 'WhatsApp API', url: 'wa.me/reachbot', desc: 'Automated order processing and customer support chatbot.' },
];

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio — Gaurex Projects</title>
      </Head>
      <Navbar currentPath="/portfolio" />
      <main style={{ paddingTop: '8rem', minHeight: '80vh' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="subheading">Case Studies</p>
            <h1 className="display-lg" style={{ color: 'var(--text)', marginTop: '0.5rem' }}>
              Selected <span className="shine-text-gold">Work</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: '600px', margin: '1rem auto' }}>
              Real-world systems engineered for enterprises, institutions, and SMBs.
            </p>
          </div>

          <div className="portfolio-grid" style={{ marginBottom: '5rem' }}>
            {PROJECTS.map((p, idx) => (
              <div key={idx} className="portfolio-card spotlight-card">
                <div className="mockup-header">
                  <div className="mockup-dot red" />
                  <div className="mockup-dot yellow" />
                  <div className="mockup-dot green" />
                  <div className="mockup-title">{p.url}</div>
                </div>
                <div className="portfolio-card-info">
                  <div className="portfolio-card-tag">{p.category}</div>
                  <h3 className="portfolio-card-title">{p.title}</h3>
                  <p className="portfolio-card-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
