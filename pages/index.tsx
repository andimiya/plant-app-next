import { useEffect, useState } from 'react';
import { IPlantData } from './plants/[pid]';
import {
  fertilizePlant,
  getAllPlants,
  waterFertilizePlant,
  waterPlant,
} from '../lib/plants';
import ReminderList from '@/components/ReminderList/ReminderList';
import Hero from '@/components/Hero/Hero';

export interface IProps {
  allPlants: IPlantData[];
}

const Home = () => {
  const [allPlantsData, setAllPlantsData] = useState<IPlantData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchAllPlants() {
    const data = await getAllPlants();
    setAllPlantsData(data);
  }

  const [isFertilizerToggledOn, setIsFertilizerToggledOn] = useState(true);

  const handleToggle = (event: { target: { checked: boolean } }) => {
    setIsFertilizerToggledOn(event.target.checked);
  };

  const handleTaskCheck = async (plantId: string) => {
    await waterFertilizePlant(plantId, isFertilizerToggledOn);
    fetchAllPlants();
  };

  useEffect(() => {
    setLoading(true);
    fetchAllPlants();
    setLoading(false);
  }, []);

  return (
    <div>
      <Hero headerText="Care for your plants" />
      <ReminderList
        allPlants={allPlantsData}
        loading={loading}
        handleToggle={handleToggle}
        isFertilizerToggledOn={isFertilizerToggledOn}
        handleTaskCheck={handleTaskCheck}
      />
    </div>
  );
};

export default Home;
