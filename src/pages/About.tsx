import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Target, Users, Leaf, ArrowUpRight, X, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import dImage from '../assets/img/mMI.jpg';
import harshitImage from '../assets/img/harshitImage.jpg'

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

interface MDProfile {
  name: string;
  role: string;
  image: string;
  bio: string;
  stats: {
    label: string;
    value: string;
  }[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

const leaders: Leader[] = [
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
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070"
            alt="Construction site with workers"
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              >
                Building <span className="text-[rgb(81,144,210)]">Tomorrow's</span>
                <br className="hidden sm:block" />World Today
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl"
              >
                Over 8 years of excellence in construction, shaping skylines and transforming communities.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8"
              >
                <motion.a
                  href="#ourStory"
                  className="text-[rgb(81,144,210)] flex items-center gap-2 hover:text-emerald-300 transition-colors"
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

      {/* Mission & Vision Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070"
                alt="Vision"
                className="rounded-2xl shadow-2xl"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute inset-0 border-2 border-[rgb(81,144,210)] rounded-2xl transform -translate-x-4 -translate-y-4 -z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[rgb(81,144,210)] mb-3">Our Vision</h3>
                  <p className="text-gray-600 text-base">
                    At Manorath Infra, our vision is to be a leading force in the construction and infrastructure industry, known for our quality, innovation, and sustainability. We strive to build landmark structures that not only meet but exceed client expectations, contributing to the development of modern, resilient, and future-ready spaces. Through our dedication to excellence and integrity, we aim to transform dreams into reality, shaping skylines and communities for generations to come.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(81,144,210)] mb-3">Our Mission</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    ✔️ To deliver high-quality construction solutions with precision, efficiency, and innovation.<br/>
                    ✔️ To ensure sustainability and safety in every project, embracing eco-friendly practices.<br/>
                    ✔️ To leverage cutting-edge technology and engineering expertise.<br/>
                    ✔️ To build long-term relationships based on trust and transparency.<br/>
                    ✔️ To empower our workforce with a culture of excellence.<br/>
                    ✔️ To contribute to nation-building and infrastructure development.<br/>
                    ✔️ At Manorath Infra, we don't just construct buildings—we create lasting legacies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview/Story */}
      <section className="py-24 sm:py-32 bg-white" ref={ref} id='ourStory'>
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
                  Since our inception in 2017, we've been at the forefront of construction innovation, 
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
                      className="text-4xl font-bold text-[rgb(81,144,210)] mb-2"
                    >
                      100+
                    </motion.div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-[rgb(81,144,210)] mb-2"
                    >
                      8+
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
                  <value.icon className="w-12 h-12 text-[rgb(81,144,210)] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet our MD Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Background Design Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-[rgb(81,144,210)]/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[rgb(81,144,210)] font-semibold tracking-wider uppercase text-sm">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Meet Our Managing Director
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-[2px] w-12 bg-emerald-500"></div>
              <div className="h-[2px] w-12 bg-[rgb(81,144,210)]"></div>
              <div className="h-[2px] w-12 bg-emerald-500"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(81,144,210)]/20 to-emerald-500/20 rounded-3xl transform rotate-6"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={harshitImage}
                    alt="Harshit Sanchihar"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Achievement Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -right-12 top-12 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm bg-white/90"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-500/10 p-3 rounded-xl">
                      <Target className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">100+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -left-12 bottom-12 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm bg-white/90"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-[rgb(81,144,210)]/10 p-3 rounded-xl">
                      <Shield className="w-8 h-8 text-[rgb(81,144,210)]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">8+</div>
                      <div className="text-sm text-gray-600">Years of Excellence</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">Harshit Sanchihar</h3>
                </div>

                <blockquote className="relative pl-6 border-l-2 border-[rgb(81,144,210)] italic text-xl text-gray-700">
                  "Success is not just about building structures, it's about building trust and relationships that last."
                </blockquote>

                <div className="prose max-w-none text-gray-600">
                  <p className="text-lg leading-relaxed">
                    A visionary leader with extensive experience in construction and infrastructure development. 
                    Under his leadership, Manorath Infra has successfully delivered numerous landmark projects 
                    and established itself as a trusted name in the industry.
                  </p>
                  
                  <AnimatePresence>
                    {selectedLeader?.id === 1 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <p className="text-base">Dear Valued Clients, Partners, and Well-Wishers,</p>
                        <p className="text-base">At Manorath Infra, we don't just build structures—we build dreams, trust, and a future of excellence. Every project we undertake is a testament to our commitment to quality, innovation, and precision. Since our inception in 2017, we have strived to create spaces that stand the test of time while upholding the highest standards of engineering, safety, and sustainability.</p>
                        <p className="text-base">Our expertise spans residential and commercial buildings, bridge works, railway overpasses, reinforced earth walls, industrial sheds, and more. Beyond construction, our specialized services include structural engineering, interior design, land surveys, project costing, and quantity estimation, ensuring a seamless experience from conception to completion.</p>
                        <p className="text-base">As a self-made entrepreneur, my journey from a civil engineering graduate to the founder of Manorath Infra has been one of dedication, perseverance, and an unwavering belief in hard work and innovation. This philosophy has driven me to pioneer impactful projects and successfully bring ideas to life—right from conception to commercial stabilization.</p>
                        <p className="text-base">With a team of skilled professionals and state-of-the-art technology, Manorath Infra is committed to delivering excellence, reliability, and value in every endeavor. We take immense pride in transforming visions into landmarks that inspire generations to come.</p>
                        <p className="text-base">We look forward to building a future together.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedLeader(selectedLeader?.id === 1 ? null : leaders[0])}
                  className="text-[rgb(81,144,210)] font-semibold flex items-center gap-2 hover:text-emerald-500 transition-colors"
                >
                  {selectedLeader?.id === 1 ? 'Read Less' : 'Read Full Message'}
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Key Achievements */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'Experience', value: '8+', unit: 'Years' },
                  { label: 'Team Size', value: '500+', unit: 'Members' },
                  { label: 'Client Satisfaction', value: '100', unit: '%' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(81,144,210)]/5 to-emerald-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                    <div className="relative p-6 text-center">
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                      <div className="text-xs text-[rgb(81,144,210)]">{stat.unit}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact & Social */}
              <div className="flex flex-wrap gap-6">
                {/* <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:director@manorathinfra.com"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[rgb(81,144,210)] to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Connect via Email</span>
                </motion.a> */}

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com"
                  target="_blank"
                  className="flex items-center gap-3 px-6 py-3 border-2 border-[rgb(81,144,210)] text-[rgb(81,144,210)] rounded-xl hover:bg-[rgb(81,144,210)] hover:text-white transition-all duration-300"
                >
                  <ArrowUpRight className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Team Section */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[rgb(81,144,210)] font-semibold tracking-wider uppercase text-sm">Our Team</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Meet Our Expert Team
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-[2px] w-12 bg-emerald-500"></div>
                <div className="h-[2px] w-12 bg-[rgb(81,144,210)]"></div>
                <div className="h-[2px] w-12 bg-emerald-500"></div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.slice(1).map((leader, index) => (
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
                      <p className="text-[rgb(81,144,210)] mb-3">{leader.role}</p>
                      <p className="text-gray-200 text-sm italic">"{leader.quote}"</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Vision',
                description: 'Pioneering innovative solutions and setting new industry standards through strategic leadership.',
                icon: Target,
                color: 'rgb(81,144,210)',
              },
              {
                title: 'Technical Excellence',
                description: 'Leveraging cutting-edge technology and engineering expertise for superior project delivery.',
                icon: Shield,
                color: 'rgb(16,185,129)',
              },
              {
                title: 'Client Success',
                description: 'Building lasting partnerships through exceptional service and unwavering commitment.',
                icon: Users,
                color: 'rgb(81,144,210)',
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 transform group-hover:scale-105 transition-transform duration-500"></div>
                <div className="relative p-8 space-y-4">
                  <div className="inline-block p-4 rounded-xl" style={{ backgroundColor: `${card.color}10` }}>
                    <card.icon className="w-8 h-8" style={{ color: card.color }} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{card.title}</h4>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Join Us</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8">
                To revolutionize the construction industry through innovative solutions, sustainable practices, 
                and unwavering commitment to excellence, while building structures that inspire and communities that thrive.
              </p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-[rgb(81,144,210)] text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-emerald-400 transition-all duration-300 shadow-lg hover:shadow-[rgb(81,144,210)]/25 flex items-center mx-auto"
              onClick={() => navigate('/careers')}
            >
              Join Our Team
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;