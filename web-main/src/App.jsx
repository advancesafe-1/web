import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import WhyAdvanceSafe from './components/WhyAdvanceSafe';
import ROI from './components/ROI';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY ?? document.documentElement.scrollTop) / h : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

function useParallax() {
  const gridRef = useRef(null);
  const glowRef = useRef(null);
  useEffect(() => {
    let raf = null;
    const tick = () => {
      const scrollY = window.scrollY ?? document.documentElement.scrollTop;
      if (gridRef.current) {
        const gridOffset = scrollY * 0.2;
        gridRef.current.style.transform = `translate3d(0, ${-gridOffset * 0.4}px, 0)`;
      }
      if (glowRef.current) {
        const glowOffset = scrollY * 0.1;
        glowRef.current.style.transform = `translate3d(0, ${-glowOffset}px, 0) scale(1.05)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return { gridRef, glowRef };
}

function useReveal(selector = '.reveal') {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const els = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, [selector]);
}

function useCardTilt() {
  useEffect(() => {
    const cards = document.querySelectorAll('.pillar-card, .feature-tile, .why-card');
    const onMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rx = Math.max(-4, Math.min(4, -y * 5));
      const ry = Math.max(-4, Math.min(4, x * 5));
      card.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px) scale(1.04)`;
    };
    const onLeave = (e) => {
      e.currentTarget.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
    };
    cards.forEach((card) => {
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
    });
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);
}

export default function App() {
  const progress = useScrollProgress();
  const { gridRef, glowRef } = useParallax();
  useReveal();
  useCardTilt();

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div
        className="scroll-progress"
        role="presentation"
        aria-hidden="true"
        style={{ transform: `scaleX(${progress})` }}
      />
      <div className="vignette" aria-hidden="true" />
      <div className="page-wrap">
        <div ref={gridRef} className="parallax-layer parallax-layer--grid" aria-hidden="true" />
        <div ref={glowRef} className="parallax-layer parallax-layer--glow" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />
        <Header />
        <main id="main-content">
          <Hero />
          <Pillars />
          <HowItWorks />
          <Features />
          <WhyAdvanceSafe />
          <ROI />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
