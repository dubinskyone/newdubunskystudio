import type { Language } from '../i18n';

export type CaseStudyId =
  | 'transmatika'
  | 'swipy'
  | 'keytrust'
  | 'novabot'
  | 'spin'
  | 'liquidity-pools'
  | 'coingem'
  | 'fungypack';

export type CaseVisualKind =
  | 'operations'
  | 'social'
  | 'exchange'
  | 'trading'
  | 'game'
  | 'liquidity'
  | 'voting'
  | 'nft';

export type CaseStudy = {
  id: CaseStudyId;
  name: string;
  category: string;
  badges: string[];
  summary: string;
  facts: string[];
  videoFocus: string;
  accent: string;
  accentSoft: string;
  visual: CaseVisualKind;
  modal: {
    product: string;
    businessTask: string;
    videoStory: string;
    modules: string[];
    value: string;
    delivery: string[];
  };
};

export type CasesSectionContent = {
  badge: string;
  title: string;
  desc: string;
  liveProjectLabel: string;
  requestAccessLabel: string;
  contactProjectLabel: string;
  formatLabel: string;
  scopeLabel: string;
  accessLabel: string;
  liveStatusLabel: string;
  demoStatusLabel: string;
  privateStatusLabel: string;
  openLabel: string;
  closeLabel: string;
  moreLabel: string;
  relatedLabel: string;
  previousLabel: string;
  nextLabel: string;
  productLabel: string;
  businessTaskLabel: string;
  videoStoryLabel: string;
  modulesLabel: string;
  valueLabel: string;
  deliveryLabel: string;
  discussLabel: string;
  cases: CaseStudy[];
};

const CASES_CONTENT: Record<Language, CasesSectionContent> = {
  RU: {
    badge: 'Кейсы',
    title: 'Кейсы, которые быстро показывают наш уровень в продукте',
    desc:
      'Без лишнего шума: что это за продукт, за что мы отвечали, что можно открыть онлайн и почему кейс релевантен похожей задаче.',
    liveProjectLabel: 'Открыть проект онлайн',
    requestAccessLabel: 'Запросить live demo',
    contactProjectLabel: 'Связаться с нами',
    formatLabel: 'Формат',
    scopeLabel: 'Что делали',
    accessLabel: 'Доступ',
    liveStatusLabel: 'Live online',
    demoStatusLabel: 'Demo by request',
    privateStatusLabel: 'Private / by request',
    openLabel: 'Открыть кейс',
    closeLabel: 'Закрыть',
    moreLabel: 'Подробнее',
    relatedLabel: 'Другие проекты',
    previousLabel: 'Предыдущий кейс',
    nextLabel: 'Следующий кейс',
    productLabel: 'Продукт',
    businessTaskLabel: 'Бизнес-задача',
    videoStoryLabel: 'Что показывать в видео',
    modulesLabel: 'Ключевые модули',
    valueLabel: 'Почему это важно',
    deliveryLabel: 'Формат работы',
    discussLabel: 'Обсудить похожий проект',
    cases: [
      {
        id: 'transmatika',
        name: 'Transmatika',
        category: 'B2B Platform',
        badges: ['Design', 'Development', 'Fleet Ops'],
        summary:
          'Платформа для транспортных компаний с топливными картами, контролем расходов и операционным рабочим экраном.',
        facts: ['Fuel cards', 'Расходы и статусы', 'B2B operations'],
        videoFocus:
          'Показывать топливные карты, статусные блоки и как команда быстро считывает расходы и следующий шаг.',
        accent: '#7dd3fc',
        accentSoft: 'rgba(22,163,255,0.18)',
        visual: 'operations',
        modal: {
          product:
            'Transmatika — B2B-платформа для транспортных компаний, где важны затраты на топливо, маршруты и скорость операционных решений.',
          businessTask:
            'Собрать в одном продукте управление топливными картами, персональные выгоды, контроль расходов и понятную логику для операционной команды.',
          videoStory:
            'В демо лучше всего работает сценарий “карта -> расход -> статус -> решение”: это сразу показывает пользу интерфейса без длинных объяснений.',
          modules: [
            'Панель топливных карт',
            'Операционные статусы',
            'Контроль расходов',
            'Рабочие экраны команды',
          ],
          value:
            'Этот кейс показывает, что мы умеем собирать плотный B2B-интерфейс так, чтобы он ускорял работу команды, а не утомлял её.',
          delivery: ['Design', 'Development'],
        },
      },
      {
        id: 'swipy',
        name: 'Swipy',
        category: 'Dating App',
        badges: ['Telegram Mini App', 'Social Product'],
        summary:
          'Приложение для знакомств в Telegram Mini Apps с быстрым онбордингом, понятным матчингом и social-first логикой.',
        facts: ['Telegram Mini Apps', 'Matching flow', 'Smart feed'],
        videoFocus:
          'Показывать первый вход, подбор анкет и момент, где пользователь понимает логику мэтчинга за секунды.',
        accent: '#60a5fa',
        accentSoft: 'rgba(96,165,250,0.18)',
        visual: 'social',
        modal: {
          product:
            'Swipy — dating-продукт внутри Telegram Mini Apps, где критичны лёгкий первый сценарий и понятная social-механика.',
          businessTask:
            'Сделать знакомство, выбор профилей и активацию первых действий максимально естественными прямо внутри Telegram.',
          videoStory:
            'В ролике лучше раскрывать не экраны по отдельности, а связку “вход -> выбор -> match -> удержание”, потому что именно она продаёт продукт.',
          modules: [
            'Онбординг в TMA',
            'Лента и подбор анкет',
            'Referral-механика',
            'Покупки через Telegram Stars',
          ],
          value:
            'Кейс показывает, что мы умеем делать продукты с сильным first-time experience, где интерфейс сразу работает на вовлечение.',
          delivery: ['Product UI', 'Growth UX'],
        },
      },
      {
        id: 'keytrust',
        name: 'KeyTrust',
        category: 'Crypto Exchange',
        badges: ['Web App', 'Exchange UI', 'EVM & TON'],
        summary:
          'Современный крипто-обменник с плотной информацией, on-ramp/off-ramp логикой и акцентом на доверие в сложном продукте.',
        facts: ['EVM & TON', 'On-ramp / Off-ramp', 'Admin states'],
        videoFocus:
          'Показывать продажу, покупку и обмен между сетями: так лучше всего видны понятные action-зоны и зрелая структура интерфейса.',
        accent: '#93c5fd',
        accentSoft: 'rgba(147,197,253,0.16)',
        visual: 'exchange',
        modal: {
          product:
            'KeyTrust — exchange-продукт на сетях EVM и TON, где в одном интерфейсе должны уживаться скорость операций, доверие и высокая плотность данных.',
          businessTask:
            'Сделать понятный продукт для покупки, продажи и обмена криптовалюты, включая card flows, bridge-сценарии и административную часть.',
          videoStory:
            'В видео стоит показывать живой trading flow, перевод между сетями и спокойную работу с плотными данными — именно это сильнее всего раскрывает продукт.',
          modules: [
            'Покупка и продажа',
            'Bridge и network swap',
            'Wallet и card flows',
            'Admin panel',
          ],
          value:
            'Этот кейс демонстрирует нашу способность проектировать сложные fintech-интерфейсы так, чтобы пользователь видел контроль, а не хаос.',
          delivery: ['Product UI', 'Exchange UX'],
        },
      },
      {
        id: 'novabot',
        name: 'NovaBot',
        category: 'Trading Tool',
        badges: ['Private Product', 'Analytics UI'],
        summary:
          'Закрытый продукт для торговых сценариев, где важны чистая иерархия, настройки стратегий и читаемая аналитика.',
        facts: ['Private use', 'Strategy settings', 'Dense analytics'],
        videoFocus:
          'Показывать график, настройки стратегии и сигналы в одной сессии — это быстро объясняет зрелость и практичность интерфейса.',
        accent: '#38bdf8',
        accentSoft: 'rgba(56,189,248,0.18)',
        visual: 'trading',
        modal: {
          product:
            'NovaBot — закрытый торговый интерфейс для работы со стратегиями, сигналами и плотной аналитикой в одном рабочем пространстве.',
          businessTask:
            'Дать пользователю чистый инструментарий для конфигурации стратегий и чтения данных без перегруза и спорной визуальной драматизации.',
          videoStory:
            'Лучше всего кейс раскрывается через сценарий “настройка -> график -> сигнал -> решение”: это показывает не декор, а реальную рабочую пользу.',
          modules: [
            'TradingView-style chart',
            'Настройки стратегий',
            'Сигналы и показатели',
            'Рабочее пространство трейдера',
          ],
          value:
            'Кейс нужен, чтобы показать: мы умеем делать инструменты для закрытого использования, где интерфейс помогает принимать решения быстрее.',
          delivery: ['Product UI', 'Private dashboard'],
        },
      },
      {
        id: 'spin',
        name: 'Spin',
        category: 'GameFi',
        badges: ['Telegram App', 'Crash Mechanics'],
        summary:
          'Крипто-игра с crash-механикой, где интерфейс должен сразу включать пользователя в ритм действия и риска.',
        facts: ['Game loop', 'Wallet entry', 'Retention hooks'],
        videoFocus:
          'Показывать первый запуск, рост коэффициента и wallet entry — именно это продаёт механику и темп продукта.',
        accent: '#818cf8',
        accentSoft: 'rgba(129,140,248,0.18)',
        visual: 'game',
        modal: {
          product:
            'Spin — GameFi-сценарий с crash-механикой, где первый экран обязан сразу объяснить ритм игры и риск.',
          businessTask:
            'Сделать продукт живым, быстрым и понятным: без долгой подготовки, с ясным входом в механику и удержанием внимания на core-loop.',
          videoStory:
            'В демо нужно показывать поведение продукта: вход, ставка, коэффициент, cashout. Тогда кейс выглядит как рабочий продукт, а не как статичный макет.',
          modules: [
            'Crash loop',
            'Telegram wallet entry',
            'Retention-механики',
            'Игровая аналитика',
          ],
          value:
            'Этот кейс полезен как доказательство того, что мы умеем проектировать продукты с высоким темпом, где интерфейс должен удерживать внимание без путаницы.',
          delivery: ['Game UI', 'TMA flow'],
        },
      },
      {
        id: 'liquidity-pools',
        name: 'Liquidity Pools',
        category: 'Investment Product',
        badges: ['SUI', 'DeFi Product'],
        summary:
          'Инвестиционный продукт на SUI, где нужно спокойно и понятно объяснить pool-механику, доходность и действие.',
        facts: ['SUI ecosystem', 'Pool states', 'Investment flow'],
        videoFocus:
          'Показывать состояние пула, доходность и сценарий депозита — это быстрее всего снимает ощущение сложности.',
        accent: '#22d3ee',
        accentSoft: 'rgba(34,211,238,0.18)',
        visual: 'liquidity',
        modal: {
          product:
            'Liquidity Pools — инвестиционный продукт в экосистеме SUI с акцентом на понятное чтение pool-механики и состояний капитала.',
          businessTask:
            'Сделать так, чтобы пользователь не терялся в терминах DeFi и видел понятный путь: куда он заходит, что получает и где контролирует риск.',
          videoStory:
            'В ролике стоит показывать структуру пулов, доходность и путь пользователя до действия — так продукт читается как управляемый, а не абстрактный.',
          modules: ['Pool overview', 'Yield states', 'Deposit flow', 'Risk visibility'],
          value:
            'Кейс показывает, что мы умеем визуально упрощать DeFi-продукты и собирать спокойные инвестиционные интерфейсы без лишнего шума.',
          delivery: ['Product UI', 'DeFi UX'],
        },
      },
      {
        id: 'coingem',
        name: 'CoinGem',
        category: 'Token Discovery',
        badges: ['Design', 'Voting Service'],
        summary:
          'Сервис голосования за токены, который помогает быстро находить перспективные монеты и считывать рыночный интерес.',
        facts: ['Token voting', 'Discovery feed', 'Ranking logic'],
        videoFocus:
          'Показывать рейтинг, карточки токенов и голосование — тогда сразу виден продуктовый сценарий и ценность сервиса.',
        accent: '#f59e0b',
        accentSoft: 'rgba(245,158,11,0.16)',
        visual: 'voting',
        modal: {
          product:
            'CoinGem — voting-сервис для крипто-токенов, где пользователь должен быстро понять, какие проекты привлекают внимание рынка.',
          businessTask:
            'Собрать понятную discovery-среду для токенов, чтобы сравнение, голосование и просмотр перспективных монет происходили без визуального шума.',
          videoStory:
            'В демо важно раскрывать ранжирование, карточки токенов и логику голосования — именно эти блоки объясняют продукт лучше всего.',
          modules: ['Voting feed', 'Рейтинг токенов', 'Карточки проектов', 'Discovery logic'],
          value:
            'Кейс нужен как пример интерфейса, где много сущностей конкурируют за внимание, а мы выстраиваем ясную иерархию и сохраняем читаемость.',
          delivery: ['Design'],
        },
      },
      {
        id: 'fungypack',
        name: 'Fungypack',
        category: 'NFT Utility',
        badges: ['Design', 'Development', 'NFT Product'],
        summary:
          'Платформа, которая усиливает полезность NFT без передачи активов и делает сложную механику более понятной.',
        facts: ['NFT utility', 'No asset transfer', 'Connection flow'],
        videoFocus:
          'Показывать подключение актива, utility-логику и безопасное действие без передачи NFT — это самый сильный момент продукта.',
        accent: '#a78bfa',
        accentSoft: 'rgba(167,139,250,0.18)',
        visual: 'nft',
        modal: {
          product:
            'Fungypack — платформа для расширения utility и ценности NFT без необходимости передавать сами активы.',
          businessTask:
            'Объяснить сложную NFT-механику через спокойный сценарий подключения, упаковки utility и безопасного действия без потери контроля над активом.',
          videoStory:
            'В ролике стоит делать акцент на том, что актив остаётся у пользователя, а utility раскрывается через понятный flow — это ключевое отличие продукта.',
          modules: ['Asset connection', 'Utility packaging', 'Ownership-safe action', 'NFT management'],
          value:
            'Этот кейс демонстрирует, что мы умеем упаковывать Web3-механику так, чтобы она читалась как понятный цифровой продукт, а не как терминология.',
          delivery: ['Design', 'Development'],
        },
      },
    ],
  },
  EN: {
    badge: 'Cases',
    title: 'Cases that quickly show our product depth',
    desc:
      'No extra noise: what kind of product it is, what we owned, what can already be opened online, and why the case is relevant to a similar brief.',
    liveProjectLabel: 'Open project online',
    requestAccessLabel: 'Request live demo',
    contactProjectLabel: 'Contact us',
    formatLabel: 'Format',
    scopeLabel: 'Scope',
    accessLabel: 'Access',
    liveStatusLabel: 'Live online',
    demoStatusLabel: 'Demo by request',
    privateStatusLabel: 'Private / by request',
    openLabel: 'Open case',
    closeLabel: 'Close',
    moreLabel: 'More details',
    relatedLabel: 'Other projects',
    previousLabel: 'Previous case',
    nextLabel: 'Next case',
    productLabel: 'Product',
    businessTaskLabel: 'Business task',
    videoStoryLabel: 'What to show in video',
    modulesLabel: 'Key modules',
    valueLabel: 'Why it matters',
    deliveryLabel: 'Delivery format',
    discussLabel: 'Discuss a similar project',
    cases: [
      {
        id: 'transmatika',
        name: 'Transmatika',
        category: 'B2B Platform',
        badges: ['Design', 'Development', 'Fleet Ops'],
        summary:
          'A platform for transport companies with fuel cards, cost control, and a focused operational workspace.',
        facts: ['Fuel cards', 'Costs & statuses', 'B2B operations'],
        videoFocus:
          'Show fuel cards, operational statuses, and how the team reads spend and next actions at a glance.',
        accent: '#7dd3fc',
        accentSoft: 'rgba(22,163,255,0.18)',
        visual: 'operations',
        modal: {
          product:
            'Transmatika is a B2B platform for transportation companies where fuel costs, route logic, and daily operations must stay readable.',
          businessTask:
            'Bring fuel card management, personalized benefits, cost visibility, and operational decision-making into one coherent product.',
          videoStory:
            'The strongest demo sequence is “card -> expense -> status -> decision” because it explains the product without a long verbal setup.',
          modules: [
            'Fuel card panel',
            'Operational statuses',
            'Cost control blocks',
            'Team workspaces',
          ],
          value:
            'This case proves that we can structure dense B2B products so the interface accelerates the team instead of exhausting it.',
          delivery: ['Design', 'Development'],
        },
      },
      {
        id: 'swipy',
        name: 'Swipy',
        category: 'Dating App',
        badges: ['Telegram Mini App', 'Social Product'],
        summary:
          'A dating product inside Telegram Mini Apps with fast onboarding, readable matching logic, and a social-first flow.',
        facts: ['Telegram Mini Apps', 'Matching flow', 'Smart feed'],
        videoFocus:
          'Show the first entry, profile selection, and the moment the matching logic becomes obvious.',
        accent: '#60a5fa',
        accentSoft: 'rgba(96,165,250,0.18)',
        visual: 'social',
        modal: {
          product:
            'Swipy is a dating product inside Telegram Mini Apps where the first-use experience directly affects retention.',
          businessTask:
            'Make profile discovery, matching, and first actions feel natural inside Telegram with as little friction as possible.',
          videoStory:
            'The video should focus on “entry -> selection -> match -> retention” because that product loop sells the value better than isolated screens.',
          modules: [
            'TMA onboarding',
            'Profile feed and matching',
            'Referral mechanics',
            'Purchases via Telegram Stars',
          ],
          value:
            'This case shows that we know how to design products with strong first-time experience where the interface immediately drives engagement.',
          delivery: ['Product UI', 'Growth UX'],
        },
      },
      {
        id: 'keytrust',
        name: 'KeyTrust',
        category: 'Crypto Exchange',
        badges: ['Web App', 'Exchange UI', 'EVM & TON'],
        summary:
          'A modern crypto exchange with dense information, on-ramp/off-ramp logic, and strong trust signals in a complex environment.',
        facts: ['EVM & TON', 'On-ramp / Off-ramp', 'Admin states'],
        videoFocus:
          'Show selling, buying, and cross-network exchange flows to highlight clear action zones and mature structure.',
        accent: '#93c5fd',
        accentSoft: 'rgba(147,197,253,0.16)',
        visual: 'exchange',
        modal: {
          product:
            'KeyTrust is an exchange product across EVM and TON where transaction speed, trust, and high information density must coexist.',
          businessTask:
            'Design a clear product for buying, selling, swapping, card flows, bridge scenarios, and the admin side of the system.',
          videoStory:
            'The best demo is a live trading flow, a network transfer, and dense but calm data zones that feel controlled rather than overloaded.',
          modules: [
            'Buy and sell flows',
            'Bridge and network swap',
            'Wallet and card flows',
            'Admin panel',
          ],
          value:
            'This case demonstrates our ability to design complex fintech interfaces that feel reliable and actionable instead of chaotic.',
          delivery: ['Product UI', 'Exchange UX'],
        },
      },
      {
        id: 'novabot',
        name: 'NovaBot',
        category: 'Trading Tool',
        badges: ['Private Product', 'Analytics UI'],
        summary:
          'A private trading workspace where strategy settings, dense analytics, and chart hierarchy stay clean and usable.',
        facts: ['Private use', 'Strategy settings', 'Dense analytics'],
        videoFocus:
          'Show the chart, strategy setup, and signal blocks in one flow to communicate practical value quickly.',
        accent: '#38bdf8',
        accentSoft: 'rgba(56,189,248,0.18)',
        visual: 'trading',
        modal: {
          product:
            'NovaBot is a private trading tool for managing strategies, reading signals, and working with dense analytics in one workspace.',
          businessTask:
            'Give the user a clean environment for strategy configuration and data reading without visual overload.',
          videoStory:
            'The most convincing demo is “settings -> chart -> signal -> decision” because it reveals the product as a real working tool.',
          modules: [
            'TradingView-style chart',
            'Strategy settings',
            'Signals and metrics',
            'Trader workspace',
          ],
          value:
            'This case proves we can build closed-use tools where interface clarity directly supports faster decisions.',
          delivery: ['Product UI', 'Private dashboard'],
        },
      },
      {
        id: 'spin',
        name: 'Spin',
        category: 'GameFi',
        badges: ['Telegram App', 'Crash Mechanics'],
        summary:
          'A crypto game with crash mechanics where the interface must explain pace, risk, and first action instantly.',
        facts: ['Game loop', 'Wallet entry', 'Retention hooks'],
        videoFocus:
          'Show first launch, multiplier growth, and wallet entry because that sequence sells the rhythm of the product.',
        accent: '#818cf8',
        accentSoft: 'rgba(129,140,248,0.18)',
        visual: 'game',
        modal: {
          product:
            'Spin is a GameFi scenario with crash mechanics where the first screen has to explain the rhythm and the risk immediately.',
          businessTask:
            'Make the product feel fast, alive, and easy to understand without forcing users through too much setup.',
          videoStory:
            'The strongest demo is behaviour-based: entry, bet, multiplier, cashout. It shows a real product loop rather than static decoration.',
          modules: ['Crash loop', 'Telegram wallet entry', 'Retention hooks', 'Game analytics'],
          value:
            'This case shows we can design high-tempo products where interface clarity must keep up with excitement.',
          delivery: ['Game UI', 'TMA flow'],
        },
      },
      {
        id: 'liquidity-pools',
        name: 'Liquidity Pools',
        category: 'Investment Product',
        badges: ['SUI', 'DeFi Product'],
        summary:
          'An investment product on SUI where pool mechanics, yield states, and user actions need to feel calm and readable.',
        facts: ['SUI ecosystem', 'Pool states', 'Investment flow'],
        videoFocus:
          'Show pool state, yield, and deposit flow because that removes complexity the fastest.',
        accent: '#22d3ee',
        accentSoft: 'rgba(34,211,238,0.18)',
        visual: 'liquidity',
        modal: {
          product:
            'Liquidity Pools is an investment product in the SUI ecosystem focused on making pool mechanics and capital states understandable.',
          businessTask:
            'Help users understand where they enter, what they receive, and how risk is controlled without drowning them in DeFi terminology.',
          videoStory:
            'The video should highlight pool structure, yield visibility, and the path to deposit so the product feels manageable rather than abstract.',
          modules: ['Pool overview', 'Yield states', 'Deposit flow', 'Risk visibility'],
          value:
            'This case demonstrates how we simplify DeFi interfaces and make investment products feel cleaner and more trustworthy.',
          delivery: ['Product UI', 'DeFi UX'],
        },
      },
      {
        id: 'coingem',
        name: 'CoinGem',
        category: 'Token Discovery',
        badges: ['Design', 'Voting Service'],
        summary:
          'A voting service for crypto tokens built to help users discover promising coins and read market interest faster.',
        facts: ['Token voting', 'Discovery feed', 'Ranking logic'],
        videoFocus:
          'Show ranking, token cards, and voting logic because those blocks explain the product with no extra narration.',
        accent: '#f59e0b',
        accentSoft: 'rgba(245,158,11,0.16)',
        visual: 'voting',
        modal: {
          product:
            'CoinGem is a voting service for crypto tokens where users need to understand market attention and token momentum quickly.',
          businessTask:
            'Create a cleaner discovery environment for tokens so ranking, comparison, and voting remain readable despite high entity density.',
          videoStory:
            'The demo should focus on ranking, token cards, and the voting interaction because that is where the product value is most obvious.',
          modules: ['Voting feed', 'Token rankings', 'Project cards', 'Discovery logic'],
          value:
            'This case is useful because it shows how we build order and hierarchy in interfaces where many entities compete for attention.',
          delivery: ['Design'],
        },
      },
      {
        id: 'fungypack',
        name: 'Fungypack',
        category: 'NFT Utility',
        badges: ['Design', 'Development', 'NFT Product'],
        summary:
          'A platform that extends NFT utility without transferring assets and makes a technical mechanic feel more tangible.',
        facts: ['NFT utility', 'No asset transfer', 'Connection flow'],
        videoFocus:
          'Show asset connection, utility logic, and the safe action without transfer because that is the product’s key differentiator.',
        accent: '#a78bfa',
        accentSoft: 'rgba(167,139,250,0.18)',
        visual: 'nft',
        modal: {
          product:
            'Fungypack is a platform for increasing NFT utility and value without requiring users to transfer the underlying assets.',
          businessTask:
            'Explain a complex NFT mechanic through a calm flow where the user connects an asset, sees utility, and acts without losing ownership control.',
          videoStory:
            'The strongest demo emphasizes that the asset stays with the user while the utility becomes available through a simple flow.',
          modules: ['Asset connection', 'Utility packaging', 'Ownership-safe action', 'NFT management'],
          value:
            'This case shows we can package Web3 mechanics into a product that feels understandable instead of overly technical.',
          delivery: ['Design', 'Development'],
        },
      },
    ],
  },
  UA: {
    badge: 'Кейси',
    title: 'Кейси, які швидко показують наш рівень у продукті',
    desc:
      'Без зайвого шуму: що це за продукт, за що ми відповідали, що можна відкрити онлайн і чому кейс релевантний схожому запиту.',
    liveProjectLabel: 'Відкрити проєкт онлайн',
    requestAccessLabel: 'Запросити live demo',
    contactProjectLabel: 'Звʼязатися з нами',
    formatLabel: 'Формат',
    scopeLabel: 'Що робили',
    accessLabel: 'Доступ',
    liveStatusLabel: 'Live online',
    demoStatusLabel: 'Demo by request',
    privateStatusLabel: 'Private / by request',
    openLabel: 'Відкрити кейс',
    closeLabel: 'Закрити',
    moreLabel: 'Детальніше',
    relatedLabel: 'Інші проєкти',
    previousLabel: 'Попередній кейс',
    nextLabel: 'Наступний кейс',
    productLabel: 'Продукт',
    businessTaskLabel: 'Бізнес-задача',
    videoStoryLabel: 'Що показувати у відео',
    modulesLabel: 'Ключові модулі',
    valueLabel: 'Чому це важливо',
    deliveryLabel: 'Формат роботи',
    discussLabel: 'Обговорити схожий проєкт',
    cases: [
      {
        id: 'transmatika',
        name: 'Transmatika',
        category: 'B2B Platform',
        badges: ['Design', 'Development', 'Fleet Ops'],
        summary:
          'Платформа для транспортних компаній із паливними картами, контролем витрат і сфокусованим операційним робочим екраном.',
        facts: ['Fuel cards', 'Витрати й статуси', 'B2B operations'],
        videoFocus:
          'Показувати паливні карти, статусні блоки й те, як команда швидко зчитує витрати та наступну дію.',
        accent: '#7dd3fc',
        accentSoft: 'rgba(22,163,255,0.18)',
        visual: 'operations',
        modal: {
          product:
            'Transmatika — B2B-платформа для транспортних компаній, де паливні витрати, маршрути та щоденні операції мають читатися з першого погляду.',
          businessTask:
            'Зібрати в одному продукті керування паливними картами, персональні вигоди, контроль витрат і зрозумілу логіку для операційної команди.',
          videoStory:
            'Найсильніше працює сценарій “карта -> витрата -> статус -> рішення”, бо він пояснює продукт без довгої підводки.',
          modules: [
            'Панель паливних карт',
            'Операційні статуси',
            'Контроль витрат',
            'Робочі екрани команди',
          ],
          value:
            'Цей кейс показує, що ми вміємо збирати щільний B2B-інтерфейс так, щоб він прискорював роботу команди, а не виснажував її.',
          delivery: ['Design', 'Development'],
        },
      },
      {
        id: 'swipy',
        name: 'Swipy',
        category: 'Dating App',
        badges: ['Telegram Mini App', 'Social Product'],
        summary:
          'Продукт для знайомств у Telegram Mini Apps із швидким онбордингом, зрозумілою логікою match і social-first сценарієм.',
        facts: ['Telegram Mini Apps', 'Matching flow', 'Smart feed'],
        videoFocus:
          'Показувати перший вхід, вибір профілів і момент, коли логіка мэтчингу стає очевидною за секунди.',
        accent: '#60a5fa',
        accentSoft: 'rgba(96,165,250,0.18)',
        visual: 'social',
        modal: {
          product:
            'Swipy — dating-продукт у Telegram Mini Apps, де first-time experience безпосередньо впливає на утримання.',
          businessTask:
            'Зробити вибір профілів, знайомство та перші дії максимально природними всередині Telegram з мінімумом тертя.',
          videoStory:
            'У ролику краще показувати зв’язку “вхід -> вибір -> match -> retention”, бо саме вона продає цінність продукту.',
          modules: [
            'Онбординг у TMA',
            'Стрічка й match-сценарій',
            'Referral-механіка',
            'Покупки через Telegram Stars',
          ],
          value:
            'Цей кейс доводить, що ми вміємо робити продукти з сильним першим досвідом, де інтерфейс одразу працює на залучення.',
          delivery: ['Product UI', 'Growth UX'],
        },
      },
      {
        id: 'keytrust',
        name: 'KeyTrust',
        category: 'Crypto Exchange',
        badges: ['Web App', 'Exchange UI', 'EVM & TON'],
        summary:
          'Сучасний крипто-обмінник із щільними даними, on-ramp/off-ramp логікою та сильними сигналами довіри в складному продукті.',
        facts: ['EVM & TON', 'On-ramp / Off-ramp', 'Admin states'],
        videoFocus:
          'Показувати продаж, купівлю й обмін між мережами — так найкраще видно зрілі action-зони та структуру інтерфейсу.',
        accent: '#93c5fd',
        accentSoft: 'rgba(147,197,253,0.16)',
        visual: 'exchange',
        modal: {
          product:
            'KeyTrust — exchange-продукт на мережах EVM і TON, де швидкість операцій, довіра та висока щільність даних мають співіснувати в одному UI.',
          businessTask:
            'Спроєктувати зрозумілий продукт для купівлі, продажу, обміну, card flows, bridge-сценаріїв і адміністративної частини.',
          videoStory:
            'У відео варто показувати live trading flow, переказ між мережами та щільні, але спокійні data-зони, які не перевантажують.',
          modules: [
            'Buy і sell flows',
            'Bridge та network swap',
            'Wallet і card flows',
            'Admin panel',
          ],
          value:
            'Кейс демонструє нашу здатність проєктувати складні fintech-інтерфейси так, щоб вони відчувалися надійними, а не хаотичними.',
          delivery: ['Product UI', 'Exchange UX'],
        },
      },
      {
        id: 'novabot',
        name: 'NovaBot',
        category: 'Trading Tool',
        badges: ['Private Product', 'Analytics UI'],
        summary:
          'Закритий trading-інтерфейс, де налаштування стратегій, щільна аналітика та ієрархія графіка залишаються чистими й робочими.',
        facts: ['Private use', 'Strategy settings', 'Dense analytics'],
        videoFocus:
          'Показувати графік, налаштування стратегії та сигнали в одному сценарії — це швидко пояснює практичну користь продукту.',
        accent: '#38bdf8',
        accentSoft: 'rgba(56,189,248,0.18)',
        visual: 'trading',
        modal: {
          product:
            'NovaBot — закритий trading tool для керування стратегіями, читання сигналів і роботи зі щільною аналітикою в одному просторі.',
          businessTask:
            'Дати користувачу чисте середовище для конфігурації стратегій і читання даних без візуального перевантаження.',
          videoStory:
            'Найпереконливіше працює сценарій “налаштування -> графік -> сигнал -> рішення”, бо він показує інструмент як реальний робочий продукт.',
          modules: [
            'TradingView-style chart',
            'Налаштування стратегій',
            'Сигнали та метрики',
            'Робочий простір трейдера',
          ],
          value:
            'Кейс показує, що ми вміємо робити інструменти для закритого використання, де ясність інтерфейсу напряму впливає на швидкість рішень.',
          delivery: ['Product UI', 'Private dashboard'],
        },
      },
      {
        id: 'spin',
        name: 'Spin',
        category: 'GameFi',
        badges: ['Telegram App', 'Crash Mechanics'],
        summary:
          'Крипто-гра з crash-механікою, де інтерфейс повинен миттєво пояснювати темп, ризик і першу дію.',
        facts: ['Game loop', 'Wallet entry', 'Retention hooks'],
        videoFocus:
          'Показувати перший запуск, ріст коефіцієнта й wallet entry — саме ця послідовність продає ритм продукту.',
        accent: '#818cf8',
        accentSoft: 'rgba(129,140,248,0.18)',
        visual: 'game',
        modal: {
          product:
            'Spin — GameFi-сценарій із crash-механікою, де перший екран має одразу пояснити ритм гри та ризик.',
          businessTask:
            'Зробити продукт швидким, живим і зрозумілим без довгої підготовки, з ясним входом у механику та утриманням уваги на core-loop.',
          videoStory:
            'Найсильніший демо-сценарій — поведінковий: вхід, ставка, коефіцієнт, cashout. Так продукт виглядає як живий, а не як статичний макет.',
          modules: ['Crash loop', 'Telegram wallet entry', 'Retention hooks', 'Game analytics'],
          value:
            'Цей кейс корисний як доказ того, що ми вміємо проєктувати продукти з високим темпом, де ясність інтерфейсу має встигати за драйвом.',
          delivery: ['Game UI', 'TMA flow'],
        },
      },
      {
        id: 'liquidity-pools',
        name: 'Liquidity Pools',
        category: 'Investment Product',
        badges: ['SUI', 'DeFi Product'],
        summary:
          'Інвестиційний продукт на SUI, де pool-механіка, стани доходності та дії користувача мають відчуватися спокійно й зрозуміло.',
        facts: ['SUI ecosystem', 'Pool states', 'Investment flow'],
        videoFocus:
          'Показувати стан пулу, доходність і депозитний сценарій — це найшвидше знімає відчуття складності.',
        accent: '#22d3ee',
        accentSoft: 'rgba(34,211,238,0.18)',
        visual: 'liquidity',
        modal: {
          product:
            'Liquidity Pools — інвестиційний продукт в екосистемі SUI, сфокусований на зрозумілому читанні pool-механіки та станів капіталу.',
          businessTask:
            'Допомогти користувачу зрозуміти, куди він заходить, що отримує і де контролює ризик, не перевантажуючи його DeFi-термінологією.',
          videoStory:
            'У відео варто показувати структуру пулів, доходність і шлях до депозиту, щоб продукт відчувався керованим, а не абстрактним.',
          modules: ['Pool overview', 'Yield states', 'Deposit flow', 'Risk visibility'],
          value:
            'Кейс демонструє, як ми спрощуємо DeFi-інтерфейси й робимо інвестиційні продукти чистішими та більш довірливими.',
          delivery: ['Product UI', 'DeFi UX'],
        },
      },
      {
        id: 'coingem',
        name: 'CoinGem',
        category: 'Token Discovery',
        badges: ['Design', 'Voting Service'],
        summary:
          'Сервіс голосування за токени, створений для швидкого пошуку перспективних монет і читання ринкового інтересу.',
        facts: ['Token voting', 'Discovery feed', 'Ranking logic'],
        videoFocus:
          'Показувати рейтинг, картки токенів і логіку голосування — ці блоки пояснюють продукт без зайвих слів.',
        accent: '#f59e0b',
        accentSoft: 'rgba(245,158,11,0.16)',
        visual: 'voting',
        modal: {
          product:
            'CoinGem — voting-сервіс для крипто-токенів, де користувачеві потрібно швидко зчитувати ринкову увагу та динаміку інтересу.',
          businessTask:
            'Побудувати чисте discovery-середовище для токенів, де рейтинг, порівняння та голосування лишаються зрозумілими при великій кількості сутностей.',
          videoStory:
            'У демо важливо робити акцент на ранжуванні, картках токенів і взаємодії з голосуванням — саме там продуктова цінність читається найкраще.',
          modules: ['Voting feed', 'Рейтинг токенів', 'Картки проєктів', 'Discovery logic'],
          value:
            'Цей кейс корисний, бо показує, як ми вибудовуємо порядок та ієрархію в інтерфейсах, де за увагу конкурує багато сутностей.',
          delivery: ['Design'],
        },
      },
      {
        id: 'fungypack',
        name: 'Fungypack',
        category: 'NFT Utility',
        badges: ['Design', 'Development', 'NFT Product'],
        summary:
          'Платформа, що підсилює utility NFT без передачі активів і робить технічну механіку відчутно зрозумілішою.',
        facts: ['NFT utility', 'No asset transfer', 'Connection flow'],
        videoFocus:
          'Показувати підключення активу, utility-логіку й безпечну дію без передачі NFT — це головний диференціатор продукту.',
        accent: '#a78bfa',
        accentSoft: 'rgba(167,139,250,0.18)',
        visual: 'nft',
        modal: {
          product:
            'Fungypack — платформа для розширення utility та цінності NFT без необхідності передавати самі активи.',
          businessTask:
            'Пояснити складну NFT-механіку через спокійний flow, де користувач підключає актив, бачить utility і діє без втрати контролю над володінням.',
          videoStory:
            'Найсильніше в ролику працює акцент на тому, що актив залишається у користувача, а utility відкривається через простий сценарій.',
          modules: ['Asset connection', 'Utility packaging', 'Ownership-safe action', 'NFT management'],
          value:
            'Цей кейс показує, що ми вміємо упаковувати Web3-механіку в продукт, який відчувається зрозумілим, а не перевантаженим термінами.',
          delivery: ['Design', 'Development'],
        },
      },
    ],
  },
};

export function getCasesContent(lang: Language): CasesSectionContent {
  return CASES_CONTENT[lang];
}
