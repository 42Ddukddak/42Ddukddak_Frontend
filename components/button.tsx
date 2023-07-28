import { cls } from '@/libs/utils';
import { ModalContext } from '@/pages';
import React, { ReactElement, useContext } from 'react';

interface ButtonProps {
  svg?: ReactElement;
  text?: string;
  cancel?: boolean;
}

export default function Button({ svg, text, cancel }: ButtonProps) {
  const [isConform, setIsConform] = useContext(ModalContext);

  const onClick = () => {
    if (!cancel && text) {
      setIsConform({
        isConform: true,
      });
    }
  };
  return (
    <button
      type="button"
      onClick={onClick}
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
