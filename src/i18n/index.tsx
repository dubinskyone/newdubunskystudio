import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getSeoForLanguage } from '../site';

export type Language = 'RU' | 'EN' | 'UA';

export type TranslationMessages = Record<string, Record<string, string>>;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string, subkey?: string) => string;
}

type EmbeddedTranslationsPayload = {
  lang?: Language;
  messages?: TranslationMessages;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectInitialLanguage(initialLang?: Language): Language {
  if (initialLang) return initialLang;
  if (typeof window === 'undefined') return 'EN';

  const rootLanguage = document.getElementById('root')?.dataset.lang as Language | undefined;
  if (rootLanguage) return rootLanguage;

  const pathLanguage = window.location.pathname.startsWith('/ru')
    ? 'RU'
    : window.location.pathname.startsWith('/uk')
      ? 'UA'
      : 'EN';
  if (pathLanguage) return pathLanguage;

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ru')) return 'RU';
  if (browserLang.startsWith('uk') || browserLang.startsWith('ua')) return 'UA';
  return 'EN';
}

function readEmbeddedTranslations(): EmbeddedTranslationsPayload | null {
  if (typeof document === 'undefined') return null;

  const script = document.getElementById('site-translations');
  if (!script?.textContent) return null;

  try {
    return JSON.parse(script.textContent) as EmbeddedTranslationsPayload;
  } catch {
    return null;
  }
}

export const LanguageProvider = ({
  children,
  initialLang,
  initialMessages,
}: {
  children: ReactNode;
  initialLang?: Language;
  initialMessages?: TranslationMessages;
}) => {
  const embeddedTranslations = readEmbeddedTranslations();
  const [lang, setLang] = useState<Language>(() => {
    return initialLang ?? embeddedTranslations?.lang ?? detectInitialLanguage(initialLang);
  });
  const [messages] = useState<TranslationMessages>(() => {
    return initialMessages ?? embeddedTranslations?.messages ?? {};
  });

  React.useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();

    const seo = getSeoForLanguage(lang);
    const metaDesc = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');

    document.title = seo.title;
    if (metaDesc) metaDesc.setAttribute('content', seo.description);
    if (ogTitle) ogTitle.setAttribute('content', seo.ogTitle);
    if (ogDesc) ogDesc.setAttribute('content', seo.ogDescription);
  }, [lang]);

  const t = (key: string, subkey?: string): string => {
    const section = messages[key];
    if (!section) return subkey ?? key;
    if (subkey && section[subkey]) return section[subkey];
    return subkey ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
