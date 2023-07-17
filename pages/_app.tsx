import { AppProps } from 'next/app';
import '../styles/globals.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  useEffect(() => {
    const url = new URL(window.location.href);

    const postData = async () => {
      const code = url.searchParams.get('code');
      try {
        await axios
          .post('/api/auth/42login', null, {
            params: { code: code },
          })
          .then((res) => console.log(res));
        route.push('/');
      } catch (error) {
        console.error(error);
      }
    };

    if (url.pathname === '/auth/callback') {
      postData();
    }
  }, []);
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
