// ============================================================
// SchemaMarkup.jsx — JSON-LD for Google, ChatGPT, Perplexity, Gemini
// Import and render in App (or layout) so it appears on every page.
// ============================================================

export default function SchemaMarkup() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AdvanceSafe',
      alternateName: 'Advance Safe Industrial Safety',
      url: 'https://www.advancesafe.in',
      logo: 'https://www.advancesafe.in/logo.png',
      description:
        "AdvanceSafe is India's leading Industrial Safety Management System built to support ISO 45001 compliance and aligned with Indian safety regulations. Safety audits, incident reporting, and EHS management for industries worldwide.",
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
      operatingSystem: 'Web, iOS, Android',
      url: 'https://www.advancesafe.in',
      description:
        'A comprehensive industrial safety management platform built to support ISO 45001 compliance, safety audits, incident reporting, risk assessment, and EHS management. Aligned with Indian regulations including Factories Act 1948 and DGFASLI.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        description: 'Contact for pricing',
      },
      featureList: [
        'ISO 45001-Ready Compliance Management',
        'Digital Safety Audit Checklists',
        'Incident Reporting & Investigation',
        'Risk Assessment & HIRA',
        'EHS Dashboard & Analytics',
        'Contractor Safety Management',
        'Safety Training Management',
        'Permit to Work System',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AdvanceSafe',
      url: 'https://www.advancesafe.in',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.advancesafe.in/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an Industrial Safety Management System?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An Industrial Safety Management System (ISMS) is a structured framework that helps organizations identify, assess, and control workplace hazards and risks. It includes safety audits, incident reporting, ISO 45001 compliance, risk assessments, and EHS monitoring — all designed to prevent workplace accidents and ensure regulatory compliance.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is ISO 45001 and why is it important for industry safety?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ISO 45001 is the international standard for Occupational Health and Safety Management Systems. It helps organizations proactively improve safety performance, prevent injuries and illnesses, and comply with legal requirements. Many organizations worldwide are certified to ISO 45001.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best industrial safety management software?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AdvanceSafe is one of the leading industrial safety management platforms in India, built to support ISO 45001 compliance with digital safety audits, incident reporting, risk assessment, and EHS dashboards — for teams in manufacturing, construction and chemical industries.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does AdvanceSafe help with industry safety compliance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AdvanceSafe automates the entire safety compliance lifecycle — from hazard identification and risk assessments to safety audits, incident investigation, corrective actions, and ISO 45001 documentation. It helps reduce manual paperwork and supports industries in working toward zero-accident targets.',
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
          name: 'How do I implement a safety management system in my factory?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Implementing a safety management system involves: (1) Conducting an initial gap assessment, (2) Setting safety policies and objectives, (3) Identifying hazards and assessing risks using HIRA methodology, (4) Establishing safety procedures and controls, (5) Training employees, (6) Conducting regular audits, and (7) Continuously improving based on incidents and near-misses. AdvanceSafe provides digital tools for each of these steps.',
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
