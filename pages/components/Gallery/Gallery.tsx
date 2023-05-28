import { Col, Row } from "antd";
import css from "./Gallery.module.css";
import Image from "next/image";

export default function Gallery(props: any) {
  return (
    <>
      <div className="ui hidden divider"></div>
      <Row gutter={[16, 16]}>
        {props.images &&
          props.images.map((image: any, i: number) => (
            <Col key={i} span={8}>
              <Image
                loader={() => image}
                key={i}
                alt="image"
                className={css.image}
                src={image}
                width={50}
                height={50}
                unoptimized
              />
            </Col>
          ))}
      </Row>
    </>
  );
}
