import { useEffect } from 'react';

const LoadingOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      // Preload fonts
      const fontLinks = [
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap'
      ];
      
      fontLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    preloadResources();
  }, []);

  return null;
};

export default LoadingOptimizer; 