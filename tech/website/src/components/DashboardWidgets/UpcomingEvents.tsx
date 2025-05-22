import React from 'react';

const UpcomingEvents: React.FC = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
    <ul className="space-y-2">
      <li className="p-2 bg-gray-100 rounded animate-fadeIn">Yoga Workshop - June 5, 2025</li>
      <li className="p-2 bg-gray-100 rounded animate-fadeIn delay-150">Garden Tour - June 12, 2025</li>
      <li className="p-2 bg-gray-100 rounded animate-fadeIn delay-300">Wine Tasting - June 20, 2025</li>
    </ul>
  </div>
);

export default UpcomingEvents;
