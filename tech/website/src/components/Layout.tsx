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
    <NavBar />
    <main className="container mx-auto px-4 py-8">{children}</main>
    <Footer />
  </>
);

export default Layout;
