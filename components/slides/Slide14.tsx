import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.tsx';
import SlideWrapper from '../SlideWrapper.tsx';

const Slide14 = () => {
  const { t } = useLanguage();
  const CheckIcon = () => (
      <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
  );
  const ImpactCard = ({ icon, title, items }: { icon: string; title: string; items: string[] }) => (
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80">
          <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{icon}</span>
              <h3 className="text-xl font-semibold text-[#5CBCC8]">{title}</h3>
          </div>
          <ul className="space-y-2 text-gray-600 text-sm">
              {items.map((item, index) => <li key={index} className="flex items-start"><CheckIcon /> {item}</li>)}
          </ul>
      </div>
  );
  const impacts = [
      { icon: '🏥', title: t('slide14_card1_title', 'slides'), items: [t('slide14_card1_i1', 'slides'), t('slide14_card1_i2', 'slides'), t('slide14_card1_i3', 'slides')] },
      { icon: '🌍', title: t('slide14_card2_title', 'slides'), items: [t('slide14_card2_i1', 'slides'), t('slide14_card2_i2', 'slides'), t('slide14_card2_i3', 'slides')] },
      { icon: '💡', title: t('slide14_card3_title', 'slides'), items: [t('slide14_card3_i1', 'slides'), t('slide14_card3_i2', 'slides'), t('slide14_card3_i3', 'slides')] },
      { icon: '📈', title: t('slide14_card4_title', 'slides'), items: [t('slide14_card4_i1', 'slides'), t('slide14_card4_i2', 'slides'), t('slide14_card4_i3', 'slides')] },
  ];
  return (
      <SlideWrapper>
          <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#7DD3DB]/50 p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A90A4] mb-8">{t('slide14_title', 'slides')}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                  {impacts.map(impact => <ImpactCard key={impact.title} {...impact} />)}
              </div>
          </div>
      </SlideWrapper>
  );
};

export default Slide14;