import { useEffect, useState } from "react";
import { Card, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Meta } = Card;
const { Title } = Typography;
import { IPlantData } from "./plants/[pid]";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faDroplet } from "@fortawesome/free-solid-svg-icons";

import css from "../styles/Home.module.css";

const Home = () => {
  const [allPlantsData, setAllPlantsData] = useState<IPlantData[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = `${process.env.NEXT_PUBLIC_API_URL}/allPlants`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllPlantsData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

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
                <Link href="" className={css.iconButton}>
                  <FontAwesomeIcon
                    icon={faDroplet}
                    className={`${css.icon} ${css.droplet}`}
                  />
                </Link>
                <Link href="" className={css.iconButton}>
                  <FontAwesomeIcon
                    icon={faSeedling}
                    className={`${css.icon} ${css.fertilizer}`}
                  />
                </Link>
              </div>
              <div className={css.cardImageContainer}>
                <Link href={`/plants/${plant.title}`} className={css.link}>
                  <Image
                    src={image}
                    loader={() => image}
                    alt="kitten"
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
                  <span className={css.droplet}>Last watered: Wed Apr 9</span>
                  <br />
                  <span className={css.fertilizer}>
                    Last fertilized: Wed Apr 9
                  </span>
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
