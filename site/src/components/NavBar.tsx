import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => (
  <nav className="bg-green-600 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" legacyBehavior>
        <a className="font-bold text-xl">Persephone Garden</a>
      </Link>
      <div className="space-x-6 flex items-center">
        <Link href="/" legacyBehavior>
          <a className="hover:underline">Home</a>
        </Link>
        <Link href="/dashboard" legacyBehavior>
          <a className="hover:underline">Dashboard</a>
        </Link>
        <Link href="/reservations" legacyBehavior>
          <a className="hover:underline">Reservations</a>
        </Link>
        <Link href="/rewards" legacyBehavior>
          <a className="hover:underline">Rewards</a>
        </Link>
        <Link href="/account" legacyBehavior>
          <a className="hover:underline">Account</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
