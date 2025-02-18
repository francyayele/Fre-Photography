import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const AboutPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "I'm incredibly pleased with the results. The attention to detail and creativity brought our vision to life in ways we couldn't imagine.",
      author: "Sarah Johnson",
      role: "Wedding Client"
    },
    {
      text: "The photographer captured our special moments perfectly. The attention to detail and professionalism was outstanding!",
      author: "Michael Chen",
      role: "Family Portrait Session"
    },
    {
      text: "An incredible eye for composition and lighting. Our family photos turned out better than we could have imagined.",
      author: "Emma Thompson",
      role: "Corporate Event"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[30vh] bg-gray-100 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/19671/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="Studio background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-7xl font-light tracking-widest mb-4"
            >
              ABOUT
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl font-light tracking-wide"
            >
              Capturing moments, creating memories
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* About Content */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              Meet the Photographer
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I'm passionate about capturing life's most precious moments through the lens of my camera. With over a decade of experience in professional photography, I've developed a unique style that combines artistic vision with technical expertise.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My approach focuses on creating authentic, emotionally resonant images that tell your story. Whether it's a wedding, family portrait, or corporate event, I work closely with clients to understand their vision and bring it to life through carefully crafted photography.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="mt-8 px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
             <a href="/contact"> Book a Session</a>
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] overflow-hidden rounded-2xl"
          >
            <img
              src="Public/images/Aboutus.png"
              alt="Photographer portrait"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-16 text-gray-900">
            Client Testimonials
          </h2>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center px-4 md:px-20 relative"
              >
                <Quote className="w-12 h-12 mx-auto mb-8 text-gray-300" />
                <p className="text-2xl font-light text-gray-800 mb-8 max-w-3xl mx-auto">
                  {testimonials[currentTestimonial].text}
                </p>
                <div className="text-gray-600">
                  <p className="font-medium">{testimonials[currentTestimonial].author}</p>
                  <p className="text-sm">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'w-8 bg-gray-900' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;