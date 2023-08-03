import JoinedDdukddak from '@/components/joinedDdukddak';
import Layout from '@/components/layout';
import PrivateChatting from '@/components/privateChatting';

export default function Mypage() {
  return (
    <Layout>
      <div className="grid gap-4 py-20 px-8 xl:grid-cols-3 h-screen">
        <JoinedDdukddak />
        <PrivateChatting mypage />
      </div>
    </Layout>
  );
}
