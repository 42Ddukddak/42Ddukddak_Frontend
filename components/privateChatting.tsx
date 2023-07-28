import { useContext, useEffect, useRef, useState } from 'react';
import Button from './button';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import useHandleInputMessage from '@/libs/inputMessage';
import { IChatDetail } from '@/interface/ChatDetail';
import getCookieValue from '@/libs/getCookieValue';
import { cls } from '@/libs/utils';
import { formatTime } from '@/libs/formatTime';
import { AppContext, ModalContext } from '@/pages';
import axios from 'axios';
import Modal from './modal';
import { ModalMessage } from '@/const/modalMessage';
import { Message } from '@/const/message';

interface IMypageProps {
  mypage?: boolean;
}

interface IChangeValues {
  remainingTime?: number;
  participantsNum?: number;
}

export default function PrivateChatting({ mypage }: IMypageProps) {
  const client = useRef<CompatClient>();
  const [chatMessage, setChatMessage] = useState<IChatDetail>();
  const [chatMessageList, setChatMessageList] = useState<IChatDetail[]>([]);
  const { inputMessage, handleInputMessage, handleDeleteInputMessage } = useHandleInputMessage();
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [info, setInfo] = useContext(AppContext);
  const intraId = getCookieValue('intraId');
  const [changeValues, setChangeValues] = useState<IChangeValues>();
  const [roomIsGone, setRoomIsGone] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isConform, setIsConform] = useContext(ModalContext);
  let [title, subText]: string[] = ['', ''];
  let type: string = '';

  // 새로운 채팅 메세지 도착시 포커스 맨 밑으로
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessageList]);

  // 채팅 메세지가 도착하면 변동값 (방인원, 방 남은 시간) 새로고침
  useEffect(() => {
    if (chatMessage) {
      setChatMessageList([...chatMessageList, chatMessage]);
      setChangeValues({
        remainingTime: chatMessage.remainingTime,
        participantsNum: chatMessage.participantsNum,
      });
    }
  }, [chatMessage]);

  // 새로 들어온 사람 기존 방 채팅 내역 가져오기
  const loadChattingMessage = async () => {
    try {
      const response = await axios.get(`/api/chat/private/${info.roomInfo?.roomId}`);
      setChatMessageList(response.data);
    } catch (err) {
      console.log('private chatting get', err);
    }
  };

  // 방에 처음 들어오면 소켓연결, 채팅 내역가져오기
  useEffect(() => {
    if (info.roomInfo?.roomId) {
      connectHandler(info.roomInfo?.roomId);
      loadChattingMessage();
    }
  }, [info.roomInfo]);

  // 방장이 방을 떠났을 때 폭파
  useEffect(() => {
    if (roomIsGone) {
      alert(Message.HOSTLEAVE);
      setInfo({
        ddukddak: !info.ddukddak,
        context: info.context,
        roomInfo: undefined,
      });
    }
  }, [roomIsGone]);

  // modal 반응 함수 (방장이 방떠남, 예약확정) @@@@
  useEffect(() => {
    if (isConform.isConform) {
      if (type === 'hostLeave') {
        // @@@@ 방장 떠났을 때
        async () => {
          try {
            await axios
              .post(`/api/chat/private/${info.roomInfo?.roomId}/leave`, `${info.roomInfo?.roomId}`)
              .then((res) =>
                res.status === 200
                  ? setInfo({
                      ddukddak: !info.ddukddak,
                      context: info.context,
                      roomInfo: undefined,
                    })
                  : alert('내보내기 실패했습니다.'),
              )
              .then(() => {
                setIsConform({ isConform: false });
                setIsOpen(false);
              });
          } catch (err) {
            console.log(err);
          }
        };
      } else if (type === 'reservation') {
        // @@@@ 예약 확정
        async () => {
          try {
            await axios.post(`/api/reserved/${info.roomInfo?.roomId}`, info.roomInfo).then((res) => {
              res.status === 200 ? alert(Message.SUCCESS_RESERVATION) : alert(Message.FAILED_RESERVATION);
            });
          } catch (err) {
            console.log(err);
          }
        };
      }
    }
  }, [isConform.isConform]);

  // 'leave' button 클릭 이벤트
  const onLeave = async () => {
    if (info.roomInfo?.login === intraId) {
      [(title = ModalMessage.HOSTLEAVE.title), (subText = ModalMessage.HOSTLEAVE.subText)];
      type = 'hostLeave';
      setIsOpen(true);
    } else {
      setInfo({
        ddukddak: !info.ddukddak,
        context: info.context,
        roomInfo: undefined,
      });
    }
  };

  // 채팅 메시지 보내기
  const sendHandler = () => {
    if (inputMessage) {
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
    }
  };

  // 서버와 소켓 연결하기
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
              if (message.body === '"OK"') {
                setRoomIsGone(true);
                console.log('방이 사라졌습니다.');
              }
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

  // 전달 받은 메세지 뿌려줄 박스
  const msgBox = chatMessageList.map((item, idx) => (
    <div key={idx} className="">
      <div
        className={cls(item.sender === intraId ? '' : 'flex-row-reverse', 'flex flex-col justify-end items-end pr-10')}
      >
        <div className={cls(item.sender === intraId ? '' : 'flex-row-reverse', 'flex justify-end items-end')}>
          <span className="text-sm text-gray-600 font-light mr-2">{formatTime(item.time)} </span>
          <div className="px-2 py-2  border border-gray-300 rounded-xl bg-violet-300 text-white">
            <p>{item.message}</p>
          </div>
        </div>
        <span className="text-xs text-gray-600 mr-1">신고</span>
      </div>
    </div>
  ));

  // 예약 확정
  const onReservation = () => {
    type = 'reservation';
    [
      (title = ModalMessage.RESERVATION.title),
      (subText = `${info.roomInfo?.roomName}  ${ModalMessage.RESERVATION.subText}`),
    ];
    setIsOpen(true);
  };

  return (
    <div className="xl:col-span-2 flex flex-col justify-between border-2 rounded-3xl shadow-xl px-5 py-4 space-y-2 h-screen max-h-[50vh] xl:min-h-[85vh] bg-indigo-300">
      {isOpen ? <Modal title={title} subText={subText} setIsOpen={setIsOpen} /> : null}
      {/* 상단 바 */}
      <div className="border rounded-full bg-white shadow-md flex justify-between items-center">
        <div className="flex flex-col pl-5">
          <div className="flex space-x-2">
            <h3 className="text-lg text-gray-800 font-bold">{info.roomInfo?.roomName}</h3>
            <div className="flex self-center space-x-1 justify-center items-center border rounded-full px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <span className="text-gray-500 text-sm self-center">
                {changeValues?.participantsNum || info.roomInfo?.participantsNum}
              </span>
            </div>
          </div>
          <span className="text-gray-400 text-sm">
            방 폭파까지 {changeValues?.remainingTime || info.roomInfo?.remainingTime}분 남았습니다.
          </span>
        </div>
        {mypage ? null : (
          <div className=" font-bold flex justify-center items-center space-x-2 mr-2">
            {info.roomInfo?.login === intraId ? (
              <div className="flex justify-center items-center space-x-2">
                <button onClick={onReservation} type="button" className=" hover:text-violet-500 transition-colors">
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
