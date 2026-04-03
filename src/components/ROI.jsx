const items = [
  { value: 'Rs.1.5 Cr+', label: 'Average total cost of one factory accident (medical, legal, downtime, regulatory)' },
  { value: '15–20%', label: 'Reduction in insurance premium with full digital SMS in place' },
  { value: '2–3 Days', label: 'Time to full deployment with zero new hardware' },
];

export default function ROI() {
  return (
    <section id="roi" className="reveal" aria-labelledby="roi-title">
      <div className="container">
        <h2 className="section-title" id="roi-title">The Math Is Simple</h2>
        <div className="roi-grid">
          {items.map((item) => (
            <div key={item.value} className="roi-item">
              <div className="roi-item__value">{item.value}</div>
              <p className="roi-item__label">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="roi-note">At Rs.3.5L/month, preventing one accident pays for 3.5 years of AdvanceSafe.</p>
      </div>
    </section>
  );
}
