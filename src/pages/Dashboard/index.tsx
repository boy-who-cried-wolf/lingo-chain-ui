import React from 'react';
import LightSimpleBlurContainer from '../../components/container/LightSimpleBlurContainer';

const Dashboard: React.FC = () => (
  <div className='flex'>
    <div className='flex-grow'>
      Overview Map
    </div>
    <LightSimpleBlurContainer className='w-1/3 p-4'>
      <div>Your content here</div>
    </LightSimpleBlurContainer>
  </div>
);

export default Dashboard; 