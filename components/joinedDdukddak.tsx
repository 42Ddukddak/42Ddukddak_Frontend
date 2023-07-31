import axios from 'axios';
import RightBlockHeader from './rightBlockHeader';
import { MouseEvent, useEffect, useState } from 'react';
import { IResponse } from '@/interface/Context';

export default function JoinedDdukddak() {
  const [roomList, setRoomList] = useState<Array<IResponse>>([]);

  // useEffect(() => {
  //   const requestRoomList = async () => {
  //     await axios.get('/api/chat/joined').then((res) => {
  //       setRoomList(res.data);
  //     });
  //   };
  //   requestRoomList();
  // }, []);

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    console.log(event.currentTarget.getAttribute('data-custom'));
    console.log(event);
  };

  return (
    <div className="flex flex-col border-2 rounded-3xl py-4 px-5 shadow-2xl h-screen max-h-[50vh] xl:min-h-[85vh]">
      <RightBlockHeader text={'참가했던 뚝딱'} isSearch mypage />
      <div className="divide-y-[1px] space-y-4 mt-2 overflow-auto">
        {roomList.map((items, i) => (
          <div
            key={i}
            data-custom={JSON.stringify(roomList[i])}
            onClick={onClick}
            className="flex justify-between px-8 py-3 hover:shadow-sm hover:bg-slate-50 cursor-pointer"
          >
            <h2 className="self-center text-lg font-semibold w-3/5">{items.roomName}</h2>
            <div className="flex flex-col justify-center items-end space-y-1">
              <span className=" bg-violet-500 py-1 px-2 rounded-md text-white shadow-md">{items.participantsNum}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
