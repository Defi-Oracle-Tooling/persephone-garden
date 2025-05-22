import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => (
  <nav className="bg-green-600 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        Persephone Garden
      </Link>
      <div className="space-x-6 flex items-center">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/reservations" className="hover:underline">
          Reservations
        </Link>
        <Link href="/rewards" className="hover:underline">
          Rewards
        </Link>
        <Link href="/account" className="hover:underline">
          Account
        </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
