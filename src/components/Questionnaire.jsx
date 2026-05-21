// MAV-35 — Questionnaire: 5 steps
import { useState, useRef } from 'react';
import StepDots from './StepDots';
import { MODELS, DOMAINS, METRICS, SOCIAL } from '../content';

function trackEvent(name, props = {}) {
  if (typeof plausible !== 'undefined') {
    plausible(name, { props });
  } else {
    console.log('[analytics]', name, props);
  }
}

// All standard metrics across every domain (for custom metric detection)
const ALL_STANDARD_METRICS = new Set(Object.values(METRICS).flat());

export default function Questionnaire({ state, setState }) {
  const [customInput, setCustomInput] = useState('');
  const inputRef = useRef(null);

  const set = (patch) => setState(s => ({ ...s, ...patch }));

  // ── STEP 1: Business model ────────────────────────────────────────────────
  if (state.step === 1) {
    return (
      <div className="step">
        <StepDots current={1} total={5} />
        <h1 className="step-h">What does your company sell?</h1>
        <p className="step-sub">Pick the model that best describes how your company makes money. This is what determines the shape of your P&L and where your work lands on it.</p>
        <div className="social-nudge" dangerouslySetInnerHTML={{ __html: SOCIAL[1] }} />
        <div className="grid">
          {MODELS.map(m => (
            <div
              key={m.id}
              className={'card' + (state.model === m.id ? ' sel' : '')}
              onClick={() => set({ model: m.id })}
            >
              <span className="card-icon">{m.icon}</span>
              <div className="card-title">{m.title}</div>
              <div className="card-sub">{m.sub}</div>
            </div>
          ))}
        </div>
        <div className="nav">
          <button
            className="btn"
            disabled={!state.model}
            onClick={() => { trackEvent('Step Completed', { step: '1' }); set({ step: 2 }); }}
          >Continue</button>
        </div>
      </div>
    );
  }

  // ── STEP 2: B2B / B2C (or User / Advertiser for advertising model) ────────
  if (state.step === 2) {
    const isAd = state.model === 'advertising';
    const opts = isAd
      ? [
          { id: 'user',       icon: '👤', title: 'User product',                  sub: 'Engagement, content, DAU, retention' },
          { id: 'advertiser', icon: '📊', title: 'Advertiser and client product', sub: 'Ad tools, targeting, yield, measurement' },
        ]
      : [
          { id: 'b2b', icon: '🏢', title: 'Business customers', sub: 'You sell to other companies' },
          { id: 'b2c', icon: '👥', title: 'Consumer customers', sub: 'You sell direct to individuals' },
        ];

    return (
      <div className="step">
        <StepDots current={2} total={5} />
        <h1 className="step-h">{isAd ? 'Which side of the business do you work on?' : 'Who are your customers?'}</h1>
        <p className="step-sub">{isAd
          ? 'Ad-supported businesses have two PM tracks with different P&L connections. Pick the one that fits your role.'
          : 'This shapes how we frame your results. The P&L logic is the same but the language is different.'
        }</p>
        <div className="social-nudge" dangerouslySetInnerHTML={{ __html: SOCIAL[2] }} />
        <div className="grid-2">
          {opts.map(o => (
            <div
              key={o.id}
              className={'card' + (state.b2b === o.id ? ' sel' : '')}
              onClick={() => set({ b2b: o.id })}
            >
              <span className="card-icon">{o.icon}</span>
              <div className="card-title">{o.title}</div>
              <div className="card-sub">{o.sub}</div>
            </div>
          ))}
        </div>
        <div className="nav">
          <button className="btn btn-ghost" onClick={() => set({ step: 1 })}>Back</button>
          <button
            className="btn"
            disabled={!state.b2b}
            onClick={() => { trackEvent('Step Completed', { step: '2' }); set({ step: 3 }); }}
          >Continue</button>
        </div>
      </div>
    );
  }

  // ── STEP 3: Product domain (multi-select) ─────────────────────────────────
  if (state.step === 3) {
    const toggleDomain = (id) => {
      if (state.domain.includes(id)) {
        // Don't allow deselecting the last domain
        if (state.domain.length === 1) return;
        const newDomains = state.domain.filter(d => d !== id);
        const remainingStandardMetrics = new Set(newDomains.flatMap(d => METRICS[d] || []));
        // Keep metrics that are still in a remaining domain, or are custom (not in any standard list)
        set({
          domain: newDomains,
          metrics: state.metrics.filter(m => remainingStandardMetrics.has(m) || !ALL_STANDARD_METRICS.has(m)),
        });
      } else {
        set({ domain: [...state.domain, id] });
      }
    };

    return (
      <div className="step">
        <StepDots current={3} total={5} />
        <h1 className="step-h">What kind of product problems do you solve?</h1>
        <p className="step-sub">Select all that apply. Most PMs span more than one area.</p>
        <div className="social-nudge" dangerouslySetInnerHTML={{ __html: SOCIAL[3] }} />
        <div className="grid">
          {DOMAINS.map(d => (
            <div
              key={d.id}
              className={'card' + (state.domain.includes(d.id) ? ' sel' : '')}
              onClick={() => toggleDomain(d.id)}
            >
              <span className="card-icon">{d.icon}</span>
              <div className="card-title">{d.title}</div>
              <div className="card-sub">{d.sub}</div>
            </div>
          ))}
        </div>
        <div className="nav">
          <button className="btn btn-ghost" onClick={() => set({ step: 2 })}>Back</button>
          <button
            className="btn"
            disabled={state.domain.length === 0}
            onClick={() => { trackEvent('Step Completed', { step: '3' }); set({ step: 4 }); }}
          >Continue</button>
        </div>
      </div>
    );
  }

  // ── STEP 4: Metrics (grouped by selected domain, multi-select + custom) ───
  if (state.step === 4) {
    const domainGroups = state.domain.map(id => ({
      id,
      label: DOMAINS.find(d => d.id === id)?.title || id,
      metrics: METRICS[id] || [],
    }));

    const allStandardInScope = new Set(domainGroups.flatMap(g => g.metrics));
    const customMetrics = state.metrics.filter(m => !ALL_STANDARD_METRICS.has(m));

    const toggleMetric = (m) => {
      const next = state.metrics.includes(m)
        ? state.metrics.filter(x => x !== m)
        : [...state.metrics, m];
      set({ metrics: next });
    };

    const addCustom = () => {
      const v = customInput.trim();
      if (v && !state.metrics.includes(v)) {
        set({ metrics: [...state.metrics, v] });
        setCustomInput('');
      } else {
        setCustomInput('');
      }
    };

    const removeCustom = (m) => {
      set({ metrics: state.metrics.filter(x => x !== m) });
    };

    return (
      <div className="step">
        <StepDots current={4} total={5} />
        <h1 className="step-h">What metrics does your team live and die by?</h1>
        <p className="step-sub">Select all that apply. Add your own below if something is missing.</p>
        <div className="social-nudge" dangerouslySetInnerHTML={{ __html: SOCIAL[4] }} />

        {domainGroups.map((group, i) => (
          <div key={group.id}>
            {domainGroups.length > 1 && (
              <div className="metrics-group-label">{group.label}</div>
            )}
            <div className="pills">
              {group.metrics.map(m => (
                <div
                  key={m}
                  className={'pill' + (state.metrics.includes(m) ? ' sel' : '')}
                  onClick={() => toggleMetric(m)}
                >{m}</div>
              ))}
            </div>
          </div>
        ))}

        {customMetrics.length > 0 && (
          <div className="pills" style={{ marginTop: '4px' }}>
            {customMetrics.map(m => (
              <div key={m} className="pill sel">
                {m}
                <span
                  className="pill-remove"
                  title="Remove"
                  onClick={(e) => { e.stopPropagation(); removeCustom(m); }}
                >×</span>
              </div>
            ))}
          </div>
        )}

        <div className="pill-label">Not listed? Add your own (press Enter)</div>
        <div className="pill-add-row">
          <input
            ref={inputRef}
            type="text"
            value={customInput}
            placeholder="e.g. Optimised AWS database query latency"
            onChange={e => setCustomInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') addCustom(); }}
          />
          <button className="btn btn-ghost btn-sm" onClick={addCustom}>Add</button>
        </div>
        <div className="nav" style={{ marginTop: '20px' }}>
          <button className="btn btn-ghost" onClick={() => set({ step: 3 })}>Back</button>
          <button
            className="btn"
            disabled={state.metrics.length === 0}
            onClick={() => { trackEvent('Step Completed', { step: '4' }); set({ step: 5 }); }}
          >Continue</button>
        </div>
      </div>
    );
  }

  // ── STEP 5: Email gate ────────────────────────────────────────────────────
  if (state.step === 5) {
    const validEmail = state.email.includes('@');

    const handleSubmit = () => {
      if (!validEmail) return;
      // Fire-and-forget — pass primary domain to Mailchimp tag
      fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email: state.email, model: state.model, domain: state.domain[0] }),
      });
      trackEvent('Email Submitted');
      set({ step: 'results' });
    };

    return (
      <div className="step">
        <StepDots current={5} total={5} />
        <div className="gate">
          <div className="gate-icon">📊</div>
          <h2>Your result is ready</h2>
          <p>Enter your email and we will show you exactly how your product work connects to your company's P&L, and the sentence that will change how your CEO sees you.</p>
          <div className="gate-scenario">
            <div className="gate-scenario-q">"I reduced resolution time by 88%. But I couldn't show my exec team what that saved in operating costs or why they should care."</div>
            <div className="gate-scenario-a">That gap is why PMs stall before promotion. Your result shows exactly which P&L line your work moves, and why your exec notices.</div>
          </div>
          <div className="email-row">
            <input
              type="email"
              placeholder="your@email.com"
              value={state.email}
              onChange={e => set({ email: e.target.value.trim() })}
              onKeyDown={e => { if (e.key === 'Enter') handleSubmit(); }}
            />
            <button className="btn" disabled={!validEmail} onClick={handleSubmit}>Show me</button>
          </div>
          <p style={{ fontSize: '11px', color: 'var(--text-3)', marginTop: '14px', marginBottom: 0 }}>No spam. Your result is delivered immediately.</p>
        </div>
        <div className="nav" style={{ marginTop: '20px' }}>
          <button className="btn btn-ghost" onClick={() => set({ step: 4 })}>Back</button>
        </div>
      </div>
    );
  }

  return null;
}
