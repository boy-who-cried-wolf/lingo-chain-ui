import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => (
  <div className="bg-background-primary">
    {/* Hero Section */}
    <div className="text-center py-20 px-4">
      <h1 className="text-5xl font-bold mb-6 text-text-primary">
        The fun way to learn crypto.
      </h1>
      <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
        Learn crypto easily with LingoChain, the modern way of blockchain learning. Start today for free.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link to="/explore" className="btn-primary text-lg px-8 py-3">
          Explore options
        </Link>
        <Link to="/start" className="bg-surface-secondary hover:bg-surface-tertiary text-text-primary px-8 py-3 rounded-lg transition-colors duration-200 text-lg">
          Start now →
        </Link>
      </div>
    </div>

  </div>
);

export default Landing; 