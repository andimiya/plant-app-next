// import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import TrashIcon from "../Icons/Trash";

import css from "./Gallery.module.css";
import { deleteImage } from "@/lib/plants";
import { Col, Row } from "antd";

interface IProps {
  images?: string[];
  plantId?: string;
  plantName?: string;
}

export default function Gallery({ images, plantId, plantName }: IProps) {
  return (
    <div className={css.container}>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Link href={`/camera?id=${plantId}&name=${plantName}`}>
            <Image
              alt="image"
              className={css.imageDefault}
              src="/camera-placeholder.jpg"
              width={50}
              height={60}
              unoptimized
            />
          </Link>
        </Col>
        {images &&
          plantId &&
          images.map((image: any, i: number) => (
            <Col key={image} span={8}>
              <div className={css.icon}>
                <div onClick={() => deleteImage(plantId, image)}>
                  <TrashIcon size="1x" />
                </div>
              </div>
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
    </div>
  );
}
