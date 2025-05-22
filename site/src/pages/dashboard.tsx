import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';

const LazyMembershipStatus = dynamic(() => import('../components/DashboardWidgets/MembershipStatus'), { ssr: false });
const LazyUpcomingEvents = dynamic(() => import('../components/DashboardWidgets/UpcomingEvents'), { ssr: false });

export default function Dashboard() {
  return (
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
  );
}
