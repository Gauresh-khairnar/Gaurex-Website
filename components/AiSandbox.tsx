import { useState } from 'react';
import { soundFx } from '../utils/sound';

const SAMPLE_PROMPTS = [
  "How can an AI Chatbot increase sales for my school?",
  "What modules are included in Gaurex ERP?",
  "Can you build a custom WhatsApp bot for my retail shop?",
  "Tell me about founder Gauresh Khairnar's achievements",
];

export default function AiSandbox() {
  const [prompt, setPrompt] = useState('');
  const [logs, setLogs] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "🤖 Gaurex AI Model Sandbox [v2.4 Ready]\nTry testing any prompt below or type your custom requirement!" }
  ]);
  const [loading, setLoading] = useState(false);

  const runPrompt = (textToRun: string) => {
    if (!textToRun.trim() || loading) return;
    soundFx.playClick();
    setLogs(prev => [...prev, { role: 'user', text: `> ${textToRun}` }]);
    setPrompt('');
    setLoading(true);

    setTimeout(() => {
      soundFx.playSuccess();
      let reply = "Gaurex AI solutions are custom-trained on your proprietary data using RAG (Retrieval-Augmented Generation) and fine-tuned LLM architectures for high precision.";
      const t = textToRun.toLowerCase();
      if (t.includes('school')) {
        reply = "🎓 School AI Solution: Our SchoolSync ERP + AI Agent handles 5,000+ student profiles, automates fee reminder alerts via WhatsApp, and provides 24/7 AI tutor assistance for parents and students.";
      } else if (t.includes('erp')) {
        reply = "🏢 Gaurex ERP includes: Inventory Management, HR & Payroll, Finance & Accounts, Order Tracking, Executive Dashboards, and Role-Based Multi-Branch Access.";
      } else if (t.includes('whatsapp') || t.includes('retail')) {
        reply = "💬 WhatsApp Retail Bot: Handles 500+ daily catalog queries, generates instant UPI payment links, captures customer leads, and syncs with your POS database automatically.";
      } else if (t.includes('gauresh') || t.includes('founder')) {
        reply = "👑 Founder Gauresh Deepak Khairnar: AI & ML Engineer at K.K. Wagh Polytechnic Nashik, Cyber Security Specialist, Rayba Foundation NGO Owner, and developer of 50+ completed software systems.";
      }

      setLogs(prev => [...prev, { role: 'ai', text: reply }]);
      setLoading(false);
    }, 700);
  };

  return (
    <section id="ai-sandbox" className="section">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <p className="subheading reveal">Interactive Playground</p>
          <h2 className="display-md reveal" style={{ marginTop: '0.75rem', color: 'var(--text)' }}>
            AI Live Demo <span className="shine-text">Sandbox</span>
          </h2>
          <p className="body-lg reveal" style={{ maxWidth: '540px', margin: '1.25rem auto 0' }}>
            Experience our conversational NLP intelligence model right on your browser.
          </p>
        </div>

        <div className="sandbox-wrap reveal">
          <div className="sandbox-header">
            <div className="sandbox-title">🟢 model: gaurex-llm-v2 (Latency: 14ms)</div>
            <button className="tag" onClick={() => setLogs([{ role: 'ai', text: '🤖 Sandbox reset. Ready for input!' }])}>Reset</button>
          </div>

          <div className="sandbox-screen">
            {logs.map((log, i) => (
              <div key={i} style={{ marginBottom: '1rem', color: log.role === 'user' ? 'var(--accent)' : 'var(--text-muted)' }}>
                {log.text}
              </div>
            ))}
            {loading && <div style={{ color: 'var(--accent-2)' }}>⏳ Processing NLP vectors...</div>}
          </div>

          <div style={{ padding: '0 1rem 0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {SAMPLE_PROMPTS.map((sp, idx) => (
              <button key={idx} className="quick-reply" onClick={() => runPrompt(sp)}>{sp}</button>
            ))}
          </div>

          <div className="sandbox-input-bar">
            <input
              className="sandbox-input"
              placeholder="Test prompt for AI model..."
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && runPrompt(prompt)}
            />
            <button className="btn-primary" style={{ padding: '0.6rem 1.2rem' }} onClick={() => runPrompt(prompt)}>
              <span>Run</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
