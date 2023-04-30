import { Col, Row } from "antd";
import css from "./Gallery.module.css";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [imageData, setImageData] = useState<any>();

  useEffect(() => {
    const id = "643385e7bd4e67b4581468fa";
    const url = `/api/plants?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        setImageData(data);
      });
  }, []);

  return (
    <>
      <Row gutter={[16, 16]}>
        {imageData.images &&
          imageData.images.map((image: any) => (
            <Col span={8}>
              <img className={css.image} src={image} />
            </Col>
          ))}
      </Row>
    </>
  );
}
