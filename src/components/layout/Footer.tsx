import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-construction-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">GR Construction</h3>
            <p className="text-gray-300 mb-6">
              Building tomorrow's infrastructure with innovation, quality, and sustainability at our core.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-construction-yellow transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-construction-yellow transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-construction-yellow transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-construction-yellow transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-construction-yellow mt-1" />
                <span className="text-gray-300">
                  123 Construction Ave,<br />
                  Business District,<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-construction-yellow" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-construction-yellow" />
                <a href="mailto:info@grconstruction.com" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  info@grconstruction.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-construction-yellow text-white"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-construction-yellow text-construction-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} GR Construction. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-construction-yellow text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-construction-yellow text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-2 bg-construction-yellow text-construction-black rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;