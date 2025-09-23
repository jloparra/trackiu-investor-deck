import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.tsx';
import SlideWrapper from '../SlideWrapper.tsx';
import { useCountUp } from '../../hooks/useCountUp.tsx';

const Slide11 = () => {
  const { t } = useLanguage();
  const usersCount = useCountUp(3000000, 2000);
  const arrCount = useCountUp(100000000, 2000);

  const formatUsers = (val: number) => {
    // FIX: Ensure the function always returns a string to match the MetricCard's `value` prop type.
    if (val < 1000) return val.toString();
    if (val < 1000000) return `${(val / 1000).toFixed(0)}K`;
    return `${(val / 1000000).toFixed(1).replace('.0', '')}M`;
  };

  const formatArr = (val: number) => {
    if (val < 1000000) return `€${(val / 1000).toFixed(0)}K ARR`;
    return `€${(val / 1000000).toFixed(0)}M ARR`;
  };

  const CheckIcon = () => (
      <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
  );
  
  const MetricCard = ({ value, label, primary = false }: { value: string; label: string; primary?: boolean }) => (
      <div className={`p-6 rounded-xl shadow-lg text-center ${primary ? 'bg-gradient-to-r from-[#5CBCC8] to-[#4A90A4] text-white' : 'bg-white text-[#2B5F75] border border-gray-200/80'}`}>
          <p className="text-4xl md:text-5xl font-bold">{value}</p>
          <p className="mt-2 text-sm">{label}</p>
      </div>
  );

  return (
      <SlideWrapper>
          <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#7DD3DB]/50 p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A90A4] mb-8">{t('slide11_title', 'slides')}</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <MetricCard value={formatUsers(usersCount)} label={t('slide11_metric1', 'slides')} primary />
                  <MetricCard value={formatArr(arrCount)} label={t('slide11_metric2', 'slides')} primary />
                  <MetricCard value="15,000" label={t('slide11_metric3', 'slides')} />
                  <MetricCard value={t('slide11_metric4_value', 'slides')} label={t('slide11_metric4_label', 'slides')} />
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-xl shadow-md border border-gray-200/80">
                  <div className="text-center">
                      <h3 className="text-xl font-semibold text-[#5CBCC8] mb-4">{t('slide11_revolution_title', 'slides')}</h3>
                      <div className="flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-2 text-gray-600">
                          <span className="flex items-center"><CheckIcon /> {t('slide11_revolution_1', 'slides')}</span>
                          <span className="flex items-center"><CheckIcon /> {t('slide11_revolution_2', 'slides')}</span>
                          <span className="flex items-center"><CheckIcon /> {t('slide11_revolution_3', 'slides')}</span>
                      </div>
                  </div>
              </div>
          </div>
      </SlideWrapper>
  );
};

export default Slide11;