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
      id: 'modern-office-complex',
      title: 'Modern Office Complex',
      category: 'commercial',
      location: 'New York, NY',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      description: 'State-of-the-art office complex featuring sustainable design and smart building technology.',
      stats: {
        squareFeet: '250,000',
        floors: '35',
        completion: '18 months'
      }
    },
    {
      id: 'highway-bridge',
      title: 'Highway Bridge',
      category: 'infrastructure',
      location: 'Los Angeles, CA',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80',
      description: 'Critical infrastructure project connecting major highways with innovative engineering solutions.',
      stats: {
        length: '2.5 miles',
        lanes: '8',
        completion: '24 months'
      }
    },
    {
      id: 'manufacturing-plant',
      title: 'Manufacturing Plant',
      category: 'industrial',
      location: 'Chicago, IL',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80',
      description: 'Advanced manufacturing facility with automated production lines and green technology.',
      stats: {
        squareFeet: '500,000',
        capacity: '24/7',
        completion: '20 months'
      }
    },
    {
      id: 'shopping-mall',
      title: 'Shopping Mall',
      category: 'commercial',
      location: 'Miami, FL',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
      description: 'Modern retail complex featuring premium shopping experience and entertainment venues.',
      stats: {
        stores: '200+',
        parking: '2,000',
        completion: '30 months'
      }
    },
    {
      id: 'metro-station',
      title: 'Metro Station',
      category: 'infrastructure',
      location: 'Boston, MA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
      description: 'Underground metro station with cutting-edge passenger facilities and safety systems.',
      stats: {
        capacity: '50,000/day',
        platforms: '4',
        completion: '36 months'
      }
    },
    {
      id: 'warehouse-complex',
      title: 'Warehouse Complex',
      category: 'industrial',
      location: 'Seattle, WA',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80',
      description: 'Large-scale logistics hub with automated storage and distribution systems.',
      stats: {
        squareFeet: '750,000',
        docks: '100',
        completion: '15 months'
      }
    },
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
      <section className="relative h-[80vh] overflow-hidden">
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

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-between py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-emerald-400">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Discover our landmark projects that showcase innovation, precision, and excellence in construction.
            </p>
          </motion.div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
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
                className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20"
              >
                <stat.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-emerald-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-8 bg-white shadow-lg sticky top-0 z-10 backdrop-blur-lg bg-white/90"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter className="w-5 h-5 text-emerald-500" />
            {['all', 'commercial', 'infrastructure', 'industrial'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  <div className="relative h-72 overflow-hidden">
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
                    <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-emerald-600">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {project.title}
                      </h3>
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ 
                          scale: hoveredProject === project.id ? 1 : 0,
                          rotate: hoveredProject === project.id ? 0 : -180
                        }}
                        className="bg-emerald-500 p-3 rounded-full"
                      >
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>

                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(project.stats).map(([key, value], i) => (
                        <div key={key} className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-emerald-600 font-semibold">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-3 text-emerald-500" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-3 text-emerald-500" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20 
                      }}
                      className="mt-6 flex items-center justify-between"
                    >
                      <span className="text-emerald-500 font-semibold">View Project Details</span>
                      <motion.div
                        animate={{ x: hoveredProject === project.id ? 5 : 0 }}
                        className="bg-emerald-100 p-2 rounded-full"
                      >
                        <ArrowRight className="w-5 h-5 text-emerald-500" />
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