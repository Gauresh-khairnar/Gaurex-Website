import { soundFx } from '../utils/sound';

const MILESTONES = [
  {
    year: '2021',
    icon: '🎓',
    title: 'AI & Machine Learning Engineering',
    org: 'K.K. Wagh Polytechnic, Nashik',
    desc: 'Specialized in machine learning models, neural networks, and computer vision. Appointed Vice President.',
  },
  {
    year: '2022',
    icon: '🛡️',
    title: 'Cyber Security Certification',
    org: 'MCyber Security Academy',
    desc: 'Mastered web vulnerability assessment, ethical hacking, and secure enterprise infrastructure architecture.',
  },
  {
    year: '2023',
    icon: '🤝',
    title: 'Rayba Foundation NGO Ownership',
    org: 'Social Impact & Education',
    desc: 'Founded and managing Rayba Foundation NGO, empowering underprivileged students with digital literacy.',
  },
  {
    year: '2024–Present',
    icon: '🚀',
    title: 'Gaurex Studio Launch',
    org: 'Intelligent Software Company',
    desc: 'Delivered 50+ software projects, ERP systems, AI agents, and mobile apps for schools, corporations, and businesses.',
  },
];

export default function FounderTimeline() {
  return (
    <div className="founder-timeline reveal" style={{ marginTop: '3rem' }}>
      <div className="calc-step-title" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        Founder Engineering Roadmap
      </div>

      <div className="timeline-track">
        {MILESTONES.map((m, idx) => (
          <div key={idx} className="timeline-item" onClick={() => soundFx.playClick()}>
            <div className="timeline-node">
              <span className="timeline-icon">{m.icon}</span>
            </div>
            <div className="timeline-content spotlight-card">
              <div className="timeline-year">{m.year}</div>
              <h4 className="timeline-title">{m.title}</h4>
              <div className="timeline-org">{m.org}</div>
              <p className="timeline-desc">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
