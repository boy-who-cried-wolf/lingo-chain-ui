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
        <div
            className={`rounded-3xl backdrop-blur-xl ${className}`}
            style={style}
        >
            {/* Background with white opacity */}
            <div className="absolute inset-0 rounded-3xl bg-white/5" />

            {/* Gradient border - using Tailwind utilities */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-border-white gradient-border-mask opacity-60" />

            {/* Content container */}
            <div className="relative w-full h-full rounded-3xl">
                {children}
            </div>
        </div>
    );
};

export default LightSimpleBlurContainer;
