import React from 'react';
import BD from '../assets/images/BD poster.webp';
import {useNavigate } from 'react-router-dom';

const Learnmore = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center py-10 px-4">
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-8">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Why Blood Donation Matters
        </h1>
        <p className="text-gray-700 text-lg">
          Donating blood is a simple, safe, and noble act that saves lives and improves health. Let's pledge to make a difference by donating regularly.
        </p>
      </div>

      {/* Poster Image */}
      <div className="relative w-full max-w-4xl h-auto flex justify-center items-center mb-10">
        <img
          src={BD}
          alt="Blood Donation"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-red-500 mb-6">
          How to Donate
        </h2>
        <ol className="list-decimal space-y-3 text-lg text-gray-600 pl-4">
          <li>Fill out the online form with your details.</li>
          <li>Receive a confirmation email with guidelines.</li>
          <li>Locate the nearest donation center.</li>
          <li>Visit the center for a quick health screening.</li>
          <li>Donate blood in a safe, hygienic environment.</li>
          <li>Get updates on how your blood is saving lives.</li>
        </ol>
      </div>

      <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-red-500 mb-6">
          How to Request for blood
        </h2>
        <ol className="list-decimal space-y-3 text-lg text-gray-600 pl-4">
          <li>Fill out the online form with your details.</li>
          <li>Receive a confirmation email with guidelines.</li>
          <li>Locate the nearest donation center.</li>
          <li>Visit the center for a quick health screening.</li>
          <li>Donate blood in a safe, hygienic environment.</li>
          <li>Get updates on how your blood is saving lives.</li>
        </ol>
      </div>

      {/* Information Section */}
      <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-500 mb-6">
          How Blood Donation Helps
        </h2>
        <ol className="list-decimal space-y-3 text-lg text-gray-600 pl-4">
          <li>Submit a blood request with necessary details.</li>
          <li>The blood bank verifies the availability of blood.</li>
          <li>Blood is prepared for dispatch if available.</li>
          <li>Transport to the hospital or the patient’s location.</li>
          <li>Documentation is completed upon delivery.</li>
        </ol>
        <h2 className="text-2xl font-bold text-red-500 mt-8 mb-6">
          Eligibility Criteria
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-4">
          <li>Healthy individuals aged 18 and above, weighing at least 50 kg.</li>
          <li>Haemoglobin level of at least 12.5.</li>
          <li>Pulse rate between 50 to 100 mm without irregularities.</li>
          <li>Normal blood pressure and body temperature.</li>
        </ul>
      </div>

      {/* Myth-Busting Section */}
      <div className="bg-red-50 w-full max-w-4xl p-8 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold text-red-500 mb-6">
          Myths & Facts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <span className="text-red-500 text-3xl font-bold">✓</span>
            <p className="text-gray-700 text-lg">
              <strong>Myth:</strong> Blood donation makes you weak. <br />
              <strong>Fact:</strong> Your body replenishes the donated blood within days.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-red-500 text-3xl font-bold">✓</span>
            <p className="text-gray-700 text-lg">
              <strong>Myth:</strong> I can contract infections. <br />
              <strong>Fact:</strong> Sterile needles are used, making it completely safe.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-red-500 text-3xl font-bold">✓</span>
            <p className="text-gray-700 text-lg">
              <strong>Myth:</strong> Diabetics cannot donate blood. <br />
              <strong>Fact:</strong> Diabetics can donate if their sugar levels are controlled.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Learnmore;
