import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brand">
          <Logo />
          <p className="footer__tagline">Protect Every Life. Predict Every Risk. Prevent Every Accident.</p>
        </div>
        <p className="footer__legal">
          © 2025 Advanced SOS Max. All rights reserved. |{' '}
          <a href="https://advancesafe.in" rel="noopener noreferrer">advancesafe.in</a>
        </p>
        <p className="footer__note">AdvanceSafe is a product of Advanced SOS Max</p>
      </div>
    </footer>
  );
}
