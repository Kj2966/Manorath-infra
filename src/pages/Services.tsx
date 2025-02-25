import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Plane as Crane, Factory, HardHat, Ruler, Wrench, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Building2,
      title: 'Infrastructure Development',
      description: 'Comprehensive infrastructure solutions including roads, bridges, and tunnels.',
      image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80',
      details: 'Specializing in large-scale infrastructure projects that connect communities and drive economic growth.',
    },
    {
      icon: Crane,
      title: 'Commercial Construction',
      description: 'Modern commercial spaces designed for efficiency and sustainability.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
      details: 'Creating innovative commercial spaces that blend functionality with contemporary design.',
    },
    {
      icon: Factory,
      title: 'Industrial Projects',
      description: 'State-of-the-art industrial facilities and manufacturing plants.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80',
      details: 'Building advanced industrial facilities that power modern manufacturing and production.',
    },
    {
      icon: HardHat,
      title: 'Project Management',
      description: 'Expert project management ensuring timely and efficient delivery.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
      details: 'Comprehensive project management services that ensure successful project completion.',
    },
    {
      icon: Ruler,
      title: 'Architecture & Design',
      description: 'Innovative architectural solutions for modern construction needs.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
      details: 'Creating stunning architectural designs that push the boundaries of modern construction.',
    },
    {
      icon: Wrench,
      title: 'Renovation & Repairs',
      description: 'Professional renovation services for existing structures.',
      image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80',
      details: 'Expert renovation and repair services that breathe new life into existing structures.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-sm p-4 sm:p-8 rounded-2xl"
            >
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              >
                Expert <span className="text-[rgb(81,144,210)]">Construction</span>
                <br className="hidden sm:block" />Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl"
              >
                Comprehensive construction and infrastructure solutions tailored to your needs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8"
              >
                <motion.a
                  href="#services"
                  className="text-[rgb(81,144,210)] flex items-center gap-2 hover:text-[rgb(81,144,210)]/80 transition-colors"
                  whileHover={{ y: 3 }}
                >
                  Explore our services
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-24 sm:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we deliver exceptional construction services that transform visions into reality.
              Our expertise spans across various domains of construction and development.
            </p>
          </motion.div>

          <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <service.icon className="w-8 h-8 text-[rgb(81,144,210)] mb-2" />
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-4 py-2 bg-[rgb(81,144,210)] text-white text-sm font-semibold rounded-lg hover:bg-[rgb(81,144,210)]/80 transition-all duration-300 flex items-center gap-2"
                  >
                    Learn More
                    <ArrowUpRight className="w-4 h-4 text-[rgb(81,144,210)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2070"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Together?</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8">
                Let's discuss how our expertise can bring your construction projects to life.
                Our team is ready to help you achieve your goals.
              </p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-[rgb(81,144,210)] text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-[rgb(81,144,210)]/80 transition-all duration-300 shadow-lg hover:shadow-[rgb(81,144,210)]/25 flex items-center mx-auto"
            >
              Contact Us Today
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;