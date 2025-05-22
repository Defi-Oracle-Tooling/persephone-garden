import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Head from 'next/head';

const LazyMembershipStatus = dynamic(() => import('../components/DashboardWidgets/MembershipStatus'), { ssr: false });
const LazyUpcomingEvents = dynamic(() => import('../components/DashboardWidgets/UpcomingEvents'), { ssr: false });

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - Persephone's Garden</title>
        <meta name="description" content="Access your member dashboard to manage reservations, rewards, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <section className="space-y-6">
          <h1 className="text-4xl font-extrabold text-center animate-fadeIn">
            Member Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg animate-slideUp">
              <LazyUpcomingEvents />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg animate-slideUp">
              <LazyMembershipStatus />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
