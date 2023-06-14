import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  fertilizePlant,
  getAllPlants,
  getPlant,
  waterPlant,
} from "@/services/plants";
import Tabs from "@/components/Tabs/Tabs";
import PlantDetails from "@/components/PlantDetails/PlantDetails";
import Image from "next/image";
import PIDHeader from "@/components/PIDHeader/PIDHeader";

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
    <div>
      <PIDHeader title={plant?.title} image={plant?.images[0]} />
      <PlantDetails
        plantData={plant}
        water={water}
        fertilize={fertilize}
        refreshData={refreshData}
      />
    </div>
  );
};

interface IParam {
  params: {
    pid: string;
  };
}
export async function getStaticProps({ params }: IParam) {
  const plantData = await getPlant(params.pid);
  // redirect to main blog posts page if post doesn't exist, or any other page you want
  if (!plantData) return { redirect: "/", permanent: false };

  return {
    props: {
      plant: {
        ...plantData,
      },
    },
  };
}

export async function getStaticPaths() {
  const plants = await getAllPlants();

  return {
    paths: plants?.map((plant: IPlantData) => {
      return {
        params: {
          pid: plant.title,
        },
      };
    }),
    fallback: true,
  };
}

export default Plant;
