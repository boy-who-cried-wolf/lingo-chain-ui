import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  OverviewIcon,
  CategoriesIcon,
  AiMentorIcon,
  CreateEarnIcon,
  SettingsIcon
} from '../../components/icons';

const MainLayoutBottomNav: React.FC = () => {
  const location = useLocation();

  const navigationItems = [
    {
      to: "/overview",
      label: "Overview",
      icon: <OverviewIcon size={20} />,
    },
    {
      to: "/courses",
      label: "Categories",
      icon: <CategoriesIcon size={20} />,
    },
    {
      to: "/ai-mentor",
      label: "AI Mentor",
      icon: <AiMentorIcon size={20} />,
    },
    {
      to: "/create-earn",
      label: "Create & Earn",
      icon: <CreateEarnIcon size={20} />,
    },
    {
      to: "/settings",
      label: "Settings",
      icon: <SettingsIcon size={20} />,
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4">
      {/* Main container with glassmorphism effect */}
      <div className="relative overflow-hidden rounded-2xl">
        {/* Backdrop blur effect */}
        <div className="absolute inset-0 backdrop-blur-[27px]"></div>
        
        {/* Main background - dark with transparency */}
        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>

        {/* Border gradient - dark to transparent */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent"></div>

        {/* Border with gradient */}
        <div className="absolute inset-0 rounded-2xl border border-white/20"></div>

        {/* Navigation items */}
        <div className="relative z-10 flex items-center justify-around p-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname.startsWith(item.to);
            
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:text-white/80 hover:bg-white/5'
                }`}
              >
                <div className={`mb-1 transition-transform duration-200 ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}>
                  {item.icon}
                </div>
                <span className={`text-xs font-medium transition-all duration-200 ${
                  isActive ? 'opacity-100' : 'opacity-80'
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MainLayoutBottomNav; 