import Layout from '@/components/layout';
import Button from '@/components/button';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MakeDdukddak from '@/components/makeDdukddak';
import Chatting from '@/components/chatting';
import PublicChatting from '@/components/publicChatting';
import WholeDdukddak from '@/components/wholeDdukddak';

interface MyProps {
  session: any; // 세션 정보에 따라 타입을 수정해야 합니다.
}

export default function Home() {
  const route = useRouter();
  // useEffect(() => {
  //   const session = typeof window !== 'undefined' ? sessionStorage.getItem('name') : null;
  //   // const cookies = getCookie(route.req, 'cookieName');
  //   console.log(session);
  //   if (!session) {
  //     route.push('/enter');
  //   }
  // }, [session]);

  return (
    <Layout logo>
      <div className="grid gap-10 py-24 px-8 xl:grid-cols-3 xl:place-content-center">
        {/* 뚝딱 만들기 or 채팅 방 */}
        {/* <MakeDdukddak /> */}
        <Chatting />
        {/* 전체 채팅 or 전체 뚝딱 */}
        {/* <PublicChatting /> */}
        <WholeDdukddak />
      </div>
    </Layout>
  );
}
