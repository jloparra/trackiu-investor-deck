import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.tsx';
import SlideWrapper from '../SlideWrapper.tsx';

const Slide7 = () => {
  const { t } = useLanguage();
  const competitors = [
    { name: 'Xsens', price: '€50K+', target: t('slide7_target1', 'slides'), limitations: t('slide7_limits1', 'slides'), advantage: t('slide7_advantage1', 'slides') },
    { name: 'Technaid', price: '€30K+', target: t('slide7_target2', 'slides'), limitations: t('slide7_limits2', 'slides'), advantage: t('slide7_advantage2', 'slides') },
    { name: 'Noraxon', price: '€25K+', target: t('slide7_target3', 'slides'), limitations: t('slide7_limits3', 'slides'), advantage: t('slide7_advantage3', 'slides') },
    { name: 'ISEN', price: '€15K+', target: t('slide7_target4', 'slides'), limitations: t('slide7_limits4', 'slides'), advantage: t('slide7_advantage4', 'slides') },
    { name: 'TrackIU', price: '€450 + €20/mes', target: t('slide7_target5', 'slides'), limitations: t('slide7_limits5', 'slides'), advantage: t('slide7_advantage5', 'slides') }
  ];
  return (
    <SlideWrapper>
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#7DD3DB]/50 p-6 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A90A4] mb-8">{t('slide7_title', 'slides')}</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
                <thead className="bg-[#4A90A4] text-white">
                    <tr>
                        <th className="p-3">{t('slide7_h1', 'slides')}</th>
                        <th className="p-3">{t('slide7_h2', 'slides')}</th>
                        <th className="p-3">{t('slide7_h3', 'slides')}</th>
                        <th className="p-3">{t('slide7_h4', 'slides')}</th>
                        <th className="p-3">{t('slide7_h5', 'slides')}</th>
                    </tr>
                </thead>
                <tbody className="bg-white text-[#2B5F75]">
                    {competitors.map((c, index) => (
                        <tr key={c.name} className={`border-b border-gray-200 last:border-b-0 ${index === competitors.length - 1 ? 'bg-teal-100 font-bold' : ''}`}>
                            <td className="p-3">{c.name}</td>
                            <td className="p-3">{c.price}</td>
                            <td className="p-3">{c.target}</td>
                            <td className="p-3">{c.limitations}</td>
                            <td className="p-3">{c.advantage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide7;