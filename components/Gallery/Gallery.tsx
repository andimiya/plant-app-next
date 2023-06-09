import Image from "next/image";
import Link from "next/link";
import { deleteImage, setPrimaryImage } from "@/services/plants";
import { Col, Row } from "antd";

import css from "./Gallery.module.css";
import StarIcon from "../Icons/Star";
import TrashIcon from "../Icons/Trash";

interface IProps {
  images?: string[];
  plantId?: string;
  plantName?: string;
  refreshData: any;
}

export default function Gallery({
  images,
  plantId,
  plantName,
  refreshData,
}: IProps) {
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
              <div className={css.starIcon}>
                {i === 0 && <StarIcon size="1x" colored={true} />}
              </div>
              <div className={css.starIcon}>
                {i > 0 && (
                  <div
                    onClick={() => {
                      setPrimaryImage(plantId, image);
                      refreshData();
                    }}
                  >
                    <StarIcon size="1x" />
                  </div>
                )}
              </div>
              <div className={css.icon}>
                <div
                  onClick={() => {
                    deleteImage(plantId, image);
                    refreshData();
                  }}
                >
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
