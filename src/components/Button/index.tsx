import React from "react";
import { useNavigate } from "react-router-dom";
import buttonStyle from "./style";

type ButtonPropsType = "Primary" | "Secondary";

interface ButtonProps {
  type: ButtonPropsType;
  text: string;
  icon?: string;
  className: string;
  navigatePath?: string;
}
function Button({
  type,
  text,
  icon,
  className,
  navigatePath,
}: ButtonProps): JSX.Element {
  const navigate = useNavigate();
  const renderButtonPropsType = (): string => {
    switch (type) {
      case "Primary":
        return buttonStyle.Primary;
      case "Secondary":
        return buttonStyle.Secondary;
      default:
        return buttonStyle.Primary;
    }
  };

  return (
    <button
      type="button"
      onClick={() => {
        if (navigatePath === undefined) return;
        navigate(navigatePath);
      }}
      className={`${renderButtonPropsType()} ${className} flex-center h-max rounded-full`}
    >
      {icon !== undefined && <img src={icon} alt="icon" className="mr-2" />}
      {text}
    </button>
  );
}

Button.defaultProps = {
  navigatePath: undefined,
  icon: undefined,
};

export default Button;