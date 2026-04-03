const cards = [
  { title: 'vs Camera-Only Tools', text: 'Most safety software only monitors cameras and sends PPE alerts. That covers one corner of your SMS obligation. AdvanceSafe covers all 4 pillars — sensors, cameras, workers, compliance records, and emergency response — in one platform.' },
  { title: 'vs Manual Systems (Paper + Excel)', text: 'Paper forms and annual audits cannot prevent an incident that happens at 2am on a Tuesday. AdvanceSafe monitors your plant every second of every day and alerts the right person before a situation becomes a tragedy.' },
  { title: 'vs Doing Nothing', text: 'A single factory accident costs Rs.1.5 Crore or more when you add medical, legal, regulatory, and production loss. AdvanceSafe at Rs.3.5 Lakh per month is not a cost. It is insurance that also fulfills your legal obligation.' },
];

export default function WhyAdvanceSafe() {
  return (
    <section id="why" className="reveal" aria-labelledby="why-title">
      <div className="container">
        <h2 className="section-title" id="why-title">Why Plant Heads Choose AdvanceSafe</h2>
        <div className="why-cards">
          {cards.map((c) => (
            <div key={c.title} className="why-card">
              <h3 className="why-card__title">{c.title}</h3>
              <p className="why-card__text">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
