import { AppProps } from 'next/app';
import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Loading from './loading';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  if (loading) {
    route.push('/loading');
  }

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
      setLoading(true);
    }
  }, []);
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
