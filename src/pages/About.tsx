import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Target, Users, Leaf, ArrowUpRight, X, Briefcase, Mail, Phone, MapPin } from 'lucide-react';

interface Leader {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  details: {
    bio: string;
    experience: string;
    education: string;
    email: string;
    phone: string;
    location: string;
  };
}

const leaders: Leader[] = [
  {
    id: 1,
    name: "Sarah Anderson",
    role: "Director of Operations",
    quote: "Innovation is not just about ideas, it's about making them happen.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    details: {
      bio: "With over 15 years of experience in construction management, Sarah has led numerous landmark projects across the country.",
      experience: "Previously headed major infrastructure projects at leading construction firms",
      education: "M.S. in Construction Management from Stanford University",
      email: "sarah.anderson@example.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Project Manager",
    quote: "Every great building starts with a solid foundation of teamwork.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800",
    details: {
      bio: "Michael specializes in sustainable construction practices and has implemented green building solutions across various projects.",
      experience: "10+ years managing large-scale commercial projects",
      education: "B.S. in Civil Engineering from MIT",
      email: "michael.chen@example.com",
      phone: "(555) 234-5678",
      location: "Boston, MA"
    }
  },
  {
    id: 3,
    name: "David Martinez",
    role: "Site Supervisor",
    quote: "Safety and quality are not just priorities, they're values.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    details: {
      bio: "David's expertise in site safety and quality control has earned him multiple industry recognitions.",
      experience: "15+ years of on-site supervision experience",
      education: "B.S. in Construction Management from Texas A&M",
      email: "david.martinez@example.com",
      phone: "(555) 345-6789",
      location: "Houston, TX"
    }
  },
  {
    id: 4,
    name: "Emily Zhang",
    role: "Partner & Chief Architect",
    quote: "Architecture is where art meets engineering to create lasting impact.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    details: {
      bio: "Emily's innovative designs have won multiple architectural awards and recognition for sustainability.",
      experience: "20+ years in architectural design and project planning",
      education: "Master of Architecture from Harvard GSD",
      email: "emily.zhang@example.com",
      phone: "(555) 456-7890",
      location: "New York, NY"
    }
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
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
                Building <span className="text-emerald-400">Tomorrow's</span>
                <br className="hidden sm:block" />World Today
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl"
              >
                Over two decades of excellence in construction, shaping skylines and transforming communities.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8"
              >
                <motion.a
                  href="#mission"
                  className="text-emerald-400 flex items-center gap-2 hover:text-emerald-300 transition-colors"
                  whileHover={{ y: 3 }}
                >
                  Scroll to explore
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

      

      {/* Core Values */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide our every decision and shape our approach to construction excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Shield,
                title: 'Quality Assurance',
                description: 'Unwavering commitment to excellence in every detail of our work.',
              },
              {
                icon: Target,
                title: 'Innovation First',
                description: 'Embracing cutting-edge technologies and construction methods.',
              },
              {
                icon: Users,
                title: 'Collaborative Spirit',
                description: 'Building strong partnerships with clients and stakeholders.',
              },
              {
                icon: Leaf,
                title: 'Sustainability',
                description: 'Creating eco-friendly structures for a better tomorrow.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group p-6 sm:p-8 rounded-2xl bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <value.icon className="w-12 h-12 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* Mission Statement */}
<section id="mission" className="relative py-24 sm:py-32 overflow-hidden">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8">
                To revolutionize the construction industry through innovative solutions, sustainable practices, 
                and unwavering commitment to excellence, while building structures that inspire and communities that thrive.
              </p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-emerald-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 flex items-center mx-auto"
            >
              Join Our Team
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* Company Overview/Story */}
      <section className="py-24 sm:py-32 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6">
                <p className="text-gray-600 text-lg">
                  Since our inception in 1998, we've been at the forefront of construction innovation, 
                  delivering exceptional projects that stand as testaments to our commitment to quality 
                  and excellence.
                </p>
                <p className="text-gray-600 text-lg">
                  Our journey has been marked by groundbreaking achievements, sustainable practices, 
                  and an unwavering dedication to creating structures that inspire and endure.
                </p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
                >
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-emerald-500 mb-2"
                    >
                      500+
                    </motion.div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-emerald-500 mb-2"
                    >
                      25+
                    </motion.div>
                    <div className="text-gray-600">Years of Excellence</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                  alt="Construction site"
                  className="rounded-2xl shadow-2xl"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 border-2 border-emerald-500 rounded-2xl transform translate-x-4 translate-y-4 -z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries who drive our success and shape the future of construction excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                    <p className="text-emerald-300 mb-3">{leader.role}</p>
                    <p className="text-gray-200 text-sm italic mb-4">"{leader.quote}"</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedLeader(leader)}
                      className="px-4 py-2 bg-emerald-500 text-white text-sm font-semibold rounded-lg hover:bg-emerald-400 transition-all duration-300"
                    >
                      View Profile
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-80 md:h-full">
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{selectedLeader.name}</h3>
                    <p className="text-emerald-300">{selectedLeader.role}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-6">{selectedLeader.details.bio}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <Briefcase className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Experience</h4>
                          <p className="text-gray-600">{selectedLeader.details.experience}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Shield className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Education</h4>
                          <p className="text-gray-600">{selectedLeader.details.education}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6 space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-5 h-5 text-emerald-500 mr-3" />
                        {selectedLeader.details.email}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-5 h-5 text-emerald-500 mr-3" />
                        {selectedLeader.details.phone}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 text-emerald-500 mr-3" />
                        {selectedLeader.details.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;