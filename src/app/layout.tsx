import type { Metadata, Viewport } from "next";
import "./globals.css";
import { faqs } from "@/data/faqs";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gaurex.vercel.app"),
  title: {
    default: "GAUREX | Business Technology, AI Solutions & Custom Software",
    template: "%s | GAUREX",
  },
  description: "GAUREX designs and builds intelligent software, AI solutions, custom ERP systems, and business process automation that eliminate operational bottlenecks and scale ambitious businesses.",
  keywords: [
    "AI Solutions Company",
    "Autonomous AI Agents Development",
    "Business Process Automation Services",
    "Custom Software Development Company",
    "Custom ERP Systems for SMEs",
    "Business Management Software",
    "Executive Dashboards & Analytics",
    "Enterprise Technology Consulting",
    "Workflow Automation India",
    "AI Consulting Nashik Maharashtra",
    "B2B Custom Software Engineering"
  ],
  authors: [{ name: "Gauresh Khairnar", url: "https://gaurex.vercel.app" }],
  creator: "Gauresh Khairnar",
  publisher: "GAUREX",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gaurex.vercel.app",
    siteName: "GAUREX",
    title: "GAUREX | Your Problem. Our Technology. One Solution.",
    description: "Intelligent software, AI solutions, custom ERP systems, and business process automation that simplify operations and help growing businesses scale.",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "GAUREX Monogram Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GAUREX | Business Technology & AI Solutions",
    description: "Intelligent software, AI solutions, custom ERP systems, and business process automation that simplify operations and help growing businesses scale.",
    images: ["/logo.jpg"],
    creator: "@gaurex",
  },
  alternates: {
    canonical: "https://gaurex.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gaurex.vercel.app/#organization",
        "name": "GAUREX",
        "url": "https://gaurex.vercel.app",
        "logo": "https://gaurex.vercel.app/logo.jpg",
        "image": "https://gaurex.vercel.app/logo.jpg",
        "founder": {
          "@type": "Person",
          "name": "Gauresh Khairnar",
          "jobTitle": "Founder & Principal Systems Architect",
          "url": "https://gaurex.vercel.app/about",
          "sameAs": [
            "https://www.linkedin.com/in/gauresh-khairnar/"
          ]
        },
        "description": "Technology and business problem-solving company specializing in AI solutions, autonomous agents, business process automation, custom software, and ERP systems.",
        "slogan": "Your Problem. Our Technology. One Solution.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nashik",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "United Arab Emirates" }
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": "gaurex.ai@gmail.com",
            "telephone": "+919579098477",
            "contactType": "Technical Sales & Enterprise Inquiries",
            "availableLanguage": ["English", "Hindi"]
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/in/gauresh-khairnar/",
          "https://github.com/Gauresh-khairnar"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://gaurex.vercel.app/#website",
        "url": "https://gaurex.vercel.app",
        "name": "GAUREX",
        "publisher": {
          "@id": "https://gaurex.vercel.app/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://gaurex.vercel.app/#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${faq.shortAnswer} ${faq.explanation} ${faq.example}`
          }
        }))
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-black selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
