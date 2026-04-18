import { translations, type Language } from './i18n';

export const SITE_URL = 'https://dubinsky.studio';
export const LANGUAGE_OPTIONS: Language[] = ['RU', 'EN', 'UA'];

export const LANGUAGE_TO_LOCALE: Record<Language, 'ru' | 'en' | 'uk'> = {
  RU: 'ru',
  EN: 'en',
  UA: 'uk',
};

export const LANGUAGE_HOME_PATH: Record<Language, string> = {
  EN: '/',
  RU: '/ru/',
  UA: '/uk/',
};

type SeoEntry = {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
};

const SEO_BY_LANGUAGE: Record<Language, SeoEntry> = {
  EN: {
    title: 'Dubinsky Studio | Full-Cycle MVP & Product Design',
    description:
      'Full-cycle development studio for startups and ambitious teams. We launch turnkey MVPs, scalable product design systems, and conversion-focused digital experiences.',
    keywords:
      'mvp development, startup product design, full cycle development studio, web app development, ui ux design agency, react development, product engineering studio',
    ogTitle: 'Dubinsky Studio | MVP, Design & Product Engineering',
    ogDescription:
      'We design and build scalable MVPs, product systems, and digital experiences that are ready for growth.',
  },
  RU: {
    title: 'Dubinsky Studio | MVP, Дизайн и Разработка полного цикла',
    description:
      'Студия разработки полного цикла для стартапов и продуктовых команд. Создаем MVP под ключ, дизайн-системы и масштабируемые цифровые продукты с фокусом на рост.',
    keywords:
      'разработка mvp, студия разработки полного цикла, продуктовый дизайн, дизайн-система, веб разработка, react разработка, запуск стартапа',
    ogTitle: 'Dubinsky Studio | MVP, Дизайн и Продуктовая разработка',
    ogDescription:
      'Проектируем и запускаем MVP, дизайн-системы и цифровые продукты, готовые к росту.',
  },
  UA: {
    title: 'Dubinsky Studio | MVP, Дизайн та Розробка повного циклу',
    description:
      'Студія розробки повного циклу для стартапів і продуктових команд. Створюємо MVP під ключ, дизайн-системи та масштабовані цифрові продукти з фокусом на зростання.',
    keywords:
      'розробка mvp, студія розробки повного циклу, продуктовий дизайн, дизайн система, веб розробка, react розробка, запуск стартапу',
    ogTitle: 'Dubinsky Studio | MVP, Дизайн та Продуктова розробка',
    ogDescription:
      'Проєктуємо і запускаємо MVP, дизайн-системи та цифрові продукти, готові до зростання.',
  },
};

export function getHomePathForLanguage(language: Language) {
  return LANGUAGE_HOME_PATH[language];
}

export function getLanguageFromPathname(pathname: string): Language {
  if (pathname.startsWith('/ru')) return 'RU';
  if (pathname.startsWith('/uk')) return 'UA';
  return 'EN';
}

export function getSeoForLanguage(language: Language) {
  const locale = LANGUAGE_TO_LOCALE[language];
  const path = getHomePathForLanguage(language);
  const canonical = new URL(path, SITE_URL).toString();

  return {
    ...SEO_BY_LANGUAGE[language],
    locale,
    canonical,
    path,
  };
}

export function buildStructuredData(language: Language) {
  const seo = getSeoForLanguage(language);
  const faqSource = translations[language].faq;

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dubinsky Studio',
    url: SITE_URL,
    logo: `${SITE_URL}/preview.png`,
    sameAs: ['https://t.me/dubinskystudio'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'hello@dubinsky.studio',
        availableLanguage: ['English', 'Russian', 'Ukrainian'],
      },
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dubinsky Studio',
    url: canonicalizePath(seo.path),
    description: seo.description,
    inLanguage: seo.locale,
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: seo.locale,
    mainEntity: [
      { name: faqSource.q1, acceptedAnswer: { text: faqSource.a1 } },
      { name: faqSource.q2, acceptedAnswer: { text: faqSource.a2 } },
      { name: faqSource.q3, acceptedAnswer: { text: faqSource.a3 } },
      { name: faqSource.q4, acceptedAnswer: { text: faqSource.a4 } },
      { name: faqSource.q5, acceptedAnswer: { text: faqSource.a5 } },
    ].map((entry) => ({
      '@type': 'Question',
      name: entry.name,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.acceptedAnswer.text,
      },
    })),
  };

  return [organization, website, faq];
}

function canonicalizePath(path: string) {
  return new URL(path, SITE_URL).toString();
}
