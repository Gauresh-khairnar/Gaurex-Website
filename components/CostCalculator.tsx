import { useState, useEffect } from 'react';
import { soundFx } from '../utils/sound';

const OPTIONS = [
  { id: 'web', name: 'Corporate Website / Web App', price: 15000, days: 14, icon: '🌐' },
  { id: 'app', name: 'Native Android / Mobile App', price: 25000, days: 21, icon: '📱' },
  { id: 'bot', name: 'Intelligent AI Agent / Chatbot', price: 20000, days: 14, icon: '🤖' },
  { id: 'wa', name: 'WhatsApp Business Automation', price: 12000, days: 7, icon: '💬' },
  { id: 'erp', name: 'Enterprise ERP System', price: 80000, days: 60, icon: '🏢' },
  { id: 'dash', name: 'Analytics & BI Dashboard', price: 30000, days: 21, icon: '📊' },
];

export default function CostCalculator({ onBook }: { onBook: () => void }) {
  const [selected, setSelected] = useState<string[]>(['web', 'bot']);

  useEffect(() => {
    // Ensure all reveal elements inside calculator show immediately
    const els = document.querySelectorAll('#calculator .reveal');
    els.forEach(el => el.classList.add('is-visible'));
  }, []);

  const toggleOption = (id: string) => {
    soundFx.playClick();
    setSelected(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const totalPrice = selected.reduce((acc, id) => {
    const item = OPTIONS.find(o => o.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const totalDays = selected.reduce((acc, id) => {
    const item = OPTIONS.find(o => o.id === id);
    return Math.max(acc, item ? item.days : 0);
  }, 0);

  return (
    <section id="calculator" className="section" style={{ minHeight: '600px' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <p className="subheading reveal is-visible">Estimate Your Project</p>
          <h2 className="display-md reveal is-visible" style={{ marginTop: '0.75rem', color: 'var(--text)' }}>
            Project Cost <span className="shine-text-gold">Calculator</span>
          </h2>
          <p className="body-lg reveal is-visible" style={{ maxWidth: '540px', margin: '1.25rem auto 0' }}>
            Select your desired modules to get an instant cost and timeline estimate.
          </p>
        </div>

        <div className="calculator-wrap reveal is-visible">
          <div>
            <div className="calc-step-title">Step 1 — Choose Modules</div>
            <div className="calc-options-grid">
              {OPTIONS.map(opt => (
                <div
                  key={opt.id}
                  className={`calc-option${selected.includes(opt.id) ? ' selected' : ''}`}
                  onClick={() => toggleOption(opt.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.4rem' }}>{opt.icon}</span>
                    <input
                      type="checkbox"
                      checked={selected.includes(opt.id)}
                      readOnly
                      style={{ accentColor: 'var(--accent)' }}
                    />
                  </div>
                  <div className="calc-option-title" style={{ marginTop: '0.4rem' }}>{opt.name}</div>
                  <div className="calc-option-price">Starts at ₹{opt.price.toLocaleString('en-IN')}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="calc-summary-card">
            <div>
              <div className="calc-total-label">Estimated Investment</div>
              <div className="calc-total-amount">₹{totalPrice.toLocaleString('en-IN')}</div>
              <div className="calc-timeline">⏱ Estimated Timeline: <strong>{totalDays > 0 ? `${totalDays} Days` : 'Select modules'}</strong></div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Includes 90-day free post-launch support, SSL, SEO optimization & hosting setup.
              </p>
            </div>

            <button className="btn-primary" onClick={() => { soundFx.playSuccess(); onBook(); }}>
              <span>Book Call for This Quote</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
