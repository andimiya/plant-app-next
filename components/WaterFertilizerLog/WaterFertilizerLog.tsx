import { formatDate, sortByTimestamp } from "@/utils/utils";
import { fertilizePlant, waterPlant } from "@/services/plants";
import { IPlantData } from "@/pages/plants/[pid]";

import css from "./WaterFertilizerLog.module.css";
import Icon from "../Icons/Icon";
import { faDroplet, faSeedling } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  plant?: IPlantData;
  refreshData: any;
}

const WaterFertilizerLog = ({ plant, refreshData }: IProps) => {
  let waterSort;
  if (plant?.watering?.length) {
    waterSort = sortByTimestamp(plant?.watering);
  }

  let fertilizerSort;
  if (plant?.fertilizing?.length) {
    fertilizerSort = sortByTimestamp(plant?.fertilizing);
  }

  const water = async (id: string) => {
    await waterPlant(id);
    refreshData();
  };

  const fertilize = async (id: string) => {
    await fertilizePlant(id);
    refreshData();
  };

  return (
    <>
      {!plant?.fertilizing?.length ? (
        <div>Empty</div>
      ) : (
        <div className={css.columnContainer}>
          <div className={css.column}>
            <div onClick={() => water(plant._id)} className={css.iconButton}>
              <Icon iconName={faDroplet} color="var(--teal)" size="2x" />
              {waterSort?.map((timestamp) => {
                return (
                  <div key={timestamp}>
                    <p className={css.timestamp}>
                      {formatDate(timestamp, true)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={css.column}>
            <div
              onClick={() => fertilize(plant._id)}
              className={css.iconButton}
            >
              <Icon iconName={faSeedling} size="2x" color="var(--rust)" />
              {fertilizerSort?.map((timestamp) => {
                return (
                  <div key={timestamp}>
                    <p className={css.timestamp}>
                      {formatDate(timestamp, true)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WaterFertilizerLog;
