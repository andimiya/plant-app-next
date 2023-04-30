import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faSquarePlus,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import css from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={css.container}>
      <div className={css.iconContainer}>
        <Link href="/">
          <FontAwesomeIcon className={css.icon} icon={faHouse} />
        </Link>
        <Link href="/camera">
          <FontAwesomeIcon className={css.icon} icon={faCamera} />
        </Link>
        <Link href="/add-new">
          <FontAwesomeIcon className={css.icon} icon={faSquarePlus} />
        </Link>
      </div>
    </footer>
  );
}
