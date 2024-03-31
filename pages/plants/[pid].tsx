import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  fertilizePlant,
  getAllPlants,
  getPlant,
  waterPlant,
} from '@/lib/plants';
import Tabs from '@/components/Tabs/Tabs';
import PlantDetails from '@/components/PlantDetails/PlantDetails';
import Image from 'next/image';
import PIDHeader from '@/components/PIDHeader/PIDHeader';
import { NavMenu } from '@/components/NavMenu/NavMenu';
import css from './pid.module.css';

export interface IPlantData {
  _id: string;
  title: string;
  images: string[];
  watering?: string[];
  daysBetweenWatering?: number;
  fertilizing?: string[];
  daysBetweenFertilizing?: number;
  streetName?: string;
  flowers?: string;
  dateAcquired?: string;
  humidity?: string;
  sunlight?: string;
  temp?: string;
  soilMix?: string;
  wateringConditions?: string;
  fertilizerPlan?: string;
  plantingTime?: string;
  pruning?: string;
  harvestTime?: string;
  propogation?: string;
  pestsDiseases?: string;
  notes?: string;
}

export interface IProps {
  plant: IPlantData;
}
const Plant = ({ plant }: IProps) => {
  const router = useRouter();

  const water = async () => {
    await waterPlant(plant._id);
    refreshData();
  };

  const fertilize = async () => {
    await fertilizePlant(plant._id);
    refreshData();
  };

  const refreshData = () => {
    router.replace(router.asPath);
  };
  useEffect(() => {
    refreshData();
  }, []);

  if (router.isFallback) return null;
  return (
    <div className="hero">
      <NavMenu />
      <div className="heading-wrapper w-container">
        <h1 className="main-heading">{plant.title}</h1>
        <a href="contact.html" className="button w-button">
          + Add a Photo
        </a>
      </div>
      <div className={css.plantContainer}>
        <PlantDetails
          plantData={plant}
          water={water}
          fertilize={fertilize}
          refreshData={refreshData}
        />
      </div>
    </div>
  );
};

interface IParam {
  params: {
    pid: string;
  };
}
export async function getServerSideProps({ params }: IParam) {
  const plant = await getPlant(params.pid);
  if (!plant) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      plant: {
        ...plant,
      },
    },
  };
}

// export async function getStaticPaths() {
//   const plants = await getAllPlants();

//   return {
//     paths: plants?.map((plant: IPlantData) => {
//       return {
//         params: {
//           pid: plant.title,
//         },
//       };
//     }),
//     fallback: true,
//   };
// }

export default Plant;
