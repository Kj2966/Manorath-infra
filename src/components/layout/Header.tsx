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
    <header className={`fixed w-full z-50 transition-all duration-300 h-20 sm:h-24 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src={Logo} 
              alt="Manorath Infra Logo" 
              className="h-16 sm:h-20 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
                ${isScrolled ? 'text-gray-900' : 'text-white'} 
                font-['Cormorant_Garamond'] tracking-wide leading-tight`}
              >
                Manorath
              </span>
              <span className={`text-sm sm:text-base md:text-lg lg:text-xl 
                ${isScrolled ? 'text-[rgb(81,144,210)]' : 'text-amber-400'} 
                font-semibold font-['Montserrat'] tracking-wider uppercase`}
              >
                Infra
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                <Link 
                  to={link.path}
                  className={`flex items-center space-x-1 group ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } text-base font-['Montserrat'] font-medium hover:text-[rgb(81,144,210)] transition-colors`}
                >
                  <span>{link.title}</span>
                  {link.submenu && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>
                
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="p-1.5 bg-white rounded-xl shadow-xl border border-gray-100">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.title}
                          to={sublink.path}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[rgb(81,144,210)] rounded-lg text-sm font-medium transition-colors"
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

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className={`p-2.5 rounded-full transition-colors ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}>
              <Search className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            </button>
            <a
              href="tel:+1234567890"
              className="flex items-center px-6 py-2.5 bg-[rgb(81,144,210)] text-white rounded-lg hover:bg-[rgb(61,124,190)] transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 hover:bg-white/10 rounded-lg transition-colors"
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
              className="lg:hidden fixed left-4 right-4 top-20 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="p-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.title} className="border-b border-gray-100 last:border-none">
                    <Link
                      to={link.path}
                      className="block py-3.5 text-gray-700 hover:text-[rgb(81,144,210)] transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                    {link.submenu && (
                      <div className="pl-4 border-l-2 border-[rgb(81,144,210)]/20 ml-4 mb-3 space-y-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.title}
                            to={sublink.path}
                            className="block py-2.5 text-sm text-gray-600 hover:text-[rgb(81,144,210)] transition-colors"
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
                  className="mt-4 flex items-center justify-center px-6 py-3.5 bg-[rgb(81,144,210)] text-white rounded-lg font-medium"
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