import { Card, Checkbox, Typography } from "antd";
import Nav from "./components/Header/Header";
import Image from "next/image";
const { Meta } = Card;
const { Paragraph, Title } = Typography;
import css from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Title>My Plants</Title>
      <Card hoverable className={css.cardCustom}>
        <Link href="/plants/tomato">
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
        </Link>
      </Card>
    </div>
  );
}
