import React from 'react';
import { Button } from './Button';

interface Props {
  onNext: () => void;
}

export const Page3_Process: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="text-center space-y-2">
        <h1 className="text-2xl font-extrabold text-gray-800">
          孩子在課堂上的每 60 分鐘，<br/><span className="text-brand-purple">都有目的</span>
        </h1>
      </header>

      <div className="relative pl-4 space-y-8 before:absolute before:left-8 before:top-4 before:bottom-4 before:w-1 before:bg-gray-100">
        
        {/* Step 1 */}
        <div className="relative pl-12">
          <div className="absolute left-0 top-0 bg-brand-green text-white w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-green-200 z-10 border-4 border-white">
            🟢
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg text-brand-green mb-1">暖身 10 分鐘</h3>
            <p className="text-gray-800 font-bold mb-2">英文遊戲 ＋ 簡單對話</p>
            <p className="text-sm text-gray-500">孩子在笑，但其實在反覆說句型</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative pl-12">
          <div className="absolute left-0 top-0 bg-brand-blue text-white w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-200 z-10 border-4 border-white">
            🔵
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg text-brand-blue mb-1">核心 25 分鐘</h3>
            <p className="text-gray-800 font-bold mb-2">情境引導 ＋ 老師示範</p>
            <p className="text-sm text-gray-500">孩子不是背，是「真的在用英文」</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative pl-12">
          <div className="absolute left-0 top-0 bg-brand-purple text-white w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-purple-200 z-10 border-4 border-white">
            🟣
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg text-brand-purple mb-1">任務 15 分鐘</h3>
            <p className="text-gray-800 font-bold mb-2">闖關、合作、角色扮演</p>
            <div className="bg-brand-purple/10 p-2 rounded-lg inline-block">
              <p className="text-xs text-brand-purple font-bold">👉 不開口說英文，過不了關</p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative pl-12">
          <div className="absolute left-0 top-0 bg-brand-orange text-white w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-orange-200 z-10 border-4 border-white">
            🟠
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg text-brand-orange mb-1">回饋 10 分鐘</h3>
            <p className="text-gray-800 font-bold mb-2">老師具體告訴孩子：</p>
            <p className="text-sm text-gray-500">「你今天做到了什麼」</p>
          </div>
        </div>

      </div>

      <div className="bg-gray-800 text-white p-6 rounded-2xl text-center shadow-xl transform rotate-1">
        <p className="font-bold text-lg leading-relaxed">
          我們在乎的不是孩子學多少，<br/>
          而是他<span className="text-brand-yellow">敢不敢繼續學下去</span>。
        </p>
      </div>

      <div className="sticky bottom-4 z-10 pt-4">
        <Button onClick={onNext}>
          👉 讓孩子試上一堂看看
        </Button>
      </div>
    </div>
  );
};