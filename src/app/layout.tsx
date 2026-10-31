import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gaurex.vercel.app"),
  title: {
    default: "GAUREX | Business Technology & AI Solutions",
    template: "%s | GAUREX",
  },
  description: "GAUREX designs and builds intelligent software, AI agents, and business automation systems that eliminate operational bottlenecks and help businesses scale.",
  keywords: [
    "AI Solutions Company",
    "AI Agents Development",
    "Business Automation Services",
    "Custom Software Development",
    "Custom ERP Systems",
    "Business Management Software",
    "Executive Dashboards & Analytics",
    "Enterprise Technology Consulting"
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
    description: "Intelligent software, AI solutions and business automation systems that simplify operations and help growing businesses scale.",
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
    description: "Intelligent software, AI solutions and business automation systems that simplify operations and help growing businesses scale.",
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
        "founder": {
          "@type": "Person",
          "name": "Gauresh Khairnar"
        },
        "description": "Technology and business problem-solving company specializing in AI solutions, business automation, custom software, and ERP systems.",
        "slogan": "Your Problem. Our Technology. One Solution.",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "gaurex.ai@gmail.com",
          "contactType": "Customer Support & Technical Sales",
          "availableLanguage": ["English", "Hindi"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://gaurex.vercel.app/#website",
        "url": "https://gaurex.vercel.app",
        "name": "GAUREX",
        "publisher": {
          "@id": "https://gaurex.vercel.app/#organization"
        }
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
