import React, { useEffect, useState } from "react";
import { IPlantData } from "@/pages/plants/[pid]";
import { getAllPlants } from "@/lib/plants";
import { toast } from "react-toastify";

// import css from "./Dropdown.module.css";

interface IOptions {
  key: string;
  value: string;
  label: string;
}

const DropdownComponent = ({ handleClick }: any) => {
  const [allPlantsData, setAllPlantsData] = useState<IPlantData[]>([]);
  const [isLoading, setLoading] = useState(false);

  async function fetchAllPlants() {
    const data = await getAllPlants();
    setAllPlantsData(data);
  }

  const notify = () => toast.success("Success! Image saved");

  useEffect(() => {
    setLoading(true);
    fetchAllPlants();
    setLoading(false);
  }, []);

  const plantsArray: IOptions[] = [];
  allPlantsData.forEach((plant: IPlantData) => {
    plantsArray.push({
      key: plant._id,
      value: plant._id,
      label: plant.title,
    });
  });

  const onSelect = (e: any) => {
    handleClick(e.target.value);
    notify();
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="ui form huge" style={{ margin: "2rem 0.75rem" }}>
      <select
        className="ui dropdown"
        style={{ height: "50px", backgroundColor: "#141429", color: "#e0d6d3" }}
        onChange={(e) => onSelect(e)}
      >
        <option value="" selected disabled hidden>
          Select plant
        </option>
        {allPlantsData.map((plant: IPlantData) => (
          <option key={plant._id} value={plant._id}>
            {plant.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
