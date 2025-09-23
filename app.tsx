import React from 'react';
import { LanguageProvider } from './hooks/useLanguage.tsx';
import Header from './components/Header.tsx';
import { slides } from './content/slides.ts';
import { OnboardingNotification } from './components/OnboardingNotification.tsx';

const App = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [showNotification, setShowNotification] = React.useState(false);
  const totalSlides = slides.length;

  React.useEffect(() => {
    const hasSeenNotification = sessionStorage.getItem('hasSeenNotification');
    if (!hasSeenNotification) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
        sessionStorage.setItem('hasSeenNotification', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const goToNextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(totalSlides - 1);
      } else if (!isNaN(parseInt(e.key)) && e.key >= '1' && e.key <= '9') {
        e.preventDefault();
        const slideIndex = parseInt(e.key) - 1;
        if (slideIndex < totalSlides) {
            setCurrentSlide(slideIndex);
        }
      }
    };
    
    let clickCount = 0;
    let clickTimeout;

    const handleMouseClick = (e) => {
      if (e.target.closest('a, button')) return;
      
      clickCount++;
      if (clickCount === 1) {
          clickTimeout = setTimeout(() => {
              clickCount = 0;
          }, 500);
      } else if (clickCount === 3) {
          clearTimeout(clickTimeout);
          clickCount = 0;
          goToNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleMouseClick);
      if(clickTimeout) clearTimeout(clickTimeout);
    };
  }, [goToNextSlide, goToPrevSlide, totalSlides]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
      <div className="flex flex-col w-full h-screen overflow-hidden bg-gradient-to-b from-[#e0f7fa] to-[#e0f2f1] text-[#2B5F75]">
        <Header
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onNext={goToNextSlide}
          onPrev={goToPrevSlide}
        />
        <main className="w-full flex-grow min-h-0 overflow-y-auto">
            <CurrentSlideComponent />
        </main>
        {showNotification && <OnboardingNotification />}
      </div>
  );
};

const AppWrapper = () => (
    <LanguageProvider>
        <App />
    </LanguageProvider>
);

export default AppWrapper;