const features = [
  { title: 'AI Predictive Alerts', desc: 'Detects risk before it becomes critical, across your connected sensors and cameras', icon: 'default' },
  { title: 'Live Plant Floor Map', desc: 'Real-time 2D visualization of every zone, worker, and sensor — color coded green, amber, red', icon: 'rect' },
  { title: 'PPE Detection', desc: 'Computer vision detects missing helmets, vests, and gloves — with fewer false alerts than standard systems', icon: 'ppe' },
  { title: 'Immutable Audit Trail', desc: 'Every event logged, timestamped, and locked. Cannot be edited. Legally defensible.', icon: 'audit' },
  { title: 'One-Click Compliance Reports', desc: 'Factory Act reports generated automatically. No manual compilation.', icon: 'report' },
  { title: 'Smart Alert Escalation', desc: 'Alert goes Supervisor → Manager → Plant Head → Emergency Services automatically if unacknowledged', icon: 'alert' },
  { title: 'Contract Worker Tracking', desc: 'QR scan at gate instantly brings contract workers into your safety network', icon: 'contract' },
  { title: 'Regional Language Alerts', desc: 'Hindi and Gujarati voice and text alerts for every worker', icon: 'lang' },
  { title: 'Universal Sensor Integration', desc: 'Gas, temperature, pressure, smoke, noise, vibration — connects to any sensor protocol', icon: 'sensor' },
];

function FeatureIcon({ type }) {
  const stroke = '#FFB700';
  const w = 28; const h = 28;
  if (type === 'rect') return (
    <svg width={w} height={h} viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="16" rx="2" stroke={stroke} strokeWidth="1.5" fill="none"/><path d="M4 12h20M10 6v16M18 6v16" stroke={stroke} strokeWidth="1.5"/></svg>
  );
  if (type === 'ppe') return (
    <svg width={w} height={h} viewBox="0 0 28 28" fill="none"><circle cx="14" cy="12" r="6" stroke={stroke} strokeWidth="1.5" fill="none"/><path d="M8 22c0-3.5 2.5-6 6-6s6 2.5 6 6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/><path d="M14 8v2M14 16v2M10 12h2M16 12h2" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/></svg>
  );
  if (type === 'audit') return (
    <svg width={w} height={h} viewBox="0 0 28 28" fill="none"><path d="M8 6h12l4 6v10H4V12l4-6z" stroke={stroke} strokeWidth="1.5" fill="none"/><path d="M8 6l2 6h8l2-6" stroke={stroke} strokeWidth="1.5"/><path d="M10 16h8" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/></svg>
  );
  if (type === 'report') return (
    <svg width={w} height={h} viewBox="0 0 28 28" fill="none"><rect x="6" y="4" width="16" height="18" rx="2" stroke={stroke} strokeWidth="1.5" fill="none"/><path d="M10 10h8M10 14h8M10 18h5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/><path d="M12 7v2M16 7v2" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/></svg>
  );
  if (type === 'alert') return (
    <svg width={w} height={h} viewBox="0 0 28 28" fill="none"><path d="M14 4v6l4 4M14 18v4M8 14H4M24 14h-4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/><circle cx="14" cy="14" r="4" stroke={stroke} strokeWidth="1.5" fill="none"/></svg>
  );
  if (type === 'contract') return (
    <svg width={w} height={h} viewBox="0 0 28 28" fill="none"><rect x="6" y="8" width="16" height="14" rx="2" stroke={stroke} strokeWidth="1.5" fill="none"/><path d="M10 8V6a2 2 0 012-2h4a2 2 0 012 2v2" stroke={stroke} strokeWidth="1.5"/><path d="M10 14h8M10 18h5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/></svg>
  );
  if (type === 'lang') return (
    <svg width={w} height={h} viewBox="0 0 28 28" fill="none"><path d="M8 10h12M8 14h12M8 18h8" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/><circle cx="20" cy="18" r="4" stroke={stroke} strokeWidth="1.5" fill="none"/></svg>
  );
  if (type === 'sensor') return (
    <svg width={w} height={h} viewBox="0 0 28 28" fill="none"><path d="M14 6v16M8 10l6-4 6 4v8l-6 4-6-4v-8z" stroke={stroke} strokeWidth="1.5" fill="none"/><circle cx="14" cy="14" r="3" stroke={stroke} strokeWidth="1.5" fill="none"/></svg>
  );
  return (
    <svg width={w} height={h} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4v4M14 20v4M4 14H8M20 14h4M7.5 7.5l2.5 2.5M18 18l2.5 2.5M7.5 20.5l2.5-2.5M18 10l2.5-2.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="6" stroke={stroke} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

export default function Features() {
  return (
    <section id="features" className="reveal" aria-labelledby="features-title">
      <div className="container">
        <h2 className="section-title" id="features-title">Everything Your Safety Team Needs. Nothing They Don't.</h2>
        <div className="features">
          {features.map((f) => (
            <div key={f.title} className="feature-tile">
              <div className="feature-tile__icon"><FeatureIcon type={f.icon} /></div>
              <h3 className="feature-tile__title">{f.title}</h3>
              <p className="feature-tile__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
