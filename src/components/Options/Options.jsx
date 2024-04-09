import css from './Options.module.css';
const Options = ({ onUpdate, onReset, buttons, totalFeedback }) => {
  const buttonItems = Object.keys(buttons).map((arrayItem, index) => {
    return (
      <button
        className={css.optionsBtn}
        onClick={onUpdate}
        key={index}
        type="button"
      >
        {arrayItem}
      </button>
    );
  });
  const resetButton = (
    <button className={css.optionsBtn} onClick={onReset} type="button">
      reset
    </button>
  );

  return (
    <div className={css.optionsBox}>
      {buttonItems}
      {totalFeedback > 0 && resetButton}
    </div>
  );
};

export default Options;
