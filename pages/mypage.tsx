import JoinedDdukddak from '@/components/joinedDdukddak';
import Layout from '@/components/layout';
import PrivateChatting from '@/components/privateChatting';
import { IResponse } from '@/interface/Context';
import { createContext, useState } from 'react';

type IContents = [IResponse | null, React.Dispatch<React.SetStateAction<IResponse>>];

export const AppContents = createContext<IContents>([null, () => null]);
export default function Mypage() {
  const [contents, setContexts] = useState<IContents>([null, () => null]);

  return (
    <Layout>
      <div className="grid gap-4 py-20 px-8 xl:grid-cols-3 h-screen">
        <AppContents.Provider value={[contents, setContexts]}>
          <JoinedDdukddak />
          {contents ? <PrivateChatting mypage /> : null}
        </AppContents.Provider>
      </div>
    </Layout>
  );
}
