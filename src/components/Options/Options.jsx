import css from './Options.module.css';

const Options = ({ onUpdate, onReset, buttons, totalFeedback }) => {
  //формуємо розмітку кнопок з масиву за кількістю та найменуваннями
  const customButtonSet = buttons.map((buttonName, index) => {
    return (
      <button
        className={css.optionsBtn}
        onClick={onUpdate}
        key={index}
        type="button"
      >
        {buttonName}
      </button>
    );
  });
  //формуємо розмітку кнопки скидання
  const resetButton = (
    <button className={css.optionsBtn} onClick={onReset} type="button">
      reset
    </button>
  );

  return (
    <div className={css.optionsBox}>
      {customButtonSet}
      {totalFeedback > 0 && resetButton}
    </div>
  );
};

export default Options;
