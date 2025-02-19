import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu as MenuIcon, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const portfolioCategories = [
  { title: 'Family', description: 'Capturing lifes precious moments', path: '/portfolio/family' },
  { title: 'Maternity', description: 'Beautiful beginnings', path: '/portfolio/maternity' },
  { title: 'Headshot', description: 'Professional portraits', path: '/portfolio/headshot' },
  { title: 'Corporate', description: 'Business and events', path: '/portfolio/Corporate' }
];

const Navbar = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (path: string) => {
    setIsPortfolioOpen(false);
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed w-full z-50"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[2px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-3xl text-white font-light tracking-wider"
          >
            FRE
            <span className="text-xs align-top ml-1">PHOTOGRAPHY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {/* Portfolio Trigger */}
            <div
              className="relative group"
              onMouseEnter={() => setIsPortfolioOpen(true)}
              onMouseLeave={() => setIsPortfolioOpen(false)}
            >
              <button className="text-white/90 hover:text-white text-sm tracking-widest uppercase flex items-center gap-2">
                Portfolio
                <motion.div
                  animate={{ rotate: isPortfolioOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown size={14} />
                </motion.div>
              </button>

              <AnimatePresence>
                {isPortfolioOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-black/90 backdrop-blur-md rounded-lg overflow-hidden border border-white/10"
                  >
                    <div className="p-2">
                      {portfolioCategories.map((category) => (
                        <button
                          key={category.title}
                          onClick={() => handleCategoryClick(category.path)}
                          className="w-full text-left p-4 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                        >
                          <div className="text-sm tracking-wide">{category.title}</div>
                          <div className="text-xs text-white/60 mt-1">{category.description}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/aboutus" 
              className="text-white/90 hover:text-white text-sm tracking-widest uppercase"
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className="text-white/90 hover:text-white text-sm tracking-widest uppercase"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon size={24} className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute inset-x-0 top-full bg-black/95 backdrop-blur-md border-t border-white/10"
            >
              <div className="p-6 space-y-6">
                <div className="space-y-6">
                  <button 
                    onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                    className="text-white/90 text-sm tracking-widest uppercase flex items-center gap-2"
                  >
                    Portfolio
                    <motion.div
                      animate={{ rotate: isPortfolioOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isPortfolioOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-4"
                      >
                        {portfolioCategories.map((category) => (
                          <button
                            key={category.title}
                            onClick={() => handleCategoryClick(category.path)}
                            className="w-full text-left text-white/80 hover:text-white transition-colors"
                          >
                            <div className="text-sm tracking-wide">{category.title}</div>
                            <div className="text-xs text-white/60 mt-1">{category.description}</div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  to="/aboutus" 
                  className="block text-white/90 hover:text-white text-sm tracking-widest uppercase"
                >
                  About
                </Link>

                <Link 
                  to="/contact" 
                  className="block text-white/90 hover:text-white text-sm tracking-widest uppercase"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;