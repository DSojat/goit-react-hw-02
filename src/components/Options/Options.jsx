const Options = ({ updateFeedback, feedbackButtons }) => {
  
  const buttonItems = (Object.keys(feedbackButtons))
    .map((arrayItem, index) => {
    return <button onClick={updateFeedback} key={index} type="button">{arrayItem}</button>;
  });
  
  return (
    <>
     {buttonItems}
    </>
  );
};

export default Options;
