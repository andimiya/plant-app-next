import { IPlantData } from "@/pages/plants/[pid]";
import { formatDate, sortByTimestamp } from "@/utils/utils";
import WaterDropIcon from "../Icons/WaterDrop";
import FertilizerIcon from "../Icons/Fertilizer";

import css from "./WaterFertilizerLog.module.css";

interface IProps {
  plant?: IPlantData;
}

const WaterFertilizerLog = ({ plant }: IProps) => {
  let waterSort;
  if (plant?.watering?.length) {
    waterSort = sortByTimestamp(plant?.watering);
  }

  let fertilizerSort;
  if (plant?.fertilizing?.length) {
    fertilizerSort = sortByTimestamp(plant?.fertilizing);
  }

  return (
    <>
      {!plant?.fertilizing?.length ? (
        <div>Empty</div>
      ) : (
        <div className={css.columnContainer}>
          <div className={css.column}>
            {/* <div onClick={() => water(plant._id)} className={css.iconButton}> */}
            <WaterDropIcon size="2x" />
            {waterSort?.map((timestamp) => {
              return (
                <div key={timestamp}>
                  <p className={css.timestamp}>{formatDate(timestamp, true)}</p>
                </div>
              );
            })}
            {/* </div> */}
          </div>
          <div className={css.column}>
            <FertilizerIcon size="2x" />
            {fertilizerSort?.map((timestamp) => {
              return (
                <div key={timestamp}>
                  <p className={css.timestamp}>{formatDate(timestamp, true)}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default WaterFertilizerLog;
