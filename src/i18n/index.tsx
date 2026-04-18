import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'RU' | 'EN' | 'UA';

export const translations = {
  RU: {
    nav: {
      services: 'Услуги',
      process: 'Процесс',
      team: 'Команда',
      contacts: 'Контакты',
      discuss: 'Обсудить проект'
    },
    hero: {
      badge: 'Премиум Экосистема 2026',
      title1: 'Создаем',
      title2: 'цифровые',
      titleWords: 'цифровые|премиальные|масштабируемые|инновационные|B2B',
      title3: 'продукты',
      desc: 'Мы не просто запускаем проекты, мы ',
      descHighlight: 'создаем наследие',
      descEnding: '. Несём ответственность за каждый этап и итоговую капитализацию продукта.',
      contact: 'Связаться',
      cases: 'Смотреть кейсы',
      trusted: 'Нам доверяют инновационные команды'
    },
    cta: {
      badge: 'Стартуем за 48 часов',
      title1: 'Готовы обсудить',
      title2: 'вашу идею?',
      desc: 'Мы не пишем длинных брифов. Оставьте заявку, и мы свяжемся с вами за 15 минут для честного разговора о метриках и архитектуре.',
      timeline: 'Сроки',
      timelineVal: 'от 2 месяцев',
      budget: 'Бюджет',
      budgetVal: 'от $15,000',
      trust1: 'Отвечаем в течение 15 минут',
      trust2: 'Полная конфиденциальность (Договор о неразглашении)',
      direct: 'Пишите напрямую',
      directSub: 'Связь с основателем',
      orMail: 'Или по эл. почте',
      placeholder: 'имя@компания.com',
      next: 'Далее',
      sent: '✔'
    },
    lead: {
      badge: 'Премиальное руководство 2026',
      titlePart1: 'Как снизить ',
      titleHighlight: 'отток пользователей',
      titlePart2: ' до выпуска продукта?',
      desc: 'Мы собрали 12 ошибок в дизайне, которые убивают конверсию в корпоративных и облачных продуктах. Оставьте почту, и мы пришлем руководство за 1 минуту.',
      placeholder: 'директор@компания.com',
      download: 'Скачать',
      sent: 'Отправлено!'
    },
    team: {
      badge: 'Команда',
      title1: 'Не берем ',
      titleHighlight: 'новичков',
      title2: ' на ваши проекты',
      desc: 'Мы работаем по бутиковой модели. В команде только ведущие специалисты, которые умеют брать ответственность за бизнес-показатели, а не просто закрывать задачи.',
      stat1Label: 'Лет экспертизы в среднем',
      stat2Label: 'Старших инженеров',
      stat3Label: 'Штатная команда',
    },
    social: {
      badge: 'Отзывы',
      title1: 'Нам доверяют ',
      titleHighlight: 'новаторы рынка',
      text1: "Мы искали исполнителей, а нашли полноценных партнеров. Команда взяла на себя архитектуру приложения и выпустила первую версию на 2 недели раньше срока. Конверсия из пробного периода в оплату выросла на 24%.",
      text2: "Их процесс работы — это эталон. Абсолютная прозрачность, идеальный код и дизайн, получивший награду за лучший дизайн в первую же неделю после запуска. Стоимость заявки упала вдвое.",
      text3: "Не просто дизайн ради дизайна. Ребята глубоко погружаются в экономику проекта и предлагают интерфейсные решения, которые напрямую повышают пожизненную ценность клиента. Просто высший класс."
    },
    methodology: {
      badge: 'Экосистема',
      title1: 'Идея — Ничто.',
      title2: 'Реализация — Всё.',
      desc: 'Ценность разработки определяется бизнес-результатом. Четыре этапа, через которые проходит каждый наш продукт.',
      stepLabel: 'Этап',
      id01: 'Аналитика',
      desc01: 'Изучение юнит-экономики и бизнес-процессов. Мы не рисуем экраны, пока не поймём, как они окупаются.',
      id02: 'Конверсии',
      desc02: 'Проектирование пользовательских путей с фокусом на целевые действия. Архитектура воронки продаж.',
      id03: 'Архитектура',
      desc03: 'Разработка масштабируемого кода. Микросервисы, отказоустойчивость и готовность к скачку трафика.',
      id04: 'Релиз',
      desc04: 'Автоматизированное развертывание и непрерывная интеграция (CI/CD) для быстрой проверки гипотез.'
    },
    footer: {
      tagline: 'Архитектура бизнеса в цифровой среде. Cоздаем премиальные экосистемы для брендов-новаторов.',
      navTitle: 'Навигация',
      contactsTitle: 'Контакты',
      about: 'О студии',
      solutions: 'Кейсы',
      approach: 'Подход',
      process: 'Процесс',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      rights: 'Все права защищены.'
    }
  },
  EN: {
    nav: {
      services: 'Services',
      process: 'Process',
      team: 'Team',
      contacts: 'Contacts',
      discuss: 'Discuss Project'
    },
    hero: {
      badge: 'Premium Ecosystem 2026',
      title1: 'We build',
      title2: 'digital',
      titleWords: 'digital|premium|scalable|innovative|B2B',
      title3: 'products',
      desc: 'We don\'t just launch projects, we ',
      descHighlight: 'build a legacy',
      descEnding: '. We take responsibility for every stage and the final capitalization of the product.',
      contact: 'Contact Us',
      cases: 'View Cases',
      trusted: 'Trusted by innovative teams'
    },
    cta: {
      badge: 'Start in 48 hours',
      title1: 'Ready to discuss',
      title2: 'your idea?',
      desc: 'We don’t write long briefs. Leave a request, and we will contact you within 15 minutes for an honest conversation about metrics and architecture.',
      timeline: 'Timeline',
      timelineVal: 'from 2 months',
      budget: 'Budget',
      budgetVal: 'from $15,000',
      trust1: 'We reply within 15 minutes',
      trust2: 'Full confidentiality (NDA ready)',
      direct: 'Write directly',
      directSub: 'Connect with founder',
      orMail: 'Or via email',
      placeholder: 'hey@company.com',
      next: 'Next',
      sent: '✔'
    },
    lead: {
      badge: 'Premium Guide 2026',
      titlePart1: 'How to reduce ',
      titleHighlight: 'user churn',
      titlePart2: ' before MVP release?',
      desc: 'We collected 12 UI/UX anti-patterns that kill conversion in B2B and SaaS products. Leave your email and we will send you the PDF guide in 1 minute.',
      placeholder: 'CEO@company.com',
      download: 'Download',
      sent: 'Sent!'
    },
    team: {
      badge: 'Team',
      title1: 'No ',
      titleHighlight: 'juniors',
      title2: ' on your projects',
      desc: 'We operate on a boutique model. The team consists only of Senior specialists who take responsibility for business metrics, rather than just closing tasks.',
      stat1Label: 'Years avg experience',
      stat2Label: 'Senior engineers',
      stat3Label: 'In-house team',
    },
    social: {
      badge: 'Social Proof',
      title1: 'Trusted by ',
      titleHighlight: 'market visionaries',
      text1: "We were looking for contractors, but found full-fledged partners. The team took over the architecture and released the MVP 2 weeks ahead of the deadline. Trial-to-paid conversion increased by 24%.",
      text2: "Their workflow is the benchmark. Absolute transparency, perfect code, and a design that won an Awwwards site of the day in its first week. Cost per lead dropped by half.",
      text3: "Not just design for the sake of design. The guys dive deep into the project's unit economics and propose UI solutions that directly increase LTV. Simply the top."
    },
    methodology: {
      badge: 'Ecosystem',
      title1: 'Idea is Nothing.',
      title2: 'Execution is Everything.',
      desc: 'The value of development is determined by business results. The four stages that every product goes through.',
      stepLabel: 'Stage',
      id01: 'Analytics',
      desc01: 'Studying unit economics and business processes. We do not draw screens until we understand how they pay off.',
      id02: 'Conversions',
      desc02: 'Designing user journeys with a focus on target actions. Sales funnel architecture.',
      id03: 'Architecture',
      desc03: 'Developing scalable code. Microservices, fault tolerance, and readiness for traffic spikes.',
      id04: 'Release',
      desc04: 'Automated deployment and continuous integration (CI/CD) for rapid hypothesis testing.'
    },
    footer: {
      tagline: 'Business architecture in the digital environment. We build premium ecosystems for visionary brands.',
      navTitle: 'Navigation',
      contactsTitle: 'Contacts',
      about: 'About',
      solutions: 'Cases',
      approach: 'Approach',
      process: 'Process',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.'
    }
  },
  UA: {
    nav: {
      services: 'Послуги',
      process: 'Процес',
      team: 'Команда',
      contacts: 'Контакти',
      discuss: 'Обговорити проект'
    },
    hero: {
      badge: 'Преміальна екосистема 2026',
      title1: 'Створюємо',
      title2: 'цифрові',
      titleWords: 'цифрові|преміальні|масштабовані|інноваційні|B2B',
      title3: 'продукти',
      desc: 'Ми не просто запускаємо проекти, ми ',
      descHighlight: 'створюємо спадщину',
      descEnding: '. Несемо відповідальність за кожен етап та підсумкову капіталізацію продукту.',
      contact: 'Зв\'язатися',
      cases: 'Дивитися кейси',
      trusted: 'Нам довіряють інноваційні команди'
    },
    cta: {
      badge: 'Стартуємо за 48 годин',
      title1: 'Чи готові обговорити',
      title2: 'вашу ідею?',
      desc: 'Ми не пишемо довгих брифів. Залиште заявку, і ми зв\'яжемося з вами за 15 хвилин для чесної розмови про метрики та архітектуру.',
      timeline: 'Терміни',
      timelineVal: 'від 2 місяців',
      budget: 'Бюджет',
      budgetVal: 'від $15,000',
      trust1: 'Відповідаємо протягом 15 хвилин',
      trust2: 'Повна конфіденційність (Договір про нерозголошення)',
      direct: 'Пишіть безпосередньо',
      directSub: 'Зв\'язок із засновником',
      orMail: 'Або цією поштою',
      placeholder: 'імя@компанія.com',
      next: 'Далі',
      sent: '✔'
    },
    lead: {
      badge: 'Преміум-посібник 2026',
      titlePart1: 'Як знизити ',
      titleHighlight: 'відтік користувачів',
      titlePart2: ' до випуску першої версії?',
      desc: 'Ми зібрали 12 помилок у дизайні, які вбивають конверсію в корпоративних та хмарних продуктах. Залиште пошту, і ми надішлемо посібник за 1 хвилину.',
      placeholder: 'директор@компанія.com',
      download: 'Завантажити',
      sent: 'Відправлено!'
    },
    team: {
      badge: 'Команда',
      title1: 'Не беремо ',
      titleHighlight: 'новачків',
      title2: ' на ваші проєкти',
      desc: 'Ми працюємо за бутиковою моделлю. У команді тільки провідні фахівці, які вміють брати відповідальність за бізнес-показники, а не просто закривати завдання.',
      stat1Label: 'Років експертизи в середньому',
      stat2Label: 'Старших інженерів',
      stat3Label: 'Штатна команда',
    },
    social: {
      badge: 'Відгуки',
      title1: 'Нам довіряють ',
      titleHighlight: 'новатори ринку',
      text1: "Ми шукали виконавців, а знайшли повноцінних партнерів. Команда взяла на себе архітектуру додатку та випустила першу версію на 2 тижні раніше терміну. Конверсія з пробного періоду в оплату зросла на 24%.",
      text2: "Їхній процес роботи — це еталон. Абсолютна прозорість, ідеальний код та дизайн, який отримав нагороду за найкращий дизайн у перший же тиждень після запуску. Вартість заявки впала вдвічі.",
      text3: "Не просто дизайн заради дизайну. Команда глибоко занурюється в економіку проєкту та пропонує інтерфейсні рішення, які безпосередньо підвищують життєву цінність клієнта. Просто вищий клас."
    },
    methodology: {
      badge: 'Екосистема',
      title1: 'Ідея — Ніщо.',
      title2: 'Реалізація — Все.',
      desc: 'Цінність розробки визначається бізнес-результатом. Чотири етапи, через які проходить кожен наш продукт.',
      stepLabel: 'Етап',
      id01: 'Аналітика',
      desc01: 'Вивчення юніт-економіки та бізнес-процесів. Ми не малюємо екрани, поки не зрозуміємо, як вони окупаються.',
      id02: 'Конверсії',
      desc02: 'Проєктування шляхів користувача з фокусом на цільові дії. Архітектура воронки продажів.',
      id03: 'Архітектура',
      desc03: 'Розробка масштабованого коду. Мікросервіси, відмовостійкість та готовність до стрибка трафіку.',
      id04: 'Реліз',
      desc04: 'Автоматизоване розгортання та безперервна інтеграція (CI/CD) для швидкої перевірки гіпотез.'
    },
    footer: {
      tagline: 'Архітектура бізнесу в цифровому середовищі. Створюємо преміальні екосистеми для брендів-новаторів.',
      navTitle: 'Навігація',
      contactsTitle: 'Контакти',
      about: 'Про студію',
      solutions: 'Кейси',
      approach: 'Підхід',
      process: 'Процес',
      privacy: 'Політика конфіденційності',
      terms: 'Умови використання',
      rights: 'Всі права захищені.'
    }
  }
};

type TranslationsType = typeof translations.RU;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: Extract<keyof TranslationsType, string>, subkey?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'RU'; // SSR safety
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('ru')) return 'RU';
    if (browserLang.startsWith('uk') || browserLang.startsWith('ua')) return 'UA';
    // optionally add a check for 'en' or just default to English for the rest of the world
    if (browserLang.startsWith('en')) return 'EN';
    return 'EN'; // Fallback for all other regions
  });
  
  const t = (key: Extract<keyof TranslationsType, string>, subkey?: string): string => {
    const section = translations[lang][key] as any;
    if (!section) return key;
    if (subkey && section[subkey]) return section[subkey];
    return String(section);
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
