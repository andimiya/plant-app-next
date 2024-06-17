import Toggle from '../Toggle/Toggle';
import { IPlantData } from '@/pages/plants/[pid]';
import { PlantTaskCard } from '../PlantTaskCard/PlantTaskCard';

import css from './ReminderList.module.css';
import { Loader } from 'semantic-ui-react';

const ReminderList = ({
  allPlants,
  loading,
}: {
  allPlants: IPlantData[];
  loading: boolean;
}) => {
  return (
    <div className={css.container}>
      <div>
        <h2 className={css.h2}>Water these now</h2>
      </div>
      {loading && 'Loading...'}
      {!allPlants ? (
        <div>No plants here yet! Add some now.</div>
      ) : (
        <>
          <div className={css.toggleContainer}>
            <Toggle />
          </div>
          {allPlants.map((plant: IPlantData) => (
            <PlantTaskCard key={plant._id} plant={plant} />
          ))}
        </>
      )}
    </div>
  );
};

export default ReminderList;
