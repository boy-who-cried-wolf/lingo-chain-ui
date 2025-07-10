import React from 'react'

interface ProgressBarProps {
    progress: number // 0-100
    className?: string
    height?: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    progress,
    className = '',
    height = 13
}) => {
    // Clamp progress between 0 and 100
    const clampedProgress = Math.max(0, Math.min(100, progress))

    return (
        <div className={`relative ${className}`} style={{ height: `${height}px` }}>
            {/* Background track */}
            <div
                className="absolute inset-0 rounded-full bg-dark-600 bg-opacity-12"
                style={{
                    top: `${height * 0.2}px`,
                    height: `${height * 0.6}px`
                }}
            />

            {/* Progress fill */}
            <div
                className="absolute bottom-0 rounded-full bg-primary-500"
                style={{
                    width: `${clampedProgress}%`,
                    height: `${height}px`,
                    borderRadius: `${height}px`
                }}
            />

            {/* Highlight overlay */}
            <div
                className="absolute bottom-0 rounded-sm bg-white bg-opacity-20"
                style={{
                    left: `${height * 0.5}px`,
                    top: `${height * 0.2}px`,
                    width: `calc(${clampedProgress}% - ${height}px)`,
                    height: `${height * 0.3}px`,
                    borderRadius: `${height * 0.15}px`
                }}
            />
        </div>
    )
}

export default ProgressBar