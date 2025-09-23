import React, { createContext, useState, useContext, useCallback } from 'react';
import { translations } from '../content/translations.ts';
import { Language, LanguageContextType } from '../types.ts';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = useCallback((key: string, section: string = 'slides'): string => {
    const sectionTranslations = translations[section];
    if (sectionTranslations?.[key]?.[language]) {
      return sectionTranslations[key][language];
    }
    console.warn(`Translation not found for key: ${key} in section: ${section} for language: ${language}`);
    // Fallback to Spanish or the key itself
    return sectionTranslations?.[key]?.['es'] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
