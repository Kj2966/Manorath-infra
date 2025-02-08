import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Clock, Search, Users, GraduationCap, Building } from 'lucide-react';

const Careers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const jobs = [
    {
      title: 'Senior Project Manager',
      department: 'Project Management',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '8+ years',
    },
    {
      title: 'Civil Engineer',
      department: 'Engineering',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      experience: '5+ years',
    },
    {
      title: 'Safety Coordinator',
      department: 'Safety',
      location: 'Chicago, IL',
      type: 'Full-time',
      experience: '3+ years',
    },
    {
      title: 'Construction Supervisor',
      department: 'Operations',
      location: 'Miami, FL',
      type: 'Full-time',
      experience: '6+ years',
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-construction-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold font-heading mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300">
              Build your career with a company that's building tomorrow's infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-construction-gray" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-3xl font-bold mb-12 text-center"
          >
            Why Join GR Construction?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Great Team Culture',
                description: 'Work with passionate professionals in a collaborative environment.',
              },
              {
                icon: GraduationCap,
                title: 'Learning & Growth',
                description: 'Continuous learning opportunities and career development programs.',
              },
              {
                icon: Building,
                title: 'Exciting Projects',
                description: 'Work on landmark projects that shape the future of infrastructure.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <benefit.icon className="w-12 h-12 mx-auto text-construction-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Current Openings</h2>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-blue"
              />
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-blue"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="space-y-2 md:space-y-0 md:space-x-6 text-gray-600">
                      <span className="inline-flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-2 bg-construction-yellow text-construction-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;