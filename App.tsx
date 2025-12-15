import React, { useState, useEffect } from 'react';
import { PageStep } from './types';
import { ProgressBar } from './components/ProgressBar';
import { Page1_Challenge } from './components/Page1_Challenge';
import { Page2_Quiz } from './components/Page2_Quiz';
import { Page3_Process } from './components/Page3_Process';
import { Page4_Outcome } from './components/Page4_Outcome';
import { Page5_Form } from './components/Page5_Form';
import { Page6_Success } from './components/Page6_Success';

const App: React.FC = () => {
  const [step, setStep] = useState<PageStep>(PageStep.Challenge);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const nextStep = () => {
    if (step < PageStep.Success) {
      setStep(prev => prev + 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case PageStep.Challenge:
        return <Page1_Challenge onNext={nextStep} />;
      case PageStep.Quiz:
        return <Page2_Quiz onNext={nextStep} />;
      case PageStep.Process:
        return <Page3_Process onNext={nextStep} />;
      case PageStep.Outcome:
        return <Page4_Outcome onNext={nextStep} />;
      case PageStep.Form:
        return <Page5_Form onNext={nextStep} />;
      case PageStep.Success:
        return <Page6_Success />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-gray-800">
      {step < PageStep.Success && (
        <ProgressBar currentStep={step} totalSteps={5} />
      )}
      
      <main className="max-w-md mx-auto min-h-screen bg-white shadow-2xl relative">
        {/* Mobile container styling wrapper */}
        <div className="min-h-screen px-6 py-10 flex flex-col relative z-0">
          {/* Subtle background decoration */}
          <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-brand-blue/5 to-transparent pointer-events-none z-[-1]" />
          
          {renderStep()}
        </div>
      </main>
    </div>
  );
};

export default App;