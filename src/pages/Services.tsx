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
      title: 'Civil Work',
      description: 'Comprehensive civil engineering and construction solutions',
      image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80',
    },
    {
      icon: Ruler,
      title: 'Designing',
      description: 'Professional design and planning services',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
      subServices: [
        '2D Planning',
        '3D Elevation',
        'Interior Design',
        'Land Survey',
        'Project Costing',
        'Quantity Estimation',
        'Engineering Consultation'
      ]
    },
    {
      icon: Crane,
      title: 'Commercial Construction',
      description: 'Modern commercial spaces designed for efficiency',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
    },
    {
      icon: Factory,
      title: 'Industrial Projects',
      description: 'State-of-the-art industrial facilities',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80',
    },
    {
      icon: HardHat,
      title: 'Project Management',
      description: 'Expert project management services',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
    },
    {
      icon: Wrench,
      title: 'Renovation & Repairs',
      description: 'Professional renovation services',
      image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80',
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100svh] overflow-hidden">
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
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              >
                Expert <span className="text-[rgb(81,144,210)]">Construction</span>
                <br className="block sm:hidden" />
                <span className="hidden sm:inline"> Services</span>
                <span className="block sm:hidden"> Services</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mb-8"
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
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[rgb(81,144,210)] via-blue-600 to-[rgb(81,144,210)]">
              Our Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[rgb(81,144,210)] to-blue-600 mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Transforming visions into reality with cutting-edge construction solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(81,144,210)] to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
                <div className="relative flex flex-col h-full bg-white rounded-2xl overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgb(81,144,210)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  </div>

                  <div className="relative p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>

                    {service.subServices && (
                      <div className="mt-auto">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-0.5 bg-[rgb(81,144,210)]" />
                          <span className="text-sm font-medium text-[rgb(81,144,210)]">Key Services</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {service.subServices.slice(0, 4).map((subService, subIndex) => (
                            <motion.div
                              key={subIndex}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: subIndex * 0.1 }}
                              className="group/item flex items-center gap-2"
                            >
                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="w-1.5 h-1.5 rounded-full bg-[rgb(81,144,210)]"
                              />
                              <span className="text-sm text-gray-600 group-hover/item:text-[rgb(81,144,210)] transition-colors">
                                {subService}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                        {service.subServices.length > 4 && (
                          <motion.button
                            whileHover={{ x: 5 }}
                            className="mt-4 text-sm text-[rgb(81,144,210)] hover:text-blue-600 flex items-center gap-2"
                          >
                            View all services
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.button>
                        )}
                      </div>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6 group/btn relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-[rgb(81,144,210)] to-blue-600 text-white font-medium"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                      <span className="relative flex items-center justify-center gap-2">
                        Learn More
                        <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </span>
                    </motion.button>
                  </div>
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