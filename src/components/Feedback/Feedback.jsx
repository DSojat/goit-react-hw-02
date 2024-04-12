import css from './Feedback.module.css';

const Feedback = ({ feedbacks, positiveFeedback, totalFeedback }) => {
  const keys = Object.keys(feedbacks);
  const values = Object.values(feedbacks);

    const feedbackItems = keys.map((arrayItem, index) => {
      return (
        <p className={css.text} key={index}>
          {arrayItem}: {values[index]}
        </p>
      );
    });

    return (
      <div>
        {feedbackItems}
        <p className={css.text}>total: {totalFeedback}</p>
        <p className={css.text}>positive: {positiveFeedback}</p>
      </div>
    );
};

export default Feedback;
