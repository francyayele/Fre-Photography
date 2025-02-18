import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl font-['Playfair_Display'] text-center mb-16"
        >
          GET IN TOUCH
        </motion.h1>

        <div className="bg-white text-black p-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-lg mb-8">
                For inquiries about sessions and pricing fill out the form and someone will get back to you.
              </p>
              
              <div className="space-y-4">
                <p>Hardin County,KY | Elizabethtown,KY | Radcliff,KY | Vine Grov,KY | Louisville,KY</p>
               

                <p className="mt-8">fresphotography@gmail.com</p>
                <p>Tel: +1 270-319-3422</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First name *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last name *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows={6}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
