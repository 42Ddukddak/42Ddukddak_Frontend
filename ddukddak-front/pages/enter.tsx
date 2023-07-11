import { NextPage } from 'next';
import Image from 'next/image';
import tempPic from '../public/Ddukddak_logo.png';

const Enter: NextPage = () => {
  const url = 'https://api.intra.42.fr/oauth/token';
  const query =
    '?' +
    'grant_type=' +
    'client_credentials' +
    '&' +
    'client_id=' +
    process.env.NEXT_PUBLIC_UID_42 +
    '&' +
    'client_secret=' +
    process.env.NEXT_PUBLIC_SECRET_42 +
    '&' +
    'redirect_uri=' +
    process.env.NEXT_PUBLIC_REDIRECT_URL +
    '&' +
    'scope=public';

  const onClick = () => {
    fetch(url + query, {
      method: 'POST',
      headers: {},
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <div className="mt-16 px-16 flex flex-col justify-center items-center space-y-5">
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
  );
};

export default Enter;
