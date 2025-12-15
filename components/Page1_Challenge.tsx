import React, { useState } from 'react';
import { Button } from './Button';
import { Play, Pause, CheckCircle, HelpCircle, ThumbsUp } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export const Page1_Challenge: React.FC<Props> = ({ onNext }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    // Simulate audio playing
    setTimeout(() => setIsPlaying(false), 2000);
  };

  const handleSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-gray-800 leading-tight">
          孩子敢不敢<br/><span className="text-brand-blue">開口說英文？</span>
        </h1>
        <p className="text-gray-500 font-medium">30 秒，看看孩子現在的英文狀態</p>
      </header>

      {/* Interaction Card */}
      <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
        <div className="bg-brand-blue/10 p-4 rounded-2xl mb-6">
          <p className="text-sm text-gray-600 mb-3 font-bold text-center">
            請孩子聽一句英文，<br/>選一個你覺得他會說的答案
          </p>
          
          <button 
            onClick={handlePlay}
            disabled={isPlaying}
            className={`w-full h-16 rounded-xl flex items-center justify-center gap-3 transition-colors ${isPlaying ? 'bg-brand-blue text-white' : 'bg-white border-2 border-brand-blue text-brand-blue'}`}
          >
            {isPlaying ? <Pause className="animate-pulse" /> : <Play fill="currentColor" />}
            <span className="font-bold text-lg">
              {isPlaying ? "Playing..." : "🗣️ “How many pens do you have?”"}
            </span>
          </button>
        </div>

        <div className="space-y-3">
          <button 
            onClick={() => handleSelect('one')}
            className={`w-full p-4 rounded-xl text-left border-2 transition-all flex items-center gap-3 ${selectedAnswer === 'one' ? 'border-brand-green bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}
          >
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedAnswer === 'one' ? 'border-brand-green bg-brand-green' : 'border-gray-300'}`}>
              {selectedAnswer === 'one' && <CheckCircle size={16} className="text-white" />}
            </div>
            <span className="font-bold text-gray-700">I have one pen.</span>
          </button>

          <button 
            onClick={() => handleSelect('two')}
            className={`w-full p-4 rounded-xl text-left border-2 transition-all flex items-center gap-3 ${selectedAnswer === 'two' ? 'border-brand-green bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}
          >
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedAnswer === 'two' ? 'border-brand-green bg-brand-green' : 'border-gray-300'}`}>
              {selectedAnswer === 'two' && <CheckCircle size={16} className="text-white" />}
            </div>
            <span className="font-bold text-gray-700">I have two pens.</span>
          </button>

          <button 
            onClick={() => handleSelect('dunno')}
            className={`w-full p-4 rounded-xl text-left border-2 transition-all flex items-center gap-3 ${selectedAnswer === 'dunno' ? 'border-brand-purple bg-purple-50' : 'border-gray-200 hover:border-gray-300'}`}
          >
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedAnswer === 'dunno' ? 'border-brand-purple bg-brand-purple' : 'border-gray-300'}`}>
              {selectedAnswer === 'dunno' && <HelpCircle size={16} className="text-white" />}
            </div>
            <span className="font-bold text-gray-700">I don’t know.</span>
          </button>
        </div>
      </div>

      {/* Feedback Section */}
      {selectedAnswer && (
        <div className="bg-white p-6 rounded-3xl shadow-lg animate-bounce-in">
          {(selectedAnswer === 'one' || selectedAnswer === 'two') ? (
            <div className="text-center space-y-3">
              <div className="inline-block p-3 bg-brand-green/20 rounded-full text-brand-green">
                <ThumbsUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">👍 太棒了！</h3>
              <p className="text-gray-600">這是我們國小孩子 1 個月內就會自然說出口的句子</p>
            </div>
          ) : (
            <div className="text-center space-y-3">
              <div className="text-4xl">🙂</div>
              <h3 className="text-xl font-bold text-gray-800">沒關係，很多孩子都這樣</h3>
              <p className="text-gray-600">這正是我們第一堂課就會帶孩子開口說的內容</p>
            </div>
          )}
        </div>
      )}

      {/* Fixed Bottom CTA for mobile feel */}
      <div className="sticky bottom-4 z-10 pt-4">
        <Button onClick={onNext} className="shadow-2xl">
          👉 看看孩子怎麼學會開口
        </Button>
      </div>
    </div>
  );
};