import Head from 'next/head';
import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CostCalculator from '../components/CostCalculator';
import AiSandbox from '../components/AiSandbox';
import TextScramble from '../components/TextScramble';
import CodeTerminal from '../components/CodeTerminal';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import FounderTimeline from '../components/FounderTimeline';
import TechStackDrawer from '../components/TechStackDrawer';
import CursorTrail from '../components/CursorTrail';
import { soundFx } from '../utils/sound';

const DICTIONARY = {
  en: {
    heroSub: "From AI agents and ERP systems to premium websites and mobile apps — Gaurex crafts technology that transforms businesses, schools, and local enterprises.",
    heroTitle2: "Intelligent",
    heroBtn1: "Explore Services",
    heroBtn2: "Book Consultation",
    stats1: "Projects",
    stats2: "Happy Clients",
    stats3: "Satisfaction",
    aboutTitle: "Crafting Tomorrow's Technology, Today",
    founderTitle: "Meet The Visionary",
    processTitle: "Our Process",
    faqTitle: "Frequently Asked Questions",
    contactTitle: "Let's Build Something Extraordinary",
    langLabel: "हिंदी",
  },
  hi: {
    heroSub: "AI एजेंट्स, ERP सिस्टम, प्रीमियम वेबसाइट्स और मोबाइल ऐप्स से — गौरेक्स ऐसी तकनीक बनाता है जो व्यवसायों, स्कूलों और स्थानीय उद्यमों को बदल देती है।",
    heroTitle2: "इंटेलिजेंट",
    heroBtn1: "सेवाएं देखें",
    heroBtn2: "परामर्श बुक करें",
    stats1: "प्रोजेक्ट्स",
    stats2: "संतुष्ट क्लाइंट्स",
    stats3: "संतुष्टि दर",
    aboutTitle: "कल की तकनीक, आज बना रहे हैं",
    founderTitle: "संस्थापक से मिलें",
    processTitle: "हमारी कार्यप्रणाली",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    contactTitle: "आइए कुछ असाधारण बनाएं",
    langLabel: "English",
  }
};

const NLP_INTENTS = [
  { patterns: [/^(hi|hey|hello|hlo|hii+|hai|namaste|namaskar|good\s*(morning|afternoon|evening|day)|howdy|sup|yo)/i], responses: ["Hello! Welcome to Gaurex 👋 I'm your world-class AI assistant. How can I help you today?", "Hey! Great to see you. What project can Gaurex help you build today?"] },
  { patterns: [/how\s+are\s+you|how\s+r\s+u|hows\s+it\s+going|what.?s\s+up/i], responses: ["Running at 100% efficiency! 🤖 What can I help you with?"] },
  { patterns: [/thank|thanks|thx|appreciated/i], responses: ["You're welcome! Anything else I can help with? 😊"] },
  { patterns: [/price|cost|fee|budget|quote|how\s+much/i], responses: ["Our pricing is customized per project scope:\n\n• Websites: Starts ₹15,000\n• AI Chatbots: Starts ₹20,000\n• Android Apps: Starts ₹25,000\n• ERP Systems: Starts ₹80,000\n\n📧 gaurex.ai@gmail.com\n📞 +91 9579098477"] },
  { patterns: [/contact|reach|call|phone|email/i], responses: ["📞 +91 9579098477\n📧 gaurex.ai@gmail.com\n⏰ Mon–Sat, 9AM–7PM IST\n💬 WhatsApp: +91 9579098477"] },
  { patterns: [/founder|gauresh|khairnar|who\s+(made|built|started)/i], responses: ["Gaurex was founded by Gauresh Deepak Khairnar!\n\n🎓 AI & ML Engineer (K.K. Wagh Polytechnic VP)\n🛡️ Cyber Security Specialist\n🤝 Rayba Foundation NGO Owner\n💼 50+ completed software projects"] },
];
const FALLBACK = ["Good question! Reach founder Gauresh Khairnar directly at gaurex.ai@gmail.com or +91 9579098477 for instant details!", "I'd love to help you build that! Contact us at +91 9579098477 or gaurex.ai@gmail.com!"];

function nlpReply(input: string): string {
  const t = input.trim();
  for (const intent of NLP_INTENTS) {
    if (intent.patterns.some(p => p.test(t))) return intent.responses[Math.floor(Math.random() * intent.responses.length)];
  }
  return FALLBACK[Math.floor(Math.random() * FALLBACK.length)];
}

const SERVICES = [
  { icon: '🌐', name: 'Premium Websites', num: '01', desc: 'Corporate portals, e-commerce platforms & landing pages crafted with editorial precision and SEO excellence.', longDesc: 'We design and develop high-performance websites that rank on Google, convert visitors into customers, and reflect your brand identity with premium craftsmanship.', features: ['SEO Optimised', 'Mobile First', 'Performance 95+', 'CMS Ready'], tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL'], timeline: '2–6 weeks', startingAt: '₹15,000' },
  { icon: '📱', name: 'Mobile Applications', num: '02', desc: 'Native Android & cross-platform apps with intuitive UX and robust cloud backends.', longDesc: 'From concept to Play Store, we build mobile apps that users love — fast, reliable, and beautiful.', features: ['Native Android', 'Cross-Platform', 'Push Notifications'], tech: ['Flutter', 'Kotlin', 'Firebase'], timeline: '4–10 weeks', startingAt: '₹25,000' },
  { icon: '🤖', name: 'AI Agents & Chatbots', num: '03', desc: 'Intelligent conversational agents for customer support, sales, and internal automation.', longDesc: 'Our AI agents work 24/7, handling queries, qualifying leads, booking appointments.', features: ['NLP Powered', '24/7 Operation', 'Multi-language'], tech: ['Python', 'OpenAI', 'LangChain'], timeline: '2–4 weeks', startingAt: '₹20,000' },
  { icon: '💬', name: 'WhatsApp Automation', num: '04', desc: 'Automated WhatsApp chatbots for lead capture, support, and customer engagement at scale.', longDesc: 'Transform your WhatsApp into a powerful business tool — automated responses & order management.', features: ['Bulk Messaging', 'Lead Capture', 'Order Updates'], tech: ['WhatsApp API', 'Node.js', 'Python'], timeline: '1–3 weeks', startingAt: '₹12,000' },
  { icon: '🏢', name: 'ERP Systems', num: '05', desc: 'End-to-end enterprise resource planning — inventory, HR, finance, and reporting.', longDesc: 'Fully custom ERP solutions that streamline your operations and reduce manual work.', features: ['Inventory Mgmt', 'HR & Payroll', 'Finance Module'], tech: ['React', 'Node.js', 'PostgreSQL'], timeline: '8–20 weeks', startingAt: '₹80,000' },
  { icon: '📊', name: 'Dashboards & Analytics', num: '06', desc: 'Real-time business intelligence dashboards delivering actionable insights.', longDesc: 'See your business clearly. Our dashboards aggregate data from multiple sources.', features: ['Live KPIs', 'Custom Charts', 'Data Export'], tech: ['React', 'D3.js', 'Chart.js'], timeline: '3–6 weeks', startingAt: '₹30,000' },
];

const PROCESS_CARDS = [
  { num: '01', icon: '🔍', title: 'Discovery', body: 'Deep consultations to understand your goals, audience, and pain points.', tags: ['Research', 'Requirements'] },
  { num: '02', icon: '🗺️', title: 'Strategy', body: 'Architecture, tech stack, milestones, and success metrics.', tags: ['Architecture', 'Planning'] },
  { num: '03', icon: '✏️', title: 'Design', body: 'Interfaces that are both beautiful and purposeful. Every pixel earns its place.', tags: ['UI/UX', 'Prototyping'] },
  { num: '04', icon: '💻', title: 'Development', body: 'Clean, scalable, maintainable code. Rigorous testing at every stage.', tags: ['Coding', 'Testing'] },
  { num: '05', icon: '🚀', title: 'Deployment', body: 'Seamless go-live with full infrastructure setup and post-launch support.', tags: ['DevOps', 'CI/CD'] },
  { num: '06', icon: '📈', title: 'Evolution', body: 'Software grows with your business. Continuous enhancements & updates.', tags: ['Support', 'Scaling'] },
];

const CLIENT_LOGOS = [
  { name: 'Sunrise Academy', icon: '🏫' },
  { name: 'TechVista Corp', icon: '⚡' },
  { name: 'QuickServe Logistics', icon: '📦' },
  { name: 'HealthFirst Clinics', icon: '🏥' },
  { name: 'RetailEdge India', icon: '🛍️' },
  { name: 'Rayba NGO', icon: '🤝' },
];

const PORTFOLIO_MOCKUPS = [
  { tag: 'ERP System', title: 'SchoolSync Enterprise', desc: 'Complete School Management ERP handling 5,000+ students & automated fee tracking.', url: 'schoolsync.gaurex.ai' },
  { tag: 'AI Agent', title: 'NovaMind Sales Bot', desc: 'Conversational AI Agent qualifying 800+ leads/month with CRM sync.', url: 'novamind.ai' },
  { tag: 'Web Platform', title: 'LuxeCommerce Store', desc: 'High-performance headless e-commerce store with Sub-second loading.', url: 'luxecommerce.store' },
  { tag: 'Analytics Suite', title: 'DataVault BI Dashboard', desc: 'Executive real-time BI dashboard unifying sales & automated PDF reporting.', url: 'datavault.io' },
  { tag: 'Mobile App', title: 'SwiftServe Android App', desc: 'Cross-platform logistics app with real-time GPS tracking.', url: 'play.google.com' },
  { tag: 'WhatsApp Bot', title: 'ReachBot WhatsApp ERP', desc: 'WhatsApp API bot handling catalog searches & instant UPI payments.', url: 'wa.me/reachbot' },
];

const TESTIMONIALS = [
  { quote: "Gaurex transformed our school management entirely. Their ERP system saved us hundreds of hours each month.", name: "Priya Sharma", role: "Principal, Sunrise Academy" },
  { quote: "The WhatsApp chatbot handles 300+ queries daily. Revenue increased by 40%.", name: "Rahul Mehta", role: "Founder, QuickServe Pvt. Ltd." },
  { quote: "The dashboard gives us real-time visibility across all operations.", name: "Ananya Joshi", role: "COO, TechVista Corp." },
];

const FAQ_ITEMS = [
  { q: "What services does Gaurex specialize in?", a: "Gaurex is a full-stack software development agency. We specialize in custom Web Development, Android Apps, AI Agents & Chatbots, WhatsApp Automation, Custom ERP Systems, Executive Analytics Dashboards, and AI Call Agents." },
  { q: "How much does a project cost?", a: "Projects typically start from ₹15,000 for standard websites, ₹20,000 for AI chatbots, ₹25,000 for mobile apps, and ₹80,000 for enterprise ERP systems." },
  { q: "What is the typical development timeline?", a: "Websites and chatbots take 1 to 3 weeks. Mobile applications take 3 to 6 weeks. Enterprise ERP systems take 8 to 16 weeks." },
];

const MARQUEE_ITEMS = ['Websites', '✦', 'Mobile Apps', '✦', 'AI Agents', '✦', 'ERP Systems', '✦', 'WhatsApp Bots', '✦', 'Dashboards', '✦', 'Call Agents', '✦'];

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const scrollySectionRef = useRef<HTMLElement>(null);
  const scrollyTrackRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const t = DICTIONARY[lang];

  const [chatOpen, setChatOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [backToTop, setBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [formState, setFormState] = useState({ name: '', email: '', service: '', message: '' });
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | ''; msg: string }>({ type: '', msg: '' });
  const [submitting, setSubmitting] = useState(false);

  const [chatMessages, setChatMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    { role: 'bot', text: "Hello! 👋 I'm Gaurex Neural AI. Ask me about our services, pricing, founder info, AI agents, or book a free call!" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [typingBot, setTypingBot] = useState(false);
  const [heroDrawn, setHeroDrawn] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('gaurex_chat_history');
      if (saved) setChatMessages(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    if (chatMessages.length > 0) {
      try { localStorage.setItem('gaurex_chat_history', JSON.stringify(chatMessages)); } catch {}
    }
  }, [chatMessages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      loaderRef.current?.classList.add('hidden');
      setTimeout(() => setHeroDrawn(true), 400);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setBackToTop(scrolled > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Three.js Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const count = 2200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({ color: 0xFF4500, size: 0.025, transparent: true, opacity: 0.45, sizeAttenuation: true });
    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    let mouseX = 0, mouseY = 0;
    const onMM = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMM);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    let frame = 0;
    const animate = () => {
      frame++;
      const time = frame * 0.001;
      particles.rotation.y = time * 0.04 + mouseX * 0.08;
      particles.rotation.x = time * 0.02 + mouseY * 0.04;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('mousemove', onMM);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  const handleSpotlightMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).classList.add('is-visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const section = scrollySectionRef.current;
    const track = scrollyTrackRef.current;
    if (!section || !track) return;
    const totalCards = PROCESS_CARDS.length;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / sectionHeight);
      setActiveCard(Math.min(totalCards - 1, Math.floor(progress * totalCards)));

      const firstCard = track.children[0] as HTMLElement | null;
      if (!firstCard) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 20;
      const cardWidth = firstCard.offsetWidth;
      const maxShift = (cardWidth + gap) * (totalCards - 1);
      track.style.transform = `translateX(-${progress * maxShift}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const animate = (el: HTMLElement, target: number, suffix = '') => {
      let c = 0; const step = target / 60;
      const iv = setInterval(() => { c = Math.min(c + step, target); el.textContent = Math.floor(c) + suffix; if (c >= target) clearInterval(iv); }, 20);
    };
    const t = setTimeout(() => {
      document.querySelectorAll<HTMLElement>('[data-count]').forEach(el => animate(el, parseInt(el.dataset.count || '0'), el.dataset.suffix || ''));
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [chatMessages, typingBot]);

  const sendChat = useCallback(async (text: string) => {
    if (!text.trim()) return;
    soundFx.playClick();
    setChatMessages(prev => [...prev, { role: 'user', text }]);
    setChatInput('');
    setTypingBot(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      soundFx.playSuccess();
      setTypingBot(false);
      setChatMessages(prev => [...prev, { role: 'bot', text: data.reply || nlpReply(text) }]);
    } catch {
      soundFx.playSuccess();
      setTypingBot(false);
      setChatMessages(prev => [...prev, { role: 'bot', text: nlpReply(text) }]);
    }
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSuccess();
    setSubmitting(true);
    setFormStatus({ type: '', msg: '' });
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.send('service_gaurex', 'template_gaurex', {
        from_name: formState.name,
        from_email: formState.email,
        service: formState.service,
        message: formState.message,
        to_email: 'gaurex.ai@gmail.com'
      }, 'YOUR_EMAILJS_PUBLIC_KEY');
      setFormStatus({ type: 'success', msg: '✦ Message delivered directly to Gauresh Khairnar. We\'ll respond within 24 hours.' });
      setFormState({ name: '', email: '', service: '', message: '' });
    } catch {
      const subject = encodeURIComponent(`New inquiry from ${formState.name}`);
      const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nService: ${formState.service}\n\n${formState.message}`);
      window.open(`mailto:gaurex.ai@gmail.com?subject=${subject}&body=${body}`);
      setFormStatus({ type: 'success', msg: '✦ Opening your email client. We look forward to hearing from you.' });
    } finally { setSubmitting(false); }
  };

  const scrollTo = (id: string) => {
    soundFx.playClick();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openBookingModal = () => {
    soundFx.playModalOpen();
    setBookingOpen(true);
  };

  return (
    <>
      <Head>
        <title>Gaurex — Intelligent Software Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <CursorTrail />

      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="loader" ref={loaderRef}>
        <div className="loader-logo">Gaur<span>ex</span></div>
        <div className="loader-progress"><div className="loader-progress-bar" /></div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>Loading</p>
      </div>

      <Navbar currentPath="/" />

      {/* BOOKING MODAL */}
      <div className={`booking-modal-overlay${bookingOpen ? ' open' : ''}`} onClick={e => { if ((e.target as HTMLElement).classList.contains('booking-modal-overlay')) setBookingOpen(false); }}>
        <div className="booking-modal-panel">
          <div className="booking-top-bar">
            <div className="booking-title">📅 Book a Free 30-Min Consultation</div>
            <button className="modal-close" onClick={() => setBookingOpen(false)}>✕</button>
          </div>
          <div className="booking-body">
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Speak directly with founder <strong>Gauresh Deepak Khairnar</strong> to discuss your project scope & pricing.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
              <a href="https://wa.me/919579098477?text=Hi%20Gaurex,%20I%20want%20to%20book%20a%20consultation" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: 'var(--whatsapp)', justifyContent: 'center' }}>
                <span>Book via WhatsApp (+91 9579098477)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="scanlines">
        {/* HERO */}
        <section id="hero">
          <canvas id="webgl-canvas" ref={canvasRef} />
          <div className="morph-blob"><div className="morph-blob-inner" /></div>

          <div className="svg-hero-draw">
            <svg viewBox="0 0 400 500" fill="none">
              <path className={`draw-path${heroDrawn ? ' drawn' : ''}`} d="M200 20 L380 120 L380 380 L200 480 L20 380 L20 120 Z" />
              <circle className={`draw-path${heroDrawn ? ' drawn' : ''}`} cx="200" cy="250" r="100" style={{ transitionDelay: '0.6s' }} />
            </svg>
          </div>

          <div className="container hero-content">
            <div className="hero-eyebrow">
              <span className="morph-accent">Intelligent Software Studio</span>
            </div>
            <h1 className="display-xl hero-title">
              <span className="line">We Build</span>
              <span className="line shine-text">
                <TextScramble text={t.heroTitle2} />
              </span>
              <span className="line">Software</span>
            </h1>
            <p className="body-lg hero-subtitle">{t.heroSub}</p>
            <div className="hero-actions">
              <button className="btn-primary border-beam" onClick={() => scrollTo('services')}>
                <span className="border-beam-inner" style={{ background: 'transparent', color: 'inherit' }}>
                  {t.heroBtn1}
                </span>
              </button>
              <button className="btn-outline" onClick={openBookingModal}>
                <span>{t.heroBtn2}</span>
              </button>
            </div>
            <div className="hero-stats">
              {[{ num: '150', sfx: '+', label: t.stats1 }, { num: '50', sfx: '+', label: t.stats2 }, { num: '99', sfx: '%', label: t.stats3 }].map(s => (
                <div className="stat-item" key={s.label}>
                  <div className="stat-number" data-count={s.num} data-suffix={s.sfx}>0{s.sfx}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <CodeTerminal />
          </div>

          <div className="hero-marquee">
            <div className="hero-marquee-inner">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => <span key={i}>{item}</span>)}
            </div>
          </div>
        </section>

        {/* DUAL MARQUEE */}
        <div className="client-strip">
          <div className="client-strip-title">Trusted By Institutions & Forward-Thinking Businesses</div>
          <div className="client-logos-track marquee-reverse">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, i) => (
              <div className="client-logo-item" key={i}>
                <span className="client-logo-icon">{client.icon}</span>
                <span>{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="section" style={{ background: 'var(--surface)' }}>
          <div className="container">
            <div className="about-grid">
              <div className="about-visual">
                <div className="about-image-frame">
                  <div className="about-image-inner">
                    <span className="about-monogram">G</span>
                  </div>
                </div>
                <div className="about-tagline-box"><p>"Where intelligence meets craftsmanship"</p></div>
              </div>
              <div>
                <p className="subheading reveal">About Gaurex</p>
                <h2 className="display-md reveal" style={{ marginTop: '0.75rem', color: 'var(--text)' }}>
                  <TextScramble text={t.aboutTitle} />
                </h2>
                <p className="body reveal" style={{ marginTop: '1.5rem' }}>Gaurex is a boutique software studio specialising in AI agents, ERP systems, web platforms, and mobile applications.</p>
                <div className="about-signature reveal">— The Gaurex Studio</div>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER & TIMELINE */}
        <section id="founder" className="section">
          <div className="founder-bg-text">FOUNDER</div>
          <div className="container">
            <div className="founder-grid">
              <div className="founder-portrait">
                <div className="founder-frame">
                  <div className="founder-monogram">GK</div>
                </div>
                <div className="founder-badge">
                  <div className="founder-badge-title">Projects Completed</div>
                  <div className="founder-badge-val">50+ Projects</div>
                </div>
              </div>
              <div>
                <p className="subheading reveal">{t.founderTitle}</p>
                <h2 className="founder-name reveal" style={{ marginTop: '0.75rem' }}>
                  <TextScramble text="Gauresh Deepak Khairnar" />
                </h2>
                <p className="founder-role reveal">AI & ML Engineer · Cyber Security Specialist · Entrepreneur</p>
                <p className="founder-bio reveal">Founder of Gaurex, Vice President at K.K. Wagh Polytechnic Nashik, and owner of Rayba Foundation NGO.</p>
              </div>
            </div>

            <FounderTimeline />
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section" style={{ background: 'var(--surface)' }}>
          <div className="container">
            <div className="services-header">
              <div>
                <p className="subheading reveal">What We Do</p>
                <h2 className="display-md reveal" style={{ marginTop: '0.75rem', color: 'var(--text)' }}>
                  Our <span className="shine-text-gold"><TextScramble text="Services" /></span>
                </h2>
              </div>
            </div>
          </div>
          <div className="services-grid reveal">
            {SERVICES.map((s, i) => (
              <div
                className="service-card spotlight-card holo-card"
                key={s.num}
                onMouseMove={handleSpotlightMouseMove}
              >
                <div className="service-number">{s.num}</div>
                <span className="service-icon">{s.icon}</span>
                <h3 className="service-name">{s.name}</h3>
                <p className="service-desc">{s.desc}</p>
                <button
                  className="service-arrow"
                  onClick={() => { soundFx.playModalOpen(); setActiveService(i); }}
                >
                  <span>Explore</span>
                </button>
              </div>
            ))}
          </div>

          <TechStackDrawer />
        </section>

        {/* BEFORE VS AFTER SLIDER */}
        <BeforeAfterSlider />

        {/* CALLOUT BANNER */}
        <div className="callout-banner reveal">
          <div className="container">
            <p className="subheading" style={{ marginBottom: '1.25rem' }}>Next-Gen Software Studio</p>
            <h2 className="callout-title">
              WE TRANSFORM COMPLEX IDEAS INTO <span className="shine-text-gold"><TextScramble text="INTELLIGENT" /></span> DIGITAL REALITY
            </h2>
            <div style={{ marginTop: '2rem' }}>
              <button className="btn-primary border-beam" onClick={openBookingModal}>
                <span className="border-beam-inner" style={{ background: 'transparent', color: 'inherit' }}>
                  Start Your Project
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* COST CALCULATOR */}
        <CostCalculator onBook={openBookingModal} />

        {/* AI SANDBOX */}
        <AiSandbox />

        {/* SCROLLYTELLING */}
        <section id="process" className="scrolly-section" ref={scrollySectionRef} style={{ height: `${(PROCESS_CARDS.length - 1) * 55 + 110}vh` }}>
          <div className="scrolly-sticky">
            <div className="scrolly-header">
              <div>
                <p className="subheading" style={{ marginBottom: '0.5rem' }}>How We Work</p>
                <h2 className="display-md" style={{ color: 'var(--text)' }}>
                  Our <span className="shine-text"><TextScramble text="Process" /></span>
                </h2>
              </div>
            </div>
            <div ref={scrollyTrackRef} className="scrolly-cards-track">
              {PROCESS_CARDS.map((card, i) => (
                <div key={card.num} className={`scrolly-card spotlight-card holo-card${activeCard === i ? ' is-active' : ''}`} onMouseMove={handleSpotlightMouseMove}>
                  <div className="scrolly-card-top-line" />
                  <div className="scrolly-card-num">{card.num}</div>
                  <span className="scrolly-card-icon">{card.icon}</span>
                  <h3 className="scrolly-card-title">{card.title}</h3>
                  <p className="scrolly-card-body">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO MOCKUPS */}
        <section id="portfolio" className="section" style={{ background: 'var(--black)' }}>
          <div className="container">
            <div style={{ marginBottom: '2rem' }}>
              <p className="subheading reveal">Our Work</p>
              <h2 className="display-md reveal" style={{ marginTop: '0.75rem', color: 'var(--text)' }}>
                Selected <span className="shine-text-gold"><TextScramble text="Projects" /></span>
              </h2>
            </div>
            <div className="portfolio-grid reveal">
              {PORTFOLIO_MOCKUPS.map((item, i) => (
                <div className="portfolio-card spotlight-card holo-card" key={i} onMouseMove={handleSpotlightMouseMove}>
                  <div className="mockup-header">
                    <div className="mockup-dot red" /><div className="mockup-dot yellow" /><div className="mockup-dot green" />
                    <div className="mockup-title">{item.url}</div>
                  </div>
                  <div className="portfolio-card-info">
                    <div className="portfolio-card-tag">{item.tag}</div>
                    <h3 className="portfolio-card-title">{item.title}</h3>
                    <p className="portfolio-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="section" style={{ background: 'var(--surface)' }}>
          <div className="container">
            <p className="subheading reveal" style={{ textAlign: 'center' }}>Client Voices</p>
            <h2 className="display-md reveal" style={{ textAlign: 'center', marginTop: '0.75rem', color: 'var(--text)' }}>What Our Clients Say</h2>
          </div>
          <div style={{ overflow: 'hidden', marginTop: '3rem' }}>
            <div className="testimonials-track">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div className="testimonial-card holo-card" key={i}>
                  <p className="testimonial-quote">"{t.quote}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.name[0]}</div>
                    <div><div className="testimonial-name">{t.name}</div><div className="testimonial-role">{t.role}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section id="faq" className="section" style={{ background: 'var(--black)' }}>
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <p className="subheading reveal">Got Questions?</p>
              <h2 className="display-md reveal" style={{ marginTop: '0.75rem', color: 'var(--text)' }}>{t.faqTitle}</h2>
            </div>
            <div className="faq-grid reveal">
              {FAQ_ITEMS.map((item, idx) => (
                <div className={`faq-item${openFaq === idx ? ' open' : ''}`} key={idx}>
                  <button className="faq-question" onClick={() => { soundFx.playClick(); setOpenFaq(openFaq === idx ? null : idx); }}>
                    <span>{item.q}</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer"><p>{item.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section" style={{ background: 'var(--surface)' }}>
          <div className="container">
            <div className="contact-grid">
              <div>
                <p className="subheading reveal">Get In Touch</p>
                <h2 className="display-md reveal" style={{ marginTop: '0.75rem', color: 'var(--text)' }}>
                  Let's Build Something <span className="shine-text"><TextScramble text="Extraordinary" /></span>
                </h2>
              </div>
              <div className="reveal">
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" required placeholder="Your full name" value={formState.name} onChange={e => setFormState(p => ({ ...p, name: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input className="form-input" type="email" required placeholder="your@email.com" value={formState.email} onChange={e => setFormState(p => ({ ...p, email: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea className="form-textarea" required placeholder="Tell us about your project..." value={formState.message} onChange={e => setFormState(p => ({ ...p, message: e.target.value }))} />
                  </div>
                  <button className="form-submit border-beam" type="submit" disabled={submitting}>
                    <span className="border-beam-inner" style={{ background: 'transparent', color: 'inherit' }}>
                      {submitting ? 'Sending...' : 'Send Message ✦'}
                    </span>
                  </button>
                  {formStatus.msg && <p className={`form-message ${formStatus.type}`}>{formStatus.msg}</p>}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* FLOATING ACTION BUTTONS */}
      <div className="floating-actions">
        <a href="https://wa.me/919579098477" target="_blank" rel="noreferrer" className="whatsapp-trigger" onClick={() => soundFx.playClick()}>💬</a>
        <button className={`chatbot-trigger${chatOpen ? ' open' : ''}`} onClick={() => { soundFx.playClick(); setChatOpen(!chatOpen); }}>{chatOpen ? '✕' : '🤖'}</button>
      </div>

      <button className={`back-to-top-trigger${backToTop ? ' visible' : ''}`} onClick={() => { soundFx.playClick(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>↑</button>

      {/* CHATBOT WINDOW */}
      <div className={`chatbot-window${chatOpen ? ' open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-left">
            <div className="chatbot-avatar">G</div>
            <div className="chatbot-info"><h4>Gaurex Neural AI</h4><p>Online — 24/7</p></div>
          </div>
          <button className="chat-clear-btn" onClick={() => setChatMessages([])}>Clear</button>
        </div>
        <div className="chatbot-messages">
          {chatMessages.map((msg, i) => (
            <div className={`chat-msg ${msg.role}`} key={i}>
              <div className="chat-bubble" style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>
            </div>
          ))}
          {typingBot && <div className="chat-msg bot"><div className="chat-bubble">Thinking... 🤖</div></div>}
          <div ref={chatEndRef} />
        </div>
        <div className="chatbot-quick-replies">
          {['Hi 👋', 'Services', 'Pricing', 'Founder Info', 'WhatsApp'].map(qr => (
            <button key={qr} className="quick-reply" onClick={() => sendChat(qr)}>{qr}</button>
          ))}
        </div>
        <div className="chatbot-input-wrap">
          <input className="chatbot-input" placeholder="Ask Gaurex AI anything..." value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendChat(chatInput)} />
          <button className="chatbot-send" onClick={() => sendChat(chatInput)}>➜</button>
        </div>
      </div>
    </>
  );
}
