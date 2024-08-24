import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterComponent = () => {
    return (
        <footer className="bg-[#1a263a] text-white py-10 mt-[80px] w-full">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-96">
                    <div className="ml-2">
                        <h3 className="text-xl font-bold mb-4">FashionFusion</h3>
                        <p>Explore Our Collections:</p>
                            <ol><li>Casual </li></ol>
                            <ol><li>Formal</li></ol>
                            <ol><li>Outdoor</li></ol>
                            <ol><li>Indoor</li></ol>
                    </div>
                    {/* <div className='flex flex-col  justify-center items-center'>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#home" className="hover:underline">Home</a></li>
                            <li className="mb-2"><a href="#about" className="hover:underline">About Us</a></li>
                            <li className="mb-2"><a href="#services" className="hover:underline">Services</a></li>
                            <li className="mb-2"><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div> */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com" className="text-2xl hover:text-blue-500"><FaFacebookF /></a>
                            <a href="https://www.twitter.com" className="text-2xl hover:text-blue-400"><FaTwitter /></a>
                            <a href="https://www.instagram.com" className="text-2xl hover:text-pink-500"><FaInstagram /></a>
                            <a href="https://www.linkedin.com" className="text-2xl hover:text-blue-700"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                    <p>&copy; 2024 FashionFusion. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;