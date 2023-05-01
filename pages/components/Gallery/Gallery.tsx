import { Col, Row } from "antd";
import css from "./Gallery.module.css";

export default function Gallery(props: any) {
  return (
    <>
      <Row gutter={[16, 16]}>
        {props.images &&
          props.images.map((image: any, i: number) => (
            <Col key={i} span={8}>
              <img key={i} alt="image" className={css.image} src={image} />
            </Col>
          ))}
      </Row>
    </>
  );
}
