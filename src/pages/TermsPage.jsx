import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Service | AdvanceSafe';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Terms of Service for AdvanceSafe.in. Use of our website and software services. Liability and compliance disclaimers.');
  }, []);

  return (
    <div className="blog-page">
      <section className="blog-post-hero">
        <div className="container-narrow">
          <Link to="/" className="blog-post-hero__back">← Back to Home</Link>
          <h1 className="blog-post-hero__title">Terms of Service</h1>
          <p className="blog-post-hero__excerpt">
            Last updated: March 2026. By using AdvanceSafe.in or our software services (“Services”), you agree to these terms. Please read them carefully.
          </p>
        </div>
      </section>

      <article className="blog-article">
        <div className="blog-article__content legal-content">
          <h2>1. Acceptance</h2>
          <p>Accessing or using our website or Services constitutes acceptance of these Terms. If you do not agree, do not use our website or Services.</p>

          <h2>2. Use of Services</h2>
          <p>You agree to use our website and Services only for lawful purposes and in accordance with applicable laws, including workplace safety and data protection regulations in your jurisdiction.</p>

          <h2>3. No Professional Advice</h2>
          <p>Content on this website (including the blog) is for general information only and does not constitute legal, compliance, or safety advice. You must obtain advice from qualified professionals for your specific situation. We are not liable for decisions made based on our content.</p>

          <h2>4. Compliance & Liability</h2>
          <p>AdvanceSafe is a tool built to support ISO 45001 and related compliance efforts. We do not guarantee that use of our software will result in certification or satisfy any specific legal or regulatory requirement. Compliance remains your responsibility. To the maximum extent permitted by law, our liability is limited as set out in your service agreement with us.</p>

          <h2>5. Intellectual Property</h2>
          <p>All content, trademarks, and materials on this site and in our Services are owned by Advanced SOS Max or our licensors. You may not copy, modify, or use them without our written permission.</p>

          <h2>6. Changes</h2>
          <p>We may update these Terms from time to time. Continued use after changes constitutes acceptance. We will post the updated Terms on this page with a new “Last updated” date.</p>

          <h2>7. Contact</h2>
          <p>For questions about these Terms: <a href="mailto:advancesafesystem@gmail.com" rel="noopener noreferrer">advancesafesystem@gmail.com</a>. AdvanceSafe is a product of Advanced SOS Max, Ahmedabad, Gujarat, India.</p>
        </div>
      </article>
    </div>
  );
}
