import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.tsx';
import SlideWrapper from '../SlideWrapper.tsx';

const Slide8 = () => {
    const { t } = useLanguage();
    const DifferentiatorCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200/80 text-center flex flex-col items-center">
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-lg font-semibold text-[#5CBCC8] mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
    const differentiators = [
        { icon: '🎯', title: t('slide8_card1_title', 'slides'), description: t('slide8_card1_text', 'slides') },
        { icon: '⚡️', title: t('slide8_card2_title', 'slides'), description: t('slide8_card2_text', 'slides') },
        { icon: '🔧', title: t('slide8_card3_title', 'slides'), description: t('slide8_card3_text', 'slides') },
        { icon: '💎', title: t('slide8_card4_title', 'slides'), description: t('slide8_card4_text', 'slides') },
        { icon: '🧠', title: t('slide8_card5_title', 'slides'), description: t('slide8_card5_text', 'slides') }
    ];
    return (
        <SlideWrapper>
            <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#7DD3DB]/50 p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A90A4] mb-8">{t('slide8_title', 'slides')}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {differentiators.slice(0, 3).map(d => <DifferentiatorCard key={d.title} {...d} />)}
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6 md:w-2/3 mx-auto">
                     {differentiators.slice(3).map(d => <DifferentiatorCard key={d.title} {...d} />)}
                </div>
            </div>
        </SlideWrapper>
    );
};

export default Slide8;