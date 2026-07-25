import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gaurex",
    "image": "https://gaurex.ai/og-image.png",
    "@id": "https://gaurex.ai/#organization",
    "url": "https://gaurex.ai",
    "telephone": "+919579098477",
    "email": "gaurex.ai@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nashik",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Gauresh Deepak Khairnar",
      "jobTitle": "AI & ML Engineer",
      "alumniOf": "K.K. Wagh Polytechnic Nashik"
    },
    "sameAs": [
      "https://linkedin.com",
      "https://github.com",
      "https://instagram.com"
    ],
    "description": "Gaurex is a software development agency specializing in AI Agents, Custom Software, ERP Systems, Mobile Apps, and Websites."
  };

  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="description" content="Gaurex — Premium software development company delivering websites, AI agents, ERP systems, mobile apps, chatbots, and WhatsApp automation for enterprises, schools, and businesses." />
        <meta name="keywords" content="Gaurex, software development, AI agents, ERP system, web development, Android apps, chatbots, WhatsApp bot, AI models, dashboards, Nashik, India" />
        <meta name="author" content="Gauresh Deepak Khairnar" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gaurex.ai/" />
        <meta property="og:title" content="Gaurex — Intelligent Software Solutions" />
        <meta property="og:description" content="Crafting AI agents, ERP systems, websites & mobile apps with precision." />
        <meta property="og:image" content="https://gaurex.ai/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gaurex.ai/" />
        <meta property="twitter:title" content="Gaurex — Intelligent Software Solutions" />
        <meta property="twitter:description" content="Crafting AI agents, ERP systems, websites & mobile apps with precision." />
        <meta property="twitter:image" content="https://gaurex.ai/og-image.png" />

        <meta name="theme-color" content="#080808" />
        <meta name="color-scheme" content="dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
