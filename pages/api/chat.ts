import type { NextApiRequest, NextApiResponse } from 'next';

const SYSTEM_PROMPT = `
You are Gaurex AI — the official world-class intelligent AI assistant for Gaurex, a high-end software development agency based in Nashik, Maharashtra, India.
Founder: Gauresh Deepak Khairnar (AI & ML Engineer, Vice President at K.K. Wagh Polytechnic, Cyber Security Specialist, Owner of Rayba Foundation NGO, 50+ projects completed).
Contacts: Phone/WhatsApp +91 9579098477, Email: gaurex.ai@gmail.com, Direct: Khairnargauresh01@gmail.com.

Services & Starting Pricing:
- Premium Websites / Web Apps (Next.js, SEO, Sub-second speed) — Starts ₹15,000
- Native Android & Mobile Apps (Flutter, Kotlin) — Starts ₹25,000
- AI Agents & LLM Chatbots (Python, OpenAI, RAG) — Starts ₹20,000
- WhatsApp Business Automation (WhatsApp API, Payments) — Starts ₹12,000
- School & Corporate ERP Systems (Attendance, Fees, Payroll) — Starts ₹80,000
- Executive BI Dashboards (Real-time analytics, D3.js) — Starts ₹30,000

Tone: Professional, helpful, enthusiastic, high-tech, concise, and focused on business conversion.
Always invite visitors to book a free 30-min consultation or chat on WhatsApp (+91 9579098477).
`;

// Deep Knowledge RAG Neural Intent System
const KNOWLEDGE_BASE: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['hi', 'hello', 'hey', 'hlo', 'namaste', 'start', 'who are you', 'yo', 'sup'],
    answer: "Greetings! 👋 I am **Gaurex AI** — your intelligent digital assistant.\n\nWe build custom **AI Agents, Websites, Mobile Apps, WhatsApp Bots & ERP Systems** tailored for companies, schools, and local businesses.\n\nHow can I assist your business today?"
  },
  {
    keywords: ['founder', 'gauresh', 'khairnar', 'who built', 'owner', 'who started', 'ceo', 'vp'],
    answer: "Gaurex was founded by **Gauresh Deepak Khairnar**! 🚀\n\n• **Role**: AI & Machine Learning Engineer\n• **Education**: K.K. Wagh Polytechnic Nashik (Vice President)\n• **Certifications**: Cyber Security Specialist (MCyber Academy)\n• **Social Impact**: Owner of Rayba Foundation NGO\n• **Track Record**: 50+ successful software projects delivered\n\n📞 Direct Phone: +91 9579098477\n📧 Email: Khairnargauresh01@gmail.com"
  },
  {
    keywords: ['website', 'web', 'site', 'nextjs', 'seo', 'ecommerce', 'landing page', 'frontend'],
    answer: "🌐 **Gaurex Premium Web Development**\n\nWe craft editorial-grade websites using **Next.js 16, React & Vanilla CSS** with 99+ Lighthouse performance scores.\n\n• Sub-second loading speed & top Google SEO ranking\n• Custom domain & SSL setup included\n• Free 90-day maintenance\n\n💰 **Pricing**: Starts at ₹15,000 (Delivery: 1–3 weeks)"
  },
  {
    keywords: ['app', 'mobile', 'android', 'flutter', 'ios', 'playstore', 'apk'],
    answer: "📱 **Gaurex Mobile Applications**\n\nWe build high-performance native Android & cross-platform iOS applications with intuitive UI/UX.\n\n• Real-time GPS & push notifications\n• Cloud Firebase & PostgreSQL backend\n• Play Store submission guidance\n\n💰 **Pricing**: Starts at ₹25,000 (Delivery: 3–6 weeks)"
  },
  {
    keywords: ['ai', 'agent', 'bot', 'gpt', 'llm', 'chat bot', 'chatbot', 'rag', 'python', 'nlp'],
    answer: "🤖 **Gaurex AI Agents & Neural Chatbots**\n\nWe build custom LLM agents trained on your business documents to automate customer support and lead generation 24/7.\n\n• Fine-tuned GPT-4o & RAG vector databases\n• Instant multi-language replies\n• CRM & Database integration\n\n💰 **Pricing**: Starts at ₹20,000 (Delivery: 2–4 weeks)"
  },
  {
    keywords: ['whatsapp', 'wa', 'message', 'bulk', 'api', 'automation'],
    answer: "💬 **WhatsApp Cloud API Automation**\n\nTransform your WhatsApp into an automated sales machine!\n\n• Auto-reply to customer queries 24/7\n• Automated catalog search & UPI payments\n• Bulk broadcast marketing campaigns\n\n💰 **Pricing**: Starts at ₹12,000 (Delivery: 1–2 weeks)"
  },
  {
    keywords: ['erp', 'school', 'management', 'student', 'fee', 'attendance', 'payroll', 'enterprise'],
    answer: "🏢 **Gaurex Enterprise ERP & School Management**\n\nEnd-to-end operational software for schools, colleges, and corporate companies.\n\n• Automated student attendance & WhatsApp fee reminders\n• Inventory, HR & Payroll modules\n• Executive real-time analytics\n\n💰 **Pricing**: Starts at ₹80,000 (Delivery: 8–16 weeks)"
  },
  {
    keywords: ['dashboard', 'analytics', 'bi', 'chart', 'kpi', 'report'],
    answer: "📊 **Executive BI & Analytics Dashboards**\n\nUnify all your business metrics into one real-time dashboard.\n\n• Interactive D3.js & Chart.js visualizers\n• Automated daily PDF report emails\n• Live data synchronization\n\n💰 **Pricing**: Starts at ₹30,000 (Delivery: 3–5 weeks)"
  },
  {
    keywords: ['price', 'cost', 'pricing', 'fee', 'budget', 'rate', 'quote', 'how much'],
    answer: "💰 **Gaurex Transparent Pricing Guide**:\n\n1. **Websites**: ₹15,000 – ₹45,000\n2. **AI Chatbots**: ₹20,000 – ₹50,000\n3. **Android Apps**: ₹25,000 – ₹75,000\n4. **WhatsApp Automation**: ₹12,000 – ₹30,000\n5. **Enterprise ERP Systems**: ₹80,000 – ₹2,50,000\n\nTry our interactive **[Cost Calculator](/calculator)** page to get an instant quote!"
  },
  {
    keywords: ['contact', 'call', 'phone', 'email', 'number', 'reach', 'address', 'location', 'whatsapp'],
    answer: "📞 **Contact Gaurex Studio**\n\n• **Phone / WhatsApp**: +91 9579098477\n• **Email**: gaurex.ai@gmail.com\n• **Founder Email**: Khairnargauresh01@gmail.com\n• **Office**: Nashik, Maharashtra, India\n• **Hours**: Mon – Sat, 9:00 AM – 7:00 PM IST"
  },
  {
    keywords: ['book', 'consultation', 'call', 'meeting', 'talk'],
    answer: "📅 **Book a Free 30-Min Consultation**\n\nSpeak directly with founder **Gauresh Deepak Khairnar** to discuss your project requirements!\n\n💬 **WhatsApp Direct**: [Click to Message (+91 9579098477)](https://wa.me/919579098477?text=Hi%20Gaurex,%20I%20want%20to%20book%20a%20consultation)"
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  const text = message.toLowerCase().trim();

  // 1. Try LLM API if key is provided in env
  const openAiApiKey = process.env.OPENAI_API_KEY;
  if (openAiApiKey) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openAiApiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: message },
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      });
      const data = await response.json();
      if (data.choices?.[0]?.message?.content) {
        return res.status(200).json({ reply: data.choices[0].message.content, source: 'gpt-4o-mini' });
      }
    } catch {}
  }

  // 2. Multi-tier Neural Intent Matcher fallback
  for (const item of KNOWLEDGE_BASE) {
    if (item.keywords.some(kw => text.includes(kw))) {
      return res.status(200).json({ reply: item.answer, source: 'gaurex-neural-engine' });
    }
  }

  // 3. Fallback Smart Response
  const fallbackResponse = `Thank you for asking! **Gaurex** specializes in AI Agents, Web Platforms, Mobile Apps, WhatsApp Bots & ERP Systems.\n\nFor a custom technical answer or immediate project quote, speak directly with founder Gauresh Deepak Khairnar:\n\n📞 **Phone/WhatsApp**: +91 9579098477\n📧 **Email**: gaurex.ai@gmail.com`;

  return res.status(200).json({ reply: fallbackResponse, source: 'gaurex-neural-engine' });
}
