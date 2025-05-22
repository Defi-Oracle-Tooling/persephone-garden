import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps { children: React.ReactNode; }

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>Persephone Garden</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-12 animate-fadeIn">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;
