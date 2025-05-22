import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import AuthProvider from '../context/AuthContext';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const ComponentWithProps = Component as React.ComponentType<any>;
  return (
    <AuthProvider>
      <ComponentWithProps {...pageProps} />
    </AuthProvider>
  );
}

export default appWithTranslation(MyApp);
