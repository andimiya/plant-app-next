import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./Icons.module.css";

const FertilizerIcon = ({ size }: any) => {
  return (
    <FontAwesomeIcon icon={faSeedling} className={css.fertilizer} size={size} />
  );
};

export default FertilizerIcon;
