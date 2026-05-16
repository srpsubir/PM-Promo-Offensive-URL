const STEP_LABELS = {
  1: 'Business model',
  2: 'Customer type',
  3: 'Product domain',
  4: 'Metrics',
  5: 'Your results',
};

export default function StepDots({ current, total }) {
  return (
    <div className="step-dots">
      <div className="step-dots__track">
        {Array.from({ length: total }, (_, i) => {
          const n = i + 1;
          const state = n < current ? 'done' : n === current ? 'active' : 'upcoming';
          return <span key={n} className={`step-dot step-dot--${state}`} />;
        })}
      </div>
      <p className="step-dots__label">Step {current} of {total} — {STEP_LABELS[current]}</p>
    </div>
  );
}
