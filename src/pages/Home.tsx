import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Camera, Users, Calendar, Menu, X, Heart, Users2, Building2 } from 'lucide-react';

const sliderImages = [
  {
    src: "images/candy.png",
    title: "PHOTOGRAPHY STUDIO"
  },
  {
    src: "https://images.pexels.com/photos/1091294/pexels-photo-1091294.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "PHOTOGRAPHY STUDIO"
  },
  {
    src: "https://images.pexels.com/photos/16249347/pexels-photo-16249347/free-photo-of-a-man-in-a-sweater-looking-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "PHOTOGRAPHY STUDIO"
  }
];

const features = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Professional Equipment",
    description: "Using top-of-the-line cameras and lenses for the highest quality photos"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Team",
    description: "Experienced photographers who know how to capture your best moments"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Flexible Scheduling",
    description: "Convenient booking options to fit your busy schedule"
  }
];

const services = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Luxury Family Portraits",
    description: "Timeless family portraits that capture your legacy with sophistication and elegance",
    image: "/api/placeholder/600/800",
    category: "Family"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Fine Art Maternity",
    description: "Celebrating the beauty of motherhood through artistic and ethereal photography",
    image: "/api/placeholder/600/800",
    category: "Maternity"
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: "Executive Portraits",
    description: "Distinguished headshots that command presence and reflect professional excellence",
    image: "/api/placeholder/600/800",
    category: "Corporate"
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Corporate Luxury",
    description: "Elevating your brand through sophisticated corporate event photography",
    image: "/api/placeholder/600/800",
    category: "Events"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden flex flex-col md:flex-row pt-16">
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-6 md:p-12">
          <div className="text-center max-w-xl">
            <motion.h3 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.2 }} 
              className="text-xl md:text-2xl mb-4 text-gray-600"
            >
              Fre's Photography
            </motion.h3>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.4 }} 
              className="text-4xl md:text-6xl font-['Playfair_Display'] mb-6 tracking-wider text-gray-900"
            >
              TIMELESS MEMORIES
            </motion.h1>
            <div className="flex justify-center">
              <a href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  className="mt-8 bg-black text-white px-6 py-3 md:px-8 md:py-4 text-lg transition-all duration-300 hover:bg-gray-800 rounded-full flex items-center gap-2 group"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[calc(130vh-6rem)] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide} 
              initial={{ opacity: 0, scale: 1.1 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }} 
              transition={{ duration: 0.7 }} 
              className="absolute inset-0"
            >
              <img 
                src={sliderImages[currentSlide].src} 
                alt={sliderImages[currentSlide].title} 
                className="w-full h-full object-cover object-center"
                style={{ minHeight: '100vh' }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/50"></div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-5 md:bottom-10 right-5 md:right-10 flex gap-3 z-10">
            {sliderImages.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentSlide(index)} 
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] text-gray-900 mb-6">Why Choose Us</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">Experience photography excellence with our dedicated team of professionals</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} className={`p-6 md:p-8 rounded-2xl bg-blue-50 hover:shadow-xl transition-all duration-300`}>                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="text-sm font-semibold text-gray-900">{feature.stats}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Luxurious Version */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-sm uppercase tracking-wider text-gold-400"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mt-2 mb-4"
            >
              Premium Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Capturing life's precious moments with artistic vision and professional excellence
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <img
                    src={index === 0 ? "images/F1.jpeg" : index === 1 ? "images/M3.jpg" :index === 2 ? "images/p5.jpg": "images/H2.jpg"}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                        {React.cloneElement(service.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full py-3 mt-4 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white to-gray-400 px-8 py-4 text-black transition-all duration-300 hover:from-gray-200 hover:to-white">
              <a href="/contact">
                Book a Session
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;