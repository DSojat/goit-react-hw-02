import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import css from '../App/App.module.css';

export default function App() {
  //задаємо стартові значення відгуків за типами
  const startFeedbackButtons = { good: 0, neutral: 0, bad: 0 };

  //формуємо масив найменувань кнопок за назвами типів відгуків
  const buttonsNamesArray = Object.keys(startFeedbackButtons);

  const [feedbacks, setFeedback] = useState(() => {
    const savedObject = window.localStorage.getItem('saved-clicks');
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return startFeedbackButtons;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const feedbackSummary = (feedbackClick = 0) => {
    for (const key in feedbacks) {
      feedbackClick += feedbacks[key];
    }
    return feedbackClick;
  };

  const percentPositiveFb = () => {
    return Math.round((feedbacks.good / feedbackSummary()) * 100);
  }

  const updateFeedback = event => {
    const feedbackValue = event.target.value;
    const setValue = {
      ...feedbacks,
      [feedbackValue]: feedbacks[feedbackValue] + 1,
    };
    setFeedback(setValue);
  };

  const resetFeedback = () => {
    setFeedback({ ...startFeedbackButtons });
  };

  return (
    <>
      <div className={css.descriptionBox}>
        <Description type="title">Sip Happens Café</Description>
        <Description type="text">
          Please leave your feedback about our service by selecting one of the
          options below.
        </Description>
      </div>
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        buttons={buttonsNamesArray}
        totalFeedback={feedbackSummary()}
      ></Options>
      {feedbackSummary() ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={feedbackSummary()}
          positiveFeedback={percentPositiveFb()+"%"}
        ></Feedback>
      ) : (
        <Notification>No feedback yet</Notification>
      )}
    </>
  );
}
