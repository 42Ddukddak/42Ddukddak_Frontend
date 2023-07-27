import { cls } from '@/libs/utils';
import React, { ReactElement } from 'react';

interface ButtonProps {
  svg?: ReactElement;
  text?: string;
  cancel?: boolean;
}

export default function Button({ svg, text, cancel }: ButtonProps) {
  return (
    <button
      type="button"
      className={cls(
        cancel ? 'bg-violet-300' : 'bg-violet-600',
        'text-center  rounded-2xl px-2 transition-colors hover:text-white focus:text-white focus:outline-none',
      )}
    >
      {svg}
      {text ? <div className="p-3 font-semibold text-xl">{text}</div> : null}
    </button>
  );
}
