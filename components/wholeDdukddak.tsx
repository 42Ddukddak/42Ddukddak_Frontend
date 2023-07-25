import { useContext, useEffect, MouseEvent } from 'react';
import RightBlockHeader from './rightBlockHeader';
import { AppContext } from '@/pages';
import axios from 'axios';

export default function WholeDdukddak() {
  const [info, setInfo] = useContext(AppContext);

  useEffect(() => {
    const roomList = async () => {
      await axios.get('/api/roomList');
    };
    console.log(roomList);
  });
  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    console.log(event.currentTarget.getAttribute('data-custom'));
    console.log(event);
  };
  return (
    <div className="flex flex-col border-2 rounded-3xl py-4 px-5 shadow-2xl h-screen max-h-[50vh] xl:min-h-[85vh]">
      <RightBlockHeader text={'전체 뚝딱'} isSearch />
      <div className="divide-y-[1px] space-y-4 mt-2 overflow-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((items, i) => (
          <div
            key={i}
            data-custom={items}
            onClick={onClick}
            className="flex justify-between px-8 py-3 hover:shadow-sm hover:bg-slate-50 cursor-pointer"
          >
            <h2 className="self-center text-lg font-semibold w-3/5">
              밥 먹으러 가실분~!밥 먹으러 가실분~!밥 먹으러 가실분~!밥 먹으러 가실분~!밥 먹으러 가실분~!밥 먹으러
              가실분~!
            </h2>
            <div className="flex flex-col justify-center items-end space-y-1">
              <span className=" bg-violet-500 py-1 px-2 rounded-md text-white shadow-md">2</span>
              <span className="text-sm border-b-2 shadow-sm border-violet-300">10 min</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
