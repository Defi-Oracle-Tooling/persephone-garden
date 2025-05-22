import React from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero text-white flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 font-serif">Step Into the Dream of Persephone’s Garden</h1>
          <p className="text-lg mb-6">Where myth and modernity meet in a sanctuary of scent, sound, and possibility.</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105">Explore the Garden</button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">A Vision Born of Dreams</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Persephone’s Garden is more than a destination—it’s a living legend. From the finest flower to curated experiences, every detail is designed to transport you to a world of luxury, discovery, and trust.
        </p>
      </section>

      {/* Our Offerings Section */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">The Art of Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Lavender Demeter</h3>
            <p className="text-gray-600">A floral symphony that eases the mind.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Hades’ Ember</h3>
            <p className="text-gray-600">A bold concentrate that sets embers of inspiration alight.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Persephone’s Dawn</h3>
            <p className="text-gray-600">A curated cartridge that rises like first light.</p>
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">An Invitation to Lifelong Exploration</h2>
        <div className="max-w-4xl mx-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Tier</th>
                <th className="border border-gray-300 px-4 py-2">Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Demeter</td>
                <td className="border border-gray-300 px-4 py-2">Access to the lounge and its mysteries.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Hades</td>
                <td className="border border-gray-300 px-4 py-2">Exclusive tasting salons and first-look at limited releases.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Persephone</td>
                <td className="border border-gray-300 px-4 py-2">Personal concierge and curated seasonal boxes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Workshops and Events Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Cultivate Knowledge and Experience</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Join our monthly Garden Workshops to learn about mindfulness, crafting topicals, and flavor journeys.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105">View Upcoming Events</button>
      </section>
    </Layout>
  );
}
