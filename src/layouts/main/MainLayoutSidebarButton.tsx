import React from 'react';
import { Link } from 'react-router-dom';

interface MainLayoutSidebarButtonProps {
    to: string;
    icon?: React.ReactNode;
    label: string;
    isActive?: boolean;
    className?: string;
}

const MainLayoutSidebarButton: React.FC<MainLayoutSidebarButtonProps> = ({
    to,
    icon,
    label,
    isActive = false,
    className = ''
}) => {
    return (
        <Link
            to={to}
            className={`w-full h-16 relative overflow-hidden rounded-xl transition-all duration-200 hover:scale-[1.02] ${className}`}
        >
            {/* Main background with standard shadows */}
            <div className="absolute inset-0 bg-dark-900 rounded-xl shadow-2xl"></div>

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent rounded-xl"></div>

            {/* Inner shadows using standard units */}
            <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_0_#080808]"></div>

            {/* Active state effects */}
            {isActive && (
                <>
                    {/* Yellow glow effect */}
                    <div className="absolute w-14 h-12 -left-1 top-2 bg-primary-500 blur-[41px]"></div>
                    {/* Yellow accent bar */}
                    <div className="absolute w-1 h-6 left-0 top-1/2 -translate-y-1/2 bg-primary-500 rounded-full"></div>
                </>
            )}

            {/* Content container */}
            <div className="relative flex items-center h-full px-6">
                {/* Icon container */}
                <div className="w-6 h-6 mr-4 flex items-center justify-center">
                    {icon}
                </div>
                {/* Label */}
                <span className="text-white/70 font-normal text-base tracking-tight">{label}</span>
            </div>
        </Link>
    );
};

export default MainLayoutSidebarButton;
