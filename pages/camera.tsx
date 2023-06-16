import { useState } from "react";
import { useRouter } from "next/router";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import imageUpload from "../lib/addImageToS3";
import DropdownComponent from "@/components/Dropdown/Dropdown";
import ImagePreview from "@/components/ImagePreview/ImagePreview";
import Button, { Variants } from "@/components/Button/Button";

import css from "./Camera.module.css";

export default function CameraPage() {
  const router = useRouter();
  const [dataUri, setDataUri] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleClick = async (plantId: string) => {
    const id = router.query.id ? router.query.id : plantId;
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/plants/plant/${id}/image`;

    await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageUrl,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setDataUri("");
      });
  };

  const discardImage = () => {
    setDataUri("");
    setImageUrl("");
  };

  async function handleTakePhoto(dataUri: any) {
    setDataUri(dataUri);
    const imageUrl = await imageUpload(dataUri);
    // @ts-ignore
    setImageUrl(imageUrl);
  }
  return (
    <div>
      <h1>Take a Picture</h1>
      {dataUri ? (
        <>
          {!router.query.name ? (
            <DropdownComponent handleClick={handleClick} />
          ) : (
            <>
              <Button
                buttonText={`Save Image to ${router.query.name}`}
                handleClick={() => handleClick(router.query.toString())}
                className={css.saveButton}
              />
              <Button
                buttonText="Cancel"
                handleClick={() => discardImage()}
                variant={Variants.CANCEL}
                className={css.cancelButton}
              />
            </>
          )}
          <div className={css.imagePreview}>
            <ImagePreview dataUri={dataUri} />
          </div>
        </>
      ) : (
        <Camera
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri);
          }}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          imageType={IMAGE_TYPES.JPG}
          isSilentMode
        />
      )}
    </div>
  );
}
