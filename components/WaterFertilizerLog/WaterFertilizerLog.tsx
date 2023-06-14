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

  const water = async (id: string | undefined) => {
    if (id) {
      await waterPlant(id);
      refreshData();
    }
  };

  const fertilize = async (id: string | undefined) => {
    if (id) {
      await fertilizePlant(id);
      refreshData();
    }
  };

  const EmptyState = () => {
    return (
      <div className={css.emptyState}>
        Nothing logged yet, click the icon above!
      </div>
    );
  };

  return (
    <>
      <div className={css.instructions}>
        <p>
          {`Click the water or fertilize icon when you care for your plant.`}
        </p>
        <p>
          {`
          When it's time for more water or fertilizer, you'll see a notification
          on the home page.`}
        </p>
      </div>
      <div className={css.columnContainer}>
        <div className={css.column}>
          <div onClick={() => water(plant?._id)} className={css.iconButton}>
            <div className={css.iconContainer}>
              <Icon iconName={faDroplet} color="var(--teal)" size="2x" />
            </div>
            {!plant?.watering?.length && <EmptyState />}
            {waterSort?.map((timestamp) => {
              return (
                <div key={timestamp}>
                  <p className={css.timestamp}>{formatDate(timestamp, true)}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={css.column}>
          <div onClick={() => fertilize(plant?._id)} className={css.iconButton}>
            <div className={css.iconContainer}>
              <Icon iconName={faSeedling} size="2x" color="var(--rust)" />
            </div>
            {!plant?.fertilizing?.length && <EmptyState />}
            {fertilizerSort?.map((timestamp) => {
              return (
                <div key={timestamp}>
                  <p className={css.timestamp}>{formatDate(timestamp, true)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WaterFertilizerLog;
