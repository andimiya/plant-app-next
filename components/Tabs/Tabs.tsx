import Link from "next/link";
import css from "./Tabs.module.css";
import { useRouter } from "next/router";

interface IProps {
  title: string;
}
const Tabs = ({ title }: IProps) => {
  const router = useRouter();
  const { pathname } = router;
  let isSelected = "details";
  if (pathname.includes("gallery")) {
    isSelected = "gallery";
  } else if (pathname.includes("log")) {
    isSelected = "log";
  } else {
    isSelected = "details";
  }

  return (
    <div className={css.container}>
      <h1>{title}</h1>
      <div className={css.linkContainer}>
        <div className="ui hidden divider"></div>
        <Link
          className={
            isSelected === "details" ? css.isSelected : css.notSelected
          }
          href={`/plants/${title}`}
        >
          Details{" "}
        </Link>
        <Link
          className={
            isSelected === "gallery" ? css.isSelected : css.notSelected
          }
          href={`/plants/${title}/gallery`}
        >
          Gallery{" "}
        </Link>
        <Link
          className={isSelected === "log" ? css.isSelected : css.notSelected}
          href={`/plants/${title}/log`}
        >
          Log{" "}
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
