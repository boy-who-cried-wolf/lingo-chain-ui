import React from 'react';
import Logo from '../../components/logo';
import MainLayoutSidebarButton from './MainLayoutSidebarButton';

const MainLayoutSidebar: React.FC = () => (
  <aside className="w-80 h-screen bg-black/5 backdrop-blur-[27px] border-r border-border-secondary flex flex-col p-4 relative">
    {/* Main container with glassmorphism effect */}
    <div className="w-full h-full bg-white/5 backdrop-blur-[27px] rounded-[20px] p-4 relative">
      {/* Logo section */}
      <div className="flex items-center gap-1.5 mb-8">
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
          isActive: true
        }, {
          to: "/courses",
          label: "Categories",
        }, {
          to: "/ai-mentor",
          label: "AI Mentor",
        }, {
          to: "/create-earn",
          label: "Create & Earn",
        }, {
          to: "/settings",
          label: "Setting",
        }].map((item) => (
          <MainLayoutSidebarButton
            key={item.to}
            to={item.to}
            label={item.label}
            isActive={item.isActive}
          />
        ))}
      </nav>

      {/* Premium section */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-72 h-60 bg-gradient-to-br from-white/10 to-transparent rounded-xl relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-dark-900 rounded-xl shadow-inner"></div>
        <div className="absolute w-72 h-12 left-5 top-56 bg-primary-500 blur-[41px]"></div>

        <div className="relative flex flex-col items-center pt-5 gap-6">
          <div className="text-center">
            <h3 className="text-text-primary/80 font-normal text-[16px] leading-[18px] text-center">
              Unlock Premium Resources & Features
            </h3>
          </div>

          <div className="flex items-start p-1.5 gap-2 w-44 h-14 bg-black/82 rounded-2xl shadow-lg">
            <div className="w-40 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-xl relative shadow-inner">
              <div className="absolute inset-0 bg-dark-900 rounded-xl"></div>
              <div className="relative flex items-center justify-center h-full">
                <span className="text-text-primary font-normal text-sm text-center">Upgrade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
);

export default MainLayoutSidebar; 