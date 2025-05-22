import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => (
  <nav className="bg-green-600 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/">
        <a className="font-bold text-xl">Persephone Garden</a>
      </Link>
      <div className="space-x-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
        <Link href="/reservations">
          <a>Reservations</a>
        </Link>
        <Link href="/rewards">
          <a>Rewards</a>
        </Link>
        <Link href="/account">
          <a>Account</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
