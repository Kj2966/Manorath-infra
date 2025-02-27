import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin, ArrowUpRight, Filter, ChevronRight, ArrowRight, Clock, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'commercial',
      description: 'A state-of-the-art office complex featuring sustainable design and smart building technology.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      location: 'New York City, NY',
      year: '2023',
      stats: {
        squareFeet: '250,000 sq ft',
        investmentValue: '$75M',
        completionTime: '24 months',
        sustainabilityRating: 'LEED Gold'
      }
    },
    {
      id: 2,
      title: 'Highway Bridge Extension',
      category: 'infrastructure',
      description: 'A major infrastructure project connecting two cities with a modern suspension bridge.',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80',
      location: 'San Francisco, CA',
      year: '2022',
      stats: {
        length: '2.5 miles',
        capacity: '50,000 vehicles/day',
        constructionTime: '36 months',
        budget: '$150M'
      }
    },
    {
      id: 3,
      title: 'Manufacturing Facility',
      category: 'industrial',
      description: 'Advanced manufacturing facility with automated production lines and sustainable practices.',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80',
      location: 'Detroit, MI',
      year: '2023',
      stats: {
        productionCapacity: '100,000 units',
        employeeCapacity: '500+',
        facilitySize: '400,000 sq ft',
        energyEfficiency: '90%'
      }
    },
    {
      id: 4,
      title: 'Shopping Mall Complex',
      category: 'commercial',
      description: 'Mixed-use retail and entertainment complex with modern amenities and parking facilities.',
      image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80',
      location: 'Miami, FL',
      year: '2022',
      stats: {
        retailSpace: '1M sq ft',
        parkingSpaces: '2,000',
        stores: '200+',
        annualVisitors: '5M+'
      }
    },
    {
      id: 5,
      title: 'Metro Station Renovation',
      category: 'infrastructure',
      description: 'Complete overhaul and modernization of a major metropolitan transit hub.',
      image: 'https://images.unsplash.com/photo-1555952238-7d76baaf1a0e?auto=format&fit=crop&q=80',
      location: 'Chicago, IL',
      year: '2023',
      stats: {
        dailyRiders: '75,000',
        platforms: '6',
        accessPoints: '8',
        constructionTime: '18 months'
      }
    },
    {
      id: 6,
      title: 'Logistics Center',
      category: 'industrial',
      description: 'State-of-the-art distribution center with automated sorting and handling systems.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
      location: 'Houston, TX',
      year: '2022',
      stats: {
        throughput: '100K packages/day',
        warehouseSize: '750,000 sq ft',
        dockDoors: '100+',
        automationLevel: '85%'
      }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax and Stats */}
      <section className="relative min-h-[50vh] sm:min-h-[100vh] sm:h-[100vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&q=80"
            alt="Construction Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />
        </motion.div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-between py-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 mt-12 sm:mt-8">
              Our <span className="text-[rgb(81,144,210)]">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl">
              Discover our landmark projects that showcase innovation, precision, and excellence in construction.
            </p>
          </motion.div>

          {/* Stats Row - Improved Mobile Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {[
              { icon: Building, label: 'Projects Completed', value: '500+' },
              { icon: Clock, label: 'Years of Excellence', value: '25+' },
              { icon: Users, label: 'Expert Team', value: '1000+' },
              { icon: Award, label: 'Awards Won', value: '100+' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="backdrop-blur-md bg-white/10 rounded-xl p-4 sm:p-6 border border-white/20"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[rgb(81,144,210)] mb-2 sm:mb-4" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-emerald-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section - Improved Mobile Layout */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-4 sm:py-8 bg-white shadow-lg sticky top-0 z-10 backdrop-blur-lg bg-white/90"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-4">
            <Filter className="w-5 h-5 text-emerald-500" />
            {['all', 'commercial', 'infrastructure', 'industrial'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-[rgb(81,144,210)] text-white shadow-lg shadow-[rgb(81,144,210)]/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Grid - Improved Mobile Layout */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform-gpu transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  onClick={() => handleProjectClick(project.id)}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-56 sm:h-72 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-[rgb(81,144,210)]">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </div>
                  </div>

                  <div className="p-4 sm:p-8">
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[rgb(81,144,210)] transition-colors">
                        {project.title}
                      </h3>
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ 
                          scale: hoveredProject === project.id ? 1 : 0,
                          rotate: hoveredProject === project.id ? 0 : -180
                        }}
                        className="bg-emerald-500 p-2 sm:p-3 rounded-full"
                      >
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </motion.div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Project Stats - Improved Mobile Layout */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                      {Object.entries(project.stats).map(([key, value], i) => (
                        <div key={key} className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                          <div className="text-sm sm:text-base text-[rgb(81,144,210)] font-semibold">{value}</div>
                          <div className="text-xs sm:text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[rgb(81,144,210)]" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[rgb(81,144,210)]" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20 
                      }}
                      className="mt-4 sm:mt-6 flex items-center justify-between"
                    >
                      <span className="text-sm sm:text-base text-[rgb(81,144,210)] font-semibold">View Project Details</span>
                      <motion.div
                        animate={{ x: hoveredProject === project.id ? 5 : 0 }}
                        className="bg-[rgb(81,144,210)] p-1.5 sm:p-2 rounded-full"
                      >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Projects;