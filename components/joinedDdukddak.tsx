import axios from 'axios';
import RightBlockHeader from './rightBlockHeader';
import { useEffect, useState } from 'react';
import { cls } from '@/libs/utils';

export default function JoinedDdukddak() {
  const [roomList, setRoomList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const requestRoomList = async () => {
      try {
        await axios.get('/api/reserved/list').then((res) => {
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
      <RightBlockHeader text={'뚝딱 Log'} isSearch mypage />
      <div className="divide-y-2 mt-2 overflow-auto">
        {roomList.map((items, i) => (
          <div
            key={i}
            onClick={() => onClick(i)}
            className={cls(
              selectedIndex === i ? ' bg-violet-400' : '',
              'flex justify-between px-8 py-3 shadow-sm hover:bg-violet-400 cursor-pointer rounded-lg',
            )}
          >
            <h2 className="self-center text-lg font-semibold w-3/5">{items}</h2>
            {/* <div className="flex flex-col justify-center items-end space-y-1">
              <span className=" bg-violet-500 py-1 px-2 rounded-md text-white shadow-md">{items.participantsNum}</span>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
