import React from "react";

type ButtonProps = {
  variant?:
    | "primary"
    | "secondary"
    | "icon-arrow-primary"
    | "icon-arrow-secondary"
    | "default";
  children: React.ReactNode;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  onClick,
}) => {
  const styles: Record<string, React.CSSProperties> = {
    primary: { backgroundColor: "blue", color: "white" },
    secondary: { backgroundColor: "gray", color: "black" },
  };

  const isArrow = variant.includes("icon-arrow");
  const buttonStyle = styles[variant.replace("icon-arrow-", "")] || {};

  return (
    <button style={buttonStyle} onClick={onClick}>
      {isArrow && <span>&rarr;</span>} {children}
    </button>
  );
};

export default Button;
