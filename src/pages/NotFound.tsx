import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold mb-4 text-error-500">404</h1>
    <p className="text-text-secondary mb-6">Page not found.</p>
    <Link to="/" className="btn-secondary">
      Back to Home
    </Link>
  </div>
);

export default NotFound; 