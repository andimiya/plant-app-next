import { Col, Row } from "antd";
import css from "./Gallery.module.css";
import { useEffect, useState } from "react";

export default function Gallery(props: any) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    if (props.images) {
      console.log(JSON.parse(props.images), "images use effect");
      setData(JSON.parse(props.images));
    }
  }, [props.images]);

  // const { images } = props.images;
  // const images = props.images;
  console.log(props, "imagesss");
  console.log(typeof props, "imagesss");
  return (
    <>
      <Row gutter={[16, 16]}>
        {data?.images ? (
          data.images.map((image: any, i: number) => (
            <Col key={i} span={8}>
              <img key={i} className={css.image} src={image} />
            </Col>
          ))
        ) : (
          <Col></Col>
        )}
      </Row>
    </>
  );
}
