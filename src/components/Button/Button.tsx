import React, { ReactElement } from 'react';

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  children: ReactElement | string;
  classList: string;
  dataTestId?: string;
};

const Button = ({
  handleClick,
  children,
  classList,
  dataTestId,
}: ButtonProps) => {
  return (
    <button
      className={`${classList}`}
      onClick={handleClick}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default Button;
