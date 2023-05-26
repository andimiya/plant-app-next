import { IPlantData } from "@/pages/plants/[pid]";

import css from "./WaterFertilizerLog.module.css";
import { formatDate } from "@/lib/utils";

interface IProps {
  plantData: IPlantData;
}

const WaterFertilizerLog = (props: IProps) => {
  let waterSort;
  if (props?.plantData?.watering?.length) {
    waterSort = props.plantData?.watering?.sort((a, b) => {
      return b - a;
    });
  }

  let fertilizerSort;
  if (props?.plantData?.fertilizing?.length) {
    fertilizerSort = props.plantData?.fertilizing?.sort((a, b) => {
      return b - a;
    });
  }

  return (
    <div className={css.columnContainer}>
      <div className={css.column}>
        <h1>Watering Log</h1>
        {waterSort?.map((timestamp) => {
          return (
            <div key={timestamp}>
              <p>{formatDate(timestamp)}</p>
            </div>
          );
        })}
      </div>
      <div className={css.column}>
        <h1>Fertilizing Log</h1>
        {fertilizerSort?.map((timestamp) => {
          return (
            <div key={timestamp}>
              <p>{formatDate(timestamp)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WaterFertilizerLog;
