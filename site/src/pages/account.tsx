import React from 'react';
import Layout from '../components/Layout';

const Account: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
          <h1 className="text-2xl font-bold mb-4">Account</h1>
          <p className="mb-4 text-gray-600">Manage your account details and preferences here.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Account;