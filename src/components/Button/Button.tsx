import React, { ReactElement } from 'react';

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  children: ReactElement | string;
  classList: string;
};

const Button = ({ handleClick, children, classList }: ButtonProps) => {
  return (
    <button className={`${classList}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
