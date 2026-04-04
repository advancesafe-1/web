export default function Pillars() {
  const pillars = [
    {
      title: 'Safety Policy',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 2L4 9v9c0 7.5 4.87 14.2 12 15.5 7.13-1.3 12-8 12-15.5V9L16 2z" stroke="#FFB700" strokeWidth="2" fill="none"/>
          <path d="M16 12v8M12 16h8" stroke="#FFB700" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      law: 'Documented leadership commitment, measurable safety objectives, visible performance tracking',
      deliver: 'A live Safety Score (0–100) on your dashboard, recalculated every 30 seconds from real plant data. Your policy commitment becomes a number your CEO can see right now.',
    },
    {
      title: 'Safety Risk Management',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 4L4 26h24L16 4z" stroke="#FFB700" strokeWidth="2" fill="none"/>
          <path d="M16 12v8M16 24v2" stroke="#FFB700" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      law: 'Hazard identification, risk assessment, pre-incident controls (PHA/HAZOP)',
      deliver: 'AI monitors 350+ safety triggers across your sensors and cameras simultaneously — identifying risk 30 to 120 minutes before it becomes critical. What a manual HAZOP audit does once a year, AdvanceSafe does every second.',
    },
    {
      title: 'Safety Assurance',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="6" y="4" width="20" height="24" rx="2" stroke="#FFB700" strokeWidth="2" fill="none"/>
          <path d="M10 12h12M10 16h12M10 20h8" stroke="#FFB700" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 8l2 2 4-4" stroke="#FFB700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      law: 'Audits, KPI tracking, corrective actions, legally defensible records',
      deliver: 'Every event is logged in an immutable audit trail that cannot be edited — legally defensible in any inspection or investigation. One-click compliance reports for Factory Act submissions.',
    },
    {
      title: 'Safety Promotion',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="11" cy="12" r="3" stroke="#FFB700" strokeWidth="2" fill="none"/>
          <circle cx="21" cy="12" r="3" stroke="#FFB700" strokeWidth="2" fill="none"/>
          <path d="M6 24c0-2.5 2.5-5 5-5s5 2.5 5 5M22 24c0-2.5 2.5-5 5-5s5 2.5 5 5" stroke="#FFB700" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      law: 'Worker training, safety culture, communication, competency tracking',
      deliver:
        'Supervisors and the control room share one live picture—alerts, escalations, and audit-ready history—so training, toolbox talks, and follow-up stay tied to real plant conditions. Who receives what, and how messages are worded, is configured with you during deployment—not a separate mandatory worker app.',
    },
  ];

  return (
    <section id="pillars" className="reveal" aria-labelledby="pillars-title">
      <div className="container">
        <p className="section-label">// WHAT THE LAW REQUIRES — AND HOW WE DELIVER IT</p>
        <h2 className="section-title" id="pillars-title">One Platform. All 4 Mandatory Pillars. Always On.</h2>
        <div className="pillars">
          {pillars.map((p) => (
            <article key={p.title} className="pillar-card">
              <div className="pillar-card__icon">{p.icon}</div>
              <h3 className="pillar-card__title">{p.title}</h3>
              <p className="pillar-card__label">What law requires:</p>
              <p className="pillar-card__text">{p.law}</p>
              <p className="pillar-card__label">How AdvanceSafe delivers:</p>
              <p className="pillar-card__text">{p.deliver}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
