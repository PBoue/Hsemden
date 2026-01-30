import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
    ReactNode,
} from 'react';
import { de, en, type TranslationKey } from '@/i18n';

export type Language = 'de' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

const translations = { de, en } as const;

const LANGUAGE_STORAGE_KEY = 'presentation_language';

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
            if (stored === 'de' || stored === 'en') return stored;
            // Check browser preference
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('de')) return 'de';
        }
        return 'de'; // Default to German
    });

    // Persist language preference
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
            // Update html lang attribute
            document.documentElement.lang = language;
        }
    }, [language]);

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
    }, []);

    const t = useCallback(
        (key: TranslationKey): string => {
            return translations[language][key] || key;
        },
        [language],
    );

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
