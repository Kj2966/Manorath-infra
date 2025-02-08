import React from 'react';
import { Link } from 'react-router-dom';
import { Construction, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <Construction className="w-24 h-24 mx-auto mb-8 text-construction-yellow" />
        <h1 className="text-6xl font-bold text-construction-black mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for is currently under construction or doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-construction-yellow text-construction-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;