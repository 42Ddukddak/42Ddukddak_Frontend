import { AppProps } from 'next/app';
import '../styles/globals.css';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
