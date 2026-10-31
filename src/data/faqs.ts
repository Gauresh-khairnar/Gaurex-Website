export interface FAQItem {
  question: string;
  shortAnswer: string;
  explanation: string;
  example: string;
  linkText: string;
  linkHref: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What does GAUREX do?",
    shortAnswer: "GAUREX is a technology and business problem-solving firm. We identify operational bottlenecks in growing companies and engineer custom software, autonomous AI agent pipelines, custom ERP systems, and workflow automation to permanently solve them.",
    explanation: "Unlike generic web development agencies that bill for hours or SaaS vendors that sell rigid monthly licenses, GAUREX diagnoses the operational root cause of your friction before designing a tailored system around your exact business reality.",
    example: "Example: For a logistics company losing orders across scattered WhatsApp chats, GAUREX engineered an automated dispatch console that cut billing cycles from 5 days to under 15 minutes.",
    linkText: "Learn more about our core philosophy",
    linkHref: "/about",
  },
  {
    question: "What business problems can GAUREX solve?",
    shortAnswer: "GAUREX solves manual operational bottlenecks, disconnected software silos, lost leads, repetitive administrative data entry, lack of real-time business visibility, and inflexible off-the-shelf software limitations.",
    explanation: "If your staff spends hours copying data between spreadsheets, if leads slip through the cracks, or if managers lack real-time visibility into operations, GAUREX replaces those manual failure points with unified digital systems.",
    example: "Example: Automating document extraction from hundreds of monthly PDF vendor invoices directly into an accounting database without human re-keying.",
    linkText: "View all diagnosed operational bottlenecks",
    linkHref: "/#industries",
  },
  {
    question: "How can AI automation help a business?",
    shortAnswer: "AI automation eliminates routine manual triage, extracts structured data from unstructured documents, and handles 24/7 customer inquiries with autonomous tool-calling capabilities.",
    explanation: "Rather than building experimental chatbots, GAUREX builds deterministic AI agents embedded into your relational database and CRM. Agents read incoming emails, qualify leads, generate draft proposals, and update inventory ledgers automatically.",
    example: "Example: Deploying an AI agent that triages incoming client inquiries at 2:00 AM, checks technician availability, and books an inspection call without human latency.",
    linkText: "Explore our AI Solutions & Agents",
    linkHref: "/services/ai-solutions",
  },
  {
    question: "When does a business need custom software?",
    shortAnswer: "A business needs custom software when off-the-shelf SaaS forces your team into rigid templates, lacks critical custom workflows, or becomes prohibitively expensive due to per-seat monthly subscription fees.",
    explanation: "Ready-made software is built for the average company in an industry. When your competitive advantage relies on a proprietary process or compliance protocol that standard tools cannot handle, custom software provides absolute operational alignment and 100% intellectual property ownership.",
    example: "Example: A medical testing provider requiring specialized HIPAA-compliant patient intake that connects directly to legacy laboratory analyzers.",
    linkText: "Explore Custom Software Development",
    linkHref: "/services/custom-software",
  },
  {
    question: "What is an ERP system?",
    shortAnswer: "An ERP (Enterprise Resource Planning) system is a centralized platform that connects all operational units—such as inventory, service dispatch, employee timesheets, customer accounts, and billing—into a single authoritative source of truth.",
    explanation: "Instead of running accounting in one app, inventory in spreadsheets, and field communication in personal messaging, a custom ERP gives leadership real-time visibility across all departments and automates reconciliation.",
    example: "Example: Automatically deducting warehouse inventory and generating supplier re-order notifications the moment a field technician closes a work ticket.",
    linkText: "Explore custom ERP Systems",
    linkHref: "/services/erp-systems",
  },
  {
    question: "How can businesses automate repetitive work?",
    shortAnswer: "Businesses automate repetitive work by building event-driven API pipelines and background webhooks that trigger actions across software without human intervention.",
    explanation: "GAUREX maps your team's repetitive tasks, designs data transformations between your applications, and deploys cloud microservices that execute tasks instantly and flawlessly 24 hours a day.",
    example: "Example: When a client signs an agreement, the system automatically creates their folder in cloud storage, issues the first invoice, notifies the project manager, and provisions their portal login.",
    linkText: "Explore Business Process Automation",
    linkHref: "/services/business-automation",
  },
  {
    question: "How can businesses improve operational efficiency?",
    shortAnswer: "Businesses improve efficiency by eliminating manual hand-offs between departments, centralizing fragmented data, and replacing manual data entry with automated background software.",
    explanation: "Operational inefficiency is rarely a people problem; it is almost always a systems problem. By giving employees purpose-built software that removes administrative friction, team throughput increases dramatically while error rates drop to zero.",
    example: "Example: Replacing paper inspection clipboards with a synchronized mobile web portal that updates central dashboards in real time.",
    linkText: "Explore our 4-step engineering process",
    linkHref: "/#how-it-works",
  },
  {
    question: "What is the difference between custom software and ready-made software?",
    shortAnswer: "Ready-made software is a generic tool you rent monthly and must adapt your business to fit. Custom software is a tailored asset you own permanently that is engineered specifically around your exact operational workflows.",
    explanation: "Ready-made tools charge recurring monthly fees per employee and often hold your data hostage. Custom software has zero seat licenses, gives you 100% code ownership, and can be modified at any time as your business evolves.",
    example: "Example: An enterprise paying $40,000 annually in per-seat software licenses replacing those tools with a one-time custom system they own forever.",
    linkText: "Read about our 100% IP ownership guarantee",
    linkHref: "/about",
  },
  {
    question: "How can a business use AI to improve its processes?",
    shortAnswer: "A business can use AI to parse unstructured emails and PDF documents, automate tier-1 customer inquiries, identify data anomalies, and assist employees with instant institutional knowledge retrieval.",
    explanation: "The most profitable application of AI is not generating marketing copy, but embedding intelligent reasoning into internal operational pipelines where speed and accuracy directly save labor costs.",
    example: "Example: Ingesting 50-page complex technical blueprints into a private RAG database so engineers can query exact specifications in 3 seconds.",
    linkText: "Explore our AI implementation blueprint",
    linkHref: "/services/ai-solutions",
  },
  {
    question: "How can a business request a solution from GAUREX?",
    shortAnswer: "You can submit an inquiry via our B2B project form on our website or book a direct 15-minute video discovery call with Founder Gauresh Khairnar to review your operational bottlenecks.",
    explanation: "We review your requirements under strict commercial confidentiality and deliver a preliminary technical architecture review and feasibility assessment within 24 business hours.",
    example: "Example: Completing the 8-field inquiry form with your budget, timeline, and current problem description to receive a scheduled briefing.",
    linkText: "Submit an operational inquiry or book a call",
    linkHref: "/#contact",
  },
];

