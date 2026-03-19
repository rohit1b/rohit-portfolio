import React from "react";

const Button = ({
  children,
  className,
  onClick,
  type,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}) => {
  return (
    <button
      className={`group h-fit font-semibold rounded-[10px] py-2 px-[12px] md:px-[16px] lg:py-[10px] flex flex-row gap-1 lg:gap-2 items-center justify-center transition-all ease-in-out ${className || ""}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
