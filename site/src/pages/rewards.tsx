import React from 'react';
import RewardsWallet from '../components/RewardsWallet';

const Rewards: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Rewards</h1>
        <p className="mb-4 text-gray-600">Track your rewards and redeem them for exclusive benefits at Persephone's Garden.</p>
        <RewardsWallet />
      </div>
    </div>
  );
};

export default Rewards;