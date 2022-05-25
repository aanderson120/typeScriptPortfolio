import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button
      style={{
        fontSize: "25px",
        padding: "8px",
        border: "none",
        borderRadius: "5px",
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
