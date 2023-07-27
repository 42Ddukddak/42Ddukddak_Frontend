import { useRouter } from 'next/router';
import { cls } from '../libs/utils';
import Image from 'next/image';
import logoPic from '../public/Ddukddak_logo.png';
import React from 'react';

interface LayoutProps {
  logo?: boolean;
  children: React.ReactNode;
}

function deleteCookie(cookieName: string) {
  // 현재 시간보다 이전 날짜로 만료일을 설정하여 쿠키를 삭제합니다.
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export default function Layout({ logo, children }: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    // router.back();
    deleteCookie('intraId');
    router.push('/');
  };
  return (
    <div>
      <div
        className={cls(
          !logo ? 'justify-center' : '',
          'bg-white text-lg font-medium fixed text-gray-800 top-8 left-8  flex items-center rounded-full ',
        )}
      >
        {logo ? (
          <button type="button" onClick={onClick} className="focus:outline-none">
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
