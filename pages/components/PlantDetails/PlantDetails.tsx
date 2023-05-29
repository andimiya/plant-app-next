import { IPlantData } from "@/pages/plants/[pid]";

import css from "./PlantDetails.module.css";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import EditDetails from "./EditDetails";

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
      <div className="ui hidden divider"></div>
      <div>
        <Button onClick={() => setEdit(!edit)}>Edit</Button>
      </div>
      {!edit ? (
        <div>
          <p>Latin name: {plantData?.title}</p>
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
          <h2>Notes</h2>
          <p>{plantData?.notes}</p>
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
