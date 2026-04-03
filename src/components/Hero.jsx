export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <h1 className="hero__headline">
          AI Industrial Safety Software for India — Factory Safety Monitoring That Acts in Real Time<br />
          <span className="accent">PPE Detection, Alerts &amp; Compliance in One System</span>
        </h1>
        <p className="hero__sub">
          AdvanceSafe is an <strong>AI safety system for factories</strong> and a complete <strong>worker safety system</strong>: it connects to your cameras and sensors for <strong>PPE detection AI</strong>, risk signals, and <strong>smart industrial surveillance</strong> — while supporting ISO 45001-ready records and Indian regulations (Factories Act 1948, BOCW, DGFASLI). Replace slow paper cycles with <strong>workplace safety automation</strong> your team can trust.
        </p>
        <p className="hero__sub" style={{ fontSize: '0.9375rem', marginTop: '-0.5rem', opacity: 0.9 }}>
          Built for manufacturing units and enterprises that need provable safety performance — not another dashboard nobody opens.
        </p>
        <div className="hero__ctas">
          <a href="#contact" className="btn btn--primary">Book a demo</a>
          <a href="#problem-solution" className="btn btn--ghost">Problem → solution</a>
        </div>
      </div>
    </section>
  );
}
