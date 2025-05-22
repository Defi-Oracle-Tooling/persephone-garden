import React from 'react';

const MembershipStatus: React.FC = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Membership Status</h2>
    <p className="text-lg text-text-secondary">Your membership is active until December 31, 2025.</p>
    <button className="btn mt-4">Renew Now</button>
  </div>
);

export default MembershipStatus;
