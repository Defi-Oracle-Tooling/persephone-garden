import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import AuthProvider from '../context/AuthContext';
import React, { useEffect } from 'react';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

function MyApp({ Component, pageProps }: AppProps) {
  const ComponentWithProps = Component as React.ComponentType<any>;

  useEffect(() => {
    console.log('Application loaded successfully');
  }, []);

  return (
    <AuthProvider>
      <ComponentWithProps {...pageProps} />
    </AuthProvider>
  );
}

export default appWithTranslation(MyApp);
