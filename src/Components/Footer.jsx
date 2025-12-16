// Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaGlobe } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" text-white py-8 mt-12">
            <div className="container mx-auto px-4 text-center">
                {/* وصف الموقع */}
                <p className="text-sm mb-6">
                    A website for learning the English language in an easy and enjoyable way. Developed by Mahmoud Abdeljalil Mohamed.
                </p>

                {/* أيقونات السوشيال والموقع الشخصي */}
                <div className="flex justify-center gap-6 mb-6 text-2xl">
                    <a href="https://react-portofolio-66d6f.web.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <FaGlobe />
                    </a>
                    <a href="https://www.facebook.com/molotfg" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/molotfg/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/Mahmoud141-oos" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                        <FaGithub />
                    </a>
                </div>

                {/* حقوق النشر */}
                <p className="text-xs text-gray-400">
                    © 2025 Englishawy Club. جميع الحقوق محفوظة.
                </p>
            </div>
        </footer>
    );
};

export default Footer;