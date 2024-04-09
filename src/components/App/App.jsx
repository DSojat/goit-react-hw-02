import { useState } from 'react';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import css from './App.module.css';

export default function App() {
  const startFeedbackButtons = { good: 0, neutral: 0, bad: 0 };

  const [feedbacks, setFeedback] = useState(startFeedbackButtons);

  let totalFeedback = 0;
  for (const key in feedbacks) {
    totalFeedback += feedbacks[key];
  }

  const updateFeedback = feedbackType => {
    const buttonName = feedbackType.target.textContent;
    const setValue = { ...feedbacks, [buttonName]: feedbacks[buttonName] + 1 };
    setFeedback(setValue);
  };

  const resetFeedback = () => {
    setFeedback({ ...startFeedbackButtons });
  };

  return (
    <>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        buttons={startFeedbackButtons}
        totalFeedback={totalFeedback}
      ></Options>
      {totalFeedback ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
        ></Feedback>
      ) : (
        <Notification></Notification>
      )}
    </>
  );
}
