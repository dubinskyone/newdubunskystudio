import type { Language } from './index';

export type ServiceTabKey =
  | 'landings'
  | 'fintech'
  | 'mobile'
  | 'branding'
  | 'ecommerce'
  | 'blockchain'
  | 'corporate';

export const SERVICE_TAB_KEYS: readonly ServiceTabKey[] = [
  'landings',
  'fintech',
  'mobile',
  'branding',
  'ecommerce',
  'blockchain',
  'corporate',
];

type ServiceMenuEntry = {
  label: string;
  title: string;
  projectName: string;
  description: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
};

const SERVICE_MENU_CONTENT: Record<Language, Record<ServiceTabKey, ServiceMenuEntry>> = {
  RU: {
    landings: {
      label: 'Web3 & TMA',
      title: 'Приложение для знакомств Swipy',
      projectName: 'Swipy',
      description:
        'Dating-продукт в Telegram Mini Apps с быстрым онбордингом, живой социальной механикой и аккуратным mobile-first UI.',
      stats: [
        { label: 'Экосистема', value: 'Telegram' },
        { label: 'Фокус', value: 'TMA Growth' },
      ],
    },
    fintech: {
      label: 'Финтех и Биржи',
      title: 'Современная биржа EVM и TON',
      projectName: 'KeyTrust',
      description:
        'Финтех-интерфейс с высокой плотностью данных, прозрачной архитектурой сценариев и быстрыми операциями без визуального шума.',
      stats: [
        { label: 'Сети', value: 'EVM & TON' },
        { label: 'Формат', value: 'Exchange UI' },
      ],
    },
    mobile: {
      label: 'B2B Платформы',
      title: 'Платформа для транспортных компаний',
      projectName: 'Transmatika',
      description:
        'Операционный B2B-продукт, где маршруты, расходы и ключевые действия выстроены в понятную рабочую систему.',
      stats: [
        { label: 'Тип', value: 'B2B Ops' },
        { label: 'Результат', value: 'Faster Flow' },
      ],
    },
    branding: {
      label: 'DeFi & DAO',
      title: 'DAO, токеномика и криптобиржа',
      projectName: 'StabilityDAO',
      description:
        'Сложный Web3-продукт с несколькими уровнями взаимодействия: токеномика, exchange layer и DAO-логика в одной системе.',
      stats: [
        { label: 'Стек', value: 'Solidity / Node' },
        { label: 'Фокус', value: 'Tokenomics' },
      ],
    },
    ecommerce: {
      label: 'GameFi',
      title: 'Telegram App с механикой crash',
      projectName: 'Spin',
      description:
        'Игровой интерфейс с быстрым ритмом, понятным риском и сильным визуальным фокусом на действии в первые секунды.',
      stats: [
        { label: 'Платформа', value: 'TMA' },
        { label: 'Фокус', value: 'Retention' },
      ],
    },
    blockchain: {
      label: 'Cloud Mining',
      title: 'Платформа удаленного майнинга',
      projectName: 'CyberMine',
      description:
        'Сервисная панель с прозрачными статусами, метриками и инфраструктурной логикой, понятной без лишних объяснений.',
      stats: [
        { label: 'Модель', value: 'Remote Mining' },
        { label: 'Фокус', value: 'Dashboard UX' },
      ],
    },
    corporate: {
      label: 'Trading Tools',
      title: 'Платформа торговых роботов',
      projectName: 'NovaBot',
      description:
        'Интерфейс торговых инструментов с плотной аналитикой, чистой иерархией и конфигурацией стратегий без перегруза.',
      stats: [
        { label: 'Интерфейс', value: 'Clean UI' },
        { label: 'Графики', value: 'TradingView' },
      ],
    },
  },
  EN: {
    landings: {
      label: 'Web3 & TMA',
      title: 'Swipy Dating Application',
      projectName: 'Swipy',
      description:
        'A Telegram Mini Apps dating product with a fast onboarding flow, strong social mechanics, and a polished mobile-first UI.',
      stats: [
        { label: 'Ecosystem', value: 'Telegram' },
        { label: 'Focus', value: 'TMA Growth' },
      ],
    },
    fintech: {
      label: 'Fintech & Exchange',
      title: 'Modern EVM and TON Exchange',
      projectName: 'KeyTrust',
      description:
        'A dense fintech interface built around fast decision-making, clear action zones, and low-friction trading flows.',
      stats: [
        { label: 'Networks', value: 'EVM & TON' },
        { label: 'Format', value: 'Exchange UI' },
      ],
    },
    mobile: {
      label: 'B2B Platforms',
      title: 'Transport Company Platform',
      projectName: 'Transmatika',
      description:
        'An operational B2B product where routes, costs, and next actions are structured into a system the team can read instantly.',
      stats: [
        { label: 'Type', value: 'B2B Ops' },
        { label: 'Outcome', value: 'Faster Flow' },
      ],
    },
    branding: {
      label: 'DeFi & DAO',
      title: 'DAO, Tokenomics & Crypto Exchange',
      projectName: 'StabilityDAO',
      description:
        'A layered Web3 product combining tokenomics, exchange mechanics, and DAO logic in one coherent product system.',
      stats: [
        { label: 'Stack', value: 'Solidity / Node' },
        { label: 'Focus', value: 'Tokenomics' },
      ],
    },
    ecommerce: {
      label: 'GameFi',
      title: 'Telegram App with Crash Mechanics',
      projectName: 'Spin',
      description:
        'A game UI with fast rhythm, readable risk, and a clear visual focus on action from the very first seconds.',
      stats: [
        { label: 'Platform', value: 'TMA' },
        { label: 'Focus', value: 'Retention' },
      ],
    },
    blockchain: {
      label: 'Cloud Mining',
      title: 'Remote Mining Platform',
      projectName: 'CyberMine',
      description:
        'A service dashboard built around transparent statuses, metrics, and infrastructure logic that feels obvious at first glance.',
      stats: [
        { label: 'Model', value: 'Remote Mining' },
        { label: 'Focus', value: 'Dashboard UX' },
      ],
    },
    corporate: {
      label: 'Trading Tools',
      title: 'Trading Robots Platform',
      projectName: 'NovaBot',
      description:
        'A trading tools interface with dense analytics, clean hierarchy, and advanced strategy controls without visual overload.',
      stats: [
        { label: 'Interface', value: 'Clean UI' },
        { label: 'Charts', value: 'TradingView' },
      ],
    },
  },
  UA: {
    landings: {
      label: 'Web3 & TMA',
      title: 'Додаток для знайомств Swipy',
      projectName: 'Swipy',
      description:
        'Продукт у Telegram Mini Apps із швидким онбордингом, сильною соціальною механікою та вивіреним mobile-first UI.',
      stats: [
        { label: 'Екосистема', value: 'Telegram' },
        { label: 'Фокус', value: 'TMA Growth' },
      ],
    },
    fintech: {
      label: 'Фінтех та Біржі',
      title: 'Сучасна біржа EVM та TON',
      projectName: 'KeyTrust',
      description:
        'Щільний фінтех-інтерфейс для швидких рішень, де зони дії, дані та пріоритети читаються без зайвого шуму.',
      stats: [
        { label: 'Мережі', value: 'EVM & TON' },
        { label: 'Формат', value: 'Exchange UI' },
      ],
    },
    mobile: {
      label: 'B2B Платформи',
      title: 'Платформа для транспортних компаній',
      projectName: 'Transmatika',
      description:
        'Операційний B2B-продукт, де маршрути, витрати та наступні кроки зібрані в зрозумілу робочу систему.',
      stats: [
        { label: 'Тип', value: 'B2B Ops' },
        { label: 'Результат', value: 'Faster Flow' },
      ],
    },
    branding: {
      label: 'DeFi & DAO',
      title: 'DAO, токеноміка та криптобіржа',
      projectName: 'StabilityDAO',
      description:
        'Багаторівневий Web3-продукт, що поєднує токеноміку, exchange-механіку та DAO-логіку в цілісну систему.',
      stats: [
        { label: 'Стек', value: 'Solidity / Node' },
        { label: 'Фокус', value: 'Tokenomics' },
      ],
    },
    ecommerce: {
      label: 'GameFi',
      title: 'Telegram App з crash-механікою',
      projectName: 'Spin',
      description:
        'Ігровий інтерфейс із швидким ритмом, зрозумілим ризиком та сильним акцентом на дії в перші секунди.',
      stats: [
        { label: 'Платформа', value: 'TMA' },
        { label: 'Фокус', value: 'Retention' },
      ],
    },
    blockchain: {
      label: 'Cloud Mining',
      title: 'Платформа віддаленого майнінгу',
      projectName: 'CyberMine',
      description:
        'Сервісна панель із прозорими статусами, метриками та інфраструктурною логікою, яку не потрібно довго пояснювати.',
      stats: [
        { label: 'Модель', value: 'Remote Mining' },
        { label: 'Фокус', value: 'Dashboard UX' },
      ],
    },
    corporate: {
      label: 'Trading Tools',
      title: 'Платформа торгових роботів',
      projectName: 'NovaBot',
      description:
        'Інтерфейс торгових інструментів із щільною аналітикою, чистою ієрархією та гнучкими налаштуваннями стратегій без перевантаження.',
      stats: [
        { label: 'Інтерфейс', value: 'Clean UI' },
        { label: 'Графіки', value: 'TradingView' },
      ],
    },
  },
};

export function getServiceMenuContent(lang: Language) {
  return SERVICE_MENU_CONTENT[lang];
}
