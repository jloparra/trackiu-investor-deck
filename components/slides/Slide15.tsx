import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.tsx';
import SlideWrapper from '../SlideWrapper.tsx';

const Slide15 = () => {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent("Hola, Jose, Soy______ Y quiero invertir en TrackIU");
  const whatsappUrl = `https://wa.me/34640742377?text=${whatsappMessage}`;
  return (
      <SlideWrapper>
          <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#7DD3DB]/50 p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A90A4] mb-8">{t('slide15_title', 'slides')}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80">
                      <h3 className="text-xl font-bold text-[#2B5F75]">José Luis Oñate Parra</h3>
                      <p className="text-[#4A90A4] font-semibold mb-4">CEO</p>
                      <div className="space-y-2 text-gray-700">
                          <p><strong>{t('slide15_email_label', 'slides')}:</strong> <a href="mailto:jl.onate@trackiu.com" className="text-teal-600 hover:underline">jl.onate@trackiu.com</a></p>
                          <p><strong>{t('slide15_phone_label', 'slides')}:</strong> <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">+34 640 74 23 77</a></p>
                      </div>
                  </div>
                   <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80">
                      <h3 className="text-xl font-semibold text-[#5CBCC8] mb-4">{t('slide15_structure_title', 'slides')}</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Holding AvenidasBox</li>
                          <li>AvenidasBox SL (Matriz)</li>
                          <li>TrackIU SL</li>
                      </ul>
                      <p className="mt-4 text-gray-700"><strong>{t('slide15_address_label', 'slides')}:</strong> Calle Bayona, 3, 28028, Madrid</p>
                  </div>
              </div>
              <div className="mt-8 text-center bg-gradient-to-r from-[#5CBCC8] to-[#4A90A4] text-white p-4 rounded-xl shadow-lg">
                  <p className="text-lg md:text-xl font-bold">{t('slide15_cta', 'slides')}</p>
              </div>
          </div>
      </SlideWrapper>
  );
};

export default Slide15;