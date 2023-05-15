import { Col, Row } from "antd";
import css from "./Gallery.module.css";
import Image from "next/image";

export default function Gallery(props: any) {
  return (
    <>
      <Row gutter={[16, 16]}>
        {props.images &&
          props.images.map((image: any, i: number) => (
            <Col key={i} span={8}>
              <Image key={i} alt="image" className={css.image} src={image} />
            </Col>
          ))}
      </Row>
    </>
  );
}
