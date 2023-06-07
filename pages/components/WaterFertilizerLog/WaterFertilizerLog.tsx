import { IPlantData } from "@/pages/plants/[pid]";
import { formatDate } from "@/lib/utils";
import WaterDropIcon from "../Icons/WaterDrop";
import FertilizerIcon from "../Icons/Fertilizer";

import css from "./WaterFertilizerLog.module.css";

interface IProps {
  plantData?: IPlantData;
}

const WaterFertilizerLog = (props: IProps) => {
  let waterSort;
  if (props?.plantData?.watering?.length) {
    waterSort = props.plantData?.watering?.sort((a, b) => {
      //@ts-ignore
      return b - a;
    });
  }

  let fertilizerSort;
  if (props?.plantData?.fertilizing?.length) {
    fertilizerSort = props.plantData?.fertilizing?.sort((a, b) => {
      //@ts-ignore
      return b - a;
    });
  }

  return (
    <>
      <div className="ui hidden divider"></div>
      <div className={css.columnContainer}>
        <div className={css.column}>
          <WaterDropIcon size="1x" />
          {waterSort?.map((timestamp) => {
            return (
              <div key={timestamp}>
                <p className={css.timestamp}>{formatDate(timestamp, true)}</p>
              </div>
            );
          })}
        </div>
        <div className={css.column}>
          <FertilizerIcon size="1x" />
          {fertilizerSort?.map((timestamp) => {
            return (
              <div key={timestamp}>
                <p className={css.timestamp}>{formatDate(timestamp, true)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WaterFertilizerLog;
