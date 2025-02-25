import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Phone, ChevronDown, MapPin } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import Logo from '../../assets/img/MNLogo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 h-24 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center">
            <img 
              src={Logo} 
              alt="Manorath Infra Logo" 
              className="h-20 mr-0"
            />
            <span className={`text-3xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'} font-sans`}>
              Manorath Infra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                <Link 
                  to={link.path}
                  className={`flex items-center space-x-1 group ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } hover:text-amber-500 transition-colors`}
                >
                  <span>{link.title}</span>
                  {link.submenu && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>
                
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="p-1 bg-white rounded-xl shadow-xl border border-gray-100">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.title}
                          to={sublink.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm transition-colors"
                        >
                          {sublink.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className={`p-2 rounded-full transition-colors ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}>
              <Search className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            </button>
            <a
              href="tel:+1234567890"
              className="flex items-center px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen 
              ? <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              : <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white rounded-xl shadow-xl mt-2 overflow-hidden"
            >
              <div className="p-4">
                {navLinks.map((link) => (
                  <div key={link.title}>
                    <Link
                      to={link.path}
                      className="block py-3 text-gray-700 hover:text-amber-500 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                    {link.submenu && (
                      <div className="pl-4 border-l border-gray-200 ml-4 space-y-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.title}
                            to={sublink.path}
                            className="block py-2 text-sm text-gray-600 hover:text-amber-500 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {sublink.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href="tel:+919672671173"
                  className="mt-4 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;