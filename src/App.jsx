import { useState } from 'react';
import './styles/main.css';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';

const initialState = {
  step: 1,
  model: null,
  b2b: null,
  domain: null,
  metrics: [],
  email: '',
};

export default function App() {
  const [state, setState] = useState(initialState);

  return (
    <div className="app">
      {state.step === 'results'
        ? <Results state={state} setState={setState} />
        : <Questionnaire state={state} setState={setState} />
      }
    </div>
  );
}
