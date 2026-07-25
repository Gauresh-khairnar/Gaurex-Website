import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nService: ${formState.service}\n\n${formState.message}`);
    window.open(`mailto:gaurex.ai@gmail.com?subject=${subject}&body=${body}`);
    setStatus('✦ Opening your email client to send message!');
  };

  return (
    <>
      <Head>
        <title>Contact Us — Gaurex</title>
      </Head>
      <Navbar currentPath="/contact" />
      <main style={{ paddingTop: '8rem', minHeight: '80vh' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="subheading">Start A Conversation</p>
            <h1 className="display-lg" style={{ color: 'var(--text)', marginTop: '0.5rem' }}>
              Get In <span className="shine-text">Touch</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: '540px', margin: '1rem auto' }}>
              We'd love to hear about your project and build something extraordinary together.
            </p>
          </div>

          <div className="contact-grid" style={{ marginBottom: '5rem' }}>
            <div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📞</div>
                <div><div className="contact-detail-label">Phone</div><a href="tel:+919579098477" className="contact-detail-value">+91 9579098477</a></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📧</div>
                <div><div className="contact-detail-label">Email</div><a href="mailto:gaurex.ai@gmail.com" className="contact-detail-value">gaurex.ai@gmail.com</a></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">💬</div>
                <div><div className="contact-detail-label">WhatsApp</div><a href="https://wa.me/919579098477" className="contact-detail-value">+91 9579098477 (Instant)</a></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <div><div className="contact-detail-label">Location</div><div className="contact-detail-value">Nashik, Maharashtra, India</div></div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input className="form-input" required placeholder="Your Name" value={formState.name} onChange={e => setFormState(p => ({ ...p, name: e.target.value }))} />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input className="form-input" type="email" required placeholder="your@email.com" value={formState.email} onChange={e => setFormState(p => ({ ...p, email: e.target.value }))} />
              </div>
              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea className="form-textarea" required placeholder="Project details..." value={formState.message} onChange={e => setFormState(p => ({ ...p, message: e.target.value }))} />
              </div>
              <button className="form-submit" type="submit"><span>Send Message ✦</span></button>
              {status && <p style={{ color: '#4ADE80', marginTop: '1rem', textAlign: 'center', fontSize: '0.85rem' }}>{status}</p>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
