import { useRouter } from 'next/router';
import { cls } from '../libs/utils';
import Image from 'next/image';
import logoPic from '../public/Ddukddak_logo.png';

interface LayoutProps {
  logo?: boolean;
  children: React.ReactNode;
}

export default function Layout({ logo, children }: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div>
      <div
        className={cls(
          !logo ? 'justify-center' : '',
          'bg-white text-lg  font-medium fixed text-gray-800 top-8 left-8  flex items-center rounded-full',
        )}
      >
        {logo ? (
          <button onClick={onClick}>
            <Image
              src={logoPic}
              alt="logo"
              placeholder="blur"
              className="w-12 h-12 shadow-xl rounded-full border-2 border-black hover:ring-2 hover:ring-purple-300 hover:ring-offset-2 focus:outline-none"
            />
          </button>
        ) : null}
      </div>
      <div>{children}</div>
    </div>
  );
}
