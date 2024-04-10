import css from './Toggle.module.css';

const Toggle = () => {
  return (
    <div className={css.toggle}>
      <div className={css.label}>
        <span>Water + Fertilizer</span>
      </div>
      <div>
        <input type="checkbox" id="switch" />
        <label htmlFor="switch" />
      </div>
    </div>
  );
};

export default Toggle;
