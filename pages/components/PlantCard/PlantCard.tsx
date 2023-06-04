import { IPlantData } from "@/pages/plants/[pid]";
import { formatDate } from "@/lib/utils";
import { Card } from "semantic-ui-react";
import Link from "next/link";
import FertilizerIcon from "../Icons/Fertilizer";
import WaterDropIcon from "../Icons/WaterDrop";

import css from "./PlantCard.module.css";

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

  const latestWaterDate = plant?.watering
    ? plant?.watering[plant?.watering?.length - 1]
    : null;

  const latestFertilizeDate = plant?.fertilizing
    ? plant?.fertilizing[plant?.fertilizing?.length - 1]
    : null;

  return plant ? (
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
      <Card.Content>
        <h2 className={css.plantName}>{plant?.title}</h2>
      </Card.Content>
      <Card.Content extra>
        <div className={css.ctaContainer}>
          <div onClick={() => water(plant._id)} className={css.iconButton}>
            <WaterDropIcon size="2x" />
            {latestWaterDate && (
              <Card.Meta>
                <p className={css.meta}>{formatDate(latestWaterDate, true)}</p>
              </Card.Meta>
            )}
          </div>
          <div onClick={() => fertilize(plant._id)} className={css.iconButton}>
            <FertilizerIcon size="2x" />
            {latestFertilizeDate && (
              <Card.Meta>
                <p className={css.meta}>
                  {formatDate(latestFertilizeDate, true)}
                </p>
              </Card.Meta>
            )}{" "}
          </div>
        </div>
      </Card.Content>
    </Card>
  ) : (
    <div>Loading</div>
  );
};
export default PlantCard;
