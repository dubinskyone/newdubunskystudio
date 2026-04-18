import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider, type Language } from './i18n';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const initialLang = rootElement.dataset.lang as Language | undefined;
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
