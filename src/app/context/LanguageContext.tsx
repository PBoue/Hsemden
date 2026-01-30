import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.slide': 'Folie',
    'nav.of': 'von',
    'nav.previous': 'Vorherige Folie',
    'nav.next': 'Nächste Folie',
    'nav.first': 'Zur ersten Folie',
    
    // Slide titles
    'slide.title': 'Titel',
    'slide.problem': 'Problemstellung',
    'slide.questions': 'Forschungsfragen',
    'slide.methodology': 'Methodik',
    'slide.stakeholders': 'Stakeholder',
    'slide.workpackages': 'Arbeitspakete',
    'slide.dataprotection': 'Datenschutz & Ethik',
    'slide.interdisciplinary': 'Interdisziplinäre Umsetzung',
    'slide.timeline': 'Phasenmodell',
    'slide.closing': 'Zusammenfassung',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.slide': 'Slide',
    'nav.of': 'of',
    'nav.previous': 'Previous slide',
    'nav.next': 'Next slide',
    'nav.first': 'Go to first slide',
    
    // Slide titles
    'slide.title': 'Title',
    'slide.problem': 'Problem Statement',
    'slide.questions': 'Research Questions',
    'slide.methodology': 'Methodology',
    'slide.stakeholders': 'Stakeholders',
    'slide.workpackages': 'Work Packages',
    'slide.dataprotection': 'Data Protection & Ethics',
    'slide.interdisciplinary': 'Interdisciplinary Implementation',
    'slide.timeline': 'Timeline',
    'slide.closing': 'Summary',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['de']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
