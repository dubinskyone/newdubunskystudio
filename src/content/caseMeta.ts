import type { Language } from '../i18n';
import type { CaseStudyId } from './cases';

export type CaseFilterId =
  | 'all'
  | 'live'
  | 'demo'
  | 'private'
  | 'b2b'
  | 'fintech'
  | 'tma'
  | 'web3'
  | 'design-dev';

type LocalizedText = Record<Language, string>;

type CaseProofItem = {
  label: LocalizedText;
  value: LocalizedText;
};

export type CaseMeta = {
  access: 'live' | 'demo' | 'private';
  accessNote: LocalizedText;
  proof: CaseProofItem[];
  filters: Exclude<CaseFilterId, 'all'>[];
};

export type FilterOption = {
  id: CaseFilterId;
  label: string;
};

export type CaseSectionUiCopy = {
  filterLabel: string;
  proofLabel: string;
  accessNoteLabel: string;
  filters: FilterOption[];
};

export const CASE_VIDEO_SOURCES: Partial<Record<CaseStudyId, string>> = {
  transmatika: '/cases/transmatika.mp4',
  swipy: '/cases/swipy.mp4',
  keytrust: '/cases/keytrust.mp4',
  novabot: '/cases/novabot.mp4',
  spin: '/cases/spin.mp4',
  coingem: '/cases/coingem.mp4',
  fungypack: '/cases/fungypack.mp4',
};

export const CASE_VIDEO_POSTERS: Partial<Record<CaseStudyId, string>> = {
  transmatika: '/cases/transmatika-poster.jpg',
  swipy: '/cases/swipy-poster.jpg',
  keytrust: '/cases/keytrust-poster.jpg',
  novabot: '/cases/novabot-poster.jpg',
  spin: '/cases/spin-poster.jpg',
  coingem: '/cases/coingem-poster.jpg',
  fungypack: '/cases/fungypack-poster.jpg',
};

export const CASE_PUBLIC_LINKS: Partial<Record<CaseStudyId, string>> = {
  transmatika: 'https://transmatika.com/',
  swipy: 'https://swipy.ai/en',
  keytrust: 'https://keytrust.one/',
  coingem: 'https://coingem.com/',
};

export const CASE_META: Record<CaseStudyId, CaseMeta> = {
  transmatika: {
    access: 'live',
    accessNote: {
      RU: 'Публичный B2B-сайт доступен онлайн. Реальный рабочий flow команды показываем на созвоне, чтобы быстро раскрыть продукт без NDA-шума.',
      EN: 'The public B2B website is available online. We show the live team workflow on a call so the product is understood quickly without unnecessary NDA friction.',
      UA: 'Публічний B2B-сайт доступний онлайн. Живий робочий flow команди показуємо на дзвінку, щоб швидко розкрити продукт без зайвого NDA-шуму.',
    },
    proof: [
      {
        label: { RU: 'Покрытие', EN: 'Coverage', UA: 'Покриття' },
        value: {
          RU: '13k+ сервисных точек',
          EN: '13k+ service points',
          UA: '13k+ сервісних точок',
        },
      },
      {
        label: { RU: 'Поддержка', EN: 'Support', UA: 'Підтримка' },
        value: {
          RU: '24/7 для команды',
          EN: '24/7 for the team',
          UA: '24/7 для команди',
        },
      },
      {
        label: { RU: 'Контур', EN: 'Scope', UA: 'Контур' },
        value: {
          RU: '4 автоматизированные зоны',
          EN: '4 automated zones',
          UA: '4 автоматизовані зони',
        },
      },
      {
        label: { RU: 'Роль', EN: 'Role', UA: 'Роль' },
        value: {
          RU: 'Design + Development',
          EN: 'Design + Development',
          UA: 'Design + Development',
        },
      },
    ],
    filters: ['live', 'b2b', 'design-dev'],
  },
  swipy: {
    access: 'live',
    accessNote: {
      RU: 'Публичная страница проекта открывается онлайн. Полный продуктовый сценарий внутри Telegram показываем отдельно, чтобы сразу раскрыть match-flow и retention.',
      EN: 'The public project page is available online. We show the full in-product Telegram flow separately to focus on matching and retention logic.',
      UA: 'Публічна сторінка проєкту відкрита онлайн. Повний продуктовий сценарій всередині Telegram показуємо окремо, щоб сфокусуватися на match-flow і retention.',
    },
    proof: [
      {
        label: { RU: 'Proof', EN: 'Proof', UA: 'Proof' },
        value: {
          RU: 'Top-10 TMA',
          EN: 'Top-10 TMA',
          UA: 'Top-10 TMA',
        },
      },
      {
        label: { RU: 'Онбординг', EN: 'Onboarding', UA: 'Онбординг' },
        value: {
          RU: '10 likes до unlock',
          EN: '10 likes to unlock',
          UA: '10 likes до unlock',
        },
      },
      {
        label: { RU: 'Монетизация', EN: 'Monetization', UA: 'Монетизація' },
        value: {
          RU: '4 engagement loops',
          EN: '4 engagement loops',
          UA: '4 engagement loops',
        },
      },
      {
        label: { RU: 'Платёжный контур', EN: 'Payment layer', UA: 'Платіжний контур' },
        value: {
          RU: 'Telegram Stars',
          EN: 'Telegram Stars',
          UA: 'Telegram Stars',
        },
      },
    ],
    filters: ['live', 'tma'],
  },
  keytrust: {
    access: 'live',
    accessNote: {
      RU: 'Публичный продуктовый контур открыт онлайн. Более глубокие exchange-сценарии лучше показывать в live demo, чтобы сразу пройти через ключевые действия.',
      EN: 'The public product surface is available online. Deeper exchange scenarios are better shown in a live demo so the key actions are experienced directly.',
      UA: 'Публічний продуктовий контур відкритий онлайн. Глибші exchange-сценарії краще показувати в live demo, щоб одразу пройти через ключові дії.',
    },
    proof: [
      {
        label: { RU: 'Сети', EN: 'Networks', UA: 'Мережі' },
        value: {
          RU: '2 сети: EVM + TON',
          EN: '2 networks: EVM + TON',
          UA: '2 мережі: EVM + TON',
        },
      },
      {
        label: { RU: 'Продукт', EN: 'Product', UA: 'Продукт' },
        value: {
          RU: '3 продуктовые зоны',
          EN: '3 product surfaces',
          UA: '3 продуктові зони',
        },
      },
      {
        label: { RU: 'География', EN: 'Geography', UA: 'Географія' },
        value: {
          RU: 'Европейский сценарий',
          EN: 'Europe-ready flow',
          UA: 'Європейський сценарій',
        },
      },
      {
        label: { RU: 'Flow', EN: 'Flow', UA: 'Flow' },
        value: {
          RU: 'Buy / sell / bridge',
          EN: 'Buy / sell / bridge',
          UA: 'Buy / sell / bridge',
        },
      },
    ],
    filters: ['live', 'fintech'],
  },
  novabot: {
    access: 'private',
    accessNote: {
      RU: 'Это закрытый trading tool для приватного использования. Публичного URL нет намеренно; показываем рабочий сценарий по запросу или под NDA.',
      EN: 'This is a closed trading tool for private use. There is no public URL by design; we show the working flow on request or under NDA.',
      UA: 'Це закритий trading tool для приватного використання. Публічного URL немає навмисно; робочий сценарій показуємо за запитом або під NDA.',
    },
    proof: [
      {
        label: { RU: 'Доступ', EN: 'Access', UA: 'Доступ' },
        value: {
          RU: 'Private internal tool',
          EN: 'Private internal tool',
          UA: 'Private internal tool',
        },
      },
      {
        label: { RU: 'Контур', EN: 'Scope', UA: 'Контур' },
        value: {
          RU: '3 рабочие поверхности',
          EN: '3 working surfaces',
          UA: '3 робочі поверхні',
        },
      },
      {
        label: { RU: 'Фокус', EN: 'Focus', UA: 'Фокус' },
        value: {
          RU: 'Chart + signals + strategy',
          EN: 'Chart + signals + strategy',
          UA: 'Chart + signals + strategy',
        },
      },
    ],
    filters: ['private', 'fintech'],
  },
  spin: {
    access: 'demo',
    accessNote: {
      RU: 'Кейс раскрывается лучше в контролируемом demo sequence. Публичный доступ не открыт, чтобы показывать не статичный экран, а поведение продукта.',
      EN: 'This case works best as a controlled demo sequence. Public access is not open because the value is in the product behavior, not in static screens.',
      UA: 'Кейс найкраще розкривається у контрольованому demo sequence. Публічний доступ не відкрито, бо цінність тут у поведінці продукту, а не в статичних екранах.',
    },
    proof: [
      {
        label: { RU: 'Платформа', EN: 'Platform', UA: 'Платформа' },
        value: {
          RU: 'Telegram app',
          EN: 'Telegram app',
          UA: 'Telegram app',
        },
      },
      {
        label: { RU: 'Loop', EN: 'Loop', UA: 'Loop' },
        value: {
          RU: '3 core actions',
          EN: '3 core actions',
          UA: '3 core actions',
        },
      },
      {
        label: { RU: 'Монетизация', EN: 'Monetization', UA: 'Монетизація' },
        value: {
          RU: 'Wallet + crash loop',
          EN: 'Wallet + crash loop',
          UA: 'Wallet + crash loop',
        },
      },
      {
        label: { RU: 'Доступ', EN: 'Access', UA: 'Доступ' },
        value: {
          RU: 'Demo by request',
          EN: 'Demo by request',
          UA: 'Demo by request',
        },
      },
    ],
    filters: ['demo', 'tma', 'web3'],
  },
  'liquidity-pools': {
    access: 'demo',
    accessNote: {
      RU: 'Это инвестиционный кейс без публичного промо-контура. Лучшая подача здесь — guided demo по flow депозита, доходности и контроля риска.',
      EN: 'This is an investment case without a public promo surface. The strongest presentation is a guided demo through deposit, yield, and risk-control flow.',
      UA: 'Це інвестиційний кейс без публічного промо-контуру. Найсильніша подача тут — guided demo через flow депозиту, доходності та контролю ризику.',
    },
    proof: [
      {
        label: { RU: 'Ecosystem', EN: 'Ecosystem', UA: 'Ecosystem' },
        value: { RU: 'SUI', EN: 'SUI', UA: 'SUI' },
      },
      {
        label: { RU: 'Flow', EN: 'Flow', UA: 'Flow' },
        value: {
          RU: '3 core flows',
          EN: '3 core flows',
          UA: '3 core flows',
        },
      },
      {
        label: { RU: 'Фокус', EN: 'Focus', UA: 'Фокус' },
        value: {
          RU: 'Deposit + yield + risk',
          EN: 'Deposit + yield + risk',
          UA: 'Deposit + yield + risk',
        },
      },
    ],
    filters: ['demo', 'web3'],
  },
  coingem: {
    access: 'live',
    accessNote: {
      RU: 'Публичный сайт доступен онлайн, поэтому базовую часть кейса можно проверить без созвона. Детальный flow ranking и voting разбираем отдельно.',
      EN: 'The public site is available online, so the base layer of the case can be checked without a call. The deeper ranking and voting flow is shown separately.',
      UA: 'Публічний сайт доступний онлайн, тому базовий шар кейсу можна перевірити без дзвінка. Глибший ranking і voting flow показуємо окремо.',
    },
    proof: [
      {
        label: { RU: 'Покрытие', EN: 'Coverage', UA: 'Покриття' },
        value: {
          RU: '19 поддерживаемых сетей',
          EN: '19 supported chains',
          UA: '19 підтримуваних мереж',
        },
      },
      {
        label: { RU: 'Каталог', EN: 'Catalog', UA: 'Каталог' },
        value: {
          RU: '800 токенов в листинге',
          EN: '800 tokens in listing',
          UA: '800 токенів у лістингу',
        },
      },
      {
        label: { RU: 'Исследование', EN: 'Research', UA: 'Дослідження' },
        value: {
          RU: '90k+ researched coins',
          EN: '90k+ researched coins',
          UA: '90k+ researched coins',
        },
      },
      {
        label: { RU: 'Фокус', EN: 'Focus', UA: 'Фокус' },
        value: {
          RU: 'Ranking + voting + cards',
          EN: 'Ranking + voting + cards',
          UA: 'Ranking + voting + cards',
        },
      },
    ],
    filters: ['live', 'web3'],
  },
  fungypack: {
    access: 'demo',
    accessNote: {
      RU: 'Ключевая ценность кейса раскрывается в walkthrough, а не в публичной витрине. Поэтому показываем его как demo by request с фокусом на utility-flow.',
      EN: 'The value of this case is best understood in a walkthrough rather than a public showcase. That is why we present it as a demo-by-request focused on the utility flow.',
      UA: 'Ключова цінність цього кейсу краще розкривається у walkthrough, а не в публічній вітрині. Тому показуємо його як demo by request з фокусом на utility-flow.',
    },
    proof: [
      {
        label: { RU: 'Роль', EN: 'Role', UA: 'Роль' },
        value: {
          RU: 'Design + Development',
          EN: 'Design + Development',
          UA: 'Design + Development',
        },
      },
      {
        label: { RU: 'Контур', EN: 'Scope', UA: 'Контур' },
        value: {
          RU: '4 core modules',
          EN: '4 core modules',
          UA: '4 core modules',
        },
      },
      {
        label: { RU: 'Ограничение', EN: 'Constraint', UA: 'Обмеження' },
        value: {
          RU: '0 asset transfer',
          EN: '0 asset transfer',
          UA: '0 asset transfer',
        },
      },
      {
        label: { RU: 'Доступ', EN: 'Access', UA: 'Доступ' },
        value: {
          RU: 'Demo by request',
          EN: 'Demo by request',
          UA: 'Demo by request',
        },
      },
    ],
    filters: ['demo', 'web3', 'design-dev'],
  },
};

export const CASE_SECTION_UI_COPY: Record<Language, CaseSectionUiCopy> = {
  RU: {
    filterLabel: 'Быстрый отбор',
    proofLabel: 'Быстрые бизнес-факты',
    accessNoteLabel: 'Как смотреть кейс',
    filters: [
      { id: 'all', label: 'Все' },
      { id: 'live', label: 'Live' },
      { id: 'demo', label: 'Demo' },
      { id: 'private', label: 'Private' },
      { id: 'b2b', label: 'B2B' },
      { id: 'fintech', label: 'Fintech' },
      { id: 'tma', label: 'TMA' },
      { id: 'web3', label: 'Web3' },
      { id: 'design-dev', label: 'Design + Dev' },
    ],
  },
  EN: {
    filterLabel: 'Quick filter',
    proofLabel: 'Fast business proof',
    accessNoteLabel: 'How to review this case',
    filters: [
      { id: 'all', label: 'All' },
      { id: 'live', label: 'Live' },
      { id: 'demo', label: 'Demo' },
      { id: 'private', label: 'Private' },
      { id: 'b2b', label: 'B2B' },
      { id: 'fintech', label: 'Fintech' },
      { id: 'tma', label: 'TMA' },
      { id: 'web3', label: 'Web3' },
      { id: 'design-dev', label: 'Design + Dev' },
    ],
  },
  UA: {
    filterLabel: 'Швидкий відбір',
    proofLabel: 'Швидкі бізнес-факти',
    accessNoteLabel: 'Як дивитися кейс',
    filters: [
      { id: 'all', label: 'Усі' },
      { id: 'live', label: 'Live' },
      { id: 'demo', label: 'Demo' },
      { id: 'private', label: 'Private' },
      { id: 'b2b', label: 'B2B' },
      { id: 'fintech', label: 'Fintech' },
      { id: 'tma', label: 'TMA' },
      { id: 'web3', label: 'Web3' },
      { id: 'design-dev', label: 'Design + Dev' },
    ],
  },
};

export function getLocalizedText(copy: LocalizedText, lang: Language): string {
  return copy[lang] ?? copy.EN;
}
