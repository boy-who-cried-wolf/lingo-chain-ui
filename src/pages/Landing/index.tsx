import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold mb-4 text-text-primary">Welcome to Lingo Chain</h1>
    <p className="text-lg text-text-secondary mb-8">Your modern app landing page.</p>
    <Link to="/dashboard" className="btn-primary">
      Go to Dashboard
    </Link>
  </div>
);

export default Landing; 