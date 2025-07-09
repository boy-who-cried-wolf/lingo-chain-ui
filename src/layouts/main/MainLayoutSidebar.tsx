import React from 'react';
import Logo from '../../components/logo';
import MainLayoutSidebarButton from './MainLayoutSidebarButton';
import {
  OverviewIcon,
  CategoriesIcon,
  AiMentorIcon,
  CreateEarnIcon,
  SettingsIcon
} from '../../components/icons';
import { useLocation } from 'react-router-dom';

const MainLayoutSidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="w-80 h-screen p-4 relative">
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
        <div className="relative z-10 p-4 h-full flex flex-col">
          {/* Logo section */}
          <div className="flex items-center gap-1.5 p-4">
            <Logo variant="logo-with-label" />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/12 mb-6 relative">
            <div className="absolute inset-0 bg-black"></div>
          </div>

          {/* Navigation items */}
          <nav className="flex flex-col space-y-2.5">
            {[{
              to: "/overview",
              label: "Overview",
              icon: <OverviewIcon size={18} />,
              isActive: true
            }, {
              to: "/courses",
              label: "Categories",
              icon: <CategoriesIcon size={18} />,
            }, {
              to: "/ai-mentor",
              label: "AI Mentor",
              icon: <AiMentorIcon size={18} />,
            }, {
              to: "/create-earn",
              label: "Create & Earn",
              icon: <CreateEarnIcon size={18} />,
            }, {
              to: "/settings",
              label: "Setting",
              icon: <SettingsIcon size={18} />,
            }].map((item) => (
              <MainLayoutSidebarButton
                key={item.to}
                to={item.to}
                label={item.label}
                icon={item.icon}
                isActive={location.pathname.startsWith(item.to)}
              />
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}

export default MainLayoutSidebar; 