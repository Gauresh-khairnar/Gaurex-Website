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
    default: "Business Automation Company | AI Solutions – GAUREX",
    template: "%s",
  },
  description: "GAUREX helps businesses automate operations, simplify workflows and solve complex problems through AI, custom software and intelligent technology.",
  keywords: [
    "Business automation company",
    "Business process automation company",
    "Business process automation services",
    "AI business automation services",
    "Workflow automation consulting",
    "Custom business automation solutions",
    "AI workflow automation agency",
    "ERP automation solutions",
    "Business operations automation",
    "Automated business workflows",
    "How to automate business processes"
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
  verification: {
    google: ["-UjmUtmGdJivi6Dt8OXBr7Ry38ght3OMZtrsC07r9ZE", "zYsDSmMzl6I1NW3u4w5hBTQ1WuMokCV1TC2DOGnBqRo"],
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
        <meta name="google-site-verification" content="-UjmUtmGdJivi6Dt8OXBr7Ry38ght3OMZtrsC07r9ZE" />
        <meta name="google-site-verification" content="zYsDSmMzl6I1NW3u4w5hBTQ1WuMokCV1TC2DOGnBqRo" />
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
