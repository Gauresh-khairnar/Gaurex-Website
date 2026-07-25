import { useState, useEffect } from 'react';

const CODE_LINES = [
  "from gaurex import AIAgent, ERPEngine, NeuralPipeline",
  "import asyncio",
  "",
  "# Initialize Gaurex Intelligent Pipeline v4.2",
  "agent = AIAgent(name='SchoolSync-AI', model='gaurex-llm-v4')",
  "erp = ERPEngine(db='postgresql://gaurex_cluster:5432')",
  "",
  "@agent.on_lead_capture",
  "async def process_lead(lead_data):",
  "    score = await agent.evaluate_intent(lead_data)",
  "    if score > 0.85:",
  "        await erp.sync_crm(lead_data, status='HIGH_PRIORITY')",
  "        await agent.send_whatsapp_alert(to='+919579098477')",
  "        return {'status': 'SUCCESS', 'boost': '34%'}",
  "",
  "print('⚡ Gaurex Intelligence Engine Running at 100% Efficiency...')"
];

export default function CodeTerminal() {
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLine >= CODE_LINES.length) return;

    const timer = setTimeout(() => {
      if (charIndex < CODE_LINES[currentLine].length) {
        setCharIndex(prev => prev + 1);
      } else {
        setCharIndex(0);
        setCurrentLine(prev => prev + 1);
      }
    }, 25);

    return () => clearTimeout(timer);
  }, [currentLine, charIndex]);

  return (
    <div className="terminal-widget reveal">
      <div className="terminal-bar">
        <div style={{ display: 'flex', gap: '6px' }}>
          <span className="mockup-dot red" />
          <span className="mockup-dot yellow" />
          <span className="mockup-dot green" />
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
          gaurex-agent-engine.py — Python 3.11
        </div>
      </div>
      <div className="terminal-code">
        {CODE_LINES.slice(0, currentLine).map((line, i) => (
          <div key={i} className="terminal-line">{line || '\u00A0'}</div>
        ))}
        {currentLine < CODE_LINES.length && (
          <div className="terminal-line">
            {CODE_LINES[currentLine].substring(0, charIndex)}
            <span className="terminal-cursor">|</span>
          </div>
        )}
      </div>
    </div>
  );
}
