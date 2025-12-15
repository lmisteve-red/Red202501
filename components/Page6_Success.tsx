import React, { useEffect } from 'react';
import { Button } from './Button';
import { CheckCircle, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Page6_Success: React.FC = () => {
  
  useEffect(() => {
    // Fire confetti on mount
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-fade-in py-12">
      
      <div className="relative">
        <div className="absolute inset-0 bg-brand-green/20 rounded-full animate-ping"></div>
        <div className="bg-white p-4 rounded-full shadow-xl relative z-10">
          <CheckCircle size={80} className="text-brand-green" />
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold text-gray-800">
          體驗課預約完成 🎉
        </h1>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 max-w-xs mx-auto">
          <p className="text-gray-600 font-medium leading-relaxed">
            期待在課堂上見到孩子<br/>
            我們會用<br/>
            <span className="text-brand-orange font-bold">「不逼、不罵、慢慢引導」</span><br/>
            的方式上課
          </p>
        </div>
      </div>

      <div className="w-full space-y-4">
        <Button className="bg-[#00B900] text-white hover:bg-[#009900] shadow-green-200">
           <MessageCircle className="mr-2" /> 加入 LINE 官方帳號
        </Button>
        <p className="text-xs text-gray-400">加入後，我們會傳送上課連結給您</p>
      </div>

    </div>
  );
};