import Toggle from '../Toggle/Toggle';
import { IPlantData } from '@/pages/plants/[pid]';
import { PlantCard } from '../PlantCard/PlantCard';

import css from './ReminderList.module.css';

const ReminderList = ({ allPlants }: { allPlants: IPlantData[] }) => {
  return (
    <div className={css.container}>
      <div>
        <h2 className={css.h2}>Water these now</h2>
      </div>
      <div className={css.toggleContainer}>
        <Toggle />
      </div>
      {allPlants.map((plant: IPlantData) => (
        <PlantCard key={plant._id} plant={plant} />
      ))}
    </div>
  );
};

export default ReminderList;
