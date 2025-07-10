import React, { PropsWithChildren } from 'react';

interface IconButtonContainerProps {
    className?: string;
    onClick?: () => void;
}

const IconButtonContainer: React.FC<PropsWithChildren<IconButtonContainerProps>> = ({
    className = '',
    children,
    onClick
}) => {
    return (
        <div
            className={`relative overflow-hidden rounded-full`}
            onClick={onClick}
        >
            {/* Main background with lighter color */}
            <div className="absolute inset-0 bg-[#292929] rounded-full"></div>

            {/* Backdrop blur effect */}
            <div className="absolute inset-0 backdrop-blur-[21px] rounded-full"></div>

            {/* White overlay with 5% opacity */}
            <div className="absolute inset-0 bg-white/5 rounded-full"></div>

            {/* Gradient stroke effect - top to bottom */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/60 via-transparent to-transparent opacity-30"></div>

            {/* Inner content shadow for depth */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.1)]"></div>

            {/* Content container */}
            <div className={`relative ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default IconButtonContainer; 