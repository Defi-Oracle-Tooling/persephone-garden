import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white p-6">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h3 className="font-bold text-lg mb-2">About Us</h3>
        <p className="text-sm text-gray-400">
          Persephone Garden is dedicated to providing exceptional services and experiences for our members.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Quick Links</h3>
        <ul className="text-sm text-gray-400 space-y-1">
          <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
          <li><a href="/reservations" className="hover:underline">Reservations</a></li>
          <li><a href="/rewards" className="hover:underline">Rewards</a></li>
          <li><a href="/account" className="hover:underline">Account</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Compliance</h3>
        <ul className="text-sm text-gray-400 space-y-1">
          <li><a href="/legal/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/legal/terms-of-service" className="hover:underline">Terms of Service</a></li>
          <li><a href="/legal/accessibility" className="hover:underline">Accessibility</a></li>
        </ul>
      </div>
    </div>
    <div className="text-center text-sm text-gray-500 mt-4">
      © 2025 Persephone Garden. All rights reserved.
    </div>
  </footer>
);

export default Footer;
