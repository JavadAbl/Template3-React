import clsx from "clsx";
import { ButtonTypes } from "./ButtonTypes.ts";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

type PropTypes = {
  text: string;
  variant?: keyof typeof ButtonTypes;
  render?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  text,
  variant,
  render,
  className,
  ...props
}: PropTypes) {
  return (
    <button
      type="button"
      className={clsx("btn", variant && ButtonTypes[variant], className)}
      {...props}
    >
      {text}
      {render}
    </button>
  );
}
