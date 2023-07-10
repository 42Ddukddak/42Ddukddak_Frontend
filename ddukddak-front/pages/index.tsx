import Layout from '@/components/layout';
import Button from '@/components/button';

export default function Home() {
  return (
    <Layout logo>
      <div className=" grid gap-10 py-24 px-10 xl:grid-cols-3 min-h-screen xl:place-content-center">
        {/* 뚝딱 만들기  */}
        <div className=" hidden my-flex-center xl:col-span-2">
          <form className="my-flex-center space-y-4 bg-violet-600 rounded-3xl shadow-xl relative py-6 px-10">
            <h2 className="font-semibold text-3xl text-center text-white mt-10">어떤 뚝딱을 만들고 싶나요?</h2>
            <input
              type="text"
              required
              placeholder="방 제목을 입력해주세요."
              className="border py-3 rounded-full peer placeholder:text-center shadow-sm px-16 my-hover"
            />
            <div className="absolute right-14 top-[105px]">
              <Button
                svg={
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M483.424 24.638L449.83 39.98c.944.974 1.864 1.99 2.754 3.068c3.544 4.29 6.546 8.89 9.07 13.745l21.77-32.155zm-221.18 14.426l4.217 42.527c7.223-6.983 14.875-13.594 22.97-19.575l-27.186-22.95zm143.17 2.358c-2 .03-4.06.133-6.18.298c-11.58.906-24.367 3.983-37.02 7.41l23.55 36.178l.404.62l.297.68c3.1 7.08 2.3 14.488-.006 21.41c-2.308 6.924-6.405 13.565-12.487 18.53c-6.082 4.962-14.756 8.037-23.813 6.118c-9.056-1.92-17.6-8.213-25.506-18.803l-1.718-2.305l-1.104-48.535c-25.135 12.94-47.54 34.326-66.178 57.047l17.14 9.428l2.892 1.59l1.177 3.08c4.892 12.782 5.147 26.122-1.43 37.13c-6.575 11.01-18.66 18.744-35.435 24.293l-6.9 2.285l-11.653-19.82c-1.71 3.762-3.41 7.56-5.093 11.43L199.126 298.11l-2.75-61.597c-10.444 24.205-21.82 48.42-36.09 70.063C119.643 368.216 28.322 462.01 28.322 462.01l-.07.072l-.07.07c-3.905 3.85-3.91 5.573-3.475 7.693c.29 1.418 1.348 3.368 3.168 5.43l97.166-78.713l-84.007 87.3c5.778 2.305 11.906 3.587 15.895 3.495c6.885-6.482 66.713-62.5 107.11-88.644c38.117-24.67 69.79-54.084 106.32-82.045l12.213-70.723l.37-2.147l1.312-1.74c6.783-8.997 15.585-14.236 24.506-15.33a31.905 31.905 0 0 1 6.588-.113c6.464.56 12.5 3.047 17.584 6.59c11.895 8.287 20.172 22.808 18.008 37.68c6.76-3 13.436-6.003 19.883-9.153c20.67-10.1 38.705-21.33 51.063-37.56c-7.023-.544-13.58-3.672-19.03-7.846c-7.455-5.707-13.412-13.558-17.25-22.2c-3.84-8.64-5.723-18.287-2.974-27.615c2.75-9.326 11.142-17.274 22.833-20.01l.645-.153l45.662-3.797c.92-5.208 1.667-10.42 2.19-15.58c1.022-10.1 1.175-19.927.35-29.187l-28.927 31.25l19.88-64.613c-1.88-3.562-4.056-6.88-6.556-9.907c-7.064-8.55-16.195-12.217-27.474-12.957a72.25 72.25 0 0 0-5.82-.134zm-65.937 5.773l1.316 57.93c5.447 6.628 10.038 9.285 13.098 9.933c3.385.717 5.85-.13 8.702-2.457c2.852-2.327 5.483-6.348 6.79-10.272c1.253-3.757 1.01-7.105.624-8.23l-30.53-46.903zm-136.057 64.69l37.62 63.984c10.068-4.252 16.137-9.108 18.94-13.802c3.017-5.05 3.41-10.74.962-18.547l-57.522-31.636zm284.063 45.76l-78.336 6.513c-6.528 1.622-8.23 3.973-9.252 7.443c-1.05 3.558-.457 9.338 2.156 15.218c2.614 5.88 7.085 11.648 11.745 15.217c4.102 3.14 7.867 4.322 10.924 4.105c.6-.433 1.22-.876 2.16-1.576a960.486 960.486 0 0 0 10.226-7.758c8.388-6.43 19.428-14.995 30.408-23.547c10.038-7.82 12.08-9.442 19.97-15.616zM312.38 244.497c-.48.007-.957.04-1.43.097c-3.424.42-7.092 2.18-11.067 6.868l-16.496 95.523l49.18-76.508c2.014-7.113-2.495-17.326-9.926-22.504c-2.873-2.002-5.883-3.162-8.806-3.422a14.095 14.095 0 0 0-1.453-.054zm74.02 29.52a328.805 328.805 0 0 1-7.677 3.886c-5.127 2.505-10.308 4.887-15.488 7.232l27.76 17.047l-4.594-28.166z"
                    />
                  </svg>
                }
              />
            </div>
          </form>
          <span className="text-gray-500 text-sm">뚝딱은 모임, 예약, 파티, 약속, 집합 등을 통칭합니다.</span>
        </div>
        {/* 전체 채팅  */}
        <div className=" flex flex-col justify-between border-2 rounded-xl py-4 px-5 shadow-2xl xl:h-[80vh]">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold text-violet-950">전체 채팅</h2>
            <div className="grid grid-cols-2 gap-1 place-items-center">
              <div className="w-6 h-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div className="w-6 h-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
              </div>
              <div className="w-6 h-6"></div>
              <div className="w-6 h-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
            </div>
          </div>
          {/* 채팅내용  */}
          <div className="space-y-4 py-4 overflow-auto max-h-[60vh]">
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
