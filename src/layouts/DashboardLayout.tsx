import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout: React.FC = () => (
  <div className="min-h-screen flex bg-background-primary">
    <aside className="w-64 bg-surface-primary border-r border-border-secondary flex flex-col p-4">
      <div className="font-bold text-2xl mb-8 text-text-primary">Dashboard</div>
      <nav className="flex flex-col space-y-2">
        <Link to="/dashboard" className="text-text-secondary hover:text-primary-500 transition-colors duration-200">
          Home
        </Link>
        {/* Add more sidebar links here */}
      </nav>
    </aside>
    <div className="flex-1 flex flex-col">
      <header className="bg-surface-secondary border-b border-border-secondary p-4 text-text-primary font-semibold">
        Dashboard Topbar
      </header>
      <main className="flex-1 p-6 bg-background-secondary">
        <Outlet />
      </main>
    </div>
  </div>
);

export default DashboardLayout; 