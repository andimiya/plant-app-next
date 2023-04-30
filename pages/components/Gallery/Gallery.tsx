import { Col, Row } from "antd";
import css from "./Gallery.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Gallery(props: any) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    if (props.images) {
      setData(JSON.parse(props.images));
    }
  }, [props.images]);

  console.log(data, "dataaa");
  return (
    <>
      <Row gutter={[16, 16]}>
        {data?.images ? (
          data.images.map((image: any, i: number) => (
            <Col key={i} span={8}>
              <Image key={i} alt="image" className={css.image} src={image} />
            </Col>
          ))
        ) : (
          <Col></Col>
        )}
      </Row>
    </>
  );
}
