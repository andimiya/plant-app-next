import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

import css from "./Gallery.module.css";

interface IProps {
  images?: string[];
  plantId?: string;
  plantName?: string;
}

export default function Gallery({ images, plantId, plantName }: IProps) {
  return (
    <>
      <div className="ui hidden divider"></div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Link href={`/camera?id=${plantId}&name=${plantName}`}>
            <Image
              alt="image"
              className={css.imageDefault}
              src="/camera-placeholder.jpg"
              width={50}
              height={50}
              unoptimized
            />
          </Link>
        </Col>
        {images &&
          images.map((image: any, i: number) => (
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
