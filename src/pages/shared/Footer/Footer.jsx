import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-white">

            <div className="flex flex-col lg:flex-row">
                <div className="bg-slate-700 flex-1 px-8 py-16 text-center">
                    <h3 className="text-2xl font-normal mb-8 tracking-[0.2em]">CONTACT US</h3>
                    <div className="space-y-3 text-gray-300 text-base">
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p className="mt-6">Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>

                <div className="bg-slate-800 flex-1 px-8 py-16 text-center">
                    <h3 className="text-2xl font-normal mb-8 tracking-[0.2em]">Follow US</h3>
                    <p className="text-gray-300 mb-8 text-base">Join us on social media</p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="#"
                            className="text-white hover:text-gray-300 transition-colors duration-200"
                            aria-label="Facebook"
                        >
                            <FaFacebookF size={24} />
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-gray-300 transition-colors duration-200"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-gray-300 transition-colors duration-200"
                            aria-label="Twitter"
                        >
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-slate-900 py-4">
                <div className="text-center">
                    <p className="text-gray-400 text-sm">
                        Copyright © {new Date().getFullYear()} CulinaryCloud. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;