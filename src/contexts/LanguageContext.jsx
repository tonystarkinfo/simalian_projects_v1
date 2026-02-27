import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from '../translations';

const STORAGE_KEY = 'simalian_lang';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return translations[stored] ? stored : 'en';
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (_) {}
  }, [language]);

  const setLanguage = useCallback((lang) => {
    if (translations[lang]) setLanguageState(lang);
  }, []);

  const t = useCallback((key) => {
    const keys = key.split('.');
    const fallbackLangs = [language, 'en', 'es'];
    for (const lang of fallbackLangs) {
      const dict = translations[lang];
      if (!dict) continue;
      let value = dict;
      for (const k of keys) {
        value = value?.[k];
      }
      if (typeof value === 'string') return value;
    }
    return key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
