import React, { ReactElement } from 'react';

interface ButtonProps {
  svg: ReactElement;
}

export default function Button({ svg }: ButtonProps) {
  return (
    <button
      type="button"
      className="text-center bg-violet-600 rounded-2xl px-2 transition-colors hover:text-white focus:text-white focus:outline-none"
    >
      {svg}
    </button>
  );
}
