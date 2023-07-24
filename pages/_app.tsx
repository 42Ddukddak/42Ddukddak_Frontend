import { AppProps } from 'next/app';
import '../styles/globals.css';
import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Loading from './loading';

export default function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();

  useEffect(() => {
    const url = new URL(window.location.href);

    const postData = async () => {
      const code = url.searchParams.get('code');
      try {
        await axios.post('/api/auth/42login', null, {
          params: { code: code },
        });
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
      <Suspense fallback={<Loading />}>
        <Component {...pageProps} />
      </Suspense>
    </div>
  );
}
