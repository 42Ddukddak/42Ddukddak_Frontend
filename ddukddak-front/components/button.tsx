import React, { ReactElement } from 'react';

interface ButtonProps {
  svg: ReactElement;
}

const Button: React.FC<ButtonProps> = ({ svg }) => {
  return <button className="text-center bg-violet-600 rounded-2xl px-2 transition-colors hover:text-white">{svg}</button>;
};

export default Button;
