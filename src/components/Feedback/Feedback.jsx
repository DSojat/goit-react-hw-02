const Feedback = ({ feedbacks }) => {
    const keys = Object.keys(feedbacks);
    const values = Object.values(feedbacks);
    const feedbackItems = keys
    .map((arrayItem, index) => {
        return <p key={index}>{arrayItem}: {values[index]}</p>;
  });
  
  return (
    <>
     {feedbackItems}
    </>
  );
};

export default Feedback;