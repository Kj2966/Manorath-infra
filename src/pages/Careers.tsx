import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Clock, Search, Users, GraduationCap, Building, ArrowUpRight } from 'lucide-react';
import CountUp from 'react-countup';

const Careers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobs = [
    {
      title: 'Senior Project Manager',
      department: 'Project Management',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '8+ years',
      description: 'Lead complex construction projects from inception to completion.',
    },
    {
      title: 'Civil Engineer',
      department: 'Engineering',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Design and oversee infrastructure development projects.',
    },
    {
      title: 'Safety Coordinator',
      department: 'Safety',
      location: 'Chicago, IL',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Ensure workplace safety and compliance with regulations.',
    },
    {
      title: 'Construction Supervisor',
      department: 'Operations',
      location: 'Miami, FL',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Oversee day-to-day construction operations and team management.',
    },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const departments = ['all', ...new Set(jobs.map(job => job.department))];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />
        </motion.div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="backdrop-blur-sm p-8 rounded-2xl">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Build Your <span className="text-[rgb(81,144,210)]">Future</span>
                <br />With Us
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl">
                Join a team of innovators and builders shaping tomorrow's infrastructure. Your career journey starts here.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-[rgb(81,144,210)] text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-emerald-400 transition-all duration-300 flex items-center"
              >
                View Open Positions
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-800" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Users, label: 'Team Members', value: 1000 },
              { icon: Building, label: 'Active Projects', value: 50 },
              { icon: GraduationCap, label: 'Training Hours', value: 5000 },
              { icon: Briefcase, label: 'Open Positions', value: jobs.length },
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
                }}
                className="relative overflow-hidden text-center p-6 sm:p-8 rounded-xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
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
                  <div className="text-emerald-200 text-base sm:text-lg font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your perfect role and join our team of passionate builders and innovators.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
              />
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow bg-white"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Job Cards */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span className="inline-flex items-center">
                        <Briefcase className="w-4 h-4 mr-2 text-[rgb(81,144,210)]" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-[rgb(81,144,210)]" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-[rgb(81,144,210)]" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 md:mt-0 px-6 py-2 bg-[rgb(81,144,210)] text-white font-semibold rounded-lg hover:bg-emerald-400 transition-all duration-300 flex items-center justify-center"
                  >
                    Apply Now
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </motion.button>
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Don't See the Right Fit?</h2>
            <p className="text-lg text-gray-300 mb-8 px-4">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[rgb(81,144,210)] text-white text-lg font-semibold rounded-lg hover:bg-emerald-400 transition-all duration-300 shadow-lg hover:shadow-[rgb(81,144,210)]/25"
            >
              Submit Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;