import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Typography } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faDroplet } from "@fortawesome/free-solid-svg-icons";
import { IPlantData } from "./plants/[pid]";
import { fertilizePlant, getAllPlants, waterPlant } from "../lib/plants";
const { Meta } = Card;
const { Title } = Typography;

import css from "../styles/Home.module.css";

const Home = () => {
  const [allPlantsData, setAllPlantsData] = useState<IPlantData[]>([]);
  const [isLoading, setLoading] = useState(false);

  async function fetchAllPlants() {
    const data = await getAllPlants();
    setAllPlantsData(data);
  }

  useEffect(() => {
    setLoading(true);
    fetchAllPlants();
    setLoading(false);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const water = async (id: string) => {
    await waterPlant(id);
    fetchAllPlants();
  };

  const fertilize = async (id: string) => {
    await fertilizePlant(id);
    fetchAllPlants();
  };

  return (
    <div>
      <Title style={{ color: "#e0d6d3", fontSize: "1.3rem" }}>My Plants</Title>
      <div className={css.container}>
        {allPlantsData?.map((plant: IPlantData) => {
          const image = plant.images?.length
            ? plant.images[0]
            : "/default-placeholder.png";

          return (
            <div key={plant._id} className={css.cardRow}>
              <div className={css.iconsContainer}>
                <div
                  // href=""
                  onClick={() => water(plant._id)}
                  className={css.iconButton}
                >
                  <FontAwesomeIcon
                    icon={faDroplet}
                    className={`${css.icon} ${css.droplet}`}
                  />
                </div>
                <div
                  // href=""
                  onClick={() => fertilize(plant._id)}
                  className={css.iconButton}
                >
                  <FontAwesomeIcon
                    icon={faSeedling}
                    className={`${css.icon} ${css.fertilizer}`}
                  />
                </div>
              </div>
              <div className={css.cardImageContainer}>
                <Link href={`/plants/${plant.title}`} className={css.link}>
                  <Image
                    src={image}
                    loader={() => image}
                    alt={plant.title ? plant.title : "Default image"}
                    width={60}
                    height={60}
                    className={css.tileImage}
                    unoptimized
                  ></Image>
                </Link>
              </div>
              <div className={css.cardTextContainer}>
                <Meta title={plant.title} className={css.plantName} />
                <p>
                  {plant.watering && (
                    <span className={css.droplet}>
                      Last watered:{" "}
                      {moment(plant?.watering[0]).format("ddd MMM D A")}
                    </span>
                  )}
                  <br />
                  {plant.fertilizing && (
                    <span className={css.fertilizer}>
                      Last fertilized:{" "}
                      {moment(plant?.fertilizing[0]).format("ddd MMM D A")}
                    </span>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
