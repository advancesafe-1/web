import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | AdvanceSafe';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Privacy Policy for AdvanceSafe.in. How we collect, use and protect your data under India\'s Digital Personal Data Protection Act 2023 (DPDPA).');
  }, []);

  return (
    <div className="blog-page">
      <section className="blog-post-hero">
        <div className="container-narrow">
          <Link to="/" className="blog-post-hero__back">← Back to Home</Link>
          <h1 className="blog-post-hero__title">Privacy Policy</h1>
          <p className="blog-post-hero__excerpt">
            Last updated: March 2026. AdvanceSafe (“we”, “our”) respects your privacy. This policy describes how we collect, use, and protect your personal data in compliance with India’s Digital Personal Data Protection Act 2023 (DPDPA).
          </p>
        </div>
      </section>

      <article className="blog-article">
        <div className="blog-article__content legal-content">
          <h2>1. Data We Collect</h2>
          <p>When you use our website or contact/demo forms, we may collect: name, email address, phone number, company name, designation, industry, city, and any message you send. We do not sell your personal data.</p>

          <h2>2. How We Use Your Data</h2>
          <p>We use your data only to respond to your enquiries, provide product information or demos, and improve our services. We may use email to send you updates if you have consented.</p>

          <h2>3. Legal Basis & Consent</h2>
          <p>Under DPDPA 2023, we process your data based on your consent when you submit a form, and where necessary for the performance of a contract or our legitimate interests (e.g. responding to your request). You may withdraw consent or request access, correction, or erasure of your data by contacting us.</p>

          <h2>4. Data Retention & Security</h2>
          <p>We retain your data only as long as needed for the purposes above or as required by law. We use reasonable technical and organisational measures to protect your data against unauthorised access, loss, or misuse.</p>

          <h2>5. Third Parties</h2>
          <p>We may use service providers (e.g. hosting, analytics, form handlers) that process data on our behalf. We require them to protect your data and use it only as we instruct. We do not share your data with advertisers or for marketing by third parties.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct, erase, or port your data, and to withdraw consent or complain to a supervisory authority. To exercise these rights, contact us at the email below.</p>

          <h2>7. Contact</h2>
          <p>For privacy requests or questions: <a href="mailto:advancesafesystem@gmail.com" rel="noopener noreferrer">advancesafesystem@gmail.com</a>. AdvanceSafe is a product of Advanced SOS Max, Ahmedabad, Gujarat, India.</p>
        </div>
      </article>
    </div>
  );
}
