export type Language = 'es' | 'en' | 'fr';

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, section?: string) => string;
}
