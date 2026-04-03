import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brand">
          <Logo />
          <p className="footer__tagline">Protect Every Life. Predict Every Risk. Prevent Every Accident.</p>
        </div>
        <nav className="footer__nav" aria-label="Footer">
          <a href="/#problem-solution">Product</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/#features">Features</a>
          <Link to="/blog">Blog</Link>
          <a href="/#contact">Book a demo</a>
        </nav>
        <p className="footer__legal">
          © 2026 Advanced SOS Max. All rights reserved. |{' '}
          <a href="https://www.advancesafe.in" rel="noopener noreferrer">advancesafe.in</a>
        </p>
        <p className="footer__note">AdvanceSafe is a product of Advanced SOS Max</p>
      </div>
    </footer>
  );
}
