import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ReservationsForm from '../components/ReservationsForm';

const Reservations: React.FC = () => {
  return (
    <>
      <Head>
        <title>Reservations - Persephone's Garden</title>
        <meta name="description" content="Book your reservations at Persephone's Garden for an exclusive experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
            <h1 className="text-2xl font-bold mb-4">Make a Reservation</h1>
            <p className="mb-4 text-gray-600">Reserve your spot at Persephone&#39;s Garden. Fill out the form below to secure your visit.</p>
            <ReservationsForm />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Reservations;