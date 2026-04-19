import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import { LanguageProvider, type Language } from '../src/i18n';
import { translations } from '../src/i18n/messages';
import { getSeoForLanguage } from '../src/site';

const distDir = path.resolve(process.cwd(), 'dist');
const templatePath = path.join(distDir, 'index.html');

const routes: Array<{ lang: Language; output: string }> = [
  { lang: 'EN', output: 'index.html' },
  { lang: 'RU', output: path.join('ru', 'index.html') },
  { lang: 'UA', output: path.join('uk', 'index.html') },
];

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function escapeAttribute(value: string) {
  return escapeHtml(value).replaceAll('"', '&quot;');
}

function escapeJson(value: string) {
  return value.replaceAll('<', '\\u003c');
}

function renderApp(lang: Language) {
  return renderToString(
    <React.StrictMode>
      <LanguageProvider initialLang={lang} initialMessages={translations[lang]}>
        <App />
      </LanguageProvider>
    </React.StrictMode>,
  );
}

function renderPage(template: string, lang: Language) {
  const seo = getSeoForLanguage(lang);
  const locale = seo.locale;
  const appHtml = renderApp(lang);
  const translationsPayload = escapeJson(
    JSON.stringify({
      lang,
      messages: translations[lang],
    }),
  );

  return template
    .replace(/<html lang="[^"]*">/, `<html lang="${escapeAttribute(locale)}">`)
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeAttribute(seo.description)}" />`,
    )
    .replace(
      /<meta name="keywords" content="[^"]*"\s*\/>/,
      `<meta name="keywords" content="${escapeAttribute(seo.keywords)}" />`,
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${escapeAttribute(seo.ogTitle)}" />`,
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escapeAttribute(seo.ogDescription)}" />`,
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root" data-lang="${escapeAttribute(lang)}">${appHtml}</div>`,
    )
    .replace(
      '</body>',
      `<script id="site-translations" type="application/json">${translationsPayload}</script></body>`,
    );
}

async function main() {
  const template = await fs.readFile(templatePath, 'utf8');

  await Promise.all(
    routes.map(async ({ lang, output }) => {
      const outPath = path.join(distDir, output);
      await fs.mkdir(path.dirname(outPath), { recursive: true });
      await fs.writeFile(outPath, renderPage(template, lang), 'utf8');
    }),
  );
}

main().catch((error) => {
  console.error('Prerender failed:', error);
  process.exitCode = 1;
});
