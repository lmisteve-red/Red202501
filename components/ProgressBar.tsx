import React from 'react';
import { PageStep } from '../types';

interface ProgressBarProps {
  currentStep: PageStep;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-100 z-50">
      <div 
        className="h-full bg-brand-green transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};