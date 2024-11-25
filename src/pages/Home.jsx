import React from 'react';
import { useNavigate } from 'react-router-dom';
import x from '../assets/images/download.jpeg';
import thankyou from '../assets/images/thankyou.png';
import donate from '../assets/images/donate.png';
import register from '../assets/images/register.png';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-screen bg-white">
            {/* Hero Section */}
            <section className="min-h-screen w-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10 bg-white">
                <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 space-y-4 lg:space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Donate Blood, Save Lives
                    </h1>
                    <p className="text-md lg:text-lg text-gray-700 max-w-lg">
                        Join us in making a difference. Your blood donation can help save someone’s life. Be a hero today!
                    </p>
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                        <button
                            className="bg-red-500 text-white px-6 sm:px-8 py-3 rounded-md hover:bg-red-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full lg:w-auto"
                            onClick={() => navigate("/donar")}
                        >
                            Donate Now
                        </button>
                        <button
                            className="bg-gray-300 text-gray-800 px-6 sm:px-8 py-3 rounded-md hover:bg-gray-400 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105 w-full lg:w-auto"
                            onClick={() => navigate("/request")}
                        >
                            Request Now
                        </button>
                    </div>
                </div>

                <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <img
                        src={x}
                        alt="Blood Donation"
                        className="w-full sm:w-3/4 lg:w-3/4 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="px-6 lg:px-20 py-16 bg-gray-50">
                <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">How It Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="text-center">
                        <img src={register} alt="Register" className="mx-auto w-20 sm:w-24 h-20 sm:h-24 mb-4" />
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">Register</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Sign up online or at your nearest blood donation camp.
                        </p>
                    </div>
                    <div className="text-center">
                        <img src={donate} alt="Donate" className="mx-auto w-20 sm:w-24 h-20 sm:h-24 mb-4" />
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">Donate</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Attend the scheduled appointment and donate blood.
                        </p>
                    </div>
                    <div className="text-center">
                        <img src={thankyou} alt="Thank You" className="mx-auto w-20 sm:w-24 h-20 sm:h-24 mb-4" />
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">Save Lives</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Your blood helps save lives and brings hope to many families.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="px-6 lg:px-20 py-16 bg-white">
                <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">What Our Donors Say</h2>
                <div className="w-full lg:w-3/4 mx-auto">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <p className="text-base sm:text-lg text-gray-700 italic mb-4">
                            "Donating blood was one of the most fulfilling experiences I've ever had.
                            Knowing that I could help save a life gives me a sense of purpose."
                        </p>
                        <div className="text-right">
                            <h4 className="text-lg font-semibold text-gray-900">- Tyler Durden</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="px-6 lg:px-20 flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-center sm:text-left mb-4 sm:mb-0">
                        <h4 className="text-lg font-semibold">Contact Us</h4>
                        <a href="mailto:support@blooddonation.com" className="hover:underline text-gray-300">
                            support@blooddonation.com
                        </a>
                        <p>Phone: +91 9943944049</p>
                    </div>
                    {/* Social Media Buttons */}
                    <div className="flex space-x-4">
                        <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-violet-400 text-white flex items-center justify-center hover:shadow-md">
                            <i className="fab fa-instagram"></i>
                        </button>
                        <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 text-white flex items-center justify-center hover:shadow-md">
                            <i className="fab fa-facebook"></i>
                        </button>
                        <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center hover:shadow-md">
                            <i className="fab fa-twitter"></i>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;