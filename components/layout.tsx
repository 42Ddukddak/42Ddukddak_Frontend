import { useRouter } from 'next/router';
import { cls } from '../libs/utils';
import Image from 'next/image';
import logoPic from '../public/Ddukddak_logo.png';
import React from 'react';

interface LayoutProps {
  logo?: boolean;
  children: React.ReactNode;
}

Layout.defualtProps = {
  logo: false,
};

export default function Layout({ logo, children }: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div>
      <div
        className={cls(
          !logo ? 'justify-center' : '',
          'bg-white text-lg  font-medium fixed text-gray-800 top-8 left-8  flex items-center rounded-full',
        )}
      >
        {logo ? (
          <button type="button" onClick={onClick}>
            <Image
              src={logoPic}
              alt="logo"
              placeholder="blur"
              className="w-12 h-12 shadow-xl rounded-full border border-gray-400 my-hover"
            />
          </button>
        ) : null}
      </div>
      <div>{children}</div>
    </div>
  );
}
