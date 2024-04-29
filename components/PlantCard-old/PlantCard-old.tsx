import { IPlantData } from "@/pages/plants/[pid]";
import { formatDate, sortByTimestamp } from "@/utils/utils";
import { Card } from "semantic-ui-react";
import Link from "next/link";

import css from "./PlantCard.module.css";
import { needsWaterOrFertilizer } from "@/components/helpers";
import { faDroplet, faSeedling } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icons/Icon";

interface IProps {
  plant: IPlantData;
  water: any;
  fertilize: any;
}

const PlantCard = (props: IProps) => {
  const { plant, water, fertilize } = props;
  const image = plant?.images?.length
    ? plant.images[0]
    : "/default-placeholder.png";

  const latestWaterDate: string = sortByTimestamp(plant?.watering)[0];

  const latestFertilizeDate: string = sortByTimestamp(plant?.fertilizing)[0];

  const needsWater = needsWaterOrFertilizer({
    daysUntilNeed: plant?.daysBetweenWatering,
    lastWateredOrFertilized: latestWaterDate,
  });

  const needsFertilizer = needsWaterOrFertilizer({
    daysUntilNeed: plant?.daysBetweenFertilizing,
    lastWateredOrFertilized: latestFertilizeDate,
  });

  return plant ? (
    <div className={css.card}>
      <Card key={plant?._id} className="ui card mini">
        <Link href={`/plants/${plant?.title}`}>
          <img
            src={image}
            alt={plant?.title ? plant.title : "Default image"}
            className={css.image}
            height="200px"
            width="100%"
          ></img>
        </Link>
        <Card.Content className={css.cardTitleContainer}>
          <h2 className={css.plantName}>{plant?.title}</h2>
        </Card.Content>
        <Card.Content extra>
          <div className={css.ctaContainer}>
            <div onClick={() => water(plant._id)} className={css.iconButton}>
              <Icon iconName={faDroplet} color="var(--teal)" size="2x" />{" "}
              {latestWaterDate && (
                <Card.Meta>
                  <div className={css.meta}>
                    {needsWater && <div>NEEDS WATER!</div>}
                    Last watered:
                    <br />
                    {formatDate(latestWaterDate, true)}
                  </div>
                </Card.Meta>
              )}
            </div>
            <div
              onClick={() => fertilize(plant._id)}
              className={css.iconButton}
            >
              <Icon iconName={faSeedling} size="2x" color="var(--rust)" />
              {latestFertilizeDate && (
                <Card.Meta>
                  <div className={css.meta}>
                    {needsFertilizer && <div>NEEDS FERTILIZER!</div>}
                    Last fertilized: <br />
                    {formatDate(latestFertilizeDate, true)}
                  </div>
                </Card.Meta>
              )}{" "}
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  ) : (
    <div>Loading</div>
  );
};
export default PlantCard;
