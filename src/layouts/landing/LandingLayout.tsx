import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingLayoutHeader from './LandingLayoutHeader';
import LandingLayoutFooter from './LandingLayoutFooter';

const LandingLayout: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-background-primary">
    <LandingLayoutHeader />
    <main className="flex-1">
      <Outlet />
    </main>
    <LandingLayoutFooter />
  </div>
);

export default LandingLayout; 