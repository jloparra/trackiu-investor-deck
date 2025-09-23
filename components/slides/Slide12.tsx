import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.tsx';
import SlideWrapper from '../SlideWrapper.tsx';

const Slide12 = () => {
  const { t } = useLanguage();
  const [pulse, setPulse] = React.useState(false);

  React.useEffect(() => {
    // Trigger animation on mount
    setPulse(true);
    const timer = setTimeout(() => setPulse(false), 1500); // Animation duration
    return () => clearTimeout(timer);
  }, []);

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
  );

  const FundItem = ({ title, amount, percentage, description }: { title: string; amount: string; percentage: string; description: string }) => (
      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200/80 flex justify-between items-center">
          <div>
              <p className="font-semibold text-[#2B5F75]">{title}</p>
              <p className="text-sm text-gray-500">{description}</p>
          </div>
          <div className="text-right">
              <p className="font-bold text-[#4A90A4]">{amount}</p>
              <p className="text-sm text-gray-500">{percentage}</p>
          </div>
      </div>
  );

  const funds = [
      { title: t('slide12_fund1_title', 'slides'), amount: '€30,000', percentage: '2%', description: t('slide12_fund1_desc', 'slides') },
      { title: t('slide12_fund2_title', 'slides'), amount: '€420,000', percentage: '28%', description: t('slide12_fund2_desc', 'slides') },
      { title: t('slide12_fund3_title', 'slides'), amount: '€150,000', percentage: '10%', description: t('slide12_fund3_desc', 'slides') },
      { title: t('slide12_fund4_title', 'slides'), amount: '€150,000', percentage: '10%', description: t('slide12_fund4_desc', 'slides') },
      { title: t('slide12_fund5_title', 'slides'), amount: '€250,000', percentage: '17%', description: t('slide12_fund5_desc', 'slides') },
      { title: t('slide12_fund6_title', 'slides'), amount: '€250,000', percentage: '17%', description: t('slide12_fund6_desc', 'slides') },
      { title: t('slide12_fund7_title', 'slides'), amount: '€250,000', percentage: '17%', description: t('slide12_fund7_desc', 'slides') },
  ];

  return (
      <SlideWrapper>
          <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#7DD3DB]/50 p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A90A4] mb-4">{t('slide12_title', 'slides')}</h2>
              <div className={`text-center bg-gradient-to-r from-[#5CBCC8] to-[#4A90A4] text-white p-4 rounded-xl shadow-lg mb-8 ${pulse ? 'animate-pulse-once' : ''}`}>
                  <p className="text-2xl md:text-3xl font-bold">{t('slide12_objective', 'slides')}</p>
              </div>
              <h3 className="text-xl font-semibold text-center text-[#5CBCC8] mb-6">{t('slide12_distribution_title', 'slides')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                  {funds.map(fund => <FundItem key={fund.title} {...fund} />)}
              </div>

              <div className="mt-8 border-t border-gray-200/80 pt-8">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-[#7DD3DB]/50">
                      <h3 className="text-xl font-semibold text-center text-[#5CBCC8] mb-4">{t('slide16_investors_title', 'slides')}</h3>
                       <ul className="space-y-3 text-gray-600 text-left max-w-md mx-auto">
                          <li className="flex items-start"><CheckIcon /> {t('slide16_investors_1', 'slides')}</li>
                          <li className="flex items-start"><CheckIcon /> {t('slide16_investors_2', 'slides')}</li>
                          <li className="flex items-start"><CheckIcon /> {t('slide16_investors_3', 'slides')}</li>
                          <li className="flex items-start"><CheckIcon /> {t('slide16_investors_4', 'slides')}</li>
                       </ul>
                  </div>
              </div>
          </div>
      </SlideWrapper>
  );
};

export default Slide12;
