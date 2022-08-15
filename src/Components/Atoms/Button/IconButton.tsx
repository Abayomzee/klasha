import React from "react";
import Button from "./Button";

interface ButtonProps {
  className?: string;
  title?: any;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  label?: string;
  onClick?: (val?: any) => void;
}
const IconButton: React.FC<ButtonProps> = (props) => {
  const { className, title, icon, onClick, label, iconPosition } = props;
  return (
    <Button
      className={`btn-icon ${iconPosition === "right" ? "reverse" : ""} ${
        className ? className : ""
      }`}
      onClick={onClick}
      title={title}
      iconPosition={iconPosition}
    >
      {icon}
      {label}
    </Button>
  );
};

export default IconButton;
