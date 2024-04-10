import { useState } from 'react';
import Toggle from '../Toggle/Toggle';
import css from './ReminderList.module.css';
import Icon from '../Icons/Icon';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { IPlantData } from '@/pages/plants/[pid]';

const ReminderList = ({ allPlants }: { allPlants: IPlantData[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [careDetails, setCareDetails] = useState('none');

  const handleCareDetails = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setCareDetails('block');
    } else {
      setCareDetails('none');
    }
  };

  const handleTaskCheck = () => {
    // console.log('Task checked');
  };

  return (
    <div className={css.container}>
      <div>
        <h2 className={css.h2}>Water these now</h2>
      </div>
      <div className={css.toggleContainer}>
        <Toggle />
      </div>
      {allPlants.map((plant: IPlantData) => (
        <div className={css.cardContainer} key={plant._id}>
          <div className={css.rowsContainer}>
            <div className={css.topRowContainer}>
              <div className={css.imageTitleContainer}>
                <div>
                  <img
                    src={plant?.images?.[0] || 'https://loremflickr.com/90/60'}
                    height="60"
                    alt="plant"
                  />
                </div>
                <div>
                  <h3 className={css.h3}>{plant.title}</h3>
                  <div className={css.subtext}>Last watered Tue, Mar 25</div>
                </div>
              </div>
              <div className={css.buttonContainer}>
                <button
                  onClick={handleTaskCheck}
                  className={css.circleButton}
                />
              </div>
            </div>
            <div className={css.bottomRowContainer}>
              <div className={css.overdueText}>3 days overdue</div>
              <button onClick={handleCareDetails} className={css.careButton}>
                Care details{'  '}
                {isExpanded ? (
                  <span className={css.icon}>
                    {Icon({ iconName: faChevronUp })}
                  </span>
                ) : (
                  <span className={css.icon}>
                    {Icon({ iconName: faChevronDown })}
                  </span>
                )}
              </button>
            </div>
            <div
              className={
                isExpanded
                  ? `${css.careDetailsContainer} ${css.active}`
                  : `${css.careDetailsContainer}`
              }
            >
              <div>Can have a lot of water, soak the soil</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReminderList;
