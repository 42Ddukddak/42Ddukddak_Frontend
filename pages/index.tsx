import Layout from '@/components/layout';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import MakeDdukddak from '@/components/makeDdukddak';
import Chatting from '@/components/chatting';
import PublicChatting from '@/components/publicChatting';
import WholeDdukddak from '@/components/wholeDdukddak';

function getCookieValue(key: string) {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    if (cookie.startsWith(`${key}=`)) {
      return cookie.substring(key.length + 1);
    }
  }
  return null;
}

type IContext = {
  context?: boolean;
  ddukddak?: boolean;
};

type IDdukddakContext = [IContext, React.Dispatch<React.SetStateAction<IContext>>];

export const AppContext = createContext<IDdukddakContext>([{}, () => null]);
export default function Home() {
  const [info, setInfo] = useState<IContext>({ context: true, ddukddak: true });

  const route = useRouter();

  useEffect(() => {
    const value = getCookieValue('key');
    if (!value) {
      // route.push('/enter');
    }
  });

  return (
    <Layout logo>
      <div className="grid gap-4 py-20 px-8 xl:grid-cols-3 h-screen">
        <AppContext.Provider value={[info, setInfo]}>
          {/* 뚝딱 만들기 or 채팅 방 */}
          {info.ddukddak ? <Chatting /> : <MakeDdukddak />}
          {/* 전체 채팅 or 전체 뚝딱 */}
          {info.context ? <PublicChatting /> : <WholeDdukddak />}
        </AppContext.Provider>
      </div>
    </Layout>
  );
}
