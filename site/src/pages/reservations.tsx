import React from 'react';
import ReservationsForm from '../components/ReservationsForm';

const Reservations: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Make a Reservation</h1>
        <p className="mb-4 text-gray-600">Reserve your spot at Persephone's Garden. Fill out the form below to secure your visit.</p>
        <ReservationsForm />
      </div>
    </div>
  );
};

export default Reservations;