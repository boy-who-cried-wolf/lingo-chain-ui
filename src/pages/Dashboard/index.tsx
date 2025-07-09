import React from 'react';

const Dashboard: React.FC = () => (
  <div className="text-center py-20">
    <h1 className="text-3xl font-bold mb-4 text-text-primary">Learning Dashboard</h1>
    <p className="text-text-secondary mb-8">Track your language learning progress and access your courses</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-2">Current Course</h3>
        <p className="text-text-tertiary mb-4">Spanish for Beginners</p>
        <div className="w-full bg-surface-tertiary rounded-full h-2">
          <div className="bg-primary-500 h-2 rounded-full" style={{ width: '65%' }}></div>
        </div>
        <p className="text-text-muted text-sm mt-2">65% Complete</p>
      </div>
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-2">Study Streak</h3>
        <p className="text-text-tertiary mb-4">🔥 7 days in a row!</p>
        <p className="text-text-muted text-sm">Keep up the great work!</p>
      </div>
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-2">Next Lesson</h3>
        <p className="text-text-tertiary mb-4">Basic Conversations</p>
        <button className="btn-primary text-sm">Continue Learning</button>
      </div>
    </div>
  </div>
);

export default Dashboard; 