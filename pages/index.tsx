import { Card } from "antd";
import Nav from "./components/Header/Header";
import Image from "next/image";
const { Meta } = Card;
import css from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Card hoverable className={css.cardCustom}>
        <div className={css.container}>
          <Image
            src="https://placekitten.com/200/300"
            alt="kitten"
            width="80"
            height="80"
          ></Image>
          <div className={css.cardTextContainer}>
            <Meta title="Astrophytum super kabuto" description="Tomato" />
            <p>
              Last watered: Wed Apr 9<br />
              Last fertilized: Wed Apr 9
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
