import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./Icons.module.css";

const EditIcon = ({ size }: any) => {
  return (
    <FontAwesomeIcon icon={faPenToSquare} className={css.edit} size={size} />
  );
};

export default EditIcon;
