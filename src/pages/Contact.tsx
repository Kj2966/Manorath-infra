import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Building } from 'lucide-react';
import toast from 'react-hot-toast';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    company: '',
    projectType: 'residential',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! Our team will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      company: '',
      projectType: 'residential',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = {
    address: {
      main: "123 Construction Plaza, Financial District",
      city: "New York, NY 10004",
      country: "United States"
    },
    phone: {
      main: "+1 (212) 555-0123",
      toll_free: "1-800-CONSTRUCT"
    },
    email: {
      general: "info@grconstruction.com",
      support: "support@grconstruction.com"
    },
    hours: {
      weekday: "Monday - Friday: 8:00 AM - 6:00 PM",
      weekend: "Saturday: 9:00 AM - 2:00 PM",
      sunday: "Sunday: Closed"
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Build Your Vision Together</h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Ready to start your next construction project? Our team of experts is here to help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${contactInfo.phone.main}`}
                  className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-400 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <a 
                  href="#contact-form"
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 text-lg">We're here to help you with your construction needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-emerald-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Visit Our Office</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="group-hover:text-emerald-400 transition-colors">{contactInfo.address.main}</p>
                  <p>{contactInfo.address.city}</p>
                  <p>{contactInfo.address.country}</p>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-400 transition-colors"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Get Directions
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-xl p-8 transform transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Call Us</h3>
                <div className="space-y-2 text-gray-100">
                  <p className="group-hover:text-white transition-colors">
                    Main: {contactInfo.phone.main}
                  </p>
                  <p>Toll Free: {contactInfo.phone.toll_free}</p>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <a
                    href={`tel:${contactInfo.phone.main}`}
                    className="inline-flex items-center px-4 py-2 bg-white text-emerald-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-emerald-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="group-hover:text-emerald-400 transition-colors">
                    {contactInfo.hours.weekday}
                  </p>
                  <p>{contactInfo.hours.weekend}</p>
                  <p>{contactInfo.hours.sunday}</p>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <button
                    className="inline-flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-400 transition-colors"
                  >
                    <Clock className="w-5 h-5 mr-2" />
                    View Schedule
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.01369674847454!3d40.71774937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sFinancial%20District%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1658849865428!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[500px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-600">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="industrial">Industrial Construction</option>
                    <option value="infrastructure">Infrastructure Development</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Please describe your project requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-400 transition-colors flex items-center justify-center text-lg"
              >
                <Send className="w-6 h-6 mr-2" />
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 