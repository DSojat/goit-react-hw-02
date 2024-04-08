import { useState } from 'react';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import './App.css';

export default function App() {
  const feedbackButtons = { good: 0, neutral: 0, bad: 0 };
  const [feedbacks, setFeedback] = useState(feedbackButtons);
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const updateFeedback = feedbackType => {
    const buttonName = feedbackType.target.textContent;
    const setValue = { ...feedbacks, clickButton: feedbacks[buttonName] + 1 };
    setValue[buttonName] = setValue['clickButton'];
    delete setValue['clickButton'];
    setFeedback(setValue);
    console.log(totalFeedback);
  };

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateFeedback={updateFeedback} feedbackButtons={feedbackButtons}></Options>
      <Feedback feedbacks={feedbacks}></Feedback>
    </>
  );
}
