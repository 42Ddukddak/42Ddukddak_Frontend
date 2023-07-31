import Modal from '@/components/modal';
import { cls } from '@/libs/utils';

export default function Ws() {
  return (
    <div className="xl:col-span-2 flex flex-col justify-between border-2 rounded-3xl shadow-xl px-5 py-4 space-y-2 h-screen max-h-[50vh] xl:min-h-[85vh] bg-indigo-300">
      <div className="space-y-4 flex-1 py-4 overflow-auto xl:min-h-[69vh] max-h-[50vh]">
        <div className="">
          <div className="flex flex-col justify-end items-end pr-10">
            <div className="flex justify-end items-end">
              <span className="text-sm text-gray-600 font-light px-2">20.23 </span>
              <div className="px-2 py-2  border border-gray-300 rounded-xl bg-violet-300 text-white">
                <p>안녕하세요.</p>
              </div>
            </div>
            <span className="text-xs text-gray-600 mr-1">신고</span>
          </div>
          <div className="  flex flex-col justify-end pr-10">
            <div className="flex-row-reverse flex justify-end items-end">
              <span className="text-sm text-gray-600 font-light mr-2">20.23 </span>
              <div className="px-2 py-2  border border-gray-300 rounded-xl bg-violet-300 text-white">
                <p>안녕하세요.</p>
              </div>
            </div>
            <span className="text-xs text-gray-600 mr-1">신고</span>
          </div>
          <div className="flex flex-col justify-end items-end pr-10">
            <div className="flex justify-end items-end">
              <span className="text-sm text-gray-600 font-light mr-2">20.23 </span>
              <div className="px-2 py-2  border border-gray-300 rounded-xl bg-violet-300 text-white">
                <p>안녕하세요.</p>
              </div>
            </div>
            <span className="text-xs text-gray-600 mr-1">신고</span>
          </div>
        </div>
      </div>
      {/* input 박스 */}
      <div className="">
        <div className="flex relative">
          <input
            type="text"
            placeholder="Message"
            required
            className="overflow-visible peer border rounded-xl w-full placeholder:pl-2 py-2 mt-2 pl-3 pr-[58px] focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
          />
          <div className="absolute right-2 -bottom-[0.5px]"></div>
        </div>
      </div>
    </div>
  );
}
