import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  buttonType: string;
  onClick?: () => void;
}

const Button = ({ children, buttonType, onClick }: ButtonProps) => {
  return (
    <button type="button" className={`btn btn-${buttonType}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
