import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Photography = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen relative"
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

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="group flex items-center space-x-2 px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors"
          >
            <span><a href="/contact"> Book Now</a></span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-900">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="relative">
        <img
          src="/images/M1.jpg" // Ensure correct image path
          alt="Gallery 1"
          className="w-full h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <p className="text-white text-lg font-serif">Bonding Before Birth</p>
        </div>
      </div>

      <div className="relative">
        <img
          src="/images/M2.jpg" // Ensure correct image path
          alt="Gallery 2"
          className="w-full h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <p className="text-white text-lg font-serif">Glowing with New Life</p>
        </div>
      </div>

      
    </div>
  </div>
</section>

    </div>
  );
};

export default Photography;
