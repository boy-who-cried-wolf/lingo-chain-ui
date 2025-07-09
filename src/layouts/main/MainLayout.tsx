import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayoutSidebar from './MainLayoutSidebar';
import MainLayoutHeader from './MainLayoutHeader';

const DashboardLayout: React.FC = () => (
  <div className="min-h-screen flex bg-background-primary">
    <MainLayoutSidebar />
    <div className="flex-1 flex flex-col">
      <MainLayoutHeader />
      <main className="flex-1 p-6 bg-background-secondary">
        <Outlet />
      </main>
    </div>
  </div>
);

export default DashboardLayout; 