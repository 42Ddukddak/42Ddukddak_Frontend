import { AppProps } from 'next/app';
import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Router, useRouter } from 'next/router';
import Loading from '@/components/loading';

export default function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);

    const postData = async () => {
      const code = url.searchParams.get('code');
      try {
        await axios
          .post('/api/auth/42login', null, {
            params: code,
          })
          .then(() => setLoading(false))
          .then(() => route.push('/'));
      } catch (error) {
        // console.error(error);
      }
    };

    if (url.pathname === '/auth/callback') {
      postData();
      setLoading(true);
    }
  });
  return loading ? <Loading /> : <Component pageProps={pageProps} />;
}
