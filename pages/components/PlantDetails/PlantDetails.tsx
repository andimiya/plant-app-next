import { IPlantData } from "@/pages/plants/[pid]";
import { useState } from "react";
import EditIcon from "../Icons/Edit";

import css from "./PlantDetails.module.css";
import EditDetails from "../Form/EditDetails";

interface IProps {
  plantData?: IPlantData;
  isLoading: boolean;
  refreshData: any;
}

const PlantDetails = ({ plantData, isLoading, refreshData }: IProps) => {
  const [edit, setEdit] = useState<boolean>(false);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className={css.container}>
      <div className={css.edit}>
        {!edit && (
          <div onClick={() => setEdit(!edit)}>
            <EditIcon />
          </div>
        )}
      </div>
      {!edit ? (
        <div className={css.plantDetails}>
          <p className={css.title}>Latin name: {plantData?.title}</p>
          {plantData?.streetName && <p>Street name: {plantData.streetName}</p>}
          {plantData?.flowers && <p>Flowers: {plantData.flowers}</p>}
          {plantData?.dateAcquired && (
            <p>Date Acquired: {plantData.dateAcquired}</p>
          )}

          <h2>Conditions</h2>
          {plantData?.sunlight && <p>Sunlight: {plantData.sunlight}</p>}
          {plantData?.temp && <p>Temperature: {plantData.temp}</p>}
          {plantData?.humidity && <p>Humidity: {plantData.humidity}</p>}

          <h2>Care</h2>
          {plantData?.soilMix && <p>Soil mix: {plantData.soilMix}</p>}
          {plantData?.wateringConditions && (
            <p>Watering: {plantData.wateringConditions}</p>
          )}
          {plantData?.fertilizerPlan && (
            <p>Fertilizer: {plantData.fertilizerPlan}</p>
          )}
          {plantData?.plantingTime && (
            <p>Planting time: {plantData.plantingTime}</p>
          )}
          {plantData?.pruning && <p>Pruning: {plantData.pruning}</p>}
          {plantData?.harvestTime && (
            <p>Harvest time: {plantData.harvestTime}</p>
          )}
          {plantData?.propogation && (
            <p>Propogation: {plantData.propogation}</p>
          )}
          {plantData?.pestsDiseases && (
            <p>Pests and diseases: {plantData.pestsDiseases}</p>
          )}
          <h2>Notes</h2>
          {plantData?.notes && <p>{plantData.notes}</p>}
        </div>
      ) : (
        <div>
          <EditDetails
            plantData={plantData}
            setEdit={setEdit}
            isLoading={isLoading}
            refreshData={refreshData}
          />
        </div>
      )}
    </div>
  );
};

export default PlantDetails;
