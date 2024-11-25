import { Menu, X, User2 } from 'lucide-react'; // Add Menu and X icons
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full h-[4rem] flex justify-center items-center bg-[#ffe7cd] shadow-sm shadow-white rounded-sm">
                <div className="w-[90%] lg:w-[80%] h-full flex justify-between items-center">
                    {/* Logo */}
                    <div className="pointer font-bold text-lg sm:text-xl text-red-600">
                        RedConnect
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex h-full items-center space-x-6">
                        <button
                            className="flex items-center space-x-2 h-9 px-4 text-red-600 font-bold hover:text-red-700 transition"
                            onClick={() => navigate("/donar")}
                        >
                            <User2 className="h-6 w-6" />
                            <p>Login</p>
                        </button>
                        <button
                            className="flex items-center space-x-2 h-9 px-4 text-red-600 font-bold hover:text-red-700 transition"
                            onClick={() => navigate("/learnmore")}
                        >
                            <User2 className="h-6 w-6" />
                            <p>How to use</p>
                        </button>
                        <button
                            className="flex items-center space-x-2 h-9 px-4 text-red-600 font-bold hover:text-red-700 transition"
                            onClick={() => navigate("/login")}
                        >
                            <User2 className="h-6 w-6" />
                            <p>Become a RedVolunteer</p>
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        {menuOpen ? (
                            <X
                                className="h-8 w-8 text-red-600 cursor-pointer"
                                onClick={() => setMenuOpen(false)}
                            />
                        ) : (
                            <Menu
                                className="h-8 w-8 text-red-600 cursor-pointer"
                                onClick={() => setMenuOpen(true)}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden w-full bg-[#ffe7cd] shadow-md">
                    <div className="flex flex-col items-center space-y-4 py-4 bg-[#b94743]">
                        <button
                            className="flex items-center space-x-2 font-bold hover:text-red-700 transition"
                            onClick={() => {
                                setMenuOpen(false);
                                navigate("/login");
                            }}
                        >
                            <User2 className="h-6 w-6" />
                            <p>Login</p>
                        </button>
                        <button
                            className="flex items-center space-x-2 font-bold hover:text-red-700 transition"
                            onClick={() => {
                                setMenuOpen(false);
                                navigate("/learnmore");
                            }}
                        >
                            <User2 className="h-6 w-6" />
                            <p>How to use</p>
                        </button>
                        <button
                            className="flex items-center space-x-2 h-9 px-4 font-bold hover:text-red-700 transition"
                            onClick={() => navigate("/login")}
                        >
                            <User2 className="h-6 w-6" />
                            <p>Become a RedVolunteer</p>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
