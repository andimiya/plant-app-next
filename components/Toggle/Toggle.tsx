import css from './Toggle.module.css';

interface Props {
  handleToggle: (event: any) => void;
  isToggledOn: boolean;
}
const Toggle = ({ handleToggle, isToggledOn }: Props) => {
  return (
    <div className={css.toggle}>
      <div className={css.label}>
        <span>Water + Fertilizer</span>
      </div>
      <div>
        <input
          type="checkbox"
          id="switch"
          onChange={handleToggle}
          checked={isToggledOn}
        />
        <label htmlFor="switch" />
      </div>
    </div>
  );
};

export default Toggle;
