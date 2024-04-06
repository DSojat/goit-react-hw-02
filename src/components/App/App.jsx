import { useState } from 'react';
import Options from '../Options/Options';
import './App.css';

export default function App() {
  // const [feedbacks, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options></Options>
    </>
  );
}
