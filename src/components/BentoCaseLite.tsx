import { useEffect, useState } from 'react';
import {
  Briefcase,
  ChevronRight,
  Cloud,
  Gamepad2,
  Globe,
  Landmark,
  LineChart,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../i18n';
import {
  getServiceMenuContent,
  SERVICE_TAB_KEYS,
  type ServiceTabKey,
} from '../i18n/serviceMenu';

const serviceIcons: Record<ServiceTabKey, LucideIcon> = {
  landings: Globe,
  fintech: Landmark,
  mobile: Briefcase,
  branding: ShieldCheck,
  ecommerce: Gamepad2,
  blockchain: Cloud,
  corporate: LineChart,
};

const introCopy = {
  RU: {
    badge: 'Кейсы',
    title: 'Продуктовые сценарии, в которых мы сильнее всего',
    description:
      'Показываем направления, где умеем быстро собирать сильный интерфейс, рабочую архитектуру и понятный пользовательский путь.',
    cta: 'Обсудить похожий кейс',
  },
  EN: {
    badge: 'Cases',
    title: 'Product scenarios where we create the strongest results',
    description:
      'A lightweight view of the directions where we combine clear UX, strong UI systems, and scalable product execution.',
    cta: 'Discuss a similar case',
  },
  UA: {
    badge: 'Кейси',
    title: 'Продуктові сценарії, у яких ми даємо найсильніший результат',
    description:
      'Легка mobile-first версія блоку з напрямами, де ми поєднуємо сильний UX, зрозумілий UI та масштабовану реалізацію.',
    cta: 'Обговорити схожий кейс',
  },
} as const;

export function BentoCaseLite() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<ServiceTabKey>('landings');
  const copy = introCopy[lang];
  const serviceMenuContent = getServiceMenuContent(lang);
  const activeEntry = serviceMenuContent[activeTab];
  const ActiveIcon = serviceIcons[activeTab];

  useEffect(() => {
    const handleTabChange = (event: Event) => {
      const customEvent = event as CustomEvent<ServiceTabKey>;
      setActiveTab(customEvent.detail);

      const section = document.getElementById('solutions');
      if (section) {
        const topOfSection = section.offsetTop - 96;
        window.scrollTo({
          top: topOfSection,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('changeBentoTab', handleTabChange);
    return () => window.removeEventListener('changeBentoTab', handleTabChange);
  }, []);

  return (
    <section
      id="solutions"
      className="scroll-mt-28 max-w-7xl px-4 py-8 md:scroll-mt-32 md:py-16 mx-auto"
    >
      <div className="relative overflow-hidden rounded-[32px] border border-line bg-surface-card/80 p-4 shadow-[0_0_50px_rgba(0,0,0,0.22)] sm:p-6">
        <div className="absolute right-[12%] top-[8%] h-40 w-40 rounded-full bg-brand-blue/10 blur-[70px]" />

        <div className="relative z-10">
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-blue">
            {copy.badge}
          </div>
          <h2 className="max-w-[760px] text-3xl font-sans font-bold leading-[1.04] tracking-tight text-white sm:font-display sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 max-w-[720px] text-sm leading-6 text-text-muted sm:text-base">
            {copy.description}
          </p>

          <div className="mt-8 rounded-[26px] border border-white/10 bg-[#09090b]/80 p-1.5 shadow-[0_10px_32px_rgba(0,0,0,0.28)] ring-1 ring-white/5 backdrop-blur-xl">
            <div className="grid grid-cols-4 gap-2 md:flex md:flex-wrap md:gap-2">
            {SERVICE_TAB_KEYS.map((key) => {
              const isActive = key === activeTab;
              const Icon = serviceIcons[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  aria-label={serviceMenuContent[key].label}
                  className={`group relative flex aspect-square min-w-0 w-full items-center justify-center gap-2 rounded-full border p-1 text-sm font-semibold transition-all duration-300 md:h-auto md:w-auto md:min-w-fit md:aspect-auto md:px-4 md:py-2.5 ${
                    isActive
                      ? 'brand-pill-fill border-brand-blue/35 text-white shadow-[0_0_28px_rgba(37,99,235,0.2)]'
                      : 'border-white/10 bg-white/[0.03] text-text-muted hover:border-white/16 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 md:h-auto md:w-auto md:bg-transparent ${
                      isActive ? 'md:text-white' : 'md:text-white/70'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="hidden whitespace-nowrap pr-1 text-sm font-bold tracking-[0.01em] md:inline">
                    {serviceMenuContent[key].label}
                  </span>
                </button>
              );
            })}
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(145deg,rgba(15,18,28,0.98),rgba(17,26,44,0.92),rgba(21,48,87,0.72))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(136,210,255,0.18),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_42%)]" />
              <div className="flex items-start justify-between gap-4">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm">
                  <ActiveIcon className="h-5 w-5" />
                </div>
                <span className="relative z-10 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 backdrop-blur-sm">
                  {activeEntry.label}
                </span>
              </div>

              <div className="relative z-10 mt-7">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  {activeEntry.projectName}
                </div>
                <h3 className="mt-2 text-3xl font-sans font-bold leading-[1.04] text-white sm:font-display sm:text-[36px]">
                  {activeEntry.title}
                </h3>
                <p className="mt-4 max-w-[560px] text-sm leading-6 text-white/72 sm:text-base">
                  {activeEntry.description}
                </p>
              </div>

              <div className="relative z-10 mt-6 grid gap-3 sm:grid-cols-2">
                {activeEntry.stats.map((stat) => (
                  <div
                    key={`${activeTab}-${stat.label}`}
                    className="rounded-[20px] border border-white/10 bg-black/18 px-4 py-3 backdrop-blur-sm"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {SERVICE_TAB_KEYS.filter((key) => key !== activeTab)
                .slice(0, 3)
                .map((key) => {
                  const entry = serviceMenuContent[key];
                  const Icon = serviceIcons[key];

                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTab(key)}
                      className="group flex items-start gap-4 rounded-[24px] border border-white/8 bg-white/[0.03] p-4 text-left transition-all duration-200 hover:border-white/12 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-brand-blue">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          {entry.label}
                        </div>
                        <div className="mt-2 text-lg font-semibold text-white">{entry.projectName}</div>
                        <p className="mt-2 text-sm leading-5 text-text-muted">{entry.title}</p>
                      </div>
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-white/35 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white/75" />
                    </button>
                  );
                })}

              <a
                href="#contact"
                className="brand-button mt-1 flex items-center justify-center gap-2 rounded-[22px] px-5 py-4 text-sm font-bold text-white no-underline"
              >
                {copy.cta}
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
