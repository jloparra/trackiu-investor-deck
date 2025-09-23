import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.tsx';
import SlideWrapper from '../SlideWrapper.tsx';

const Slide16 = () => {
  const { t } = useLanguage();
  return (
      <SlideWrapper className="justify-center">
          <div className="w-full max-w-4xl bg-gradient-to-r from-[#5CBCC8] to-[#4A90A4] text-white rounded-2xl shadow-2xl p-12 md:p-20 text-center flex flex-col justify-center items-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">{t('slide16_thank_you', 'slides')}</h1>
              <p className="text-xl md:text-3xl font-light mb-12">TrackIU • 2025</p>
              <div className="w-24 h-1 bg-white/50 rounded-full mb-8"></div>
              <p className="text-xs md:text-sm">{t('slide1_disclaimer', 'slides')}</p>
          </div>
      </SlideWrapper>
  );
};

export default Slide16;