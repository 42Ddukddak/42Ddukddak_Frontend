import { NextPage } from 'next';
import Image from 'next/image';
import tempPic from '../public/Ddukddak_logo.png';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/components/loading';

const Enter: NextPage = () => {
  const route = useRouter();
  // const [loading, setLoading] = useState(false);
  const onClick = () => {
    route.push('/api/42login');
  };

  useEffect(() => {
    const url = new URL(window.location.href);

    const postData = async () => {
      const code = url.searchParams.get('code');
      try {
        await axios.post('/api/auth/42login', null, {
          params: { code: code },
        });
        // .then(() => setLoading(false))
        route.push('/');
      } catch (error) {
        console.error(error);
      }
    };

    if (url.pathname === '/auth/callback') {
      postData();
      // setLoading(true);
    }
  }, []);

  return (
    <div>
      <div className='"mt-16 px-16 flex flex-col justify-center items-center space-y-5"'>
        <Image src={tempPic} alt="mainIMG" placeholder="blur" />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-dashed border-purple-300 my-4 pb-3 text-center">
            뚝딱에 오신 여러분을 환영합니다.
          </h2>
          <span className="text-sm text-gray-500">
            '뚝딱' 은 익명을 보장합니다. 이야기를 나누거나 모임을 만들어 보세요.
          </span>
        </div>
        <button
          onClick={onClick}
          className=" rounded-xl shadow-xl bg-purple-500 text-white px-10 py-4 text-2xl hover:ring-2 hover:ring-offset-2 hover:ring-purple-400 hover:bg-purple-400 focus:outline-none"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Enter;
