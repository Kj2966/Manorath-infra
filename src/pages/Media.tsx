import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Newspaper, Award, PlayCircle, Calendar } from 'lucide-react';

const Media = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const news = [
    {
      date: 'March 15, 2024',
      title: 'GR Construction Wins Infrastructure Excellence Award',
      category: 'Awards',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80',
    },
    {
      date: 'March 10, 2024',
      title: 'New Metro Project Contract Secured',
      category: 'Projects',
      image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80',
    },
    {
      date: 'March 5, 2024',
      title: 'Sustainability Initiative Launch',
      category: 'Corporate',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80',
    },
  ];

  const awards = [
    {
      year: '2024',
      title: 'Best Infrastructure Company',
      organization: 'Construction Excellence Awards',
    },
    {
      year: '2023',
      title: 'Safety Performance Award',
      organization: 'National Safety Council',
    },
    {
      year: '2023',
      title: 'Sustainable Construction Leader',
      organization: 'Green Building Council',
    },
  ];

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
            <h1 className="text-5xl font-bold font-heading mb-6">Media Center</h1>
            <p className="text-xl text-gray-300">
              Stay updated with our latest news, achievements, and media coverage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-3xl font-bold mb-12 text-center"
          >
            Latest News & Updates
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-construction-yellow text-construction-black px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <button className="text-construction-blue hover:text-blue-700 font-semibold">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-construction-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-3xl font-bold mb-12 text-center"
          >
            Awards & Recognition
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <Award className="w-12 h-12 text-construction-yellow mb-4" />
                <div className="text-sm text-construction-blue font-semibold mb-2">
                  {award.year}
                </div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">Download Press Kit</h2>
                <p className="text-gray-600 mb-6 md:mb-0">
                  Access our company logos, brand guidelines, and media resources.
                </p>
              </div>
              <button className="px-8 py-3 bg-construction-yellow text-construction-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
                Download Kit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;