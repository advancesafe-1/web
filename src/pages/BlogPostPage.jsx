import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BlogPostSchema } from '../components/SchemaMarkup';
import { allPosts } from '../data/blogPosts';
import { serializeJsonLd } from '../lib/jsonLd';

/** Renders **inline** bold in blog markdown lines */
function parseInlineBold(text) {
  if (text == null || !String(text).includes('**')) return text;
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderContentLine(line, i) {
  if (line.startsWith('## '))
    return <h2 key={i}>{parseInlineBold(line.replace('## ', ''))}</h2>;
  if (line.startsWith('### '))
    return <h3 key={i}>{parseInlineBold(line.replace('### ', ''))}</h3>;
  if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**'))
    return <p key={i} className="blog-article__strong">{line.replace(/\*\*/g, '')}</p>;
  if (line.startsWith('- '))
    return <li key={i}>{parseInlineBold(line.replace(/^- /, ''))}</li>;
  if (line.startsWith('| ')) return null;
  if (line.trim() === '') return <br key={i} />;
  return <p key={i}>{parseInlineBold(line)}</p>;
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? allPosts[slug] : null;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | AdvanceSafe Blog`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', post.excerpt);
    } else {
      document.title = 'Post Not Found | AdvanceSafe';
    }
  }, [post]);

  if (!post) {
    return (
      <div className="blog-page">
        <div className="blog-not-found">
          <h1 className="blog-not-found__title">Post Not Found</h1>
          <Link to="/blog" className="blog-not-found__back">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.trim().split('\n').filter(Boolean);

  return (
    <div className="blog-page">
      <BlogPostSchema post={post} />

      {post.faq && post.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: post.faq.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            }),
          }}
        />
      )}

      <section className="blog-post-hero">
        <div className="container-narrow">
          <Link to="/blog" className="blog-post-hero__back">
            ← Back to Blog
          </Link>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <span className="blog-post-hero__badge">{post.category}</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', padding: '5px 0' }}>
              {post.readTime}
            </span>
          </div>

          <h1 className="blog-post-hero__title">{post.title}</h1>
          <p className="blog-post-hero__excerpt">{post.excerpt}</p>

          <div className="blog-post-hero__author-wrap">
            <div className="blog-post-hero__avatar">👤</div>
            <div>
              <div className="blog-post-hero__author">{post.author}</div>
              <div className="blog-post-hero__date">Published {post.publishedAt}</div>
            </div>
          </div>
        </div>
      </section>

      <article className="blog-article">
        <div className="blog-article__tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blog-article__tag">
              #{tag}
            </span>
          ))}
        </div>

        <div className="blog-article__content">
          {paragraphs.map(renderContentLine)}
        </div>

        {post.faq && post.faq.length > 0 && (
          <div className="blog-faq">
            <h2 className="blog-faq__title">Frequently Asked Questions</h2>
            {post.faq.map((item, i) => (
              <div key={i} className="blog-faq__item">
                <div className="blog-faq__q">Q: {item.q}</div>
                <div className="blog-faq__a">{item.a}</div>
              </div>
            ))}
          </div>
        )}

        <p className="blog-disclaimer" role="note" style={{ marginTop: '2rem' }}>
          <strong>Disclaimer:</strong> This article is for general information and educational purposes only. Statistics or third-party data mentioned are not independently verified by AdvanceSafe. For compliance and safety decisions, consult qualified professionals and official regulations.
        </p>

        <div className="blog-article-cta">
          <h3 className="blog-article-cta__title">
            Ready to Transform Your Safety Management?
          </h3>
          <p className="blog-article-cta__sub">
            See how AdvanceSafe helps plants strengthen ISO 45001–aligned safety workflows, live
            monitoring, and audit-ready records.
          </p>
          <Link to="/" className="btn btn--primary">
            Get Free Demo →
          </Link>
        </div>
      </article>
    </div>
  );
}
