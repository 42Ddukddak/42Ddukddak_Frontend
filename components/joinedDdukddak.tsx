import axios from 'axios';
import RightBlockHeader from './rightBlockHeader';
import { useState, useEffect } from 'react';
import { cls } from '@/libs/utils';

interface IRoomList {
  roomId: number;
  roomName: string;
  reservedTime: string;
}

interface IIndexProps {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function JoinedDdukddak({ setIndex }: IIndexProps) {
  const [roomList, setRoomList] = useState<IRoomList[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>();

  useEffect(() => {
    const requestRoomList = async () => {
      try {
        await axios.get('/api/reserved/list').then((res) => {
          setRoomList(JSON.parse(res.data));
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
    setIndex(i);
  };

  const roomBox = roomList.map((items) => (
    <div
      key={items.roomId}
      onClick={() => onClick(items.roomId)}
      className={cls(
        selectedIndex === items.roomId ? ' bg-violet-400' : '',
        'flex justify-between px-8 py-3 shadow-sm hover:bg-violet-400 cursor-pointer rounded-lg',
      )}
    >
      <h2 className="self-center text-lg font-semibold w-3/5">{items.roomName}</h2>
      <div className="flex flex-col justify-center items-end space-y-1">
        <span className=" bg-violet-500 py-1 px-2 rounded-md text-white shadow-md">예약 시간{items.reservedTime}</span>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col border-2 rounded-3xl py-4 px-5 shadow-2xl h-screen max-h-[50vh] xl:min-h-[85vh]">
      <RightBlockHeader text={'뚝딱 Log'} isSearch mypage />
      <div className="divide-y-2 mt-2 overflow-auto">{roomBox}</div>
    </div>
  );
}
