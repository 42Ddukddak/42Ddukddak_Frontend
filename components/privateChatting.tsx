import { useContext, useEffect, useRef, useState } from 'react';
import Button from './button';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import useHandleInputMessage from '@/libs/inputMessage';
import { IChatDetail } from '@/interface/ChatDetail';
import getCookieValue from '@/libs/getCookieValue';
import { cls } from '@/libs/utils';
import { formatTime } from '@/libs/formatTime';
import { AppContext } from '@/pages';
import axios from 'axios';

interface MypageProps {
  mypage?: boolean;
}
export default function PrivateChatting({ mypage }: MypageProps) {
  const client = useRef<CompatClient>();
  const [chatMessage, setChatMessage] = useState<IChatDetail>();
  const [chatMessageList, setChatMessageList] = useState<IChatDetail[]>([]);
  const { inputMessage, handleInputMessage, handleDeleteInputMessage } = useHandleInputMessage();
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [info, setInfo] = useContext(AppContext);
  const intraId = getCookieValue('intraId');

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessageList]);

  useEffect(() => {
    if (chatMessage) {
      setChatMessageList([...chatMessageList, chatMessage]);
    }
  }, [chatMessage]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/private/${info.roomInfo?.roomId}`);
        console.log('chatting data : ', response);
      } catch (err) {
        console.log('private chatting get', err);
      }
    };
    fetchData();
  });

  useEffect(() => {
    if (info.roomInfo?.roomId) {
      connectHandler(info.roomInfo?.roomId);
    }
  }, [info.roomInfo]);

  const onLeave = () => {
    setInfo({
      ddukddak: !info.ddukddak,
      context: info.context,
      roomInfo: undefined,
    });
  };

  const msgBox = chatMessageList.map((item, idx) => (
    <div
      key={idx}
      className={cls(
        item.sender === intraId ? 'flex-row-reverse' : '',
        'flex items-start text-gray-800 space-x-2 text-sm',
      )}
    >
      <div className="pr-10">
        <div className="px-2 py-2  border border-gray-300 rounded-xl bg-violet-300 text-white">
          <p>{item.message}</p>
        </div>
        <div className="flex justify-between px-2 text-xs text-gray-600">
          <span>{formatTime(item.time)}</span>
          <span>신고</span>
        </div>
      </div>
    </div>
  ));

  const sendHandler = () => {
    try {
      client.current?.send(
        '/pub/chat/message/private',
        {},
        JSON.stringify({
          roomId: info.roomInfo?.roomId,
          sender: intraId,
          message: inputMessage,
        }),
      );
    } catch (error) {
      console.log('send', error);
    }
    handleDeleteInputMessage();
  };

  const connectHandler = (id: number) => {
    client.current = Stomp.over(() => {
      try {
        const sock = new SockJS('http://localhost/stomp/chat');
        return sock;
      } catch (error) {
        return console.log('SockJS', error);
      }
    });
    setChatMessageList([]);
    client.current.connect(
      {
        // 여기에서 유효성 검증을 위해 header를 넣어줄 수 있음.
        // ex)
        // Authorization: token,
      },
      () => {
        try {
          client.current?.subscribe(
            `/sub/chat/room/${id}`,
            (message) => {
              setChatMessage(JSON.parse(message.body));
            },
            {
              // 여기에도 유효성 검증을 위한 header 넣어 줄 수 있음
            },
          );
        } catch (error) {
          return console.log('sub', error);
        }
      },
    );
  };
  return (
    <div className="xl:col-span-2 flex flex-col justify-between border-2 rounded-3xl shadow-xl px-5 py-4 space-y-2 h-screen max-h-[50vh] xl:min-h-[85vh] bg-indigo-300">
      {/* 상단 바 */}
      <div className="border rounded-full bg-white shadow-md flex justify-between items-center">
        <div className="flex flex-col pl-5">
          <h3 className=" text-lg text-gray-800 font-bold">{info.roomInfo?.roomName}</h3>
          {mypage ? null : (
            <span className="text-gray-400 text-sm">방 폭파까지 {info.roomInfo?.remainingTime}분 남았습니다.</span>
          )}
        </div>
        {mypage ? null : (
          <div className=" font-bold flex justify-center items-center space-x-2 mr-2">
            {info.roomInfo?.login === intraId ? (
              <div className="flex justify-center items-center space-x-2">
                <button type="button" className=" hover:text-violet-500 transition-colors">
                  뚝딱뚝딱
                </button>
                <div className="w-[2px] h-6 bg-black" />
              </div>
            ) : null}
            <button onClick={onLeave} type="button" className="hover:text-violet-500 transition-colors">
              Leave
            </button>
          </div>
        )}
      </div>
      {/* 채팅 내용 */}
      <div className="space-y-4 flex-1 py-4 overflow-auto xl:min-h-[69vh] max-h-[50vh]">
        {msgBox}
        {/* <div className="flex items-start text-gray-800 space-x-2 text-sm">
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
        </div> */}
        <div ref={messageEndRef}></div>
      </div>
      {/* input 박스 */}
      {mypage ? null : (
        <div className="">
          <div className="flex relative">
            <input
              type="text"
              placeholder="Message"
              required
              value={inputMessage}
              onChange={handleInputMessage}
              onKeyDown={(ev) => {
                if (ev.nativeEvent.isComposing) {
                } else if (!ev.nativeEvent.isComposing && ev.key === 'Enter') {
                  sendHandler();
                }
              }}
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
                    onClick={sendHandler}
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
          </div>
        </div>
      )}
    </div>
  );
}
