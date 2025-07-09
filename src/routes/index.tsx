import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import LandingLayout from '../layouts/landing';
import MainLayout from '../layouts/main';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<LandingLayout />}>
      <Route index element={<Landing />} />
    </Route>
    <Route path="/" element={<MainLayout />}>
      <Route index path="overview" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes; 