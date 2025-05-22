import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import RewardsWallet from '../components/RewardsWallet';

const Rewards: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rewards - Persephone's Garden</title>
        <meta name="description" content="Track your rewards and loyalty points at Persephone's Garden." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
            <h1 className="text-2xl font-bold mb-4">Rewards</h1>
            <p className="mb-4 text-gray-600">Track your rewards and redeem them for exclusive benefits at Persephone&#39;s Garden.</p>
            <RewardsWallet />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Rewards;