import Layout from '@/components/layout';
import Button from '@/components/button';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MakeDdukddak from '@/components/makeDdukddak';
import Chatting from '@/components/chatting';

export default function Home() {
  const tokenInfo:
    | {
        id: number;
        nickname: string;
      }
    | undefined = { id: 1, nickname: 'a' };
  const router = useRouter();

  useEffect(() => {
    const url = new URL(window.location.href);

    const fetchAuth = async () => {
      const code = url.searchParams.get('code');
      console.log(code);
      const config = {
        url: '/42login',
        method: 'post',
        data: { code },
      };
    };
  }, []);
  return (
    <Layout logo>
      <div className="grid gap-10 py-24 px-8 xl:grid-cols-3 xl:place-content-center">
        {/* 뚝딱 만들기 or 채팅 방 */}
        {/* <MakeDdukddak /> */}
        <Chatting />
        {/* 전체 채팅  */}
        <div className="flex flex-col border-2 rounded-xl py-4 px-5 shadow-2xl xl:min-h-[80vh]">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold text-violet-950">전체 채팅</h2>
            <div className="grid grid-cols-2 gap-1 place-items-center">
              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>
              <div className="w-6 h-6"></div>
              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* 채팅내용  */}
          <div className="space-y-4 py-4 overflow-auto max-h-[44vh] xl:max-h-[70vh]">
            <div className="flex items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <div className=" w-4/5 px-2 py-2  border border-gray-300 rounded-md">
                <p>
                  Hi how much are you selling them for?how much are you selling them for?how much are you selling them
                  for?how much are you selling them for?
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>

              <div className=" px-2 py-2  border border-gray-300 rounded-md">
                <p>안녕하세요ㅋㅋ 시시발발로로마마</p>
              </div>
            </div>
            <div className="flex items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <div className=" w-4/5 px-2 py-2  border border-gray-300 rounded-md">
                <p>
                  Hi how much are you selling them for?how much are you selling them for?how much are you selling them
                  for?how much are you selling them for?
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>

              <div className=" px-2 py-2  border border-gray-300 rounded-md">
                <p>안녕하세요ㅋㅋ 시시발발로로마마</p>
              </div>
            </div>
            <div className="flex items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <div className=" w-4/5 px-2 py-2  border border-gray-300 rounded-md">
                <p>
                  Hi how much are you selling them for?how much are you selling them for?how much are you selling them
                  for?how much are you selling them for?
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>

              <div className=" px-2 py-2  border border-gray-300 rounded-md">
                <p>안녕하세요ㅋㅋ 시시발발로로마마</p>
              </div>
            </div>
            <div className="flex items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <div className=" w-4/5 px-2 py-2  border border-gray-300 rounded-md">
                <p>
                  Hi how much are you selling them for?how much are you selling them for?how much are you selling them
                  for?how much are you selling them for?
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>

              <div className=" px-2 py-2  border border-gray-300 rounded-md">
                <p>안녕하세요ㅋㅋ 시시발발로로마마</p>
              </div>
            </div>
            <div className="flex items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <div className=" w-4/5 px-2 py-2  border border-gray-300 rounded-md">
                <p>
                  Hi how much are you selling them for?how much are you selling them for?how much are you selling them
                  for?how much are you selling them for?
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>

              <div className=" px-2 py-2  border border-gray-300 rounded-md">
                <p>안녕하세요ㅋㅋ 시시발발로로마마</p>
              </div>
            </div>
            <div className="flex items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <div className=" w-4/5 px-2 py-2  border border-gray-300 rounded-md">
                <p>
                  Hi how much are you selling them for?how much are you selling them for?how much are you selling them
                  for?how much are you selling them for?
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>

              <div className=" px-2 py-2  border border-gray-300 rounded-md">
                <p>안녕하세요ㅋㅋ 시시발발로로마마</p>
              </div>
            </div>
            <div className="flex items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <div className=" w-4/5 px-2 py-2  border border-gray-300 rounded-md">
                <p>
                  Hi how much are you selling them for?how much are you selling them for?how much are you selling them
                  for?how much are you selling them for?
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>

              <div className=" px-2 py-2  border border-gray-300 rounded-md">
                <p>안녕하세요ㅋㅋ 시시발발로로마마</p>
              </div>
            </div>
            <div className="flex items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <div className=" w-4/5 px-2 py-2  border border-gray-300 rounded-md">
                <p>
                  Hi how much are you selling them for?how much are you selling them for?how much are you selling them
                  for?how much are you selling them for?
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start text-gray-800 space-x-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>

              <div className=" px-2 py-2  border border-gray-300 rounded-md">
                <p>안녕하세요ㅋㅋ 시시발발로로마마</p>
              </div>
            </div>
          </div>
          {/* 인풋 박스  */}
          <div className="">
            <form className="flex relative">
              <input
                type="text"
                placeholder="안녕하세요^^ 인사해볼까요?"
                required
                className="overflow-visible peer border rounded-xl w-full placeholder:pl-2 py-2 mt-2 pl-3 pr-[58px] focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              <div className="absolute right-2 -bottom-[0.5px]">
                <Button
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 peer-invalid:bg-gray-800 my-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
