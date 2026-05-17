const STEP_LABELS = {
  1: 'Model',
  2: 'Context',
  3: 'Domain',
  4: 'Metrics',
  5: 'Unlock',
};

export default function StepDots({ current, total = 5 }) {
  return (
    <div className="step-dots">
      {Array.from({ length: total }, (_, i) => {
        const n = i + 1;
        const cls = n < current ? 'step-dot done' : n === current ? 'step-dot active' : 'step-dot';
        return <div key={n} className={cls} />;
      })}
      <span className="step-dot-label">Step {current} of {total} — {STEP_LABELS[current] || ''}</span>
    </div>
  );
}
