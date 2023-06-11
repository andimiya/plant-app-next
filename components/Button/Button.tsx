import React from "react";

import css from "./Button.module.css";

export const cls = (input: string) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond: string) => typeof cond === "string")
    .join(" ")
    .trim();

export enum Variants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  CANCEL = "cancel",
}

interface IButton {
  buttonText: string;
  className?: string | null;
  variant?: Variants;
  disabled?: boolean;
  handleClick?: any;
  submit?: boolean;
}

const Button = ({
  buttonText,
  className = null,
  variant = Variants.PRIMARY,
  disabled = false,
  handleClick = null,
  submit = false,
}: IButton) => {
  return (
    <button
      disabled={disabled}
      type={submit ? "submit" : "button"}
      onClick={handleClick}
      className={cls(`
      ${css[variant]}
      ${className}
    `)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
