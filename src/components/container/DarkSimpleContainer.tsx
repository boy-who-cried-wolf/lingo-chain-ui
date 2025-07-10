import React, { PropsWithChildren } from 'react';

interface DarkSimpleContainerProps {
    className?: string;
}

const DarkSimpleContainer: React.FC<PropsWithChildren<DarkSimpleContainerProps>> = ({
    className = '',
    children
}) => {
    return (
        <div
            className={`relative overflow-hidden rounded-xl ${className}`}
        >
            {/* Main background with standard shadows */}
            <div className="absolute inset-0 bg-dark-900 rounded-xl shadow-2xl"></div>

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent rounded-xl"></div>

            {/* Inner shadows using standard units */}
            <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_0_#080808]"></div>

            {/* Content container */}
            <div className="relative flex items-center h-full px-6">
                {children}
            </div>
        </div>
    );
};

export default DarkSimpleContainer;
