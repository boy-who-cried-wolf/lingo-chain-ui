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
                <div className="w-6 h-6 bg-white rounded mr-4 flex items-center justify-center">
                    {icon || (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.5 2.5V5.5C2.5 6.05228 2.94772 6.5 3.5 6.5H6.5C7.05228 6.5 7.5 6.05228 7.5 5.5V2.5C7.5 1.94772 7.05228 1.5 6.5 1.5H3.5C2.94772 1.5 2.5 1.94772 2.5 2.5ZM10.5 1.5H7.5C6.94772 1.5 6.5 1.94772 6.5 2.5V5.5C6.5 6.05228 6.94772 6.5 7.5 6.5H10.5C11.0523 6.5 11.5 6.05228 11.5 5.5V2.5C11.5 1.94772 11.0523 1.5 10.5 1.5ZM3.5 8.5H6.5C7.05228 8.5 7.5 8.94772 7.5 9.5V12.5C7.5 13.0523 7.05228 13.5 6.5 13.5H3.5C2.94772 13.5 2.5 13.0523 2.5 12.5V9.5C2.5 8.94772 2.94772 8.5 3.5 8.5ZM10.5 8.5H7.5C6.94772 8.5 6.5 8.94772 6.5 9.5V12.5C6.5 13.0523 6.94772 13.5 7.5 13.5H10.5C11.0523 13.5 11.5 13.0523 11.5 12.5V9.5C11.5 8.94772 11.0523 8.5 10.5 8.5Z" fill="#1C1D1D" />
                        </svg>
                    )}
                </div>
                {/* Label */}
                <span className="text-white/70 font-normal text-base tracking-tight">{label}</span>
            </div>
        </Link>
    );
};

export default MainLayoutSidebarButton;
