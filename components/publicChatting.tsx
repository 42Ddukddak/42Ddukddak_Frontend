import { ChangeEvent, useEffect, useState, KeyboardEvent, useRef, useCallback } from 'react';
import Button from './button';
import RightBlockHeader from './rightBlockHeader';

export default function PublicChatting() {
  const [msg, setMsg] = useState('');
  const [chatt, setChatt] = useState([]);
  const [chkLog, setChkLog] = useState(false);
  const [socketData, setSocketData] = useState();

  const ws = useRef(null); //webSocket을 담는 변수,
  //컴포넌트가 변경될 때 객체가 유지되어야하므로 'ref'로 저장

  const msgBox = chatt.map((item, idx) => (
    <div key={idx}>
      [ {item.date} ]<br />
      <span>{item.msg}</span>
    </div>
  ));

  useEffect(() => {
    webSocketLogin();
  });

  useEffect(() => {
    if (socketData !== undefined) {
      const tempData = chatt.concat(socketData);
      console.log(tempData);
      setChatt(tempData);
    }
  }, [socketData]);

  //webSocket
  //webSocket
  //webSocket
  //webSocket
  //webSocket
  //webSocket
  const onText = (event) => {
    setMsg(event.target.value);
  };

  const webSocketLogin = useCallback(() => {
    ws.current = new WebSocket('ws://localhost:8080');

    ws.current.onmessage = (message) => {
      const dataSet = JSON.parse(message.data);
      setSocketData(dataSet);
    };
  }, []);

  const send = useCallback(() => {
    if (msg !== '') {
      const data = {
        msg,
        date: new Date().toLocaleString(),
      }; //전송 데이터(JSON)

      const temp = JSON.stringify(data);

      if (ws.current.readyState === 0) {
        //readyState는 웹 소켓 연결 상태를 나타냄
        ws.current.onopen = () => {
          //webSocket이 맺어지고 난 후, 실행
          console.log(ws.current.readyState);
          ws.current.send(temp);
        };
      } else {
        ws.current.send(temp);
      }
    } else {
      alert('메세지를 입력하세요.');
      return;
    }
    setMsg('');
  }, [msg]);
  // useEffect(() => {
  //   socket.on('message', (data) => {
  //     setReceivedMessage(data);
  //     console.log('Recevied message: ', data);
  //   });
  // }, []);

  // const sendMessage = () => {
  //   // socket.emit('message', message);
  //   setMessage('');
  // };

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setMessage(event.target.value);
  // };

  // const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === 'Enter') {
  //     sendMessage();
  //   }
  // };

  return (
    <div className="flex flex-col border-2 rounded-xl py-4 px-5 shadow-2xl max-h-[50vh] xl:min-h-[80vh]">
      <RightBlockHeader text={'전채 채팅'} />
      {/* 채팅내용  */}
      <div className="space-y-4 py-4 overflow-auto max-h-[44vh] xl:max-h-[70vh]">
        {msgBox}
        {/* <div className="flex items-start text-gray-800 space-x-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mt-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          <div className=" w-4/5 px-2 py-2  border border-gray-300 rounded-md">
            <p>
              Hi how much are you selling them for?how much are you selling them for?how much are you selling them
              for?how much are you selling them for?
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start text-gray-800 space-x-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mt-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>

          <div className=" px-2 py-2  border border-gray-300 rounded-md">
            <p>안녕하세요ㅋㅋ 시시발발로로마마</p>
          </div>
        </div> */}
      </div>
      {/* 인풋 박스  */}
      <div className="">
        <div className="flex relative">
          <input
            type="text"
            placeholder="안녕하세요^^ 인사해볼까요?"
            required
            value={msg}
            onChange={onText}
            onKeyDown={(ev) => {
              if (ev.key === 'Enter') {
                send();
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
                  onClick={send}
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
    </div>
  );
}
