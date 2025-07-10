import React from 'react';
import LightSimpleBlurContainer from '../../components/container/LightSimpleBlurContainer';
import OverviewMap from './OverviewMap';

const Dashboard: React.FC = () => (
  <div className='flex flex-col lg:flex-row h-full gap-4'>
    <div className='flex-grow flex justify-center items-center'>
      <OverviewMap />
    </div>
    <LightSimpleBlurContainer className='w-full lg:w-1/3 p-4'>
      <div>Your content here</div>
    </LightSimpleBlurContainer>
  </div>
);

export default Dashboard; 