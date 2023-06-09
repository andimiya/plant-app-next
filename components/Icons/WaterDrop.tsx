import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./Icons.module.css";

const WaterDropIcon = ({ size }: any) => {
  return (
    <FontAwesomeIcon icon={faDroplet} className={css.droplet} size={size} />
  );
};

export default WaterDropIcon;
