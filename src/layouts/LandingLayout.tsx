import React from 'react';
import { Outlet } from 'react-router-dom';

const LandingLayout: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-background-primary">
    <header className="bg-surface-primary border-b border-border-secondary p-4 text-center font-bold text-xl text-text-primary">
      Lingo Chain
    </header>
    <main className="flex-1">
      <Outlet />
    </main>
    <footer className="bg-surface-secondary border-t border-border-secondary text-center p-4 text-sm text-text-tertiary">
      &copy; {new Date().getFullYear()} Lingo Chain. All rights reserved.
    </footer>
  </div>
);

export default LandingLayout; 