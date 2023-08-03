import { useContext, useEffect, MouseEvent, useState } from 'react';
import RightBlockHeader from './rightBlockHeader';
import { AppContext, ModalContext } from '@/pages';
import axios from 'axios';
import { IResponse } from '@/interface/Context';
import Modal from './modal';
import { ModalMessage } from '@/const/modalMessage';
import { IText } from '@/interface/Modal';

export default function WholeDdukddak() {
  const [info, setInfo] = useContext(AppContext);
  const [roomList, setRoomList] = useState<Array<IResponse>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useContext(ModalContext);
  const [target, setTarget] = useState<IResponse | null>(null);
  const [text, setText] = useState<IText>();

  // 처음 마운트 되면 roomList 가져오기
  useEffect(() => {
    const fetchRoomList = async () => {
      try {
        const response = await axios.get('/api/chat/roomList');
        setRoomList(response.data);
      } catch (err) {
        console.log('roomList get', err);
      }
    };
    fetchRoomList();
  }, []);

  // 모달 상황에 따른 행동 (방들어가기)
  useEffect(() => {
    if (isConfirm.isConfirm) {
      if (target?.roomName) {
        setInfo({
          ddukddak: true,
          context: info.context,
          roomInfo: target,
        });
        setIsConfirm({ isConfirm: false });
        setIsOpen(false);
      }
    }
  }, [isConfirm.isConfirm]);

  useEffect(() => {
    if (info.roomInfo?.roomId === target?.roomId) {
      alert('당신이 있는 방이야 이놈아.');
    } else {
      if (info.roomInfo?.roomId) {
        setText({
          title: ModalMessage.CHANGE_ROOM.title,
          subText: ModalMessage.CHANGE_ROOM.subText,
        });
      } else {
        setText({
          title: ModalMessage.ENTER_ROOM.title,
          subText: ModalMessage.ENTER_ROOM.subText,
        });
      }
      setIsOpen(true);
    }
  }, [target?.roomId]);

  // 방 클릭 이벤트 리스너
  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    const t = event.currentTarget.getAttribute('data-custom');
    if (t !== null) {
      setTarget(JSON.parse(t));
    }
  };

  return (
    <div className="flex flex-col border-2 rounded-3xl py-4 px-5 shadow-2xl h-screen max-h-[50vh] xl:min-h-[85vh]">
      <RightBlockHeader text={'전체 뚝딱'} isSearch />
      {isOpen && target ? (
        <Modal title={text?.title} subText={`${target.roomName} ${text?.subText}`} setIsOpen={setIsOpen} />
      ) : null}
      <div className="divide-y-[1px] space-y-4 mt-2 overflow-auto">
        {roomList.map((item, i) => (
          <div
            key={i}
            data-custom={JSON.stringify(item)}
            onClick={onClick}
            className="flex justify-between px-8 py-3 hover:shadow-sm hover:bg-slate-50 cursor-pointer"
          >
            <h2 className="self-center text-lg font-semibold w-3/5">{item.roomName}</h2>
            <div className="flex flex-col justify-center items-end space-y-1">
              <span className=" bg-violet-500 py-1 px-2 rounded-md text-white shadow-md">{item.participantsNum}</span>
              <span className="text-sm border-b-2 shadow-sm border-violet-300">폭파까지 {item.remainingTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
