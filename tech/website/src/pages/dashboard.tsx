import React from 'react';
import Layout from '../components/Layout';
import UpcomingEvents from '../components/DashboardWidgets/UpcomingEvents';
import MembershipStatus from '../components/DashboardWidgets/MembershipStatus';

export default function Dashboard() {
  return (
    <Layout>
      <section className="space-y-6">
        <h1 className="text-4xl font-extrabold text-center animate-fadeIn">
          Member Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg animate-slideUp">
            <UpcomingEvents />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg animate-slideUp">
            <MembershipStatus />
          </div>
        </div>
      </section>
    </Layout>
  );
}
