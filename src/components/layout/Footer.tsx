import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import Logo from '../../assets/img/MNLogo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-construction-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo} alt="Manorath Infra Logo" className="h-20 mb-4" />
            <h3 className="text-2xl font-bold mb-4 font-playfair text-shadow">Manorath Infra</h3>
            <p className="text-gray-300 mb-6 max-w-xs">
              Building tomorrow's infrastructure with innovation, quality, and sustainability at our core.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/manorathinfra?mibextid=ZbWKwL" className="hover:text-[rgb(81,144,210)] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[rgb(81,144,210)] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[rgb(81,144,210)] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/manorathinfra?igsh=MWxyNjloZ295d2h5eg==" className="hover:text-[rgb(81,144,210)] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-[rgb(81,144,210)] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[rgb(81,144,210)] transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-[rgb(81,144,210)] transition-colors">Projects</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-[rgb(81,144,210)] transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[rgb(81,144,210)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[rgb(81,144,210)] mt-1" />
                <span className="text-gray-300">102 first floor, Kanhaiya apartment, Bus stand road,Nathdwara 313301</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[rgb(81,144,210)]" />
                <a href="tel:+919672671173" className="text-gray-300 hover:text-[rgb(81,144,210)] transition-colors">+91 9672671173</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[rgb(81,144,210)]" />
                <a href="mailto:info@grconstruction.com" className="text-gray-300 hover:text-[rgb(81,144,210)] transition-colors">info@manorathinfra.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Manorath Infra. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-[rgb(81,144,210)] text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-[rgb(81,144,210)] text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-construction-yellow text-construction-black rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
