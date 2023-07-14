import Button from './button';

export default function Chatting() {
  return (
    <div className="xl:col-span-2 border-2 rounded-3xl shadow-xl px-5 py-4 space-y-2 bg-indigo-300">
      {/* 상단 바 */}
      <div className="border rounded-full bg-white shadow-md flex justify-between items-center">
        <div className="flex flex-col pl-5">
          <h3 className=" text-lg text-gray-800 font-bold">밥 먹을 놈들 with 5</h3>
          <span className="text-gray-400 text-sm">last seen 5 mins ago</span>
        </div>
        <div className=" font-bold flex justify-center items-center space-x-2 mr-2">
          <button type="button" className=" hover:text-violet-500 transition-colors">
            뚝딱뚝딱
          </button>
          <div className="w-[2px] h-6 bg-black" />
          <button type="button" className="hover:text-violet-500 transition-colors">
            Leave
          </button>
        </div>
      </div>
      {/* 채팅 내용 */}
      <div className="space-y-4 py-4 overflow-auto xl:min-h-[69vh] max-h-[50vh]">
        <div className="flex items-start text-gray-800 space-x-2 text-sm">
          <div className="pr-10">
            <div className="px-2 py-2  border border-gray-300 rounded-xl bg-violet-300 text-white">
              <p>
                Hi how much are you selling them for?how much are you selling them for?how much are you selling them
                for?how much are you selling them for?
              </p>
            </div>
            <div className="flex justify-between px-2 text-xs text-gray-600">
              <span>10 am</span>
              <span>신고</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start text-gray-800 space-x-2 text-sm">
          <div className="pl-10">
            <div className="px-2 py-2  border border-gray-300 rounded-xl bg-violet-500 text-white">
              <p>안녕하세요. 밥 먹으러 몇시에 가시나여??</p>
            </div>
            <div className="flex flex-row-reverse justify-between px-2 text-xs text-gray-600">
              <span>10 am</span>
            </div>
          </div>
        </div>
        <div className="flex items-start text-gray-800 space-x-2 text-sm">
          <div className="pr-10">
            <div className="px-2 py-2  border border-gray-300 rounded-xl bg-violet-300 text-white">
              <p>
                Hi how much are you selling them for?how much are you selling them for?how much are you selling them
                for?how much are you selling them for?
              </p>
            </div>
            <div className="flex justify-between px-2 text-xs text-gray-600">
              <span>10 am</span>
              <span>신고</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start text-gray-800 space-x-2 text-sm">
          <div className="pl-10">
            <div className="px-2 py-2  border border-gray-300 rounded-xl bg-violet-500 text-white">
              <p>안녕하세요. 밥 먹으러 몇시에 가시나여??</p>
            </div>
            <div className="flex flex-row-reverse justify-between px-2 text-xs text-gray-600">
              <span>10 am</span>
            </div>
          </div>
        </div>
      </div>
      {/* input 박스 */}
      <div className="">
        <form className="flex relative">
          <input
            type="text"
            placeholder="Message"
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
  );
};
