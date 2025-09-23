import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.tsx';
import SlideWrapper from '../SlideWrapper.tsx';

const Slide10 = () => {
  const { t } = useLanguage();
  const CheckIcon = () => (
      <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
  );
  const RoadmapPhase = ({ title, items }: { title: string; items: string[] }) => (
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80">
          <h3 className="text-xl font-semibold text-[#5CBCC8] mb-4">{title}</h3>
          <ul className="space-y-3 text-gray-600">
              {items.map((item, index) => (
                  <li key={index} className="flex items-start"><CheckIcon />{item}</li>
              ))}
          </ul>
      </div>
  );
  return (
      <SlideWrapper>
          <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#7DD3DB]/50 p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A90A4] mb-8">{t('slide10_title', 'slides')}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-8">
                      <RoadmapPhase title={t('slide10_p1_title', 'slides')} items={[t('slide10_p1_i1', 'slides'), t('slide10_p1_i2', 'slides')]} />
                      <RoadmapPhase title={t('slide10_p2_title', 'slides')} items={[t('slide10_p2_i1', 'slides'), t('slide10_p2_i2', 'slides')]} />
                  </div>
                  <div className="space-y-8 md:mt-12">
                       <RoadmapPhase title={t('slide10_p3_title', 'slides')} items={[t('slide10_p3_i1', 'slides'), t('slide10_p3_i2', 'slides')]} />
                       <RoadmapPhase title={t('slide10_p4_title', 'slides')} items={[t('slide10_p4_i1', 'slides'), t('slide10_p4_i2', 'slides')]} />
                  </div>
              </div>
          </div>
      </SlideWrapper>
  );
};

export default Slide10;