import { useEffect, useState } from 'react';
import { PlantCard } from '@/components/PlantCard/PlantCard';
import { IPlantData } from './[pid]';
import { getAllPlants } from '@/lib/plants';
import Hero from '@/components/Hero/Hero';

const Plants = () => {
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

  return (
    <div>
      <Hero headerText="Plant Library" />
      {loading && 'Loading...'}
      {allPlantsData.map((plant: IPlantData) => (
        <PlantCard key={plant._id} plant={plant} />
      ))}
    </div>
  );
};

export default Plants;
