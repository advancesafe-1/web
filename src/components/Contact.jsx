import { useState } from 'react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby-3mL7MaTGoi64eD9iWowCvlGvdSE3xNl0yBlwOzcsgcx7exMt2XTWWVJRc8yBt6yi8A/exec';
const RATE_LIMIT_COUNT = 3; // Client-side only; enforce server-side rate limit in Apps Script
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const nameRe = /^[\p{L}\p{M}\s\-']+$/u;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getRateLimit() {
  try {
    const raw = sessionStorage.getItem('advancesafe_form_count');
    if (!raw) return { count: 0, start: 0 };
    const data = JSON.parse(raw);
    return { count: data.count || 0, start: data.start || 0 };
  } catch {
    return { count: 0, start: 0 };
  }
}

function setRateLimit(count, start) {
  try {
    sessionStorage.setItem('advancesafe_form_count', JSON.stringify({ count, start }));
  } catch {}
}

function checkRateLimit() {
  const now = Date.now();
  const rl = getRateLimit();
  if (now - rl.start > RATE_LIMIT_WINDOW_MS) {
    setRateLimit(0, now);
    return true;
  }
  return rl.count < RATE_LIMIT_COUNT;
}

function incrementRateLimit() {
  const now = Date.now();
  const rl = getRateLimit();
  if (now - rl.start > RATE_LIMIT_WINDOW_MS) {
    setRateLimit(1, now);
  } else {
    setRateLimit((rl.count || 0) + 1, rl.start);
  }
}

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', designation: '', company: '', industry: '', city: '', phone: '', email: '', workers: '', message: '', _gotcha: '',
  });
  const [feedback, setFeedback] = useState({ msg: '', isError: false });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ msg: '', isError: false });

    if ((formData._gotcha || '').trim()) return;

    if (!checkRateLimit()) {
      setFeedback({ msg: 'Too many requests. Please call us directly or try again later.', isError: true });
      return;
    }

    const nameVal = (formData.name || '').trim();
    const companyVal = (formData.company || '').trim();
    const phoneVal = (formData.phone || '').trim();
    const emailVal = (formData.email || '').trim();
    const designationVal = (formData.designation || '').trim();
    const industryVal = (formData.industry || '').trim();
    const cityVal = (formData.city || '').trim();
    const messageVal = (formData.message || '').trim();

    if (!nameVal) { setFeedback({ msg: 'Please enter your full name.', isError: true }); return; }
    if (!nameRe.test(nameVal)) { setFeedback({ msg: 'Name can only contain letters, spaces, hyphens, and apostrophes.', isError: true }); return; }
    if (!companyVal) { setFeedback({ msg: 'Please enter your company name.', isError: true }); return; }
    if (!designationVal) { setFeedback({ msg: 'Please select your designation.', isError: true }); return; }
    if (!industryVal) { setFeedback({ msg: 'Please select your industry.', isError: true }); return; }
    if (!cityVal) { setFeedback({ msg: 'Please enter your city.', isError: true }); return; }
    const phoneDigits = (phoneVal || '').replace(/\D/g, '');
    if (phoneDigits.length !== 10 || phoneDigits.charAt(0) < '6' || phoneDigits.charAt(0) > '9') {
      setFeedback({ msg: 'Please enter a valid 10-digit Indian mobile number (starting with 6–9).', isError: true });
      return;
    }
    if (emailVal && !emailRe.test(emailVal)) {
      setFeedback({ msg: 'Please enter a valid email address.', isError: true });
      return;
    }

    const payload = {
      source: 'advancesafe.in',
      name: nameVal,
      designation: designationVal,
      company: companyVal,
      industry: industryVal,
      phone: phoneVal,
      city: cityVal,
      email: emailVal || undefined,
      workers: (formData.workers || '').trim(),
      message: messageVal,
    };

    setSubmitting(true);
    try {
      /* no-cors: only simple Content-Types are allowed; use text/plain + JSON string so the body is sent and Apps Script can parse e.postData.contents */
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });
      // With no-cors we can't read the response; treat sent-without-throw as success.
      incrementRateLimit();
      setFeedback({ msg: 'Demo request submitted successfully!', isError: false });
      setFormData({ name: '', designation: '', company: '', industry: '', city: '', phone: '', email: '', workers: '', message: '', _gotcha: '' });
    } catch (error) {
      /* Often CSP (connect-src) or offline; Apps Script may still have run — don't imply hard failure */
      setFeedback({
        msg:
          'We could not confirm from your browser (often a security policy block). If you already received an email, your request went through. Otherwise try again or call +91 95868 68538.',
        isError: true,
      });
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section reveal" aria-labelledby="contact-title">
      <div className="container">
        <p className="section-label-contact" id="contact-label">Get in touch</p>
        <h2 className="section-title" id="contact-title">Let's Show You Your Plant Inside AdvanceSafe</h2>
        <p className="hero__sub">We connect to your existing cameras and sensors live during the demo. You see your actual plant — not a generic demo environment. Most plant heads make a decision the same day.</p>

        <div className="contact-layout">
          <div className="contact-form-wrap">
            <h3 className="contact-form-title">Request your live demo</h3>
            <p className="contact-form-sub">Fill in your details and we'll connect to your plant live during the call.</p>
            <form className="contact-form" id="demo-request-form" method="POST" onSubmit={handleSubmit} noValidate>
              <input type="text" name="_gotcha" value={formData._gotcha} onChange={handleChange} style={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required maxLength={100} placeholder="Your full name" autoComplete="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="designation">Designation *</label>
                  <select id="designation" name="designation" required aria-required value={formData.designation} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="Plant Head">Plant Head</option>
                    <option value="HSE Manager">HSE Manager</option>
                    <option value="CFO">CFO</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input type="text" id="company" name="company" required maxLength={150} placeholder="Company name" autoComplete="organization" value={formData.company} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="industry">Industry *</label>
                  <select id="industry" name="industry" required aria-required value={formData.industry} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="Chemicals">Chemicals</option>
                    <option value="Pharmaceuticals">Pharmaceuticals</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Steel & Metals">Steel & Metals</option>
                    <option value="Food Processing">Food Processing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input type="text" id="city" name="city" required maxLength={100} placeholder="City" autoComplete="address-level2" value={formData.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required maxLength={15} placeholder="10-digit mobile (e.g. 9876543210)" autoComplete="tel" inputMode="numeric" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email (optional)</label>
                  <input type="email" id="email" name="email" maxLength={254} placeholder="For reply" autoComplete="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="workers">Number of Workers (approximate) *</label>
                  <input type="text" id="workers" name="workers" required maxLength={20} placeholder="Approximate count" inputMode="numeric" autoComplete="off" value={formData.workers} onChange={handleChange} />
                </div>
                <div className="form-group full">
                  <label htmlFor="message">Message (optional)</label>
                  <textarea id="message" name="message" maxLength={1000} placeholder="Any specific questions or requirements" value={formData.message} onChange={handleChange} />
                </div>
              </div>
              {feedback.msg && (
                <div className={`form-feedback form-feedback--${feedback.isError ? 'error' : 'success'}`} role="status" aria-live="polite">
                  {feedback.msg}
                </div>
              )}
              <div className="form-submit-wrap">
                <button type="submit" className="form-submit" id="form-submit-btn" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Request Your Live Demo'}
                  {!submitting && <ArrowIcon />}
                </button>
              </div>
            </form>
          </div>

          <aside className="contact-sidebar" aria-label="What to expect and contact options">
            <div className="contact-expect">
              <h4>What to expect</h4>
              <ul>
                <li><CheckIcon /> Live connection to your cameras and sensors during the call</li>
                <li><CheckIcon /> Your actual plant on screen — no generic slides</li>
                <li><CheckIcon /> Most decisions made the same day</li>
              </ul>
            </div>
            <div className="contact-methods">
              <a href="tel:+919586868538" className="contact-method" rel="noopener noreferrer">
                <span className="contact-method__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FFB700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <span>
                  <span className="contact-method__label">Phone</span>
                  <span className="contact-method__value">+91 95868 68538</span>
                </span>
              </a>
              <a href="mailto:advancesafesystem@gmail.com" className="contact-method" rel="noopener noreferrer">
                <span className="contact-method__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FFB700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/>
                  </svg>
                </span>
                <span>
                  <span className="contact-method__label">Email</span>
                  <span className="contact-method__value">advancesafesystem@gmail.com</span>
                </span>
              </a>
              <span className="contact-method" style={{ cursor: 'default' }}>
                <span className="contact-method__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FFB700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span>
                  <span className="contact-method__label">Office</span>
                  <span className="contact-method__value">Ahmedabad, Gujarat, India</span>
                </span>
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
