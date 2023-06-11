import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ iconName, color, size }: any) => {
  return <FontAwesomeIcon icon={iconName} style={{ color }} size={size} />;
};

export default Icon;
