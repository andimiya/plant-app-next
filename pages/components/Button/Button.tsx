import React from "react";

import css from "./Button.module.css";

export const cls = (input: string) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond: string) => typeof cond === "string")
    .join(" ")
    .trim();

interface IButton {
  buttonText: string;
  className?: string | null;
  variant?: "primary";
  disabled?: boolean;
  handleClick?: any;
  submit: boolean;
}

const Button = ({
  buttonText,
  className = null,
  variant = "primary",
  disabled = false,
  handleClick = null,
  submit = false,
}: IButton) => {
  const classes = {
    variant: {
      primary: css.primary,
    },
  };

  return (
    <button
      disabled={disabled}
      type={submit ? "submit" : "button"}
      onClick={handleClick}
      className={cls(`
      ${classes.variant[variant]}
      ${className}
    `)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
