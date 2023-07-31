import Layout from '@/components/layout';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import MakeDdukddak from '@/components/makeDdukddak';
import PrivateChatting from '@/components/privateChatting';
import PublicChatting from '@/components/publicChatting';
import WholeDdukddak from '@/components/wholeDdukddak';
import getCookieValue from '@/libs/getCookieValue';
import { IContext } from '@/interface/Context';
import { IModal } from '@/interface/Modal';

type IDdukddakContext = [IContext, React.Dispatch<React.SetStateAction<IContext>>];
type IModalContext = [IModal, React.Dispatch<React.SetStateAction<IModal>>];
export const AppContext = createContext<IDdukddakContext>([{}, () => null]);
export const ModalContext = createContext<IModalContext>([{ isConfirm: false }, () => null]);

export default function Home() {
  const [info, setInfo] = useState<IContext>({});
  const [isConfirm, setIsConfirm] = useState<IModal>({ isConfirm: false });
  const route = useRouter();

  useEffect(() => {
    const value = getCookieValue('intraId');
    if (!value) {
      route.push('/enter');
    }
  });

  return (
    <Layout>
      <div className="grid gap-4 py-20 px-8 xl:grid-cols-3 h-screen">
        <AppContext.Provider value={[info, setInfo]}>
          <ModalContext.Provider value={[isConfirm, setIsConfirm]}>
            {/* 뚝딱 만들기 or 채팅 방 */}
            {info.ddukddak ? <PrivateChatting /> : <MakeDdukddak />}
            {/* 전체 채팅 or 전체 뚝딱 */}
            {info.context ? <PublicChatting /> : <WholeDdukddak />}
          </ModalContext.Provider>
        </AppContext.Provider>
      </div>
    </Layout>
  );
}
