import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import imageUpload from "./api/addImageToS3";
import { useState } from "react";
import ImagePreview from "./components/ImagePreview/ImagePreview";
import DropdownComponent from "./components/Dropdown/Dropdown";

import css from "./Camera.module.css";
import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";

export default function CameraPage() {
  const router = useRouter();
  const [dataUri, setDataUri] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleClick = async (plantId: string) => {
    const id = router.query.id ? router.query.id : plantId;
    const url = `${process.env.NEXT_PUBLIC_API_URL}/plants?id=${id}`;
    await fetch(url, {
      method: "PUT",
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
          {!router.query.length ? (
            <DropdownComponent handleClick={handleClick} />
          ) : (
            <Button onClick={() => handleClick(router.query.toString())}>
              {`Save Image to ${router.query.name}`}
            </Button>
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
