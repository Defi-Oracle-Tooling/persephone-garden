import React from 'react';

const RewardsWallet: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Rewards</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Free Coffee - 10 points</li>
        <li>Discount on Merchandise - 20 points</li>
        <li>Exclusive Event Access - 50 points</li>
      </ul>
      <button
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Redeem Rewards
      </button>
    </div>
  );
};

export default RewardsWallet;