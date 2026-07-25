import { useState } from 'react';
import { soundFx } from '../utils/sound';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="comparison" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="subheading reveal">Impact Matrix</p>
          <h2 className="display-md reveal" style={{ marginTop: '0.75rem', color: 'var(--text)' }}>
            The Gaurex <span className="shine-text-gold">Transformation</span>
          </h2>
          <p className="body-lg reveal" style={{ maxWidth: '540px', margin: '1.25rem auto 0' }}>
            Drag the slider to compare traditional manual operations vs Gaurex automated systems.
          </p>
        </div>

        <div className="before-after-container reveal">
          <div className="before-after-box">
            {/* Before (Manual) Side */}
            <div className="before-side">
              <div className="side-badge red">BEFORE GAUREX (Manual & Slow)</div>
              <ul className="side-list">
                <li>❌ Manual paper attendance & slow fee tracking</li>
                <li>❌ Unanswered customer leads after working hours</li>
                <li>❌ Slow legacy websites with 5+ second load times</li>
                <li>❌ Disconnected Excel sheets & reporting errors</li>
                <li>❌ High staff overhead for repetitive phone calls</li>
              </ul>
            </div>

            {/* After (Gaurex) Side */}
            <div className="after-side" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
              <div className="side-badge green">AFTER GAUREX (Automated 10x Speed)</div>
              <ul className="side-list">
                <li>✅ 100% Automated School ERP & Instant WhatsApp Alerts</li>
                <li>✅ 24/7 AI Sales Agents qualifying leads instantly</li>
                <li>✅ Sub-second Next.js pages with 99/100 Lighthouse score</li>
                <li>✅ Unified Real-Time Executive BI Dashboards</li>
                <li>✅ AI Voice Call Agents booking appointments 24/7</li>
              </ul>
            </div>

            {/* Slider Handle Controls */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={e => {
                setSliderPos(Number(e.target.value));
                if (Math.abs(Number(e.target.value) - 50) % 20 === 0) soundFx.playClick();
              }}
              className="slider-range-input"
            />
            <div className="slider-handle-line" style={{ left: `${sliderPos}%` }}>
              <div className="slider-handle-button">↔</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
