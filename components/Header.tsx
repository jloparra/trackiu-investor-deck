import React from 'react';
import { useLanguage } from '../hooks/useLanguage.tsx';

interface HeaderProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentSlide, totalSlides, onPrev, onNext }) => {
  const { language, setLanguage } = useLanguage();
  const languages: ('es' | 'en' | 'fr')[] = ['es', 'en', 'fr'];

  const LanguageSwitcher = () => (
    <div className="flex items-center space-x-1 bg-white/50 rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-200 ${
            language === lang ? 'bg-[#5CBCC8] text-white' : 'text-[#2B5F75] hover:bg-[#7DD3DB]/50'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <header className="relative z-10 flex items-center justify-between p-4 md:p-6 bg-white/20 backdrop-blur-sm">
       <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="TrackIU Logo" className="h-8 w-auto hidden md:block" />
          <img src="/assets/logo-mobile.png" alt="TrackIU Logo" className="h-8 w-8 md:hidden" />
          <span className="text-2xl font-bold text-[#2B5F75] hidden md:inline">TrackIU</span>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={onPrev} className="p-2 rounded-full hover:bg-white/50 transition-colors" aria-label="Previous Slide">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4A90A4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-sm font-medium text-[#4A90A4] w-12 text-center">{`${currentSlide + 1} / ${totalSlides}`}</span>
        <button onClick={onNext} className="p-2 rounded-full hover:bg-white/50 transition-colors" aria-label="Next Slide">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4A90A4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex items-center space-x-3">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;