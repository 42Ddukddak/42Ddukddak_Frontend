import React, { ReactElement } from 'react';

interface ButtonProps {
  svg: ReactElement;
}

function Button({ svg }: ButtonProps) {
  return (
    <button type="button" className="text-center bg-violet-600 rounded-2xl px-2 transition-colors hover:text-white">
      {svg}
    </button>
  );
}

export default Button;
