import { cls } from '@/libs/utils';
// eslint-disable-next-line import/no-cycle
import { ModalContext } from '@/pages';
import React, { ReactElement, useContext } from 'react';

interface ButtonProps {
  svg?: ReactElement;
  text?: string;
  cancel?: boolean;
  time?: string;
  reservedTime?: string;
}

export default function Button({ svg, text, cancel, reservedTime }: ButtonProps) {
  const [isConfirm, setIsConfirm] = useContext(ModalContext);
  const onClickBtn = () => {
    if (!cancel && text) {
      setIsConfirm({
        isConfirm: true,
        reservedTime: reservedTime,
      });
    }
  };
  return (
    <button
      type="button"
      onClick={onClickBtn}
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
