import css from './Description.module.css';

const Description = ({ type, children }) => {
  return (
    <>
      {type === 'title' && <h1 className={css.title}>{children}</h1>}
      {type === 'text' && <p className={css.text}>{children}</p>}
    </>
  );
};

export default Description;
