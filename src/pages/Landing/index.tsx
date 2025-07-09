import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold mb-4 text-text-primary">Welcome to Lingo Chain</h1>
    <p className="text-lg text-text-secondary mb-8">Your modern language learning platform</p>
    <div className="max-w-2xl mx-auto mb-8">
      <p className="text-text-tertiary mb-6">
        Master new languages with our innovative learning approach. Connect with native speakers, 
        track your progress, and achieve fluency faster than ever before.
      </p>
    </div>
    <Link to="/overview" className="btn-primary">
      Start Learning
    </Link>
  </div>
);

export default Landing; 