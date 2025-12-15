import React, { useState } from 'react';
import { Button } from './Button';
import { QuizQuestion } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  onNext: () => void;
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Q1｜上課時，孩子比較常：",
    options: [
      { label: "想回答、敢嘗試", icon: "🙋‍♂️", value: "active" },
      { label: "安靜聽、慢慢想", icon: "👀", value: "quiet" }
    ]
  },
  {
    id: 2,
    question: "Q2｜遇到英文時，孩子會：",
    options: [
      { label: "講錯也沒關係", icon: "😆", value: "active" },
      { label: "怕說錯", icon: "😳", value: "quiet" }
    ]
  },
  {
    id: 3,
    question: "Q3｜孩子最有反應的是：",
    options: [
      { label: "遊戲、活動", icon: "🎲", value: "active" },
      { label: "圖像、故事", icon: "📖", value: "quiet" }
    ]
  },
  {
    id: 4,
    question: "Q4｜回家後孩子比較會說：",
    options: [
      { label: "「今天很好玩」", icon: "🎉", value: "active" },
      { label: "「今天有寫作業」", icon: "📝", value: "quiet" }
    ]
  }
];

export const Page2_Quiz: React.FC<Props> = ({ onNext }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="space-y-6 animate-fade-in text-center">
         <header className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-800">測驗結果分析</h1>
        </header>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-brand-green relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-brand-green/20 w-24 h-24 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <p className="text-gray-500 font-bold mb-2">你的孩子是：</p>
            <h2 className="text-4xl font-extrabold text-brand-green mb-6 flex items-center justify-center gap-2">
              <span>🌱</span> 慢熱安心型
            </h2>
            
            <div className="text-left bg-gray-50 p-5 rounded-2xl mb-6">
              <p className="text-gray-700 leading-relaxed font-medium">
                這類孩子不是不會，<br/>
                而是需要<span className="bg-brand-yellow px-1 rounded mx-1">安全感</span>才敢開口。
              </p>
            </div>

            <div className="space-y-3 text-left">
              <h3 className="text-gray-400 font-bold text-sm">我們的課程會：</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-800 font-bold">
                  <CheckIcon /> 小班制
                </li>
                <li className="flex items-center gap-2 text-gray-800 font-bold">
                  <CheckIcon /> 老師等孩子，不催促
                </li>
                <li className="flex items-center gap-2 text-gray-800 font-bold">
                  <CheckIcon /> 用遊戲引導，不強迫
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky bottom-4 z-10 pt-4">
          <Button onClick={onNext}>
            👉 看適合孩子的課程方式
          </Button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestionIndex];

  return (
    <div className="space-y-6 animate-fade-in h-full flex flex-col">
      <header className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-800">
          每個孩子，<br/>學英文的方式都不一樣
        </h1>
        <p className="text-gray-500 font-medium">回答 4 題，看看孩子比較適合哪種學習方式</p>
      </header>

      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 min-h-[300px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <span className="text-brand-purple font-black text-xl">0{currentQ.id}</span>
            <div className="flex gap-1">
              {questions.map((q) => (
                <div key={q.id} className={`h-2 w-2 rounded-full ${q.id <= currentQ.id ? 'bg-brand-purple' : 'bg-gray-200'}`} />
              ))}
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-8">{currentQ.question}</h3>

          <div className="space-y-4 mt-auto">
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={handleOptionClick}
                className="w-full p-4 rounded-2xl bg-gray-50 hover:bg-brand-purple/10 border-2 border-transparent hover:border-brand-purple transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{opt.icon}</span>
                  <span className="font-bold text-gray-700 text-lg">{opt.label}</span>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-brand-purple transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <div className="bg-brand-green/20 p-1 rounded-full text-brand-green">
    <Sparkles size={14} fill="currentColor" />
  </div>
);