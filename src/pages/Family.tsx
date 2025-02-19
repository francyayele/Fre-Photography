import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Correct import
import { ArrowRight } from "lucide-react";

const Photography = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-[50vh] relative"
      >
        <div className="absolute inset-0">
  
</div>


        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-8xl font-serif mb-6"
          >
            TIMELESS
            <br />
            MEMORIES
          </motion.h1>

          <div className="flex justify-center">
            <Link to="/contact" className="inline-flex mt-8 relative cursor-pointer group">
              <div className="relative px-6 py-3 bg-black border border-white/30 hover:border-white/70 transition-all duration-300">
                <div className="relative flex items-center justify-center gap-3">
                  <span className="text-base text-white tracking-wide">Book a Session</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-900">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="relative">
        <img
          src="/images/F1.jpeg" // Ensure correct image path
          alt="Gallery 1"
          className="w-full h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <p className="text-white text-lg font-serif">Happiness Captured Forever</p>
        </div>
      </div>

      <div className="relative">
        <img
          src="/images/F2.jpg" // Ensure correct image path
          alt="Gallery 2"
          className="w-full h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <p className="text-white text-lg font-serif">Radiate Pure Joy</p>
        </div>
      </div>

      <div className="relative">
        <img
          src="/images/F3.jpg" // Ensure correct image path
          alt="Gallery 3"
          className="w-full h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <p className="text-white text-lg font-serif">Bonded by Heartbeats</p>
        </div>
      </div>

      <div className="relative">
        <img
          src="/images/F4.jpg" // Ensure correct image path
          alt="Gallery 2"
          className="w-full h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <p className="text-white text-lg font-serif">Smiles That Inspire</p>
        </div>
      </div>

      <div className="relative">
        <img
          src="/images/F5.jpg" // Ensure correct image path
          alt="Gallery 2"
          className="w-full h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <p className="text-white text-lg font-serif">Childhood Wonders Captured</p>
        </div>
      </div>

      <div className="relative">
        <img
          src="/images/F6.jpg" // Ensure correct image path
          alt="Gallery 2"
          className="w-full h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <p className="text-white text-lg font-serif">Innocent Eyes, Endless Wonder</p>
        </div>
      </div>

      <div className="relative">
        <img
          src="/images/F7.jpg" // Ensure correct image path
          alt="Gallery 2"
          className="w-full h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <p className="text-white text-lg font-serif">New Beginnings Captured</p>
        </div>
      </div>

      <div className="relative">
        <img
          src="/images/F8.jpg" // Ensure correct image path
          alt="Gallery 2"
          className="w-full h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <p className="text-white text-lg font-serif">Tiny Toes, Big Dreams</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Photography;
