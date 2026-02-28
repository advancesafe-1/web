export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <h1 className="hero__headline">
          Your Factory Has a Legal Safety Obligation.<br />
          <span className="accent">AdvanceSafe Fulfills It — In Real Time.</span>
        </h1>
        <p className="hero__sub">
          Under the Factories Act and ISO 45001, every large industrial facility must operate a formal Safety Management System covering all 4 mandatory pillars. Most factories run this on paper forms and annual audits. AdvanceSafe implements all 4 pillars digitally, simultaneously, with AI — connected to your existing cameras and sensors.
        </p>
        <div className="hero__ctas">
          <a href="#contact" className="btn btn--primary">Request a Demo</a>
          <a href="#pillars" className="btn btn--ghost">See What We Cover</a>
        </div>
      </div>
    </section>
  );
}
