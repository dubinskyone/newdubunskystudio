import { useEffect } from 'react';
import { useLanguage } from '../i18n';

const SITE_URL = 'https://dubinsky.studio';
const DEFAULT_IMAGE = `${SITE_URL}/favicon.svg`;

const SEO_CONTENT = {
  RU: {
    lang: 'ru',
    locale: 'ru_RU',
    title: 'Dubinsky Studio | Разработка веб, mobile и AI-продуктов',
    description:
      'Dubinsky Studio проектирует и разрабатывает премиальные цифровые продукты: сайты, веб-платформы, мобильные приложения, AI-интеграции и интерфейсы для бизнеса.',
  },
  EN: {
    lang: 'en',
    locale: 'en_US',
    title: 'Dubinsky Studio | Web, Mobile and AI Product Development',
    description:
      'Dubinsky Studio designs and develops premium digital products: websites, web platforms, mobile apps, AI integrations and product interfaces for modern businesses.',
  },
  UA: {
    lang: 'uk',
    locale: 'uk_UA',
    title: 'Dubinsky Studio | Розробка веб, mobile та AI-продуктів',
    description:
      'Dubinsky Studio проєктує та розробляє преміальні цифрові продукти: сайти, веб-платформи, мобільні застосунки, AI-інтеграції та інтерфейси для бізнесу.',
  },
} as const;

function ensureMeta(selector: string, attributes: Record<string, string>) {
  let node = document.head.querySelector<HTMLMetaElement>(selector);

  if (!node) {
    node = document.createElement('meta');
    document.head.appendChild(node);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    node?.setAttribute(key, value);
  });

  return node;
}

function ensureLink(selector: string, rel: string) {
  let node = document.head.querySelector<HTMLLinkElement>(selector);

  if (!node) {
    node = document.createElement('link');
    node.rel = rel;
    document.head.appendChild(node);
  }

  return node;
}

export function SeoManager() {
  const { lang } = useLanguage();

  useEffect(() => {
    const seo = SEO_CONTENT[lang] ?? SEO_CONTENT.EN;

    document.documentElement.lang = seo.lang;
    document.title = seo.title;

    ensureMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    });

    ensureMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    });

    ensureMeta('meta[name="author"]', {
      name: 'author',
      content: 'Dubinsky Studio',
    });

    ensureMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });

    ensureMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Dubinsky Studio',
    });

    ensureMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title,
    });

    ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.description,
    });

    ensureMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: SITE_URL,
    });

    ensureMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: seo.locale,
    });

    ensureMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: DEFAULT_IMAGE,
    });

    ensureMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary',
    });

    ensureMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: seo.title,
    });

    ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: seo.description,
    });

    ensureMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: DEFAULT_IMAGE,
    });

    const canonical = ensureLink('link[rel="canonical"]', 'canonical');
    canonical.href = SITE_URL;

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Dubinsky Studio',
      url: SITE_URL,
      logo: `${SITE_URL}/logo-black.svg`,
      image: DEFAULT_IMAGE,
      description: seo.description,
      email: 'hello@dubinsky.studio',
      sameAs: ['https://t.me/dubinskystudio'],
      areaServed: 'Worldwide',
      inLanguage: seo.lang,
      serviceType: [
        'Web development',
        'Mobile app development',
        'Product design',
        'AI integration',
        'Frontend engineering',
      ],
    };

    let schemaNode = document.getElementById('structured-data');
    if (!schemaNode) {
      schemaNode = document.createElement('script');
      schemaNode.id = 'structured-data';
      schemaNode.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaNode);
    }

    schemaNode.textContent = JSON.stringify(structuredData);
  }, [lang]);

  return null;
}
