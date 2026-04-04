import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const categories = [
  'All',
  'Fundamentals',
  'ISO 45001',
  'Safety Audits',
  'Incident Management',
  'Safety Culture',
  'EHS Management',
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NEWSLETTER_MAIL = 'advancesafesystem@gmail.com';

function BlogNewsletterCta() {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState({ msg: '', isError: false });
  const [submitting, setSubmitting] = useState(false);
  const formEndpoint = import.meta.env.VITE_NEWSLETTER_FORM_URL?.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ msg: '', isError: false });
    const trimmed = email.trim();
    if (!trimmed) {
      setFeedback({ msg: 'Please enter your email address.', isError: true });
      return;
    }
    if (trimmed.length > 254 || !emailRe.test(trimmed)) {
      setFeedback({ msg: 'Please enter a valid email address.', isError: true });
      return;
    }

    setSubmitting(true);
    try {
      if (formEndpoint) {
        const res = await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            email: trimmed,
            _subject: 'AdvanceSafe blog newsletter signup',
            source: 'advancesafe.in/blog',
          }),
        });
        const data = res.ok ? await res.json().catch(() => ({})) : null;
        if (!res.ok) throw new Error(data?.error || 'Request failed');
        setFeedback({
          msg: "Thanks — you're on the list. If the service asks you to confirm, check your inbox.",
          isError: false,
        });
        setEmail('');
      } else {
        const subject = encodeURIComponent('AdvanceSafe blog newsletter subscription');
        const body = encodeURIComponent(
          `Please add this email to the industry safety newsletter:\n\n${trimmed}\n`
        );
        setFeedback({
          msg: 'Opening your email app to send the request. If nothing opens, email us from the address you entered.',
          isError: false,
        });
        setSubmitting(false);
        window.setTimeout(() => {
          window.location.href = `mailto:${NEWSLETTER_MAIL}?subject=${subject}&body=${body}`;
        }, 150);
        return;
      }
    } catch {
      setFeedback({
        msg: `Something went wrong. Email ${NEWSLETTER_MAIL} with subject “Newsletter” from the address you want subscribed.`,
        isError: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="blog-cta">
      <h2 className="blog-cta__title">Stay Ahead in Industry Safety</h2>
      <p className="blog-cta__sub">
        Get weekly safety insights, ISO 45001 updates, and best practices delivered to your inbox.
      </p>
      <form className="blog-cta__form" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          name="email"
          placeholder="your@company.com"
          className="blog-cta__input"
          aria-label="Email for newsletter"
          autoComplete="email"
          maxLength={254}
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={submitting}
        />
        <button type="submit" className="btn btn--primary" disabled={submitting}>
          {submitting ? 'Sending…' : 'Subscribe Free'}
        </button>
      </form>
      {feedback.msg ? (
        <p
          className={`blog-cta__feedback form-feedback form-feedback--${feedback.isError ? 'error' : 'success'}`}
          role="status"
          aria-live="polite"
        >
          {feedback.msg}
        </p>
      ) : null}
    </section>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Industry Safety Blog — Expert Insights & Best Practices | AdvanceSafe';
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        'content',
        'Expert articles on industrial safety management, ISO 45001, Indian safety regulations (Factories Act, BOCW, DGFASLI), workplace hazard prevention, EHS best practices, and safety technology for industries.'
      );
  }, []);

  const { featuredPosts, regularPosts } = useMemo(() => {
    const filtered =
      activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter((p) => p.category === activeCategory);
    return {
      featuredPosts: filtered.filter((p) => p.featured),
      regularPosts: filtered.filter((p) => !p.featured),
    };
  }, [activeCategory]);

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <span className="blog-hero__badge">Industry Safety Blog</span>
          <h1 className="blog-hero__title">
            Expert Insights on <span className="accent">Industrial Safety</span>
          </h1>
          <p className="blog-hero__sub">
            ISO 45001 guides, safety audit best practices, incident management strategies, and
            everything you need to build a world-class safety culture.
          </p>
          <div className="blog-hero__pills" role="group" aria-label="Filter articles by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`blog-hero__pill ${cat === activeCategory ? 'is-active' : ''}`}
                aria-pressed={cat === activeCategory}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="blog-content">
        <p className="blog-disclaimer" role="note">
          <strong>Disclaimer:</strong> This blog is for general information and educational purposes only. Articles may reference industry practices and standards; we do not guarantee the accuracy or completeness of any statistics or third-party data. For compliance and safety decisions, consult qualified professionals and official regulations.
        </p>
        {featuredPosts.length > 0 && (
          <section className="blog-section">
            <h2 className="blog-section__label">Featured Articles</h2>
            <div className="blog-grid-featured">
              {featuredPosts.map((post) => (
                <FeaturedCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {featuredPosts.length > 0 && regularPosts.length > 0 && <hr className="blog-divider" />}

        {(regularPosts.length > 0 || (featuredPosts.length === 0 && activeCategory !== 'All')) && (
          <section className="blog-section">
            <h2 className="blog-section__label blog-section__label--muted">Latest Articles</h2>
            {regularPosts.length > 0 ? (
              <div className="blog-grid-posts">
                {regularPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className="blog-filter-empty" role="status">
                {`No articles in “${activeCategory}” yet. Try another category or view All.`}
              </p>
            )}
          </section>
        )}

        {activeCategory === 'All' && regularPosts.length === 0 && featuredPosts.length === 0 && (
          <section className="blog-section">
            <h2 className="blog-section__label blog-section__label--muted">Latest Articles</h2>
            <p className="blog-filter-empty" role="status">
              No articles to show.
            </p>
          </section>
        )}

        <BlogNewsletterCta />
      </div>
    </div>
  );
}

function FeaturedCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      <div
        className="blog-card__image"
        style={{
          background: `linear-gradient(135deg, ${post.categoryColor}22, ${post.categoryColor}44)`,
        }}
      >
        <span style={{ fontSize: '64px' }}>
          {post.category === 'ISO 45001'
            ? '🛡️'
            : post.category === 'Fundamentals'
              ? '🏭'
              : '📋'}
        </span>
        <span
          className="blog-card__category"
          style={{ background: post.categoryColor }}
        >
          {post.category}
        </span>
      </div>
      <div className="blog-card__body">
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <div className="blog-card__meta">
          <div className="blog-card__author-wrap">
            <div className="blog-card__avatar">👤</div>
            <div>
              <div className="blog-card__author">{post.author}</div>
              <div className="blog-card__date">
                {post.publishedAt} · {post.readTime}
              </div>
            </div>
          </div>
          <span className="blog-card__read">Read More →</span>
        </div>
      </div>
    </Link>
  );
}

function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card blog-card--small">
      <div
        className="blog-card__image"
        style={{
          background: `linear-gradient(135deg, ${post.categoryColor}15, ${post.categoryColor}30)`,
        }}
      >
        <span style={{ fontSize: '48px' }}>
          {post.category === 'Incident Management'
            ? '🚨'
            : post.category === 'Safety Culture'
              ? '🏆'
              : post.category === 'EHS Management'
                ? '♻️'
                : '🔒'}
        </span>
      </div>
      <div className="blog-card__body">
        <span
          className="blog-card__tag"
          style={{ color: post.categoryColor }}
        >
          {post.category}
        </span>
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt.slice(0, 110)}...</p>
        <div className="blog-card__meta">
          <span className="blog-card__date">
            {post.publishedAt} · {post.readTime}
          </span>
          <span className="blog-card__read">Read →</span>
        </div>
      </div>
    </Link>
  );
}
