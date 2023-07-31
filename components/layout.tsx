import { useRouter } from 'next/router';
import { cls } from '../libs/utils';
import Image from 'next/image';
import logoPic from '../public/Ddukddak_logo.png';
import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

function deleteCookie(cookieName: string) {
  // 현재 시간보다 이전 날짜로 만료일을 설정하여 쿠키를 삭제합니다.
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export default function Layout({ children }: LayoutProps) {
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const router = useRouter();
  const onClick = () => {
    // router.back();
    // deleteCookie('intraId');
    setShowBtn(!showBtn);
    // router.push('/');
  };

  return (
    <div>
      <div className="bg-white text-lg font-medium fixed text-gray-800 top-8 left-8 flex flex-col items-center rounded-full ">
        <button type="button" onClick={onClick} className="focus:outline-none">
          <Image
            src={logoPic}
            alt="logo"
            placeholder="blur"
            className="w-12 h-12 shadow-xl rounded-full border border-gray-400 my-hover"
          />
        </button>
        {showBtn && (
          <div className="flex flex-col space-y-4">
            <button className="delay-100 transition translate-y-3 duration-1000 ease-in-out opacity-100 hover:opacity-0">
              1
            </button>
            <button className=" animation-delay-200 transition translate-y-5 duration-500 ease-in-out opacity-100 hover:opacity-0">
              2
            </button>
            <button className="delay-300 transition translate-y-7 duration-500 ease-in-out opacity-100 hover:opacity-0">
              3
            </button>
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
