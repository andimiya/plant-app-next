import Toggle from '../Toggle/Toggle';
import { IPlantData } from '@/pages/plants/[pid]';
import { PlantTaskCard } from '../PlantTaskCard/PlantTaskCard';

import { waterFertilizePlant } from '@/lib/plants';
import { useState } from 'react';

import css from './ReminderList.module.css';

interface Props {
  allPlants: IPlantData[];
  loading: boolean;
  handleToggle: (event: { target: { checked: boolean } }) => void;
  isFertilizerToggledOn: boolean;
  handleTaskCheck: (plantId: string) => void;
}
const ReminderList = ({
  allPlants,
  loading,
  handleToggle,
  isFertilizerToggledOn,
  handleTaskCheck,
}: Props) => {
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
            <Toggle
              handleToggle={handleToggle}
              isToggledOn={isFertilizerToggledOn}
            />
          </div>
          {allPlants.map((plant: IPlantData) => (
            <PlantTaskCard
              key={plant._id}
              plant={plant}
              handleTaskCheck={handleTaskCheck}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ReminderList;
