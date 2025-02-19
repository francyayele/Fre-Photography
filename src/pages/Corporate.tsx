import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Correct import
import { ArrowRight } from "lucide-react"; // Keep ArrowRight from lucide-react

const Photography = () => {
  return (
    <div className="min-h-[10vh] bg-black text-white">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-[50vh] relative flex items-center justify-center text-center"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
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

          {/* Button */}
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
            {/* Gallery Images */}
            {["/images/candy.jpg", "/images/Aboutus.png", "/images/candy.jpg"].map((src, index) => (
              <div key={index} className="relative">
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-lg font-serif">View Gallery</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photography;
