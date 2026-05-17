// MAV-36 — Results page
// Render order is locked per handoff doc
import { useState } from 'react';
import { MODELS, DOMAINS, PL, N } from '../content';

function trackEvent(name, props = {}) {
  if (typeof plausible !== 'undefined') {
    plausible(name, { props });
  } else {
    console.log('[analytics]', name, props);
  }
}

export default function Results({ state, setState }) {
  const [copied, setCopied] = useState(false);

  const mLabel = MODELS.find(m => m.id === state.model)?.title || state.model;
  const dLabel = DOMAINS.find(d => d.id === state.domain)?.title || state.domain;
  const content = N[state.model]?.[state.domain];
  const nodes = PL[state.model] || [];
  const hl = content?.hl || [];

  const restart = () => setState({
    step: 1, model: null, b2b: null, domain: null, metrics: [], email: '',
  });

  const copyScript = () => {
    const text = content?.exec || '';
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="results">

      {/* 1. Tags row */}
      <div className="r-tags">
        <span className="tag a">{mLabel}</span>
        <span className="tag a">{dLabel}</span>
        {state.metrics.map(m => <span key={m} className="tag">{m}</span>)}
      </div>

      {/* 2. Eyebrow */}
      <div className="r-eyebrow">Your commercial impact</div>

      {/* 3. H1 */}
      <h1 className="r-title">Here is how your work maps to what your exec is accountable for.</h1>

      {/* 4. Subhead */}
      <p className="r-sub">Your exec is just like your users. They have needs too. Their job is to move specific lines on the company P&L. When your roadmap visibly relieves that pressure, they notice. That is how trust builds. That is what leads to promotion. Below is which lines your work touches.</p>

      {/* 5. Exec hero block */}
      <div className="exec-hero">
        <div className="exec-hero-lbl">Say this in your next exec review</div>
        <div className="exec-hero-text">"{content?.exec || ''}"</div>
        <div className="exec-hero-hint">Replace the bracketed placeholders with your actual numbers. This is how you show your exec that your roadmap is directly relieving the pressure they are accountable for.</div>
        <button className="exec-copy-btn" onClick={copyScript}>
          {copied ? '✓ Copied' : 'Copy script'}
        </button>
      </div>

      {/* 6. Promo banner */}
      <div className="promo-banner">
        <div className="promo-banner-icon">🎯</div>
        <div className="promo-banner-text">
          <strong>PMs who speak this language get promoted.</strong>{' '}
          {content?.promo || 'The PM Promotion Offensive teaches you to build this fluency across every part of your business.'}
        </div>
      </div>

      {/* 7. P&L diagram */}
      <div className="pl-wrap">
        <div className="pl-label">Your company's P&L — highlighted lines show where your work lands</div>
        <div className="pl-flow">
          {nodes.map((node, i) => (
            <div key={node.id}>
              {i > 0 && <div className="pl-connector" />}
              <div className="pl-node-wrap">
                <div className="pl-op">{node.op || ''}</div>
                <div className={'pl-node' + (hl.includes(node.id) ? ' hl' : '')}>
                  <div className="pl-node-name">{node.name}</div>
                  {node.desc && <div className="pl-node-desc">{node.desc}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Narrative */}
      <div className="narr-wrap">
        <div className="narr-lbl">The full commercial picture</div>
        <div className="narr-text">{content?.narrative || ''}</div>
      </div>

      {/* 9. CTA block */}
      <div className="cta">
        <h3>Ready to use this to get promoted?</h3>
        <p>The PM Promotion Offensive teaches you to understand your exec's commercial pressures, align your roadmap to relieve them, and build the trust that leads to promotion.</p>
        <a
          href="https://maven.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
          onClick={() => trackEvent('CTA Clicked')}
        >
          <button className="btn btn-lg">Explore the PM Promotion Offensive</button>
        </a>
        <div className="cta-testimonial">
          <div className="cta-testimonial-text">"The in-depth, real-time feedback discussions were the highlight for me. Both Leland and Subir are excellent instructors."</div>
          <div className="cta-testimonial-attr">Tanvi &nbsp;·&nbsp; 10/10 on Maven</div>
        </div>
        <div className="cta-trust">PMs from Vimeo and Zalando have enrolled &nbsp;·&nbsp; PM Promotion Offensive</div>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button className="btn btn-ghost" onClick={restart}>Try a different profile</button>
      </div>

      {/* Sticky mobile CTA */}
      <div className="sticky-mobile-cta">
        <a
          href="https://maven.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', flex: 1 }}
          onClick={() => trackEvent('CTA Clicked')}
        >
          <button className="btn btn-lg" style={{ width: '100%' }}>Explore the PM Promotion Offensive</button>
        </a>
      </div>

    </div>
  );
}
