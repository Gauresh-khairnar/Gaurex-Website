import { useState } from 'react';
import { soundFx } from '../utils/sound';

const TECH_SNIPPETS: Record<string, { title: string; code: string; desc: string }> = {
  'Next.js': {
    title: 'Next.js 16 App Router & Turbopack',
    desc: 'Sub-second SSR & SSG compilation for maximum Google SEO ranking and instant page transitions.',
    code: `// pages/api/insights.ts\nimport type { NextApiRequest, NextApiResponse } from 'next';\nexport default async function handler(req: NextApiRequest, res: NextApiResponse) {\n  const metrics = await fetchGaurexMetrics();\n  res.status(200).json({ status: 'OPTIMAL', score: 99, metrics });\n}`
  },
  'Python': {
    title: 'Python 3.11 FastAPI & LangChain AI',
    desc: 'High-throughput async endpoints powering our custom LLM chatbots and voice call agents.',
    code: `# server/ai_engine.py\nfrom fastapi import FastAPI\nfrom langchain.chains import RetrievalQA\n\napp = FastAPI(title="Gaurex AI Core")\n@app.post("/predict")\nasync def predict(prompt: str):\n    return await qa_chain.arun(prompt)`
  },
  'OpenAI': {
    title: 'GPT-4o & Fine-Tuned RAG Vectors',
    desc: 'Custom-trained vector embeddings ensuring 100% factual responses based on company documentation.',
    code: `import { OpenAIEmbeddings } from "@langchain/openai";\nimport { PineconeStore } from "@langchain/pinecone";\n\nconst vectorStore = await PineconeStore.fromExistingIndex(\n  new OpenAIEmbeddings(),\n  { pineconeIndex }\n);`
  },
  'WhatsApp API': {
    title: 'Meta WhatsApp Business Cloud API',
    desc: 'Official WhatsApp API webhook handling 500+ automated catalog searches & UPI payments daily.',
    code: `// webhooks/whatsapp.ts\nexport async function handleWhatsAppWebhook(payload: any) {\n  const message = payload.entry[0].changes[0].value.messages[0];\n  await sendWhatsAppTemplate(message.from, 'order_confirmed');\n}`
  },
  'PostgreSQL': {
    title: 'PostgreSQL & Prisma ORM',
    desc: 'Acid-compliant relational data modeling engineered for high-concurrency school & enterprise ERPs.',
    code: `// prisma/schema.prisma\nmodel Student {\n  id        String   @id @default(uuid())\n  name      String\n  feesPaid  Boolean  @default(false)\n  createdAt DateTime @default(now())\n}`
  }
};

export default function TechStackDrawer() {
  const [selectedTech, setSelectedTech] = useState<string>('Next.js');
  const activeSnippet = TECH_SNIPPETS[selectedTech];

  return (
    <div className="tech-drawer-wrap reveal" style={{ marginTop: '2.5rem' }}>
      <div className="calc-step-title" style={{ marginBottom: '1rem', textAlign: 'center' }}>
        Interactive Tech Stack Inspector
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
        {Object.keys(TECH_SNIPPETS).map(tech => (
          <button
            key={tech}
            className={`tag${selectedTech === tech ? ' active-tech' : ''}`}
            onClick={() => {
              soundFx.playClick();
              setSelectedTech(tech);
            }}
            style={selectedTech === tech ? { borderColor: 'var(--accent)', color: 'var(--accent)', background: 'rgba(255,69,0,0.1)' } : {}}
          >
            {tech}
          </button>
        ))}
      </div>

      {activeSnippet && (
        <div className="tech-snippet-box spotlight-card">
          <div className="mockup-header">
            <div className="mockup-title">{activeSnippet.title}</div>
          </div>
          <div className="portfolio-card-info">
            <p className="body" style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>{activeSnippet.desc}</p>
            <pre className="terminal-code" style={{ padding: '1rem', background: '#0a0a0a', border: '1px solid var(--border)', borderRadius: '4px', overflowX: 'auto', fontSize: '0.8rem', color: '#4ADE80' }}>
              <code>{activeSnippet.code}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
