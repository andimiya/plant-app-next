import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

// import "./styles/imagePreview.css";

export const ImagePreview = ({ dataUri, isFullscreen }: any) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";

  return (
    <div className={"demo-image-preview " + classNameFullscreen}>
      <Image src={dataUri} alt="demo image" width={250} height={250} />
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool,
};

export default ImagePreview;
