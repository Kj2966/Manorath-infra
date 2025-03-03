import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Plane as Crane, Factory, HardHat, Ruler, Wrench, ArrowUpRight, Check, Clock, Users, Target, Shield, Award, BarChart, GitBranch as Workflow } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Services = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Add keyframe animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(10px, -10px); }
      }
      @keyframes moveX {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .animate-float {
        animation: float 5s ease-in-out infinite;
      }
      .animate-moveX {
        animation: moveX 15s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const services = [
    {
      icon: Building2,
      title: 'Civil Work',
      description: 'Comprehensive civil engineering and construction solutions',
      longDescription: 'Specializing in structural engineering, foundation work, and infrastructure development with cutting-edge technology and sustainable practices.',
      image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1200',
      subServices: [
        'Residential Buildings',
        'Commercial Building',
        'Bridge Work',
        'Railway Over Bridge',
        'Reinforced Earthen Wall',
        'VUP and PUP',
        'Culverts',
        'Industrial Sheds'
      ]
    },
    {
      icon: Ruler,
      title: 'Designing',
      description: 'Professional architectural design and planning services',
      longDescription: 'Creating innovative architectural solutions with a perfect blend of aesthetics and functionality. From concept to completion, we bring your vision to life.',
      image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      longDescription: 'Building state-of-the-art commercial facilities that maximize space utilization and enhance business operations.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Factory,
      title: 'Industrial Projects',
      description: 'State-of-the-art industrial facilities',
      longDescription: 'Delivering robust industrial solutions with focus on efficiency, safety, and long-term sustainability.',
      image: 'https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: HardHat,
      title: 'Project Management',
      description: 'Expert project management services',
      longDescription: 'Comprehensive project oversight ensuring timely delivery, cost efficiency, and quality assurance at every stage.',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg',
    },
    {
      icon: Wrench,
      title: 'Renovation & Repairs',
      description: 'Professional renovation services',
      longDescription: 'Transforming existing spaces with modern upgrades while maintaining structural integrity and architectural harmony.',
      image: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg',
    }
  ];

  const workProcess = [
    {
      icon: Users,
      title: "Initial Consultation",
      description: "Our experts meet with you to understand your vision, requirements, and project scope in detail."
    },
    {
      icon: Target,
      title: "Planning & Design",
      description: "Detailed project planning, including architectural designs, cost estimation, and timeline development."
    },
    {
      icon: BarChart,
      title: "Resource Allocation",
      description: "Assembling the right team and resources, ensuring optimal project execution from start to finish."
    },
    {
      icon: Workflow,
      title: "Execution",
      description: "Implementing the project with strict adherence to quality standards and timeline commitments."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality checks at every stage to ensure excellence in delivery."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Ensuring project completion within agreed timelines while maintaining quality standards."
    }
  ];

  const qualityStandards = [
    {
      title: "ISO Certified Process",
      description: "Following internationally recognized construction and management standards"
    },
    {
      title: "Expert Team",
      description: "Highly qualified professionals with decades of combined experience"
    },
    {
      title: "Quality Materials",
      description: "Using only premium-grade materials from trusted suppliers"
    },
    {
      title: "Safety First",
      description: "Strict adherence to safety protocols and regulations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Modern construction site"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-sm p-4 sm:p-8 rounded-2xl"
            >
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
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
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mb-8"
              >
                Comprehensive construction and infrastructure solutions tailored to your needs.
              </motion.p>
              <motion.a
                href="#services"
                className="text-[rgb(81,144,210)] flex items-center gap-2 hover:text-[rgb(81,144,210)]/80 transition-colors"
                whileHover={{ x: 5 }}
              >
                Explore our services
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Building Excellence, 
                <span className="text-[rgb(81,144,210)]"> Delivering Dreams</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                With over 8 years of experience in the construction industry, we've built our reputation on the foundation of quality, innovation, and customer satisfaction. Our team of expert engineers and architects work tirelessly to transform your vision into reality.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-[rgb(81,144,210)]">100+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-[rgb(81,144,210)]">100%</h3>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/8641031/pexels-photo-8641031.jpeg"
                alt="Bridge Construction Excellence"
                className="rounded-2xl shadow-2xl h-[400px] w-full object-cover object-center"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                <Award className="w-12 h-12 text-[rgb(81,144,210)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <div className="relative h-[380px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
                  </div>

                  <div className="relative h-full p-5 flex flex-col justify-between">
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-3"
                    >
                      <div className="p-2 bg-white/15 backdrop-blur-md rounded-lg">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </motion.div>

                    <div className="my-3">
                      <p className="text-gray-200 text-sm font-medium mb-2">{service.description}</p>
                      <p className="text-gray-300/90 text-sm leading-relaxed hidden group-hover:block transition-all duration-300">
                        {service.longDescription}
                      </p>
                    </div>

                    {service.subServices && (
                      <div className="space-y-2">
                        <div className="h-px bg-white/20 mb-2" />
                        <p className="text-sm text-white/80 mb-2">Specialized Services:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.subServices.map((subService, subIndex) => (
                            <span
                              key={subIndex}
                              className="text-xs bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full text-white/90 hover:bg-white/25 transition-colors"
                            >
                              {subService}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Gradient Orbs */}
          <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-[rgb(81,144,210)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-1/4 top-1/4 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1" className="animate-pulse"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Moving Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full animate-moveX"
                style={{
                  top: `${20 + i * 20}%`,
                  animationDelay: `${i * 0.5}s`,
                  opacity: 0.1
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Work Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A systematic approach ensuring excellence at every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {workProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(81,144,210)]/20 to-emerald-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[rgb(81,144,210)] rounded-lg group-hover:scale-110 transition-transform relative">
                      <div className="absolute inset-0 bg-[rgb(81,144,210)] rounded-lg animate-ping opacity-20"></div>
                      <step.icon className="w-6 h-6 text-white relative z-10" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Standards</h2>
              <p className="text-gray-600 mb-8">
                We maintain the highest standards of quality in every project we undertake.
              </p>
              <div className="space-y-6">
                {qualityStandards.map((standard, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-[rgb(81,144,210)]/10 rounded-full">
                      <Check className="w-5 h-5 text-[rgb(81,144,210)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{standard.title}</h3>
                      <p className="text-gray-600 text-sm">{standard.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-[350px]">
                <img
                  src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Quality Standards"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-[rgb(81,144,210)]" />
                  <div>
                    <h4 className="font-semibold">ISO 9001:2015</h4>
                    <p className="text-sm text-gray-600">Certified Quality Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Background"
            className="w-full h-full object-cover object-center"
            loading="lazy"
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
              </p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-[rgb(81,144,210)] text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-[rgb(81,144,210)]/90 transition-all duration-300 shadow-lg hover:shadow-[rgb(81,144,210)]/25 flex items-center mx-auto"
              onClick={() => navigate('/contact')}
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