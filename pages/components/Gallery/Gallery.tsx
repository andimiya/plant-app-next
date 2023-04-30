import { Col, Row } from "antd";
import css from "./Gallery.module.css";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const id = "643385e7bd4e67b4581468fa";
    const url = `/api/plants?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        setImageData(data);
        // setData(data);
        // setLoading(false);
      });
  }, []);

  console.log(imageData, "image dataa");

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

  // return (
  //   <>
  //     <Row gutter={[16, 16]}>
  //       <Col span={8}>
  //         <img
  //           className={css.image}
  //           src={`https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.us-west-1.amazonaws.com/b1b152e2-cc02-43cb-b1ca-e0808d57f22a.jpeg`}
  //         />
  //       </Col>
  //       <Col span={8}>
  //         <img
  //           className={css.image}
  //           src={`https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.us-west-1.amazonaws.com/b1b152e2-cc02-43cb-b1ca-e0808d57f22a.jpeg`}
  //         />
  //       </Col>
  //       <Col span={8}>
  //         <img
  //           className={css.image}
  //           src={`https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.us-west-1.amazonaws.com/b1b152e2-cc02-43cb-b1ca-e0808d57f22a.jpeg`}
  //         />
  //       </Col>
  //       <Col span={8}>
  //         <img
  //           className={css.image}
  //           src={`https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.us-west-1.amazonaws.com/b1b152e2-cc02-43cb-b1ca-e0808d57f22a.jpeg`}
  //         />
  //       </Col>
  //       <Col span={8}>
  //         <img
  //           className={css.image}
  //           src={`https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.us-west-1.amazonaws.com/b1b152e2-cc02-43cb-b1ca-e0808d57f22a.jpeg`}
  //         />
  //       </Col>
  //     </Row>
  //   </>
  // );
}
