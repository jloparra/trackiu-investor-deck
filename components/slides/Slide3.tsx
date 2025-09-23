import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.tsx';
import SlideWrapper from '../SlideWrapper.tsx';
import { useCountUp } from '../../hooks/useCountUp.tsx';

const Slide3 = () => {
  const { t } = useLanguage();
  const animatedPercentage = useCountUp(65, 1500);

  return (
    <SlideWrapper>
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#7DD3DB]/50 p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A90A4] mb-8">{t('slide3_title', 'slides')}</h2>
        
        <div className="bg-orange-50 border-l-4 border-orange-300 p-4 rounded-r-lg mb-8">
          <p className="text-gray-700 italic">"{t('slide3_quote', 'slides')}"</p>
          <p className="text-right text-sm font-semibold text-gray-600 mt-2">&mdash; {t('slide3_quote_author', 'slides')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gradient-to-br from-[#5CBCC8] to-[#4A90A4] text-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
            <span className="text-6xl font-bold">{animatedPercentage}%</span>
            <p className="mt-2 text-base">{t('slide3_card1_text', 'slides')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80 flex flex-col items-center justify-center">
             <span className="text-4xl mb-3">💰</span>
            <p className="text-gray-600">{t('slide3_card2_text', 'slides')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80 flex flex-col items-center justify-center">
            <span className="text-4xl mb-3">⚡️</span>
            <p className="text-gray-600">{t('slide3_card3_text', 'slides')}</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide3;