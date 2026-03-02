import { Link } from 'react-router-dom';

export default function Logo({ className = '', ...props }) {
  return (
    <Link to="/" className={`logo ${className}`} aria-label="AdvanceSafe home" {...props}>
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 1L2 8v8c0 8.284 5.373 15.716 12 17 6.627-1.284 12-8.716 12-17V8L14 1z" stroke="#FFB700" strokeWidth="2" fill="none"/>
        <path d="M14 10v10M10 14h8" stroke="#FFB700" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      AdvanceSafe
    </Link>
  );
}
