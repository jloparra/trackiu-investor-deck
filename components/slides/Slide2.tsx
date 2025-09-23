import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.tsx';
import SlideWrapper from '../SlideWrapper.tsx';

const Slide2 = () => {
  const { t } = useLanguage();
  return (
    <SlideWrapper>
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#7DD3DB]/50 p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A90A4] mb-8">{t('slide2_title', 'slides')}</h2>
        <p className="text-center text-lg mb-8 text-gray-700 max-w-3xl mx-auto bg-teal-50 rounded-lg p-4">{t('slide2_summary', 'slides')}</p>
        
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80">
            <h3 className="text-xl font-semibold text-[#5CBCC8] mb-2">{t('slide2_card1_title', 'slides')}</h3>
            <p className="text-gray-600 text-sm">{t('slide2_card1_text', 'slides')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80">
            <h3 className="text-xl font-semibold text-[#5CBCC8] mb-2">{t('slide2_card2_title', 'slides')}</h3>
            <p className="text-gray-600 text-sm">{t('slide2_card2_text', 'slides')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80">
            <h3 className="text-xl font-semibold text-[#5CBCC8] mb-2">{t('slide2_card3_title', 'slides')}</h3>
            <p className="text-gray-600 text-sm">{t('slide2_card3_text', 'slides')}</p>
          </div>
        </div>
        
        <p className="text-center mt-10 text-base text-gray-700 bg-teal-50 rounded-lg p-4"><span className="font-bold text-[#4A90A4]">{t('slide2_market_label', 'slides')}:</span> {t('slide2_market_text', 'slides')}</p>
      </div>
    </SlideWrapper>
  );
};

export default Slide2;