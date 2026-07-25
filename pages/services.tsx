import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ALL_SERVICES = [
  { icon: '🌐', name: 'Premium Corporate Websites', desc: 'High-performance websites built with Next.js & React for speed, security, and conversion.', timeline: '2-4 weeks', price: '₹15,000' },
  { icon: '📱', name: 'Android & iOS Mobile Apps', desc: 'Cross-platform mobile applications using Flutter & Native Kotlin.', timeline: '4-8 weeks', price: '₹25,000' },
  { icon: '🤖', name: 'AI Agents & LLM Chatbots', desc: 'Custom trained AI agents operating 24/7 for lead capture and support.', timeline: '2-3 weeks', price: '₹20,000' },
  { icon: '💬', name: 'WhatsApp Automation', desc: 'Official WhatsApp Business API bots handling catalog orders & auto replies.', timeline: '1-2 weeks', price: '₹12,000' },
  { icon: '🏢', name: 'Enterprise ERP Systems', desc: 'End-to-end ERP solutions covering HR, Payroll, Inventory & Finance.', timeline: '8-16 weeks', price: '₹80,000' },
  { icon: '📊', name: 'Executive BI Dashboards', desc: 'Real-time interactive data analytics dashboards with PDF exports.', timeline: '3-5 weeks', price: '₹30,000' },
  { icon: '📞', name: 'AI Voice Call Agents', desc: 'Natural voice AI agents for appointment booking & customer support calls.', timeline: '3-6 weeks', price: '₹40,000' },
  { icon: '🧠', name: 'Custom Machine Learning Models', desc: 'Predictive analytics & computer vision models tailored to your data.', timeline: '4-12 weeks', price: '₹50,000' },
];

export default function ServicesPage() {
  const [filter, setFilter] = useState('all');

  return (
    <>
      <Head>
        <title>Services — Gaurex Intelligent Software</title>
      </Head>
      <Navbar currentPath="/services" />
      <main style={{ paddingTop: '8rem', minHeight: '80vh' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="subheading">Complete Offerings</p>
            <h1 className="display-lg" style={{ color: 'var(--text)', marginTop: '0.5rem' }}>
              Our <span className="shine-text-gold">Services</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: '600px', margin: '1rem auto' }}>
              Explore our end-to-end software engineering capabilities.
            </p>
          </div>

          <div className="services-grid" style={{ marginBottom: '5rem' }}>
            {ALL_SERVICES.map((s, idx) => (
              <div key={idx} className="service-card spotlight-card">
                <span className="service-icon">{s.icon}</span>
                <h3 className="service-name">{s.name}</h3>
                <p className="service-desc">{s.desc}</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--accent)' }}>
                  <span>⏱ {s.timeline}</span>
                  <span>Starts {s.price}</span>
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
