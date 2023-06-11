import React from "react";
import Tabs from "../Tabs/Tabs";

import css from "./PIDHeader.module.css";

interface IProps {
  title: string;
  image: string;
}
const PIDHeader = ({ title, image }: IProps) => {
  return (
    <div className={css.container}>
      {image && (
        <div
          className="cover-container"
          style={{
            backgroundImage: `url(${image}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "150px",
          }}
        />
      )}
      <Tabs title={title} />
    </div>
  );
};

export default PIDHeader;
