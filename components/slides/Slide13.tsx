import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.tsx';
import SlideWrapper from '../SlideWrapper.tsx';

const Slide13 = () => {
  const { t } = useLanguage();
  const CheckIcon = () => (
      <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
  );
  const RiskCard = ({ title, probability, mitigator }: { title: string; probability: string; mitigator: string }) => {
      const { t } = useLanguage();
      return (
          <div className="bg-orange-50 border-l-4 border-orange-300 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-orange-800">{title}</h3>
              <p className="text-sm text-orange-600 mb-2">{t('slide13_prob_label', 'slides')}: {probability}</p>
              <p className="text-gray-700">{t('slide13_miti_label', 'slides')}: {mitigator}</p>
          </div>
      );
  };
  const DefenseItem = ({ label, text }: { label: string; text: string }) => (
      <div className="flex items-start">
          <CheckIcon />
          <div>
              <p className="font-semibold text-gray-800">{label}</p>
              <p className="text-sm text-gray-600">{text}</p>
          </div>
      </div>
  );
  const risks = [
      { title: t('slide13_risk1_title', 'slides'), probability: t('slide13_prob_medium', 'slides'), mitigator: t('slide13_risk1_miti', 'slides') },
      { title: t('slide13_risk2_title', 'slides'), probability: t('slide13_prob_medium', 'slides'), mitigator: t('slide13_risk2_miti', 'slides') },
      { title: t('slide13_risk3_title', 'slides'), probability: t('slide13_prob_medium', 'slides'), mitigator: t('slide13_risk3_miti', 'slides') },
      { title: t('slide13_risk4_title', 'slides'), probability: t('slide13_prob_low', 'slides'), mitigator: t('slide13_risk4_miti', 'slides') },
  ];
  return (
      <SlideWrapper>
          <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#7DD3DB]/50 p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A90A4] mb-8">{t('slide13_title', 'slides')}</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {risks.map(risk => <RiskCard key={risk.title} {...risk} />)}
              </div>
               <div className="mt-8 bg-white p-6 rounded-xl shadow-md border border-gray-200/80">
                  <h3 className="text-xl font-semibold text-center text-[#5CBCC8] mb-6">{t('slide13_defense_title', 'slides')}</h3>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-left max-w-4xl mx-auto">
                      <DefenseItem label={t('slide13_defense1_label', 'slides')} text={t('slide13_defense1_text', 'slides')} />
                      <DefenseItem label={t('slide13_defense2_label', 'slides')} text={t('slide13_defense2_text', 'slides')} />
                      <DefenseItem label={t('slide13_defense3_label', 'slides')} text={t('slide13_defense3_text', 'slides')} />
                      <DefenseItem label={t('slide13_defense4_label', 'slides')} text={t('slide13_defense4_text', 'slides')} />
                  </div>
              </div>
          </div>
      </SlideWrapper>
  );
};

export default Slide13;