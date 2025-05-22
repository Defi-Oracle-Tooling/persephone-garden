import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? 'fixed top-0 bg-green-600 shadow-lg' : 'absolute top-0 bg-transparent'
      } p-4 text-white transition-all duration-500 ease-in-out`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="font-bold text-xl">Persephone Garden</a>
        </Link>
        <div className="space-x-6 flex items-center">
          <Link href="/">
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/dashboard">
            <a className="hover:underline">Dashboard</a>
          </Link>
          <Link href="/reservations">
            <a className="hover:underline">Reservations</a>
          </Link>
          <Link href="/rewards">
            <a className="hover:underline">Rewards</a>
          </Link>
          <Link href="/account">
            <a className="hover:underline">Account</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
