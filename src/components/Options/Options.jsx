const Options = ({ onUpdate, onReset, buttons, totalFeedback }) => {
  const buttonItems = Object.keys(buttons).map((arrayItem, index) => {
    return (
      <button onClick={onUpdate} key={index} type="button">
        {arrayItem}
      </button>
    );
  });
  const resetButton = (
    <button onClick={onReset} type="button">
      reset
    </button>
  );

  return (
    <>
      {buttonItems}
      {totalFeedback > 0 && resetButton}
    </>
  );
};

export default Options;
