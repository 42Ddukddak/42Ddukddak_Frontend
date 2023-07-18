import Layout from '@/components/layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
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

export default function Home() {
  const route = useRouter();

  useEffect(() => {
    const value = getCookieValue('key');
    if (!value) {
      // route.push('/enter');
    }
  });

  return (
    <Layout logo>
      <div className="grid gap-10 py-24 px-8 xl:grid-cols-3 xl:place-content-center">
        {/* 뚝딱 만들기 or 채팅 방 */}
        {/* <MakeDdukddak /> */}
        <Chatting />
        {/* 전체 채팅 or 전체 뚝딱 */}
        <PublicChatting />
        {/* <WholeDdukddak /> */}
      </div>
    </Layout>
  );
}
