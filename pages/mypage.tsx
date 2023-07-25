import JoinedDdukddak from '@/components/joinedDdukddak';
import Layout from '@/components/layout';
import PrivateChatting from '@/components/privateChatting';

export default function Mypage() {
  return (
    <Layout logo>
      <JoinedDdukddak />
      <PrivateChatting mypage />
    </Layout>
  );
}
