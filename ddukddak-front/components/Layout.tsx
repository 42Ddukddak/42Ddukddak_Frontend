import { useRouter } from 'next/router';
import { cls } from '../libs/utils';

interface LayoutProps {
  canGoBack?: boolean;
  children: React.ReactNode;
}

export default function Layout({ canGoBack, children }: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div>
      <div
        className={cls(
          !canGoBack ? 'justify-center' : '',
          'bg-white w-full max-w-xl text-lg px-10 font-medium py-3 fixed text-gray-800 border-b top-0  flex items-center',
        )}
      >
        {canGoBack ? (
          <button onClick={onClick}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
        ) : null}
      </div>
      <div>{children}</div>
    </div>
  );
}
