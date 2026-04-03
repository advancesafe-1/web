import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <nav className="nav">
          <a href="/#pillars">Features</a>
          <a href="/#how-it-works">How It Works</a>
          <Link to="/blog">Blog</Link>
          <a href="/#contact">Contact</a>
          <a href="/#contact" className="btn btn--primary">Book a demo</a>
        </nav>
      </div>
    </header>
  );
}
