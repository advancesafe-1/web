import { Link } from 'react-router-dom';

export default function ProblemSolution() {
  const problems = [
    {
      title: 'Blind spots on the floor',
      text: 'Supervisors cannot watch every line, every shift. Near-misses and PPE gaps often go unseen until an audit or an incident.',
    },
    {
      title: 'Paper and spreadsheets lag reality',
      text: 'Compliance records update slowly. When regulators or customers ask for proof, teams scramble to compile what should already be continuous.',
    },
    {
      title: 'Alerts that arrive too late',
      text: 'Without a factory safety monitoring system tied to live video and sensors, the window to intervene closes in minutes.',
    },
  ];

  const solutions = [
    {
      title: 'AI safety system for factories',
      text: 'Computer vision for PPE detection AI, behaviour cues, and zone risk — aligned with how your plant actually runs.',
    },
    {
      title: 'Smart industrial surveillance',
      text: 'Cameras and sensors feed one worker safety system: real-time alerts, escalation, and an immutable log for audits.',
    },
    {
      title: 'Workplace safety automation',
      text: 'From hazard signals to reports, AdvanceSafe reduces manual follow-up so HSE teams focus on fixes, not paperwork.',
    },
  ];

  return (
    <section
      id="problem-solution"
      className="problem-solution reveal"
      aria-labelledby="problem-solution-heading"
    >
      <div className="container">
        <p className="section-label">Why plants adopt AdvanceSafe</p>
        <h2 className="section-title" id="problem-solution-heading">
          Industrial safety gaps — and how we close them
        </h2>
        <p className="hero__sub problem-solution__intro">
          AdvanceSafe is industrial safety software built for Indian factories and enterprises:{' '}
          <strong>factory safety monitoring</strong>, <strong>PPE detection AI</strong>, and{' '}
          <strong>real-time alerts</strong> in one platform — so compliance and prevention move at the same speed as production.
        </p>

        <div className="problem-solution__grid">
          <div className="problem-solution__col">
            <h3 className="problem-solution__subhead">Problems in industrial safety</h3>
            <ul className="problem-solution__list">
              {problems.map((p) => (
                <li key={p.title}>
                  <strong>{p.title}</strong>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="problem-solution__col problem-solution__col--accent">
            <h3 className="problem-solution__subhead">How AdvanceSafe solves them</h3>
            <ul className="problem-solution__list problem-solution__list--solution">
              {solutions.map((s) => (
                <li key={s.title}>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </li>
              ))}
            </ul>
            <div className="problem-solution__cta">
              <a href="#contact" className="btn btn--primary">
                Book a demo
              </a>
              <Link to="/blog/industrial-safety-software-india-guide" className="btn btn--ghost">
                Read the India buyer guide →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
