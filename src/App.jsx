import { useState, useEffect, useRef } from 'react';
import './styles/main.css';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';

const initialState = {
  step: 1,
  model: null,
  b2b: null,
  domain: [],      // array — multi-select, primary = domain[0]
  metrics: [],
  email: '',
};

function trackEvent(name, props = {}) {
  if (typeof plausible !== 'undefined') {
    plausible(name, { props });
  } else {
    console.log('[analytics]', name, props);
  }
}

export default function App() {
  const [state, setState] = useState(initialState);
  const toolStartedFired = useRef(false);

  // Fire "Tool Started" once on first mount
  useEffect(() => {
    if (!toolStartedFired.current) {
      trackEvent('Tool Started');
      toolStartedFired.current = true;
    }
  }, []);

  // Fire "Results Viewed" when results step is reached
  useEffect(() => {
    if (state.step === 'results') {
      trackEvent('Results Viewed');
    }
  }, [state.step]);

  // Progress bar percentage
  const progressMap = { 1: 20, 2: 40, 3: 60, 4: 80, 5: 92, results: 100 };
  const progress = progressMap[state.step] || 20;

  // Step info label
  const stepInfoMap = {
    1: 'Step 1 of 5', 2: 'Step 2 of 5', 3: 'Step 3 of 5',
    4: 'Step 4 of 5', 5: 'Step 5 of 5', results: 'Your results',
  };

  return (
    <>
      <div id="progress-track" />
      <div id="progress-bar" style={{ width: progress + '%' }} />

      <header className="hdr">
        <div className="logo">PM <em>Promotion Offensive</em></div>
        <div className="step-info">{stepInfoMap[state.step] || ''}</div>
      </header>

      {state.step !== 'results' && (
        <div className="proof-strip">
          ⭐ <strong>5.0 on Maven</strong> &nbsp;·&nbsp; 22 PMs enrolled &nbsp;·&nbsp; Vimeo, Zalando and others
        </div>
      )}

      <main className="main">
        {state.step === 'results'
          ? <Results state={state} setState={setState} />
          : <Questionnaire state={state} setState={setState} />
        }
      </main>
    </>
  );
}
