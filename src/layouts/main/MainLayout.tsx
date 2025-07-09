import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayoutSidebar from './MainLayoutSidebar';
import MainLayoutHeader from './MainLayoutHeader';
import bgPattern from '../../assets/images/bg/bg-pattern.svg';

const DashboardLayout: React.FC = () => (
  <div className="min-h-screen flex relative overflow-hidden">
    {/* Background with custom design */}
    <div
      className="absolute inset-0 bg-background-primary"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        zIndex: 0,
      }}
    >
      {/* Golden glow effects - top right */}
      <div className="absolute top-0 right-0 w-96 h-96">
        <div className="absolute inset-0 bg-gradient-radial-golden rounded-full blur-3xl" />
      </div>
      {/* Golden glow effects - bottom center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[600px]">
        <div className="absolute inset-0 bg-gradient-radial-golden-large rounded-full blur-3xl" />
      </div>
      {/* Additional subtle glow - top left */}
      <div className="absolute top-20 left-10 w-64 h-64">
        <div className="absolute inset-0 bg-gradient-radial-golden rounded-full blur-2xl opacity-50" />
      </div>
    </div>
    {/* Content */}
    <div className="relative z-10 flex w-full">
      <MainLayoutSidebar />
      <div className="flex-1 flex flex-col">
        <MainLayoutHeader />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  </div>
);

export default DashboardLayout; 