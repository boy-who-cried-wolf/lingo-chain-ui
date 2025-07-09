import React from 'react';

const Dashboard: React.FC = () => (
  <div className="text-center py-20">
    <h1 className="text-3xl font-bold mb-4 text-text-primary">Dashboard</h1>
    <p className="text-text-secondary mb-8">This is your dashboard. Add widgets and features here.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-2">Widget 1</h3>
        <p className="text-text-tertiary">Sample dashboard widget</p>
      </div>
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-2">Widget 2</h3>
        <p className="text-text-tertiary">Another sample widget</p>
      </div>
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-2">Widget 3</h3>
        <p className="text-text-tertiary">Third sample widget</p>
      </div>
    </div>
  </div>
);

export default Dashboard; 