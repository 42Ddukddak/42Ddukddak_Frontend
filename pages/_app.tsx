import { AppProps } from 'next/app';
import '../styles/globals.css';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const url = new URL(window.location.href);

    const postData = async () => {
      const code = url.searchParams.get('code');
      try {
        const response = await axios.post('api/auth/42login', { data: code });
        console.log(response.data);
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
