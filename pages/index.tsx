import { useEffect, useState } from 'react';
import { IPlantData } from './plants/[pid]';
import { fertilizePlant, getAllPlants, waterPlant } from '../lib/plants';
import PlantCard from '@/components/PlantCard/PlantCard';
import { NavMenu } from '@/components/NavMenu/NavMenu';
import ReminderList from '@/components/ReminderList/ReminderList';
import css from './index.module.css';

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
    // <body>
    <div className="hero">
      <NavMenu />
      <div className="heading-wrapper w-container">
        <h1 className="main-heading">Care for your plants</h1>
        <a href="contact.html" className="button w-button">
          + Add a Plant
        </a>
      </div>
      <div className={css.reminderContainer}>
        <ReminderList allPlants={allPlantsData} />
      </div>

      {/* {loading && <div>Loading...</div>}
      <h1 style={{ fontSize: "1.5rem", fontWeight: "300" }}>All Plants</h1>
      <div className="ui centered cards">
        {allPlantsData?.length &&
          allPlantsData.map((plant: IPlantData) => {
            return (
              <PlantCard
                key={plant._id}
                plant={plant}
                water={water}
                fertilize={fertilize}
              />
            );
          })}
      </div> */}
    </div>
    // </body>
  );
};

export default Home;
