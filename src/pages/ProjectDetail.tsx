import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowLeft } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type ProjectStats = {
  squareFeet: string;
  floors: string;
  completion: string;
};

type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  images: string[];
  description: string;
  stats: ProjectStats;
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get project ID from the URL
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    if (!id) return;
    
    // Simulated fetch based on project ID (Replace with API call if needed)
    const fetchProject = async () => {
      const mockProjects: Record<string, Project> = {
        'modern-office-complex': {
          id: '1',
          title: 'Modern Office Complex',
          category: 'commercial',
          location: 'New York, NY',
          year: '2023',
          images: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80',
          ],
          description: 'State-of-the-art office complex featuring sustainable design and smart building technology.',
          stats: {
            squareFeet: '250,000',
            floors: '35',
            completion: '18 months',
          },
        },
      };
      
      setProject(mockProjects[id] || null);
    };
    
    fetchProject();
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-4 left-4 z-50 p-3 bg-white rounded-full shadow-lg"
      >
        <ArrowLeft className="w-6 h-6 text-gray-700" />
      </motion.button>

      {/* Project Header */}
      <section className="relative h-[50vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />
        </motion.div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project Stats */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Details</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-emerald-500 mr-4" />
                <span className="text-gray-700">{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-emerald-500 mr-4" />
                <span className="text-gray-700">{project.year}</span>
              </div>
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-emerald-600 font-semibold">{value}</div>
                  <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Carousel */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Gallery</h2>
            <Carousel
              selectedItem={currentImageIndex}
              onChange={(index) => setCurrentImageIndex(index)}
              infiniteLoop
              autoPlay
              interval={5000}
              showThumbs={false}
              showStatus={false}
            >
              {project.images.map((image, index) => (
                <div key={index} className="h-96">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
