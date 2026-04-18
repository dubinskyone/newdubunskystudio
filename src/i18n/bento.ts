import { Smartphone, MonitorPlay, ShoppingCart, Activity, ShieldCheck, Box, Zap, Search, Globe, Layers } from 'lucide-react';

export const getBentoContent = (lang: string) => {
  const content = {
    RU: {
      badge: "Кейсы",
      title1: "Архитектура",
      titleHighlight: "результата",
      startProject: "Начать проект",
      liveProject: "Живой проект",
      caseLabel: "Кейс",
      tabs: {
        landings: {
          label: "Web3 & TMA",
          title: "Приложение для знакомств Swipy",
          features: [
            { icon: Search, text: "Интеллектуальная лента" },
            { icon: Zap, text: "Алгоритм подбора анкет" },
            { icon: Activity, text: "Реферальная система" },
            { icon: ShieldCheck, text: "Покупки за Telegram Stars" },
          ],
          project: {
            name: "Swipy",
            desc: "Приложение для знакомств на базе Telegram MiniApps (Топ-10 в центре TMA). Уютное место для поиска людей по сердцу и интересам.",
            image: "https://images.unsplash.com/photo-1549495535-46f90117bfe3?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Экосистема", value: "Telegram" },
              { label: "Рейтинг", value: "Топ-10" }
            ]
          }
        },
        fintech: {
          label: "Финтех и Биржи",
          title: "Современная биржа EVM и TON",
          features: [
            { icon: MonitorPlay, text: "Онлайн покупка/продажа (EUR/USD)" },
            { icon: Box, text: "Кроссчейн мосты и обмены" },
            { icon: ShieldCheck, text: "Легальная база в Европе" },
            { icon: Activity, text: "Административная панель" },
          ],
          project: {
            name: "KeyTrust",
            desc: "Биржа с поддержкой сетей EVM и TON. Быстрая, отзывчивая система с легальными On-ramp и Off-ramp провайдерами по всей Европе.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Сети", value: "EVM & TON" },
              { label: "Статус", value: "Легально (EU)" }
            ]
          }
        },
        mobile: {
          label: "B2B Платформы",
          title: "Платформа для транспортных компаний",
          features: [
            { icon: Activity, text: "Мониторинг затрат и карт" },
            { icon: Layers, text: "Автоматизация документооборота" },
            { icon: Globe, text: "Планирование маршрутов" },
            { icon: ShoppingCart, text: "Управление персоналом" },
          ],
          project: {
            name: "Transmatika",
            desc: "B2B Платформа для транспортных компаний: учет топливных карт, повышение эффективности, снижение затрат и логистика.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Клиенты", value: "B2B" },
              { label: "Результат", value: "Снижение затрат" }
            ]
          }
        },
        branding: {
          label: "DeFi & DAO",
          title: "DAO, токеномика и криптобиржа",
          features: [
            { icon: Box, text: "Собственный токен PROFIT" },
            { icon: Activity, text: "Стейкинг и система дивидендов" },
            { icon: ShoppingCart, text: "NFT-маркетплейс" },
            { icon: Zap, text: "Гибкая токеномика" },
          ],
          project: {
            name: "StabilityDAO",
            desc: "Собственный проект, включающий DAO, токен PROFIT, криптобиржу ReactSwap, стейкинг и коллекцию NFT.",
            image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Технологии", value: "Solidity/Node" },
              { label: "Экосистема", value: "ReactSwap" }
            ]
          }
        },
        ecommerce: {
          label: "GameFi",
          title: "Telegram App с механникой «краш»",
          features: [
            { icon: Smartphone, text: "Интеграция с Telegram Wallet" },
            { icon: Activity, text: "Генерация коэффициентов" },
            { icon: Layers, text: "Реферальная система" },
            { icon: MonitorPlay, text: "Топ игроков и статистика" },
          ],
          project: {
            name: "Spin",
            desc: "Игровая механика «краш» в Telegram TMA. Игроки делают ставки, следят за ростом коэффициента и выводят средства через Wallet.",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Интеграция", value: "TG Wallet" },
              { label: "Платформа", value: "TMA" }
            ]
          }
        },
        blockchain: {
          label: "Cloud Mining",
          title: "Платформа удаленного майнинга",
          features: [
            { icon: Search, text: "P2P система майнеров" },
            { icon: Globe, text: "Обновление новостей и статистики" },
            { icon: ShieldCheck, text: "Система 2FA" },
            { icon: Layers, text: "Управление пользователями" },
          ],
          project: {
            name: "CyberMine",
            desc: "Сервис удаленного майнинга. Онлайн-платформа, которая позволяет пользователям майнить криптовалюту без оборудования.",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Формат", value: "Удаленно" },
              { label: "Система", value: "P2P Майнинг" }
            ]
          }
        },
        corporate: {
          label: "Trading Tools",
          title: "Платформа торговых роботов",
          features: [
            { icon: MonitorPlay, text: "Интеграция с TradingView" },
            { icon: Zap, text: "Гибкие настройки стратегий" },
            { icon: Activity, text: "Динамичные графики" },
            { icon: Smartphone, text: "Мобильная версия" },
          ],
          project: {
            name: "NovaBot",
            desc: "Платформа для создания торговых роботов с гибкими настройками стратегий, продвинутыми графиками и минималистичным интерфейсом.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Интерфейс", value: "Clean UI" },
              { label: "Графики", value: "TradingView" }
            ]
          }
        }
      }
    },
    EN: {
      badge: "Cases",
      title1: "Architecture of",
      titleHighlight: "results",
      startProject: "Start project",
      liveProject: "Live project",
      caseLabel: "Case",
      tabs: {
        landings: {
          label: "Web3 & TMA",
          title: "Swipy Dating Application",
          features: [
            { icon: Search, text: "Smart feed algorithm" },
            { icon: Zap, text: "Profile matching system" },
            { icon: Activity, text: "Referral mechanics" },
            { icon: ShieldCheck, text: "Purchases via Telegram Stars" },
          ],
          project: {
            name: "Swipy",
            desc: "Dating app built on Telegram MiniApps (Top-10 in TMA center). A cozy place to find people by heart and interests.",
            image: "https://images.unsplash.com/photo-1549495535-46f90117bfe3?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Ecosystem", value: "Telegram" },
              { label: "Rating", value: "Top-10 TMA" }
            ]
          }
        },
        fintech: {
          label: "Fintech & Exchange",
          title: "Modern EVM and TON Exchange",
          features: [
            { icon: MonitorPlay, text: "Online buying/selling (EUR/USD)" },
            { icon: Box, text: "Cross-chain bridges & swaps" },
            { icon: ShieldCheck, text: "Legal European entity" },
            { icon: Activity, text: "Advanced admin panel" },
          ],
          project: {
            name: "KeyTrust",
            desc: "Exchange supporting EVM and TON networks. A fast, responsive system with legal On/Off-ramp providers across Europe.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Networks", value: "EVM & TON" },
              { label: "Status", value: "EU Legalized" }
            ]
          }
        },
        mobile: {
          label: "B2B Platforms",
          title: "Transport Company Platform",
          features: [
            { icon: Activity, text: "Cost tracking & fuel cards" },
            { icon: Layers, text: "Documents automation" },
            { icon: Globe, text: "Route planning" },
            { icon: ShoppingCart, text: "Personnel management" },
          ],
          project: {
            name: "Transmatika",
            desc: "B2B platform for transport companies: fuel card management, efficiency tracking, cost reduction, and logistics control.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Clients", value: "B2B" },
              { label: "Results", value: "Cost reduced" }
            ]
          }
        },
        branding: {
          label: "DeFi & DAO",
          title: "DAO, Tokenomics & Crypto Exchange",
          features: [
            { icon: Box, text: "Proprietary PROFIT token" },
            { icon: Activity, text: "Staking & dividend system" },
            { icon: ShoppingCart, text: "NFT Marketplace" },
            { icon: Zap, text: "Flexible tokenomics" },
          ],
          project: {
            name: "StabilityDAO",
            desc: "In-house project including DAO, PROFIT token, ReactSwap crypto exchange, staking, and custom NFT collection.",
            image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Tech Core", value: "Solidity/Node" },
              { label: "Ecosystem", value: "ReactSwap" }
            ]
          }
        },
        ecommerce: {
          label: "GameFi",
          title: "Telegram App with Crash Mechanics",
          features: [
            { icon: Smartphone, text: "Telegram Wallet integration" },
            { icon: Activity, text: "Multiplier generation" },
            { icon: Layers, text: "Referral system" },
            { icon: MonitorPlay, text: "Top players & statistics" },
          ],
          project: {
            name: "Spin",
            desc: "Crash game mechanics in Telegram TMA. Players place bets, watch the multiplier grow, and withdraw funds via TG Wallet.",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Integration", value: "TG Wallet" },
              { label: "Platform", value: "TMA" }
            ]
          }
        },
        blockchain: {
          label: "Cloud Mining",
          title: "Remote Mining Platform",
          features: [
            { icon: Search, text: "P2P miners network" },
            { icon: Globe, text: "News & statistics feeds" },
            { icon: ShieldCheck, text: "2FA Security standard" },
            { icon: Layers, text: "Advanced user management" },
          ],
          project: {
            name: "CyberMine",
            desc: "Remote mining service. An online platform allowing users to mine cryptocurrency without deploying their own hardware.",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Format", value: "Remote" },
              { label: "Network", value: "P2P Mining" }
            ]
          }
        },
        corporate: {
          label: "Trading Tools",
          title: "Trading Robots Platform",
          features: [
            { icon: MonitorPlay, text: "TradingView integration" },
            { icon: Zap, text: "Flexible strategy settings" },
            { icon: Activity, text: "Dynamic charts & metrics" },
            { icon: Smartphone, text: "Responsive mobile view" },
          ],
          project: {
            name: "NovaBot",
            desc: "Platform for creating trading robots with flexible strategy configurations, advanced charts, and a clean minimalist UI.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "UI Flow", value: "Clean UI/UX" },
              { label: "Charts", value: "TradingView" }
            ]
          }
        }
      }
    },
    UA: {
      badge: "Кейси",
      title1: "Архітектура",
      titleHighlight: "результату",
      startProject: "Почати проєкт",
      liveProject: "Живий проєкт",
      caseLabel: "Кейс",
      tabs: {
        landings: {
          label: "Web3 & TMA",
          title: "Додаток для знайомств Swipy",
          features: [
            { icon: Search, text: "Інтелектуальна стрічка" },
            { icon: Zap, text: "Алгоритм підбору анкет" },
            { icon: Activity, text: "Реферальна система" },
            { icon: ShieldCheck, text: "Покупки за Telegram Stars" },
          ],
          project: {
            name: "Swipy",
            desc: "Додаток для знайомств на базі Telegram MiniApps (Топ-10 у центрі TMA). Безпечне місце для пошуку людей за інтересами.",
            image: "https://images.unsplash.com/photo-1549495535-46f90117bfe3?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Екосистема", value: "Telegram" },
              { label: "Рейтинг", value: "Топ-10" }
            ]
          }
        },
        fintech: {
          label: "Фінтех та Біржі",
          title: "Сучасна біржа EVM та TON",
          features: [
            { icon: MonitorPlay, text: "Онлайн купівля/продаж (EUR/USD)" },
            { icon: Box, text: "Кросчейн мости та обміни" },
            { icon: ShieldCheck, text: "Легальна база в Європі" },
            { icon: Activity, text: "Адміністративна панель" },
          ],
          project: {
            name: "KeyTrust",
            desc: "Біржа з підтримкою мереж EVM та TON. Швидка система з легальними On-ramp і Off-ramp провайдерами по всій Європі.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Мережі", value: "EVM & TON" },
              { label: "Статус", value: "Легально (EU)" }
            ]
          }
        },
        mobile: {
          label: "B2B Платформи",
          title: "Платформа транспортних компаній",
          features: [
            { icon: Activity, text: "Моніторинг витрат та паливні картки" },
            { icon: Layers, text: "Автоматизація документообігу" },
            { icon: Globe, text: "Планування маршрутів" },
            { icon: ShoppingCart, text: "Управління персоналом" },
          ],
          project: {
            name: "Transmatika",
            desc: "B2B Платформа для транспортних компаній: облік паливних карток, зниження витрат та керування логістикою.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Клієнти", value: "B2B" },
              { label: "Результат", value: "Зниження витрат" }
            ]
          }
        },
        branding: {
          label: "DeFi & DAO",
          title: "DAO, токеноміка та криптобіржа",
          features: [
            { icon: Box, text: "Власний токен PROFIT" },
            { icon: Activity, text: "Стейкінг та система дивідендів" },
            { icon: ShoppingCart, text: "NFT-маркетплейс" },
            { icon: Zap, text: "Гнучка токеноміка" },
          ],
          project: {
            name: "StabilityDAO",
            desc: "Власний проєкт, що включає DAO, токен PROFIT, криптобіржу ReactSwap, стейкінг та колекцію NFT.",
            image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Технології", value: "Solidity/Node" },
              { label: "Екосистема", value: "ReactSwap" }
            ]
          }
        },
        ecommerce: {
          label: "GameFi",
          title: "Telegram App з механікою «краш»",
          features: [
            { icon: Smartphone, text: "Інтеграція з Telegram Wallet" },
            { icon: Activity, text: "Генерація коефіцієнтів" },
            { icon: Layers, text: "Реферальна система" },
            { icon: MonitorPlay, text: "Топ гравців та статистика" },
          ],
          project: {
            name: "Spin",
            desc: "Ігрова механіка «краш» в Telegram TMA. Гравці роблять ставки, стежать за коефіцієнтом та виводять кошти через Wallet.",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Інтеграція", value: "TG Wallet" },
              { label: "Платформа", value: "TMA" }
            ]
          }
        },
        blockchain: {
          label: "Cloud Mining",
          title: "Платформа віддаленого майнінгу",
          features: [
            { icon: Search, text: "P2P система майнерів" },
            { icon: Globe, text: "Оновлення новин та статистики" },
            { icon: ShieldCheck, text: "Система 2FA" },
            { icon: Layers, text: "Керування користувачами" },
          ],
          project: {
            name: "CyberMine",
            desc: "Сервіс віддаленого майнінгу. Онлайн-платформа, що дозволяє майнити криптовалюту без власного обладнання.",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Формат", value: "Віддалено" },
              { label: "Система", value: "P2P Майнінг" }
            ]
          }
        },
        corporate: {
          label: "Trading Tools",
          title: "Платформа торгових роботів",
          features: [
            { icon: MonitorPlay, text: "Інтеграція з TradingView" },
            { icon: Zap, text: "Гнучкі налаштування стратегій" },
            { icon: Activity, text: "Динамічні графіки" },
            { icon: Smartphone, text: "Мобільна версія" },
          ],
          project: {
            name: "NovaBot",
            desc: "Платформа для створення торгових роботів із гнучкими налаштуваннями стратегій, графіками та мінімалістичним інтерфейсом.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
            link: "#",
            stats: [
              { label: "Інтерфейс", value: "Clean UI" },
              { label: "Графіки", value: "TradingView" }
            ]
          }
        }
      }
    }
  };

  return content[lang as keyof typeof content] || content.EN;
};
