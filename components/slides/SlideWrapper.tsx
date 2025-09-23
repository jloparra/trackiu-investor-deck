import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.tsx';
import SlideWrapper from '../SlideWrapper.tsx';

const Slide4 = () => {
    const { t } = useLanguage();
    const CheckIcon = () => (
        <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
    );
    return (
      <SlideWrapper>
        <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#7DD3DB]/50 p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A90A4] mb-4">{t('slide4_title', 'slides')}</h2>
          <p className="text-center text-gray-600 mb-8">{t('slide4_subtitle', 'slides')}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80">
              <h3 className="text-xl font-semibold text-[#5CBCC8] mb-4">{t('slide4_hw_title', 'slides')}</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start"><CheckIcon /> {t('slide4_hw_1', 'slides')}</li>
                <li className="flex items-start"><CheckIcon /> {t('slide4_hw_2', 'slides')}</li>
                <li className="flex items-start"><CheckIcon /> {t('slide4_hw_3', 'slides')}</li>
                <li className="flex items-start"><CheckIcon /> {t('slide4_hw_4', 'slides')}</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80">
              <h3 className="text-xl font-semibold text-[#5CBCC8] mb-4">{t('slide4_sw_title', 'slides')}</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start"><CheckIcon /> {t('slide4_sw_1', 'slides')}</li>
                <li className="flex items-start"><CheckIcon /> {t('slide4_sw_2', 'slides')}</li>
                <li className="flex items-start"><CheckIcon /> {t('slide4_sw_3', 'slides')}</li>
                <li className="flex items-start"><CheckIcon /> {t('slide4_sw_4', 'slides')}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-stretch">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80 flex-1">
                  <h3 className="text-xl font-semibold text-[#5CBCC8] mb-4">{t('slide4_method_title', 'slides')}</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="flex items-start"><CheckIcon /> {t('slide4_method_1', 'slides')}</li>
                  <li className="flex items-start"><CheckIcon /> {t('slide4_method_2', 'slides')}</li>
                  <li className="flex items-start"><CheckIcon /> {t('slide4_method_3', 'slides')}</li>
                  <li className="flex items-start"><CheckIcon /> {t('slide4_method_4', 'slides')}</li>
                  </ul>
              </div>
              <div className="flex-1 md:flex-none md:w-1/3 bg-white p-6 rounded-xl shadow-md border border-gray-200/80 flex flex-col items-center justify-center text-center">
                  <img src="/assets/sensor.jpg" alt="TrackIU Sensor" className="rounded-lg mb-4 max-w-[150px] w-full" />
                  <p className="text-sm font-semibold text-gray-700">{t('slide4_sensor_text', 'slides')}</p>
              </div>
          </div>

          <div className="mt-8 text-center bg-gradient-to-r from-[#5CBCC8] to-[#4A90A4] text-white p-4 rounded-xl shadow-lg">
            <p className="text-lg md:text-xl font-bold">{t('slide4_price', 'slides')}</p>
          </div>
        </div>
      </SlideWrapper>
    );
};

export default Slide4;