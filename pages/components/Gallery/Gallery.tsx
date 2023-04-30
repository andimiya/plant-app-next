import { Col, Row } from "antd";
import css from "./Gallery.module.css";
import { useEffect, useState } from "react";

export default function Gallery(props: any) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    if (props.images) {
      setData(JSON.parse(props.images));
    }
  }, [props.images]);

  return (
    <>
      <Row gutter={[16, 16]}>
        {data?.images ? (
          data.images.map((image: any, i: number) => (
            <Col key={i} span={8}>
              <img key={i} alt="image" className={css.image} src={image} />
            </Col>
          ))
        ) : (
          <Col></Col>
        )}
      </Row>
    </>
  );
}
