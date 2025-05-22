import React from 'react';
import OrderAheadForm from '../components/OrderAheadForm';

const OrderAhead: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Order Ahead</h1>
        <p className="mb-4 text-gray-600">Plan your visit by ordering ahead. Select your items and pick them up at your convenience.</p>
        <OrderAheadForm />
      </div>
    </div>
  );
};

export default OrderAhead;