import Toggle from '../Toggle/Toggle';
import css from './ReminderList.module.css';

const ReminderList = () => {
  return (
    <div className={css.container}>
      <div>
        <h2 className={css.h2}>Water these now</h2>
      </div>
      <div className={css.toggleContainer}>
        <Toggle />
      </div>
      <div className={css.cardContainer}>
        <div className={css.rowsContainer}>
          <div className={css.topRowContainer}>
            <div className={css.imageTitleContainer}>
              <div>
                <img src="https://loremflickr.com/90/60" alt="plant" />
              </div>
              <div>
                <h3 className={css.h3}>Pothos</h3>
                <div className={css.subtext}>Last watered Tue, Mar 25</div>
              </div>
            </div>
            <div className={css.buttonContainer}>
              <button className={css.circleButton} />
            </div>
          </div>
          <div className={css.bottomRowContainer}>
            <div className={css.overdueText}>3 days overdue</div>
            <div className={css.careText}>+ Care details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderList;
