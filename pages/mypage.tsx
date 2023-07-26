import JoinedDdukddak from '@/components/joinedDdukddak';
import Layout from '@/components/layout';
import PrivateChatting from '@/components/privateChatting';
import { createContext, useState } from 'react';

type Contents = { contents?: Object };
type IContents = [Contents, React.Dispatch<React.SetStateAction<Contents>>];

export const AppContents = createContext<IContents>([{}, () => null]);
export default function Mypage() {
  const [contents, setContexts] = useState<Contents>({ contents: 'aa' });

  return (
    <Layout logo>
      <div className="grid gap-4 py-20 px-8 xl:grid-cols-3 h-screen">
        <AppContents.Provider value={[contents, setContexts]}>
          <JoinedDdukddak />
          {contents ? <PrivateChatting mypage /> : null}
        </AppContents.Provider>
      </div>
    </Layout>
  );
}