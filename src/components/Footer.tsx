import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa"; // Import TikTok icon from react-icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 by Fre's Photography. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.facebook.com/people/Fres-Photography/100064159834085/" className="hover:text-gray-300 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/fre__photography/?hl=en" className="hover:text-gray-300 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@your_tiktok_username" className="hover:text-gray-300 transition-colors">
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
