import React from 'react';
import { Link } from 'react-router-dom';

const MainLayoutSidebar: React.FC = () => (
  <aside className="w-64 bg-surface-primary border-r border-border-secondary flex flex-col p-4">
    <div className="font-bold text-2xl mb-8 text-text-primary">Lingo Chain</div>
    <nav className="flex flex-col space-y-2">
      <Link to="/dashboard" className="text-text-secondary hover:text-primary-500 transition-colors duration-200">
        📊 Dashboard
      </Link>
      <Link to="/courses" className="text-text-secondary hover:text-primary-500 transition-colors duration-200">
        📚 Courses
      </Link>
      <Link to="/practice" className="text-text-secondary hover:text-primary-500 transition-colors duration-200">
        🎯 Practice
      </Link>
      <Link to="/community" className="text-text-secondary hover:text-primary-500 transition-colors duration-200">
        👥 Community
      </Link>
      <Link to="/progress" className="text-text-secondary hover:text-primary-500 transition-colors duration-200">
        📈 Progress
      </Link>
    </nav>
  </aside>
);

export default MainLayoutSidebar; 