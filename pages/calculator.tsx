import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CostCalculator from '../components/CostCalculator';
import { soundFx } from '../utils/sound';

export default function CalculatorPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleBook = () => {
    soundFx.playModalOpen();
    setBookingOpen(true);
  };

  return (
    <>
      <Head>
        <title>Project Cost Calculator — Gaurex</title>
      </Head>
      <Navbar currentPath="/calculator" />

      {/* BOOKING CONSULTATION MODAL */}
      <div className={`booking-modal-overlay${bookingOpen ? ' open' : ''}`} onClick={e => { if ((e.target as HTMLElement).classList.contains('booking-modal-overlay')) setBookingOpen(false); }}>
        <div className="booking-modal-panel">
          <div className="booking-top-bar">
            <div className="booking-title">📅 Book Consultation for Selected Quote</div>
            <button className="modal-close" onClick={() => setBookingOpen(false)}>✕</button>
          </div>
          <div className="booking-body">
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Speak directly with founder <strong>Gauresh Deepak Khairnar</strong> to confirm your selected module options, scope, and delivery timeline.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
              <a
                href="https://wa.me/919579098477?text=Hi%20Gaurex,%20I%20used%20the%20Cost%20Calculator%20and%20want%20to%20confirm%20my%20quote"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ background: 'var(--whatsapp)', justifyContent: 'center' }}
              >
                <span>Confirm Quote via WhatsApp (+91 9579098477)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main style={{ paddingTop: '7rem', minHeight: '85vh' }}>
        <CostCalculator onBook={handleBook} />
      </main>

      <Footer />
    </>
  );
}
