import React from 'react';
import { useLanguage } from '../../hooks/useLanguage.tsx';
import SlideWrapper from '../SlideWrapper.tsx';

const Slide6 = () => {
    const { t } = useLanguage();
    const productData = [
        { year: 2026, newKits: '1,200', totalKits: '1,200', activeUsers: '1,560' },
        { year: 2027, newKits: '4,000', totalKits: '5,200', activeUsers: '6,760' },
        { year: 2028, newKits: '12,000', totalKits: '17,200', activeUsers: '22,360' },
        { year: 2029, newKits: '28,000', totalKits: '45,200', activeUsers: '58,760' },
    ];
    const revenueData = [
        { year: 2026, hardware: '540,000', saas: '187,200', total: '727,200' },
        { year: 2027, hardware: '1,800,000', saas: '811,200', total: '2,611,200' },
        { year: 2028, hardware: '5,400,000', saas: '2,683,200', total: '8,083,200' },
        { year: 2029, hardware: '12,600,000', saas: '7,051,200', total: '19,651,200' },
    ];
    return (
        <SlideWrapper>
            <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#7DD3DB]/50 p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4A90A4] mb-8">{t('slide6_title', 'slides')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-center text-[#4A90A4] mb-4">{t('slide6_table1_title', 'slides')}</h3>
                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                            <table className="w-full text-center text-sm">
                                <thead className="bg-[#4A90A4] text-white">
                                    <tr>
                                        <th className="p-3 font-semibold">{t('slide6_table1_h1', 'slides')}</th>
                                        <th className="p-3 font-semibold">{t('slide6_table1_h2', 'slides')}</th>
                                        <th className="p-3 font-semibold">{t('slide6_table1_h3', 'slides')}</th>
                                        <th className="p-3 font-semibold">{t('slide6_table1_h4', 'slides')}</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white text-[#2B5F75]">
                                    {productData.map((row) => (
                                        <tr key={row.year} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                                            <td className="py-3 px-2 font-bold text-[#4A90A4]">{row.year}</td>
                                            <td className="py-3 px-2">{row.newKits}</td>
                                            <td className="py-3 px-2">{row.totalKits}</td>
                                            <td className="py-3 px-2">{row.activeUsers}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-center text-[#4A90A4] mb-4">{t('slide6_table2_title', 'slides')}</h3>
                         <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                            <table className="w-full text-center text-sm">
                                <thead className="bg-[#4A90A4] text-white">
                                    <tr>
                                        <th className="p-3 font-semibold">{t('slide6_table2_h1', 'slides')}</th>
                                        <th className="p-3 font-semibold">{t('slide6_table2_h2', 'slides')}</th>
                                        <th className="p-3 font-semibold">{t('slide6_table2_h3', 'slides')}</th>
                                        <th className="p-3 font-semibold">{t('slide6_table2_h4', 'slides')}</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white text-[#2B5F75]">
                                    {revenueData.map((row) => (
                                        <tr key={row.year} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                                            <td className="py-3 px-2 font-bold text-[#4A90A4]">{row.year}</td>
                                            <td className="py-3 px-2">€{row.hardware}</td>
                                            <td className="py-3 px-2">€{row.saas}</td>
                                            <td className="py-3 px-2">€{row.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200/80 pt-6">
                    <h3 className="text-xl font-semibold text-center text-[#4A90A4] mb-4">{t('slide6_metrics_title', 'slides')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200/80">
                            <p className="font-bold text-2xl text-[#2B5F75]">{t('slide6_metric1_value', 'slides')}</p>
                            <p className="text-sm text-gray-600">{t('slide6_metric1_label', 'slides')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200/80">
                            <p className="font-bold text-2xl text-[#2B5F75]">{t('slide6_metric2_value', 'slides')}</p>
                            <p className="text-sm text-gray-600">{t('slide6_metric2_label', 'slides')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200/80">
                            <p className="font-bold text-2xl text-[#2B5F75]">{t('slide6_metric3_value', 'slides')}</p>
                            <p className="text-sm text-gray-600">{t('slide6_metric3_label', 'slides')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};

export default Slide6;