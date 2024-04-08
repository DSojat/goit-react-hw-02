const Feedback = ({ feedbacks, totalFeedback }) => {
  const keys = Object.keys(feedbacks);
  const values = Object.values(feedbacks);
  const positiveFeedbacks = feedbacks.good;
  if (totalFeedback > 0) {
    const feedbackItems = keys.map((arrayItem, index) => {
      return (
        <p key={index}>
          {arrayItem}: {values[index]}
        </p>
      );
    });

    return (
      <>
        {feedbackItems}
        <p>total: {totalFeedback}</p>
        <p>
          positive: {Math.round((positiveFeedbacks / totalFeedback) * 100)}%
        </p>
      </>
    );
  }
};

export default Feedback;
