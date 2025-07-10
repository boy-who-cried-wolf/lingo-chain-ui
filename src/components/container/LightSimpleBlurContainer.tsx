import React from 'react';

interface LightSimpleBlurContainerProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const LightSimpleBlurContainer: React.FC<LightSimpleBlurContainerProps> = ({
    children,
    className = '',
    style = {},
}) => {
    return (
        <div className="w-full h-full relative overflow-hidden rounded-2xl">

            {/* Main background - dark with transparency */}
            <div className="absolute inset-0 bg-black rounded-2xl opacity-10"></div>

            {/* Border gradient - dark to transparent */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-background-tertiary to-primary-500/5 opacity-50"></div>

            {/* Border with gradient */}
            <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-15"></div>

            {/* Content container */}
            <div className="relative z-10 p-4 h-full flex flex-col backdrop-blur-xl">
                {children}
            </div>
        </div>
    );
};

export default LightSimpleBlurContainer;
