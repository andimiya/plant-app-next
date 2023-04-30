import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import imageUpload from "./api/addImageToS3";
import { useState } from "react";
import ImagePreview from "./components/ImagePreview/ImagePreview";
import { Button } from "antd";

export default function CameraPage() {
  const [dataUri, setDataUri] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleClick = async (imageUrl: string) => {
    const id = "643385e7bd4e67b4581468fa";
    const url = `/api/plants?id=${id}`;
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
          <Button type="primary">
            <a onClick={() => handleClick(imageUrl)}>
              Save image to Astro Plant
            </a>
          </Button>
          <ImagePreview dataUri={dataUri} />
        </>
      ) : (
        <Camera
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri);
          }}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          imageType={IMAGE_TYPES.JPG}
        />
      )}
    </div>
  );
}
