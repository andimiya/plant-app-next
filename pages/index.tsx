import { useEffect, useState } from 'react';
import { IPlantData } from './plants/[pid]';
import { fertilizePlant, getAllPlants, waterPlant } from '../lib/plants';
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

  useEffect(() => {
    setLoading(true);
    fetchAllPlants();
    setLoading(false);
  }, []);

  const water = async (id: string) => {
    await waterPlant(id);
    fetchAllPlants();
  };

  const fertilize = async (id: string) => {
    await fertilizePlant(id);
    fetchAllPlants();
  };

  return (
    <div>
      <Hero headerText="Care for your plants" />
      <ReminderList allPlants={allPlantsData} loading={loading} />
    </div>
  );
};

export default Home;
