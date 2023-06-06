import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./Icons.module.css";

const TrashIcon = ({ size }: any) => {
  return (
    <FontAwesomeIcon icon={faTrashCan} className={css.trashcan} size={size} />
  );
};

export default TrashIcon;
