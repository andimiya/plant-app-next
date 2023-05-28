import { useEffect, useState } from "react";
import { IPlantData } from "./plants/[pid]";
import { fertilizePlant, getAllPlants, waterPlant } from "../lib/plants";
import { Header } from "semantic-ui-react";
import PlantCard from "./components/PlantCard/PlantCard";
export interface IProps {
  allPlants: IPlantData[];
}

const Home = ({ allPlants }: IProps) => {
  const [allPlantsData, setAllPlantsData] = useState<IPlantData[]>(allPlants);
  const [isLoading, setLoading] = useState(false);

  async function fetchAllPlants() {
    const data = await getAllPlants();
    setAllPlantsData(data);
  }

  useEffect(() => {
    setLoading(true);
    fetchAllPlants();
    setLoading(false);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

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
      <Header as="h1" size="huge">
        My Plants
      </Header>
      <div className="ui hidden divider"></div>
      <div className="ui centered cards">
        {allPlantsData.length &&
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
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const jsonData = await getAllPlants();
  return {
    props: {
      allPlants: jsonData,
    },
  };
};

export default Home;
