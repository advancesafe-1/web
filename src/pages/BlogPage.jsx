import { useEffect } from 'react';
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

export default function BlogPage() {
  useEffect(() => {
    document.title = 'Industry Safety Blog — Expert Insights & Best Practices | AdvanceSafe';
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        'content',
        'Expert articles on industrial safety management, ISO 45001, OSHA compliance, workplace hazard prevention, EHS best practices, and safety technology for industries worldwide.'
      );
  }, []);

  const featuredPosts = blogPosts.filter((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

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
          <div className="blog-hero__pills">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`blog-hero__pill ${cat === 'All' ? 'is-active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="blog-content">
        <section className="blog-section">
          <h2 className="blog-section__label">Featured Articles</h2>
          <div className="blog-grid-featured">
            {featuredPosts.map((post) => (
              <FeaturedCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <hr className="blog-divider" />

        <section className="blog-section">
          <h2 className="blog-section__label blog-section__label--muted">Latest Articles</h2>
          <div className="blog-grid-posts">
            {regularPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <section className="blog-cta">
          <h2 className="blog-cta__title">Stay Ahead in Industry Safety</h2>
          <p className="blog-cta__sub">
            Get weekly safety insights, ISO 45001 updates, and best practices delivered to your
            inbox.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="your@company.com"
              className="blog-cta__input"
              aria-label="Email for newsletter"
            />
            <button type="button" className="btn btn--primary">
              Subscribe Free
            </button>
          </div>
        </section>
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
