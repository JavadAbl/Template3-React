// src/components/IconButton.tsx

import React from "react";
import clsx from "clsx";
import { DaisyUIColors } from "../../Utils/DaisyUiUtils";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: IconComponent;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: DaisyUIColors;
  textClassName?: string;
  iconClassName?: string;
}

export default function IconButton({
  text,
  icon: Icon,
  size = "md",
  variant,
  iconClassName = "",
  textClassName = "",
  className = "",
  ...rest
}: IconButtonProps) {
  // Mapping for button size classes
  const sizeClasses = {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
  };

  // Mapping for icon size classes to keep them proportional to the button
  const iconSizeClasses = {
    xs: "w-4 h-4",
    sm: "w-5 h-5",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <button
      className={clsx(
        "btn",
        sizeClasses[size],
        variant && `btn-${DaisyUIColors[variant]}`,
        className
      )}
      {...rest}
    >
      {Icon && <Icon className={clsx(iconSizeClasses[size], iconClassName)} />}
      {text && <span className={clsx("ml-0", textClassName)}>{text}</span>}
    </button>
  );
}
