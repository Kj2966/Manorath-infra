import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Shield, Clock, Users, Award, CheckCircle2, Briefcase, Building2, Workflow, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Helmet } from 'react-helmet';
import ProcessHouse from '../components/ProcessHouse';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Hero carousel images from Unsplash
  const heroImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2070',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2070'
  ];

  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const navigate = useNavigate();

  // Auto-advance hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Manorath Infra",
              "url": "https://www.manorathinfra.com",
            
              "sameAs": [
                "https://www.facebook.com/manorathinfra?mibextid=ZbWKwL",
                "https://www.instagram.com/manorathinfra?igsh=MWxyNjloZ295d2h5eg=="
              ]
            }
          `}
        </script>
      </Helmet>
      {/* Hero Section with Dynamic Image Carousel */}
      <section className="relative h-[100svh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentHeroImage]}
              alt="Construction showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-sm p-4 sm:p-8 rounded-2xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Crafting <span className="text-[rgb(81,144,210)]">Excellence</span>
                  <br className="hidden sm:block" />in Construction
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl"
              >
                Where innovation meets precision. Building tomorrow's landmarks with today's expertise.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <button
                  onClick={() => navigate('/contact#contact-form')}
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-[rgb(81,144,210)] text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-[rgb(81,144,210)]/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button
                 onClick={() => navigate('/about#ourStory')}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-white/20 flex items-center justify-center">
                  Watch Our Story
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImage(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentHeroImage === index ? 'w-8 sm:w-12 bg-[rgb(81,144,210)]' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Us</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              With decades of experience and a commitment to excellence, we deliver exceptional results that stand the test of time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Quality Assurance",
                description: "Rigorous quality control processes and attention to detail in every project phase."
              },
              {
                icon: Briefcase,
                title: "Expert Team",
                description: "Highly skilled professionals with extensive industry experience and certifications."
              },
              {
                icon: Building2,
                title: "Innovative Solutions",
                description: "Cutting-edge construction techniques and sustainable building practices."
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "Comprehensive safety protocols and regular training for all team members."
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description: "Proven track record of completing projects on schedule and within budget."
              },
              {
                icon: Workflow,
                title: "Transparent Process",
                description: "Clear communication and regular updates throughout the project lifecycle."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[rgb(81,144,210)] mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 {/* Project Process Section */}
 <section className="py-16 sm:py-24 relative overflow-hidden bg-gray-900">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Our Project Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              A systematic approach to turning your vision into reality
            </p>
          </motion.div>

          <ProcessHouse />
        </div>
      </section>
      {/* Stats Section with Glass Effect */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-800" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Shield, label: 'Projects Delivered', value: 100 },
              { icon: Clock, label: 'Years of Excellence', value: 8 },
              { icon: Users, label: 'Expert Team Members', value: 500 },
              { icon: Award, label: 'Industry Awards', value: 4 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
                className="relative overflow-hidden text-center p-6 sm:p-8 rounded-xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(81,144,210)]/10 to-transparent" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1, rotate: 360 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative"
                >
                  <stat.icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-[rgb(81,144,210)]" />
                </motion.div>
                <div className="relative">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
                    {inView && <CountUp end={stat.value} duration={2.5} />}+
                  </div>
                  <div className="text-gray-300 text-base sm:text-lg font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

 

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Comprehensive Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From concept to completion, we offer end-to-end construction solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Commercial Construction",
                description: "State-of-the-art office buildings, retail spaces, and industrial facilities.",
                icon: Building2,
                features: ["Modern Design", "Energy Efficiency", "Smart Integration"]
              },
              {
                title: "Residential Projects",
                description: "Luxury homes, apartments, and residential complexes built to perfection.",
                icon: Users,
                features: ["Custom Designs", "Premium Materials", "Timely Delivery"]
              },
              {
                title: "Infrastructure Development",
                description: "Roads, bridges, and public infrastructure projects.",
                icon: Workflow,
                features: ["Durability", "Public Safety", "Environmental Care"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[rgb(81,144,210)] mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-[rgb(81,144,210)] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Client Testimonials</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              What our clients say about their experience working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "Exceptional quality and professionalism throughout the entire project. Highly recommended!",
                author: "John Smith",
                position: "CEO, Tech Solutions Inc.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
              },
              {
                quote: "Their attention to detail and commitment to deadlines is impressive. A trusted partner.",
                author: "Sarah Johnson",
                position: "Director, Urban Development Corp",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
              },
              {
                quote: "Innovative solutions and excellent communication throughout the project lifecycle.",
                author: "Michael Chen",
                position: "Property Developer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm sm:text-base">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     {/* Recent Highlights Section */}
     <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Recent Highlights</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Discover our latest achievements and milestone projects that showcase our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=2070",
                title: "Eco-Friendly Office Complex",
                description: "A LEED-certified commercial building with state-of-the-art sustainable features."
              },
              {
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=2070",
                title: "Modern Residential Tower",
                description: "Luxury apartments with cutting-edge amenities and panoramic city views."
              },
              {
                image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&q=80&w=2070",
                title: "Infrastructure Development",
                description: "Major highway expansion project completed ahead of schedule."
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{highlight.title}</h3>
                      <p className="text-sm sm:text-base text-gray-200 mb-4">{highlight.description}</p>
                      <button className="flex items-center text-[rgb(81,144,210)] hover:text-[rgb(81,144,210)]/80 transition-colors text-sm sm:text-base bg-yellow-200">
                        Learn More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Ready to Build Your Vision?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              Let's create something extraordinary together. Our team of experts is ready to bring your construction dreams to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = "Hello! I'm interested in scheduling a consultation with Manorath Infra to discuss my construction project requirements. Could you please help me book an appointment?";
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/919672671173?text=${encodedMessage}`, '_blank');
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[rgb(81,144,210)] text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-[rgb(81,144,210)]/80 transition-all duration-300 shadow-lg hover:shadow-[rgb(81,144,210)]/25"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;