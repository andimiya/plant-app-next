import { IPlantData } from "@/pages/plants/[pid]";
import { useState } from "react";
import EditDetails from "../Form/EditDetails";
import { faDroplet, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icons/Icon";

import css from "./PlantDetails.module.css";
import { nextWaterOrFertiizeDate } from "../helpers";
import WaterFertTile from "./WaterFertTile";
import EditFertilizerDetails from "../Form/EditFertilizerDetails";
import EditWaterDetails from "../Form/EditWaterDetails";
interface IProps {
  plantData?: IPlantData;
  refreshData: any;
}

const PlantDetails = ({ plantData, refreshData }: IProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [fertilizerEdit, setFertilizerEdit] = useState<boolean>(false);
  const [waterEdit, setWaterEdit] = useState<boolean>(false);

  return (
    <div className={css.container}>
      <div className={css.tilesContainer}>
        <WaterFertTile
          daysUntilNeed={plantData?.daysBetweenWatering}
          waterOrFertilizeArray={plantData?.watering}
          isWater={true}
          setEdit={setWaterEdit}
        />
        <WaterFertTile
          daysUntilNeed={plantData?.daysBetweenFertilizing}
          waterOrFertilizeArray={plantData?.fertilizing}
          isWater={false}
          setEdit={setFertilizerEdit}
        />
      </div>
      {fertilizerEdit && (
        <EditFertilizerDetails
          plantData={plantData}
          setFertilizerEdit={setFertilizerEdit}
          refreshData={refreshData}
        />
      )}
      {waterEdit && (
        <EditWaterDetails
          plantData={plantData}
          setWaterEdit={setWaterEdit}
          refreshData={refreshData}
        />
      )}
      <div className={css.edit}>
        {!edit && (
          <div onClick={() => setEdit(!edit)}>
            <Icon iconName={faPenToSquare} size="1x" color="var(--teal)" />
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
          {plantData?.daysBetweenWatering && (
            <p>Days between watering: {plantData.daysBetweenWatering}</p>
          )}
          {plantData?.wateringConditions && (
            <p>Watering: {plantData.wateringConditions}</p>
          )}
          {plantData?.daysBetweenFertilizing && (
            <p>Days bewteen fertilizing: {plantData.daysBetweenFertilizing}</p>
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
            refreshData={refreshData}
          />
        </div>
      )}
    </div>
  );
};

export default PlantDetails;
