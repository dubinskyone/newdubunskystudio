import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider, type Language } from './i18n';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

function detectLanguage(rootLang?: Language): Language {
  if (rootLang) return rootLang;
  if (window.location.pathname.startsWith('/ru')) return 'RU';
  if (window.location.pathname.startsWith('/uk')) return 'UA';
  return 'EN';
}

async function ensureTranslations(lang: Language) {
  if (document.getElementById('site-translations')) return;

  const { translations } = await import('./i18n/messages');
  const script = document.createElement('script');
  script.id = 'site-translations';
  script.type = 'application/json';
  script.textContent = JSON.stringify({
    lang,
    messages: translations[lang] ?? translations.EN,
  });
  document.body.appendChild(script);
}

async function mountApp() {
  const initialLang = detectLanguage(rootElement.dataset.lang as Language | undefined);
  await ensureTranslations(initialLang);

  const app = (
    <StrictMode>
      <LanguageProvider initialLang={initialLang}>
        <App />
      </LanguageProvider>
    </StrictMode>
  );

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app);
  } else {
    createRoot(rootElement).render(app);
  }
}

void mountApp();
