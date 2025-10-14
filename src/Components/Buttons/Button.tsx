import clsx from "clsx";
import { useEffect, useState } from "react";

type PropTypes = {
  text: string;
  varient?:
    | "neutral"
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
};

export default function Button({ text, varient }: PropTypes) {
  const [step, setStep] = useState(0);
  const btnVarient = varient || "error";

  useEffect(() => {
    setInterval(() => {
      setStep((val) => val + 1);
    }, 1000);
  }, [varient]);

  return (
    <button type="button" className={`btn btn-${btnVarient}`}>
      {step}
    </button>
  );
}
