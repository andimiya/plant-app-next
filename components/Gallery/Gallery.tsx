import Image from "next/image";
import Link from "next/link";
import { deleteImage, setPrimaryImage } from "@/lib/plants";
import { Col, Row } from "antd";
import Icon from "../Icons/Icon";
import {
  faTrashCan,
  faStar,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

import css from "./Gallery.module.css";

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
      <div className={css.instructions}>
        <p>
          {`Click the white star to make the photo your plant's cover photo.`}
        </p>
      </div>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Link href={`/camera?id=${plantId}&name=${plantName}`}>
            <div className={css.uploadImage}>
              <Icon iconName={faCamera} size="2x" color="#fff" />
            </div>
          </Link>
        </Col>
        {images &&
          plantId &&
          images.map((image: any, i: number) => (
            <Col key={image} span={8}>
              <div className={css.starIcon}>
                {i === 0 && (
                  <Icon iconName={faStar} size="1x" color="var(--teal)" />
                )}
              </div>
              <div className={css.starIcon}>
                {i > 0 && (
                  <div
                    onClick={() => {
                      setPrimaryImage(plantId, image);
                      refreshData();
                    }}
                  >
                    <Icon iconName={faStar} size="1x" color="var(--white)" />
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
                  <Icon iconName={faTrashCan} size="1x" />
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
