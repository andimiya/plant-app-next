import { useEffect, useState } from "react";
import { Card, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Meta } = Card;
const { Title } = Typography;
import { IPlantData } from "./plants/[pid]";

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
      <Title>My Plants</Title>
      {allPlantsData?.map((plant: IPlantData) => {
        const image = plant.images?.length
          ? plant.images[0]
          : "https://placekitten.com/200/300";

        return (
          <div key={plant._id}>
            <Link href={`/plants/${plant.title}`}>
              <div className={css.container}>
                <Image
                  src={image}
                  loader={() => image}
                  alt="kitten"
                  width={120}
                  height={80}
                ></Image>
                <div className={css.cardTextContainer}>
                  <Meta title={plant.title} description="description" />
                  <p>
                    Last watered: Wed Apr 9<br />
                    Last fertilized: Wed Apr 9
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
