import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./Icons.module.css";

const StarIcon = ({ size, colored = false }: any) => {
  return (
    <FontAwesomeIcon
      icon={faStar}
      className={colored ? css.starColored : css.star}
      size={size}
    />
  );
};

export default StarIcon;
