import React from 'react';
import { Button } from './Button';
import { Quote } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export const Page4_Outcome: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="space-y-8 animate-fade-in pb-20">
      <header className="text-center space-y-2">
        <h1 className="text-2xl font-extrabold text-gray-800">
          如果孩子持續上課 <span className="text-brand-orange">3 個月</span>
        </h1>
      </header>

      {/* Cards container */}
      <div className="grid gap-4">
        {/* Month 1 */}
        <div className="bg-white rounded-3xl p-6 shadow-md border-l-8 border-brand-green flex gap-4 items-start">
          <div className="bg-brand-green/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
            <span className="text-2xl font-black text-brand-green">1</span>
          </div>
          <div>
            <h3 className="text-gray-400 font-bold text-sm uppercase mb-1">Month 1</h3>
            <ul className="space-y-2">
              <li className="font-bold text-gray-800 text-lg">聽得懂老師指令</li>
              <li className="font-bold text-gray-800 text-lg">不再害怕英文</li>
            </ul>
          </div>
        </div>

        {/* Month 2 */}
        <div className="bg-white rounded-3xl p-6 shadow-md border-l-8 border-brand-blue flex gap-4 items-start">
          <div className="bg-brand-blue/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
            <span className="text-2xl font-black text-brand-blue">2</span>
          </div>
          <div>
            <h3 className="text-gray-400 font-bold text-sm uppercase mb-1">Month 2</h3>
            <ul className="space-y-2">
              <li className="font-bold text-gray-800 text-lg">能回答完整句</li>
              <li className="font-bold text-gray-800 text-lg">願意主動嘗試</li>
            </ul>
          </div>
        </div>

        {/* Month 3 */}
        <div className="bg-brand-purple rounded-3xl p-6 shadow-lg shadow-purple-200 border-l-8 border-brand-yellow flex gap-4 items-start transform scale-105">
          <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
            <span className="text-2xl font-black text-brand-purple">3</span>
          </div>
          <div>
            <h3 className="text-white/80 font-bold text-sm uppercase mb-1">Month 3</h3>
            <ul className="space-y-2">
              <li className="font-bold text-white text-lg">用英文表達需求</li>
              <li className="font-bold text-white text-lg">有「我做得到」的自信</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-gray-100 rounded-3xl p-6 relative mt-8">
        <Quote className="absolute top-4 left-4 text-gray-300" size={48} />
        <div className="relative z-10 pt-4">
          <p className="text-gray-700 font-bold text-lg leading-relaxed text-center italic">
            「以前一開口就說不要，<br/>現在會自己試著講！」
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
             <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                <img src="https://picsum.photos/100/100?random=1" alt="Parent" />
             </div>
             <span className="text-sm text-gray-500 font-bold">Jason 媽媽</span>
          </div>
        </div>
      </div>

      <div className="sticky bottom-4 z-10 pt-4">
        <Button onClick={onNext}>
          👉 預約體驗課
        </Button>
      </div>
    </div>
  );
};