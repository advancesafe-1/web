// ============================================================
// HomepageSEO.jsx — SEO sections (yellow + black theme)
// ============================================================

import { Link } from 'react-router-dom';

export function StatsSection() {
  const stats = [
    { value: 'ISO 45001-Ready', label: 'Aligned with ISO 45001:2018', icon: '🛡️' },
    { value: 'Faster', label: 'Audit Time Saved', icon: '⚡' },
    { value: 'Target', label: 'Give Alert Before Accident', icon: '🎯' },
  ];

  return (
    <section aria-label="AdvanceSafe Platform Statistics" className="homepage-seo-stats">
      <h2
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
        }}
      >
        Industrial Safety Management Platform — Trusted by growing industries across India
      </h2>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          textAlign: 'center',
        }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div style={{ fontSize: '32px', marginBottom: '4px' }}>{s.icon}</div>
            <div className="homepage-seo__value">{s.value}</div>
            <div className="homepage-seo__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhatIsSection() {
  return (
    <section
      aria-label="What is AdvanceSafe Industrial Safety Management System"
      className="homepage-seo-section"
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        <div>
          <h2
            className="homepage-seo-section__title"
            style={{
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '20px',
            }}
          >
            The Complete <span className="accent">Industry Safety Management System</span> for
            Modern Industries
          </h2>
          <p className="homepage-seo-section__text" style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
            <strong>AdvanceSafe</strong> is an{' '}
            <strong>industrial safety management platform</strong> that helps manufacturing
            plants, construction sites, chemical facilities, and all industrial operations
            work toward <strong>ISO 45001 compliance</strong>, eliminate workplace hazards, and build
            a proactive safety culture — all from a single digital platform.
          </p>
          <p className="homepage-seo-section__text" style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
            From <strong>digital safety audits</strong> and <strong>incident reporting</strong>{' '}
            to <strong>HIRA risk assessments</strong> and <strong>EHS dashboards</strong> —
            AdvanceSafe covers every aspect of{' '}
            <strong>occupational health and safety management</strong>.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/#contact" className="homepage-seo-btn--primary">
              Get Free Demo
            </Link>
            <Link to="/blog/what-is-industry-safety" className="homepage-seo-btn--ghost">
              Learn About Industry Safety →
            </Link>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {[
            { icon: '✅', title: 'ISO 45001-Ready', desc: 'Built to support ISO 45001 compliance and audit readiness' },
            { icon: '🔍', title: 'Safety Audits', desc: 'Digital checklists with real-time reporting and analytics' },
            { icon: '🚨', title: 'Incident Management', desc: 'Rapid reporting, investigation and CAPA tracking' },
            { icon: '⚠️', title: 'Risk Assessment', desc: 'HIRA methodology with risk matrix and controls' },
            { icon: '📊', title: 'EHS Dashboard', desc: 'Live safety KPIs, trends and executive reports' },
          ].map((f) => (
            <div key={f.title} className="homepage-seo-card">
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{f.icon}</div>
              <div className="homepage-seo-card__title" style={{ marginBottom: '4px' }}>{f.title}</div>
              <div className="homepage-seo-card__desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  const industries = [
    { icon: '🏗️', name: 'Construction', keywords: 'Construction site safety management, height work safety, scaffolding safety' },
    { icon: '⚗️', name: 'Chemical & Pharma', keywords: 'Chemical plant safety, HAZOP, process safety management' },
    { icon: '🔩', name: 'Manufacturing', keywords: 'Factory safety, machine guarding, ISO 45001 manufacturing' },
    { icon: '🛢️', name: 'Oil & Gas', keywords: 'Oil & gas HSE management, PTW, hot work safety' },
    { icon: '💊', name: 'Pharmaceutical', keywords: 'Pharma EHS compliance, GMP safety, cleanroom safety' },
    { icon: '📦', name: 'Warehousing', keywords: 'Warehouse safety management, forklift safety, racking safety' },
    { icon: '⚡', name: 'Power & Utilities', keywords: 'Electrical safety management, lockout tagout, LOTO procedures' },
    { icon: '🚢', name: 'Ports & Logistics', keywords: 'Port safety management, cargo handling safety, marine safety' },
  ];

  return (
    <section aria-label="Industries Using AdvanceSafe Safety Management System" className="homepage-seo-section">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            className="homepage-seo-section__title"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, marginBottom: '14px' }}
          >
            Industry Safety Management Across Every Sector
          </h2>
          <p className="homepage-seo-section__text" style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
            From chemical plants to construction sites, AdvanceSafe adapts to the unique safety
            requirements of every industry.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {industries.map((ind) => (
            <div key={ind.name} className="homepage-seo-industry">
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>{ind.icon}</div>
              <div className="homepage-seo-industry__name" style={{ marginBottom: '6px' }}>{ind.name}</div>
              <div className="homepage-seo-industry__kw">{ind.keywords.split(', ')[0]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomepageFAQ() {
  const faqs = [
    { q: 'What is an Industrial Safety Management System?', a: 'An Industrial Safety Management System (ISMS) is a structured digital platform that helps organizations identify hazards, assess risks, conduct safety audits, report incidents, manage ISO 45001 compliance, and track EHS performance — all in one place. AdvanceSafe provides a complete ISMS for industries of all sizes.' },
    { q: 'How does AdvanceSafe help with industry safety?', a: 'AdvanceSafe automates the entire safety compliance lifecycle — from hazard identification and HIRA risk assessments to digital safety audits, real-time incident reporting, corrective action tracking, and ISO 45001 documentation. It helps reduce manual safety work and supports industries in working toward zero-accident targets.' },
    { q: 'Does AdvanceSafe support ISO 45001?', a: 'Yes. AdvanceSafe is built to support and aligned with ISO 45001:2018 (Occupational Health & Safety Management Systems) requirements. All modules, documentation, and workflows are designed to help your organization achieve ISO 45001 compliance.' },
    { q: 'Which industries can use AdvanceSafe?', a: 'AdvanceSafe is suitable for manufacturing, construction, chemical & petrochemical, oil & gas, pharmaceutical, power & utilities, warehousing, ports, and any industrial operation that requires formal safety management and compliance.' },
    { q: 'How is AdvanceSafe different from other safety management software?', a: 'AdvanceSafe is built for Indian industrial requirements first — compliant with Factories Act 1948, BOCW Act, DGFASLI and aligned with global standards like ISO 45001. It offers a complete end-to-end platform — not just a checklist tool — with modules for audits, incidents, risk assessment, training, permits, and executive dashboards.' },
    { q: 'Can AdvanceSafe work offline?', a: 'Yes. AdvanceSafe can work offline so your teams can use it in areas with limited or no connectivity, with data syncing when the connection is available. When there is a network issue, our software keeps working — it continues analysing and gives alerts to the admin or security staff.' },
    { q: 'What about company private data?', a: 'We do not take or store your company’s private data on our servers. For privacy, your data stays with you — we store it locally in your plant only.' },
  ];

  return (
    <section
      aria-label="Frequently Asked Questions about Industrial Safety Management"
      className="homepage-seo-section homepage-seo-faq"
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            className="homepage-seo-section__title"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, marginBottom: '12px' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="homepage-seo-section__text" style={{ fontSize: '16px' }}>
            Everything you need to know about industrial safety management and AdvanceSafe.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, i) => (
            <details key={i}>
              <summary>
                {faq.q}
                <span className="accent" style={{ fontSize: '20px', flexShrink: 0, marginLeft: '16px' }}>+</span>
              </summary>
              <div className="homepage-seo-faq__answer" style={{ fontSize: '15px', lineHeight: 1.75 }}>
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
