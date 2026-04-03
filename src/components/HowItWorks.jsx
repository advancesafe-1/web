const steps = [
  {
    num: '01',
    title: 'Connect',
    desc: 'We connect to your existing cameras (Hikvision, Dahua, CP Plus — any IP camera) and sensors (gas, temperature, pressure, smoke) using your current infrastructure. No new hardware purchases. No construction. 5 minutes per camera.',
  },
  {
    num: '02',
    title: 'Go Live',
    desc: 'Your plant floor appears as a live map on the AdvanceSafe dashboard. Every zone shows a live safety score. Your team gets real-time alerts via Push, SMS, and WhatsApp — in the right language.',
  },
  {
    num: '03',
    title: 'Stay Compliant',
    desc: 'Every incident, alert, and response is logged automatically. Monthly compliance reports generate in one click. Regulators and auditors get a read-only access link — no scrambling before inspections.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="reveal" aria-labelledby="how-title">
      <div className="container">
        <h2 className="section-title" id="how-title">Up and Running in 2 to 3 Days. Zero New Hardware.</h2>
        <div className="steps">
          {steps.map((s) => (
            <div key={s.num} className="step">
              <div className="step__num">{s.num}</div>
              <div className="step__icon">
                {s.num === '01' && (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="6" y="12" width="36" height="26" rx="4" stroke="#FFB700" strokeWidth="2" fill="none"/>
                    <circle cx="24" cy="25" r="8" stroke="#FFB700" strokeWidth="2" fill="none"/>
                    <circle cx="24" cy="25" r="4" fill="#FFB700"/>
                    <path d="M24 6v4M24 38v4M12 25H8M40 25h-4" stroke="#FFB700" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
                {s.num === '02' && (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M8 32l8-12 8 6 8-14 8 12" stroke="#FFB700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M8 36h32" stroke="#FFB700" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
                {s.num === '03' && (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="24" cy="24" r="18" stroke="#FFB700" strokeWidth="2" fill="none"/>
                    <path d="M16 24l6 6 12-12" stroke="#FFB700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
