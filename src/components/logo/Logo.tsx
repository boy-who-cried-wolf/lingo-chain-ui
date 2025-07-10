import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.svg';
import logoWithLabel from '../../assets/images/logo/logo-with-label.svg';

interface LogoProps {
  variant?: 'logo' | 'logo-with-label';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'logo', className = '' }) => {
  const logoSrc = variant === 'logo' ? logo : logoWithLabel;
  
  return (
    <Link to="/" className={`inline-block ${className}`}>
      <img 
        src={logoSrc} 
        alt="Lingo Chain" 
        className="h-8 w-auto"
      />
    </Link>
  );
};

export default Logo; 