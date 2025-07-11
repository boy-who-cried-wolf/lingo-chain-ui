import React from 'react';

interface CreateEarnIconProps {
  className?: string;
  size?: number;
}

const CreateEarnIcon: React.FC<CreateEarnIconProps> = ({ className = '', size = 21 }) => {
  return (
    <svg 
      width={size} 
      height={size * 1.05} 
      viewBox="0 0 21 22" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M20.2677 5.56034L15.6637 0.955303C15.3545 0.646029 14.935 0.472275 14.4977 0.472275C14.0604 0.472275 13.641 0.646029 13.3318 0.955303L0.625412 13.6627C0.314818 13.9708 0.140738 14.3906 0.142136 14.8281V19.4332C0.142136 20.3437 0.880286 21.0819 1.79084 21.0819H6.39588C6.83338 21.0833 7.25318 20.9092 7.56131 20.5986L20.2677 7.89223C20.5769 7.58302 20.7507 7.16361 20.7507 6.72628C20.7507 6.28895 20.5769 5.86954 20.2677 5.56034ZM6.39588 19.4332H1.79084V14.8281L10.8587 5.76025L15.4638 10.3653L6.39588 19.4332ZM16.6292 9.19883L12.0241 4.59482L14.4972 2.12176L19.1022 6.72577L16.6292 9.19883Z" 
        fill="currentColor"
      />
    </svg>
  );
};

export default CreateEarnIcon; 