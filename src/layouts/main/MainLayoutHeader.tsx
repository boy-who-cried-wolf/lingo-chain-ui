import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileHeader from './profile/ProfileHeader';

const MainLayoutHeader: React.FC = () => {

  const location = useLocation();

  return (
    <header className="py-4 lg:pr-4 lg:pl-0 px-4 relative">
      {/* Main container with glassmorphism effect */}
      <div className="w-full h-full relative overflow-hidden rounded-2xl">
        {/* Backdrop blur effect */}
        <div className="absolute inset-0 backdrop-blur-[27px]"></div>

        {/* Main background - dark with transparency */}
        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>

        {/* Border gradient - dark to transparent */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent"></div>

        {/* Border with gradient */}
        <div className="absolute inset-0 rounded-2xl border border-white/20"></div>

        {/* Content container */}
        <div className="relative z-10 px-4 py-2 h-full flex items-center justify-between">
          <span className="text-text-primary font-semibold capitalize">
            {location.pathname.split('/').pop()}
          </span>

          <ProfileHeader />
        </div>
      </div>
    </header>
  );
}

export default MainLayoutHeader; 