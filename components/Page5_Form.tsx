import React, { useState } from 'react';
import { Button } from './Button';
import { FormData } from '../types';
import { ShieldCheck } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export const Page5_Form: React.FC<Props> = ({ onNext }) => {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    contact: '',
    grade: '',
    concerns: []
  });

  const concernsOptions = [
    "不敢開口", "沒自信", "聽不懂老師", "其他"
  ];

  const handleConcernToggle = (concern: string) => {
    setFormData(prev => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter(c => c !== concern)
        : [...prev.concerns, concern]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Submitting:", formData);
    onNext();
  };

  return (
    <div className="space-y-6 animate-fade-in pb-20">
      <header className="text-center space-y-2">
        <h1 className="text-2xl font-extrabold text-gray-800">
          先不用決定，<br/>讓孩子來<span className="text-brand-orange">體驗一次</span>
        </h1>
        <p className="text-gray-500 text-sm px-4">
          這堂課的目的只有一個：看看孩子在安心的環境下，能不能開口說英文
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
        
        {/* Name */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-bold">家長姓名</label>
          <input 
            required
            type="text" 
            placeholder="請輸入您的稱呼"
            className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
            value={formData.parentName}
            onChange={e => setFormData({...formData, parentName: e.target.value})}
          />
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-bold">聯絡方式 (手機或 LINE)</label>
          <input 
            required
            type="text" 
            placeholder="09xx-xxx-xxx"
            className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
            value={formData.contact}
            onChange={e => setFormData({...formData, contact: e.target.value})}
          />
        </div>

        {/* Grade */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-bold">孩子年級</label>
          <select 
            required
            className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
            value={formData.grade}
            onChange={e => setFormData({...formData, grade: e.target.value})}
          >
             <option value="" disabled>請選擇</option>
             <option value="preschool">幼兒園大班</option>
             <option value="g1-g2">國小 1-2 年級</option>
             <option value="g3-g4">國小 3-4 年級</option>
             <option value="g5-g6">國小 5-6 年級</option>
          </select>
        </div>

        {/* Concerns */}
        <div className="space-y-3">
          <label className="block text-gray-700 font-bold">想了解的重點 (可複選)</label>
          <div className="grid grid-cols-2 gap-3">
            {concernsOptions.map(opt => (
              <button
                type="button"
                key={opt}
                onClick={() => handleConcernToggle(opt)}
                className={`p-3 rounded-xl text-sm font-bold border-2 transition-all ${
                  formData.concerns.includes(opt)
                    ? 'border-brand-orange bg-brand-orange text-white'
                    : 'border-gray-200 text-gray-500 bg-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Safe Declaration */}
        <div className="bg-green-50 p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-brand-green font-bold text-sm">
            <ShieldCheck size={18} /> 安心聲明
          </div>
          <ul className="text-sm text-gray-600 space-y-1 ml-6 list-disc">
            <li>不推銷</li>
            <li>試聽不收費</li>
            <li>老師會先觀察孩子狀況</li>
          </ul>
        </div>

        <div className="sticky bottom-4 z-10 pt-2">
          <Button type="submit">
            👉 送出，預約體驗課
          </Button>
        </div>
      </form>
    </div>
  );
};