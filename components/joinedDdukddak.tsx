import axios from 'axios';
import RightBlockHeader from './rightBlockHeader';
import { MouseEvent, useEffect, useState } from 'react';
import { IResponse } from '@/interface/Context';
import { cls } from '@/libs/utils';

export default function JoinedDdukddak() {
  const [roomList, setRoomList] = useState<Array<IResponse>>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const requestRoomList = async () => {
      try {
        await axios.get('/api/chat/joined').then((res) => {
          setRoomList(res.data);
          console.log('@@@@@@@ requestRoomList', res.data);
        });
      } catch (error) {
        console.log('@@@@@@@ requestRoomList err', error);
      }
    };
    requestRoomList();
  }, []);

  const onClick = (i: number) => {
    setSelectedIndex(i);
  };

  return (
    <div className="flex flex-col border-2 rounded-3xl py-4 px-5 shadow-2xl h-screen max-h-[50vh] xl:min-h-[85vh]">
      <RightBlockHeader text={'참가했던 뚝딱'} isSearch mypage />
      <div className="divide-y-[1px] space-y-4 mt-2 overflow-auto">
        {roomList.map((items, i) => (
          <div
            key={i}
            onClick={() => onClick(i)}
            className={cls(
              selectedIndex === i ? ' bg-violet-400' : '',
              'flex justify-between px-8 py-3 hover:shadow-sm hover:bg-slate-50 cursor-pointer',
            )}
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
