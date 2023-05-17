import { Card, Typography } from "antd";
import Image from "next/image";
const { Meta } = Card;
const { Title } = Typography;
import css from "../styles/Home.module.css";
import Link from "next/link";
import { getAllPlants } from "../lib/plants";

const Home = ({ allPlants }: any) => {
  let parsedData: any = null;
  if (allPlants) {
    parsedData = JSON.parse(allPlants);
  }
  return parsedData ? (
    <div>
      <Title>My Plants</Title>
      {parsedData.map((plant: any) => {
        const image = plant.images?.length
          ? plant.images[0]
          : "https://placekitten.com/200/300";

        return (
          <div key={plant._id}>
            <Link href="/plants/tomato">
              <div className={css.container}>
                <Image
                  src={image}
                  loader={() => image}
                  alt="kitten"
                  width={120}
                  height={80}
                  unoptimized
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
  ) : (
    <h1>Loading...</h1>
  );
};

export async function getStaticProps() {
  const allPlantData = await getAllPlants();
  return {
    props: {
      allPlants: JSON.stringify(allPlantData),
    },
  };
}

export default Home;
