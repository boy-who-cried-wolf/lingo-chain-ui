import React from 'react';
import { useLocation } from 'react-router-dom';

const MainLayoutHeader: React.FC = () => {

  const location = useLocation();

  return (
    <header className="bg-surface-secondary border-b border-border-secondary p-4 text-text-primary font-semibold capitalize">
      {location.pathname.split('/').pop()}
    </header>
  );
}

export default MainLayoutHeader; 