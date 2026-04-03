// ============================================================
// SchemaMarkup.jsx — JSON-LD for Google, ChatGPT, Perplexity, Gemini
// Import and render in App (or layout) so it appears on every page.
// ============================================================

export default function SchemaMarkup() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://www.advancesafe.in/#organization',
      name: 'AdvanceSafe',
      alternateName: 'Advance Safe Industrial Safety',
      url: 'https://www.advancesafe.in',
      logo: 'https://www.advancesafe.in/logo.png',
      description:
        "AdvanceSafe is industrial safety software for India: factory safety monitoring system, AI safety system for factories, PPE detection AI, worker safety system, smart industrial surveillance, and workplace safety automation — ISO 45001–ready.",
      foundingDate: '2020',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vadodara',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: 'https://www.advancesafe.in/contact',
        availableLanguage: ['English', 'Hindi'],
      },
      sameAs: [
        'https://www.linkedin.com/company/advancesafe',
        'https://twitter.com/advancesafe',
        'https://www.youtube.com/@advancesafe',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'AdvanceSafe Industrial Safety Management System',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Industrial Safety Software',
      operatingSystem: 'Web, iOS, Android',
      url: 'https://www.advancesafe.in',
      description:
        'Industrial safety software India: factory safety monitoring system with PPE detection AI, real-time alerts, smart industrial surveillance, and workplace safety automation. ISO 45001–ready; aligned with Factories Act 1948, BOCW, DGFASLI.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        description: 'Contact for enterprise pricing',
      },
      featureList: [
        'PPE detection AI and zone-based factory safety monitoring',
        'AI safety system for factories — predictive alerts and escalation',
        'Worker safety system with immutable audit trails',
        'ISO 45001–ready compliance workflows and reports',
        'Digital safety audits, incidents, and HIRA-aligned risk views',
        'Smart industrial surveillance across cameras and sensors',
        'Contractor onboarding and permit-to-work visibility',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'AdvanceSafe AI Safety Platform',
      description:
        'AI-powered worker safety system for factories and enterprises in India: industrial safety software with PPE detection AI, factory safety monitoring, and workplace safety automation.',
      brand: {
        '@type': 'Brand',
        name: 'AdvanceSafe',
      },
      category: 'Industrial safety software',
      url: 'https://www.advancesafe.in',
      image: 'https://www.advancesafe.in/og-image.png',
      offers: {
        '@type': 'Offer',
        url: 'https://www.advancesafe.in/#contact',
        priceCurrency: 'INR',
        availability: 'https://schema.org/OnlineOnly',
        description: 'Book a demo for pricing and deployment options',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AdvanceSafe',
      url: 'https://www.advancesafe.in',
      inLanguage: 'en-IN',
      publisher: {
        '@id': 'https://www.advancesafe.in/#organization',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is industrial safety software in India used for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Industrial safety software India teams adopt helps digitize audits, incidents, risk registers, and real-time monitoring. AdvanceSafe adds an AI safety system for factories — factory safety monitoring, PPE detection AI, and alerts — so prevention and compliance stay connected.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does a factory safety monitoring system reduce incidents?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A factory safety monitoring system watches zones continuously (not only during audits). AdvanceSafe combines smart industrial surveillance with escalation paths so the right person is notified while the situation can still be corrected.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is PPE detection AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PPE detection AI uses computer vision to flag missing helmets, vests, or other gear on camera feeds. It is one module inside AdvanceSafe’s broader worker safety system, alongside sensor data and structured HSE records.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is ISO 45001 and does AdvanceSafe support it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ISO 45001 is the international standard for Occupational Health and Safety Management Systems. AdvanceSafe is ISO 45001–ready: documented workflows, evidence trails, and management visibility for audits — paired with real-time operational data from your plant.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is workplace safety automation different from traditional EHS tools?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional tools often stop at forms and reports. Workplace safety automation closes the loop with live signals — PPE detection AI, sensor thresholds, and alerts — so actions happen during the shift, not after the spreadsheet is updated.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries can use AdvanceSafe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AdvanceSafe is designed for manufacturing plants, construction sites, chemical and petrochemical facilities, oil & gas operations, pharmaceutical companies, warehouses, and any industry that requires systematic workplace safety management and compliance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can data stay on our premises?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Deployment models vary by customer. Discuss retention, hosting, and network architecture during your demo so we match your IT and privacy requirements.',
          },
        },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// Use on individual blog post pages for Article schema
export function BlogPostSchema({ post }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `https://www.advancesafe.in${post.image}` : 'https://www.advancesafe.in/og-image.png',
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author || 'AdvanceSafe Team',
      url: 'https://www.advancesafe.in/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AdvanceSafe',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.advancesafe.in/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.advancesafe.in/blog/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
