import React from 'react';

const LandingLayoutFooter: React.FC = () => (
  <footer className="bg-surface-secondary border-t border-border-secondary text-center p-4 text-sm text-text-tertiary">
    &copy; {new Date().getFullYear()} Lingo Chain. All rights reserved.
  </footer>
);

export default LandingLayoutFooter; 