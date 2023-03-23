import Camera, { IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import imageUpload from "../api/upload-url";

export default function CameraPage() {
  function handleTakePhoto(dataUri: any) {
    // Do stuff with the photo...
    imageUpload(dataUri);
  }
  return (
    <div>
      <h1>Take a Picture</h1>
      <Camera
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
        imageType={IMAGE_TYPES.JPG}
      />
    </div>
  );
}
