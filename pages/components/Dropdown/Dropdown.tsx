import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { IPlantData } from "@/pages/plants/[pid]";
import { getAllPlants } from "@/lib/plants";

export const Dropdown = ({ handleClick }: any) => {
  const [allPlantsData, setAllPlantsData] = useState<IPlantData[]>([]);
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

  interface IOptions {
    key: string;
    value: string;
    label: string;
  }

  const plantsArray: IOptions[] = [];
  allPlantsData.forEach((plant: IPlantData) => {
    plantsArray.push({
      key: plant._id,
      value: plant._id,
      label: plant.title,
    });
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Select
      defaultValue="Save image to..."
      style={{ width: 300 }}
      options={plantsArray}
      onSelect={(value) => {
        handleClick(value);
      }}
    />
  );
};
