// ============================================================
// HomepageSEO.jsx — SEO sections (yellow + black theme)
// ============================================================

import { Link } from 'react-router-dom';

export function StatsSection() {
  const stats = [
    { value: 'ISO 45001–ready', label: 'Structured for audit & management review', icon: '🛡️' },
    { value: 'Real-time', label: 'Factory safety monitoring on live feeds', icon: '⚡' },
    { value: 'AI + sensors', label: 'PPE detection AI & alert escalation', icon: '🎯' },
  ];

  return (
    <section aria-labelledby="stats-heading" className="homepage-seo-stats">
      <h2
        id="stats-heading"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
        }}
      >
        Industrial safety software India — AdvanceSafe platform highlights
      </h2>
      <div className="homepage-seo-stats-grid">
        {stats.map((s) => (
          <div key={s.label}>
            <div style={{ fontSize: '32px', marginBottom: '4px' }} aria-hidden="true">{s.icon}</div>
            <div className="homepage-seo__value">{s.value}</div>
            <div className="homepage-seo__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TrustStrip() {
  const items = [
    { title: 'Designed for Indian plants', text: 'Alignment with Factories Act, BOCW & DGFASLI expectations — not generic overseas templates.' },
    { title: 'Live demo on your site', text: 'See your cameras and zones during the call; decision-makers often move the same day.' },
    { title: 'From detection to proof', text: 'Immutable logs and reports so HSE and leadership share one version of the truth.' },
  ];

  return (
    <section className="homepage-seo-trust" aria-label="Trust and proof points">
      <div className="homepage-seo-trust__inner">
        {items.map((item) => (
          <div key={item.title} className="homepage-seo-trust__item">
            <strong>{item.title}</strong>
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhatIsSection() {
  return (
    <section
      aria-labelledby="what-is-heading"
      className="homepage-seo-section"
    >
      <div className="homepage-seo-two-col">
        <div>
          <h2
            id="what-is-heading"
            className="homepage-seo-section__title"
            style={{
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '20px',
            }}
          >
            <span className="accent">Industrial safety software India</span> teams use to unify compliance and prevention
          </h2>
          <p className="homepage-seo-section__text" style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
            <strong>AdvanceSafe</strong> is a <strong>factory safety monitoring system</strong> and{' '}
            <strong>AI safety system for factories</strong>: it turns existing CCTV and sensors into a continuous{' '}
            <strong>worker safety system</strong> with <strong>PPE detection AI</strong>, escalation, and documentation
            your auditors can follow — alongside ISO 45001–ready workflows.
          </p>
          <p className="homepage-seo-section__text" style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
            Whether you operate discrete manufacturing, process plants, or multi-site enterprises,{' '}
            <strong>smart industrial surveillance</strong> plus structured HSE data means{' '}
            <strong>workplace safety automation</strong> that scales with production — not parallel spreadsheets.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/#contact" className="homepage-seo-btn--primary">
              Book a demo
            </Link>
            <Link to="/blog/industrial-safety-software-india-guide" className="homepage-seo-btn--ghost">
              India buyer guide →
            </Link>
          </div>
        </div>
        <div className="homepage-seo-card-grid">
          {[
            { icon: '✅', title: 'PPE & zone risk', desc: 'PPE detection AI and behaviour signals tied to zones on your floor map.' },
            { icon: '🔍', title: 'Real-time alerts', desc: 'Supervisor → manager → plant head escalation before incidents escalate.' },
            { icon: '🚨', title: 'Immutable records', desc: 'Timestamped events for investigations, customer audits, and regulators.' },
            { icon: '⚠️', title: 'Risk & compliance', desc: 'HIRA-aligned thinking with reports your EHS team can export on demand.' },
            { icon: '📊', title: 'Executive clarity', desc: 'One dashboard for safety KPIs — aligned to how leadership reviews operations.' },
          ].map((f) => (
            <div key={f.title} className="homepage-seo-card">
              <div style={{ fontSize: '28px', marginBottom: '8px' }} aria-hidden="true">{f.icon}</div>
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
    { icon: '🏗️', name: 'Construction', keywords: 'BOCW site safety, height work, scaffolding' },
    { icon: '⚗️', name: 'Chemical & Pharma', keywords: 'Process safety, HAZOP support, hazard zones' },
    { icon: '🔩', name: 'Manufacturing', keywords: 'Factory safety monitoring system, assembly & heavy industry' },
    { icon: '🛢️', name: 'Oil & Gas', keywords: 'PTW, hot work, perimeter and zone monitoring' },
    { icon: '💊', name: 'Pharmaceutical', keywords: 'GMP-adjacent controls, cleanroom adjacent areas' },
    { icon: '📦', name: 'Warehousing', keywords: 'Forklift zones, pedestrian crossing, loading bays' },
    { icon: '⚡', name: 'Power & Utilities', keywords: 'Electrical safety, LOTO visibility, contractor areas' },
    { icon: '🚢', name: 'Ports & Logistics', keywords: 'Yard safety, night shifts, contractor-heavy operations' },
  ];

  return (
    <section aria-labelledby="industries-heading" className="homepage-seo-section">
      <div className="homepage-seo-inner">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            id="industries-heading"
            className="homepage-seo-section__title"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, marginBottom: '14px' }}
          >
            Industries we serve
          </h2>
          <p className="homepage-seo-section__text" style={{ fontSize: '16px', maxWidth: '640px', margin: '0 auto' }}>
            One <strong>AI safety system for factories</strong> — tuned to how each sector runs shifts, contractors, and
            critical zones across India.
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
              <div style={{ fontSize: '36px', marginBottom: '10px' }} aria-hidden="true">{ind.icon}</div>
              <div className="homepage-seo-industry__name" style={{ marginBottom: '6px' }}>{ind.name}</div>
              <div className="homepage-seo-industry__kw">{ind.keywords}</div>
            </div>
          ))}
        </div>
        <p className="homepage-seo-section__text" style={{ textAlign: 'center', marginTop: '32px', fontSize: '15px' }}>
          Need a vertical-specific rollout plan?{' '}
          <a href="#contact" style={{ color: 'var(--accent)', fontWeight: 700 }}>Book a demo</a>
          {' '}and we&apos;ll map zones and cameras to your SOPs.
        </p>
      </div>
    </section>
  );
}

export function HomepageFAQ() {
  const faqs = [
    {
      q: 'What is industrial safety software in India used for?',
      a: 'Industrial safety software India teams adopt helps digitize audits, incidents, risk registers, and real-time monitoring. AdvanceSafe adds an AI safety system for factories — factory safety monitoring, PPE detection AI, and alerts — so prevention and compliance stay connected.',
    },
    {
      q: 'How does a factory safety monitoring system reduce incidents?',
      a: 'A factory safety monitoring system watches zones continuously (not only during audits). AdvanceSafe combines smart industrial surveillance with escalation paths so the right person is notified while the situation can still be corrected.',
    },
    {
      q: 'What is PPE detection AI?',
      a: 'PPE detection AI uses computer vision to flag missing helmets, vests, or other gear on camera feeds. It is one module inside AdvanceSafe’s broader worker safety system, alongside sensor data and structured HSE records.',
    },
    {
      q: 'Is AdvanceSafe only software, or does it include on-site support?',
      a: 'The product is a software platform integrated with your infrastructure. We walk plant teams through camera mapping, zone design, and escalation rules during onboarding — typical for enterprise and mid-market rollouts in India.',
    },
    {
      q: 'Does AdvanceSafe support ISO 45001?',
      a: 'Yes. The platform is ISO 45001–ready: documented workflows, evidence trails, and management visibility for audits — paired with real-time operational data from your plant.',
    },
    {
      q: 'How is workplace safety automation different from traditional EHS tools?',
      a: 'Traditional tools often stop at forms and reports. Workplace safety automation closes the loop with live signals — PPE detection AI, sensor thresholds, and alerts — so actions happen during the shift, not after the spreadsheet is updated.',
    },
    {
      q: 'Can data stay on our premises?',
      a: 'Deployment models vary by customer. Discuss retention, hosting, and network architecture during your demo so we match your IT and privacy requirements.',
    },
  ];

  return (
    <section
      aria-labelledby="faq-heading"
      className="homepage-seo-section homepage-seo-faq"
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            id="faq-heading"
            className="homepage-seo-section__title"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, marginBottom: '12px' }}
          >
            Frequently asked questions
          </h2>
          <p className="homepage-seo-section__text" style={{ fontSize: '16px' }}>
            Industrial safety software, AI monitoring, and how AdvanceSafe fits your plant.
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
