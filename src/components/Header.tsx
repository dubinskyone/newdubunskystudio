import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  Cloud,
  Gamepad2,
  Globe,
  Landmark,
  LineChart,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../i18n';
import { getServiceMenuContent, type ServiceTabKey } from '../i18n/serviceMenu';
import { getHomePathForLanguage, LANGUAGE_OPTIONS } from '../site';
import { Magnetic } from './ui/Magnetic';

type DesktopDropdown = 'services' | null;

const SERVICE_TAB_KEYS: readonly ServiceTabKey[] = [
  'landings',
  'fintech',
  'mobile',
  'branding',
  'ecommerce',
  'blockchain',
  'corporate',
];

const serviceIcons: Record<ServiceTabKey, LucideIcon> = {
  landings: Globe,
  fintech: Landmark,
  mobile: Briefcase,
  branding: ShieldCheck,
  ecommerce: Gamepad2,
  blockchain: Cloud,
  corporate: LineChart,
};

const servicePreviewThemes: Record<ServiceTabKey, string> = {
  landings: 'from-[#102544] via-[#1d5aa4] to-[#6ebdff]',
  fintech: 'from-[#0f203d] via-[#245da7] to-[#68c8ff]',
  mobile: 'from-[#112b45] via-[#1e6b9d] to-[#7cd1ff]',
  branding: 'from-[#10233f] via-[#21589f] to-[#71b7ff]',
  ecommerce: 'from-[#132743] via-[#1f64b2] to-[#77c9ff]',
  blockchain: 'from-[#10314b] via-[#1a78a9] to-[#80dbff]',
  corporate: 'from-[#0f213d] via-[#235ba5] to-[#79c2ff]',
};

const navItems = [
  { id: 'services', labelKey: 'services', kind: 'services' },
  { id: 'solutions', labelKey: 'cases', kind: 'link' },
  { id: 'showcase', labelKey: 'gallery', kind: 'link' },
  { id: 'platform', labelKey: 'process', kind: 'link' },
  { id: 'team', labelKey: 'team', kind: 'link' },
  { id: 'contact', labelKey: 'contacts', kind: 'link' },
] as const;

export function Header() {
  const { lang, t } = useLanguage();
  const serviceMenuContent = getServiceMenuContent(lang);
  const serviceLinks = SERVICE_TAB_KEYS.map((key) => ({
    key,
    label: serviceMenuContent[key].label,
    title: serviceMenuContent[key].title,
    projectName: serviceMenuContent[key].projectName,
    description: serviceMenuContent[key].description,
    stats: serviceMenuContent[key].stats,
    previewTone: servicePreviewThemes[key],
    Icon: serviceIcons[key],
  }));

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeServiceKey, setActiveServiceKey] = useState<ServiceTabKey>('landings');
  const [activeDropdown, setActiveDropdown] = useState<DesktopDropdown>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const mobileMenuScrollRef = useRef<HTMLDivElement | null>(null);
  const desktopNavRef = useRef<HTMLElement | null>(null);
  const desktopNavItemRefs = useRef<Array<HTMLElement | null>>([]);
  const [desktopHighlight, setDesktopHighlight] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  const activeServicePreview =
    serviceLinks.find((service) => service.key === activeServiceKey) ?? serviceLinks[0];
  const highlightedNavIndex = hoveredIndex ?? (activeDropdown === 'services' ? 0 : null);
  const isHeaderCondensed = scrollProgress > 0.04 || isMobileMenuOpen;
  const headerWidthReduction = isMobileViewport ? 3 : 20;

  const setDesktopNavItemRef = (index: number) => (node: HTMLDivElement | null) => {
    desktopNavItemRefs.current[index] = node;
  };

  const updateDesktopHighlight = (index: number | null) => {
    const target = index === null ? null : desktopNavItemRefs.current[index];

    if (!target) {
      setDesktopHighlight((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const nextWidth = Math.round(target.offsetWidth);
    const nextHeight = Math.round(target.offsetHeight);
    const nextLeft = Math.round(target.offsetLeft);
    const nextTop = Math.round(target.offsetTop);

    setDesktopHighlight({
      left: nextLeft,
      top: nextTop,
      width: nextWidth,
      height: nextHeight,
      opacity: 1,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      setScrolled(nextScrollY > 6);
      setScrollProgress(Math.min(nextScrollY / 120, 1));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleViewportChange = () => setIsMobileViewport(mediaQuery.matches);

    handleViewportChange();
    mediaQuery.addEventListener('change', handleViewportChange);

    return () => mediaQuery.removeEventListener('change', handleViewportChange);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      if (mobileMenuScrollRef.current) {
        mobileMenuScrollRef.current.scrollTop = 0;
      }
    });

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileServicesOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const syncDesktopHighlight = () => {
      updateDesktopHighlight(highlightedNavIndex);
    };

    const frame = window.requestAnimationFrame(syncDesktopHighlight);
    window.addEventListener('resize', syncDesktopHighlight);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', syncDesktopHighlight);
    };
  }, [highlightedNavIndex, lang, activeDropdown]);

  const closeDesktopDropdown = () => {
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleServiceSelect = (tabKey: ServiceTabKey) => {
    window.dispatchEvent(new CustomEvent('changeBentoTab', { detail: tabKey }));
    closeDesktopDropdown();
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none sm:pt-6">
        <div
          style={
            scrolled || isMobileMenuOpen
              ? {
                  backgroundColor: 'rgba(9, 9, 11, 0.85)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  transform: `translateY(${Math.round(scrollProgress * -1)}px)`,
                  width: `${100 - scrollProgress * headerWidthReduction}%`,
                }
              : {
                  transform: 'translateY(0px)',
                  width: '100%',
                }
          }
          className={`flex w-full max-w-[1600px] origin-top items-center justify-between rounded-full pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled || isMobileMenuOpen
              ? 'border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]'
              : 'border border-transparent bg-transparent shadow-none'
          } ${isHeaderCondensed ? 'px-4 py-2.5 sm:px-6 lg:px-8 xl:px-9' : 'px-5 py-3 sm:px-7 lg:px-10 xl:px-11'}`}
        >
          <div className="flex flex-1 items-center justify-start">
            <a
              href="#top"
              onClick={closeMobileMenu}
              aria-label="Dubinsky Studio"
              className="group flex items-center gap-[0.85rem] no-underline transition-transform duration-300 hover:scale-[1.02] sm:gap-[1.05rem]"
            >
              <img
                src="/branding/logo-mark-white.svg"
                alt=""
                aria-hidden="true"
                className="h-[1.74rem] w-auto shrink-0 opacity-100 drop-shadow-[0_0_18px_rgba(255,255,255,0.08)] transition-[opacity,transform,filter] duration-300 group-hover:translate-x-[1px] group-hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.12)] sm:h-[2.25rem]"
                loading="eager"
                decoding="async"
              />
              <span className="flex flex-col justify-center whitespace-nowrap leading-none opacity-95 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-sans sm:font-logo text-[12px] font-black uppercase tracking-[0.075em] text-white sm:text-[15px]">
                  Dubinsky
                </span>
                <span className="mt-[0.24rem] font-sans sm:font-logo text-[6.5px] font-bold uppercase tracking-[0.38em] text-white/72 sm:text-[8.5px]">
                  Studio
                </span>
              </span>
            </a>
          </div>

          <nav
            ref={desktopNavRef}
            className="relative hidden shrink-0 items-center justify-center gap-1 px-3 lg:flex lg:px-7 xl:px-9"
            onMouseLeave={() => {
              setHoveredIndex(null);
              closeDesktopDropdown();
            }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 z-0 hidden rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_28px_rgba(0,0,0,0.2)] transition-[transform,width,height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:block"
              style={{
                width: `${desktopHighlight.width}px`,
                height: `${desktopHighlight.height}px`,
                top: `${desktopHighlight.top}px`,
                opacity: desktopHighlight.opacity,
                transform: `translate3d(${desktopHighlight.left}px,0,0) scale(${desktopHighlight.opacity ? 1 : 0.96})`,
              }}
            />
            {navItems.map((item, index) => {
              const isServices = item.kind === 'services';
              const isOpen = isServices && activeDropdown === 'services';
              const isHighlighted = hoveredIndex === index || isOpen;

              if (!isServices) {
                return (
                  <div
                    key={item.id}
                    ref={setDesktopNavItemRef(index)}
                    className="relative shrink-0"
                  >
                    <a
                      href={`#${item.id}`}
                      onMouseEnter={() => {
                        setHoveredIndex(index);
                        closeDesktopDropdown();
                      }}
                      onFocus={() => {
                        setHoveredIndex(index);
                        closeDesktopDropdown();
                      }}
                      className={`relative block rounded-full px-3 py-2.5 text-[13px] font-semibold no-underline transition-all duration-300 xl:px-5 xl:text-[14px] ${
                        isHighlighted ? 'text-white' : 'text-text-muted hover:text-white'
                      }`}
                    >
                      {t('nav', item.labelKey)}
                    </a>
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  ref={setDesktopNavItemRef(index)}
                  className="relative shrink-0"
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setActiveServiceKey(activeServicePreview.key);
                    setActiveDropdown('services');
                  }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown((prev) => (prev === 'services' ? null : 'services'))
                    }
                    onFocus={() => {
                      setHoveredIndex(index);
                      setActiveDropdown('services');
                    }}
                    className="relative flex shrink-0 items-center gap-1.5 rounded-full border-0 bg-transparent px-3 py-2.5 no-underline xl:px-5"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[13px] font-semibold transition-colors duration-300 xl:text-[14px] ${
                        isOpen ? 'text-white' : 'text-text-muted hover:text-white'
                      }`}
                    >
                      {t('nav', item.labelKey)}
                    </span>
                    <span
                      className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : 'text-text-muted'}`}
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="absolute left-1/2 top-full z-[60] w-[min(820px,calc(100vw-48px))] -translate-x-1/2 pt-4 opacity-100 transition-all duration-200 xl:w-[min(900px,calc(100vw-72px))]">
                      <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#141418]/95 p-3 shadow-[0_40px_90px_rgba(0,0,0,0.72)] backdrop-blur-2xl">
                        <div className="grid gap-3 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                          <div className="flex flex-col gap-2">
                            {serviceLinks.map((service) => {
                              const isActiveService = activeServiceKey === service.key;

                              return (
                                <a
                                  key={service.key}
                                  href="#solutions"
                                  onClick={() => handleServiceSelect(service.key)}
                                  onMouseEnter={() => setActiveServiceKey(service.key)}
                                  onFocus={() => setActiveServiceKey(service.key)}
                                  className={`group relative overflow-hidden rounded-[22px] border p-4 transition-all duration-200 no-underline ${
                                    isActiveService
                                      ? 'border-brand-blue/30 bg-brand-blue/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                                      : 'border-white/6 bg-white/[0.03] hover:border-white/12 hover:bg-white/[0.06]'
                                  }`}
                                >
                                  <div
                                    className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(113,203,255,0.18),transparent_58%)] transition-opacity duration-300 ${
                                      isActiveService
                                        ? 'opacity-100'
                                        : 'opacity-0 group-hover:opacity-100'
                                    }`}
                                  />
                                  <div className="relative flex items-center gap-3">
                                    <div
                                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border text-brand-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors duration-300 ${
                                        isActiveService
                                          ? 'border-brand-blue/30 bg-brand-blue/12'
                                          : 'border-white/8 bg-white/[0.06] group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10'
                                      }`}
                                    >
                                      <service.Icon className="h-5 w-5" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between gap-3">
                                        <span className="text-sm font-semibold text-white">
                                          {service.label}
                                        </span>
                                        <ArrowRight
                                          className={`h-4 w-4 shrink-0 transition-all duration-200 ${
                                            isActiveService
                                              ? 'translate-x-0 text-white'
                                              : 'text-white/35 group-hover:translate-x-0.5 group-hover:text-white/75'
                                          }`}
                                        />
                                      </div>
                                      <p className="mt-1 text-[13px] leading-5 text-text-muted">
                                        {service.title}
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              );
                            })}
                          </div>

                          <div className="hidden min-h-[100%] xl:block">
                            <div className="relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-[26px] border border-white/8 bg-[#101117] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${activeServicePreview.previewTone} opacity-[0.3] transition-all duration-300`}
                              />
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(179,231,255,0.18),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_42%)]" />

                              <div className="relative z-10 flex h-full flex-col">
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm">
                                    <activeServicePreview.Icon className="h-5 w-5" />
                                  </div>
                                  <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/72 backdrop-blur-sm">
                                    {activeServicePreview.label}
                                  </span>
                                </div>

                                <div className="mt-8">
                                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/52">
                                    {t('nav', 'cases')}
                                  </div>
                                  <div className="mt-2 text-[28px] font-display font-bold leading-[1.02] text-white">
                                    {activeServicePreview.projectName}
                                  </div>
                                  <p className="mt-3 max-w-md text-sm leading-6 text-white/72">
                                    {activeServicePreview.description}
                                  </p>
                                </div>

                                <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                                  {activeServicePreview.stats.map((stat) => (
                                    <div
                                      key={`${activeServicePreview.key}-${stat.label}`}
                                      className="rounded-[20px] border border-white/10 bg-black/18 px-4 py-3 backdrop-blur-sm"
                                    >
                                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/48">
                                        {stat.label}
                                      </div>
                                      <div className="mt-2 text-sm font-semibold text-white">
                                        {stat.value}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a
                          href="#solutions"
                          onClick={closeDesktopDropdown}
                          className="group mt-3 flex items-center justify-between rounded-[22px] border border-white/6 bg-white/[0.02] px-4 py-3 transition-colors duration-200 hover:border-white/10 hover:bg-white/[0.05] no-underline"
                        >
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                              {t('nav', 'cases')}
                            </div>
                            <div className="mt-1 text-sm font-semibold text-white">
                              {t('hero', 'cases')}
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-white/55 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-3 md:gap-5 lg:gap-6">
            <div className="hidden lg:block">
              <Magnetic className="inline-flex">
                <a
                  href="#contact"
                  className={`group relative flex h-[44px] items-center justify-center gap-2.5 overflow-hidden rounded-full border px-5 py-2.5 text-[13px] font-bold whitespace-nowrap no-underline transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.98] lg:px-6 xl:px-7 xl:text-[14px] ${
                    isHeaderCondensed
                      ? 'border-transparent bg-transparent text-white shadow-none'
                      : 'brand-button border-brand-blue/40 text-white'
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute inset-0 transition-all duration-700 ${
                      isHeaderCondensed
                        ? 'translate-x-[-140%] opacity-0'
                        : 'translate-x-[-120%] bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.18)_50%,transparent_75%)] opacity-100 group-hover:translate-x-[120%]'
                    }`}
                  />
                  <div
                    className={`relative z-10 h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                      isHeaderCondensed
                        ? 'bg-[#55B8FF] shadow-[0_0_12px_rgba(85,184,255,0.38)]'
                        : 'bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-pulse'
                    }`}
                  />
                  <span
                    className={
                      isHeaderCondensed
                        ? 'bg-[linear-gradient(135deg,#9AD8FF_0%,#67C0FF_48%,#3E8DF8_100%)] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(85,184,255,0.14)]'
                        : ''
                    }
                  >
                    {t('nav', 'discuss')}
                  </span>
                </a>
              </Magnetic>
            </div>

            <div className="group relative z-50 hidden lg:block">
              <button className="group flex h-[40px] items-center gap-1.5 rounded-full border border-transparent bg-transparent px-1.5 py-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:text-brand-blue sm:gap-2 sm:text-[13px] no-underline">
                <Globe className="h-3.5 w-3.5 text-brand-blue transition-colors sm:h-4 sm:w-4" />
                <span>{lang}</span>
                <ChevronDown className="h-3.5 w-3.5 text-white/50 transition-transform duration-300 group-hover:-rotate-180" />
              </button>

              <div className="invisible absolute right-0 top-full mt-3 min-w-[120px] translate-y-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="relative flex flex-col gap-1 overflow-hidden rounded-2xl border border-white/10 bg-surface-glass p-2 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
                  {LANGUAGE_OPTIONS.map((languageOption) => (
                    <a
                      key={languageOption}
                      href={getHomePathForLanguage(languageOption)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 sm:text-[13px] ${
                        lang === languageOption
                          ? 'bg-brand-blue/20 text-white shadow-[inset_0_0_10px_rgba(37,99,235,0.2)]'
                          : 'text-text-muted hover:translate-x-1 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {languageOption}
                      {lang === languageOption && (
                        <div className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#2563EB]" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-transparent bg-transparent text-white transition-all duration-300 lg:hidden"
            >
              <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(107,200,255,0.28),rgba(37,99,235,0.08)_58%,transparent_72%)] opacity-0 transition-opacity duration-300" />
              <span className="relative z-10 block h-4 w-5">
                <span
                  className={`absolute left-1/2 top-px h-[2px] w-[18px] -translate-x-1/2 rounded-full bg-[rgba(255,255,255,0.96)] shadow-[0_0_8px_rgba(255,255,255,0.14)] transition-all duration-300 ${
                    isMobileMenuOpen ? 'translate-y-[6px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-1/2 top-[7px] h-[2px] w-[18px] -translate-x-1/2 rounded-full bg-[rgba(255,255,255,0.96)] shadow-[0_0_8px_rgba(255,255,255,0.14)] transition-all duration-200 ${
                    isMobileMenuOpen ? 'scale-x-50 opacity-0' : 'scale-x-100 opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-1/2 top-[13px] h-[2px] w-[18px] -translate-x-1/2 rounded-full bg-[rgba(255,255,255,0.96)] shadow-[0_0_8px_rgba(255,255,255,0.14)] transition-all duration-300 ${
                    isMobileMenuOpen ? '-translate-y-[6px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/42"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu backdrop"
          />

          <div
            ref={mobileMenuScrollRef}
            className="relative h-full overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y bg-surface-bg/94 px-4 pb-8 pt-28 backdrop-blur-xl [-webkit-overflow-scrolling:touch]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.12),transparent_34%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.1),transparent_32%)]" />

            <nav className="relative z-10 mx-auto flex min-h-full w-full max-w-sm flex-col gap-2 pb-8">
              {navItems.map((item) => {
                if (item.kind === 'services') {
                  return (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300"
                    >
                      <button
                        type="button"
                        onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between px-6 py-5 text-lg font-semibold text-white transition-colors active:bg-white/10"
                        aria-expanded={isMobileServicesOpen}
                      >
                        {t('nav', item.labelKey)}
                        <span
                          className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                        >
                          <ChevronDown className="h-5 w-5 text-brand-blue" />
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden bg-black/20 transition-all duration-300 ${
                          isMobileServicesOpen
                            ? 'max-h-[1200px] opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="flex flex-col gap-2 px-4 py-3">
                          {serviceLinks.map((service) => (
                            <a
                              key={service.key}
                              href="#solutions"
                              onClick={() => handleServiceSelect(service.key)}
                              className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-4 transition-colors duration-200 hover:border-white/12 hover:bg-white/[0.06] no-underline"
                            >
                              <div className="flex gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.06] text-brand-blue">
                                  <service.Icon className="h-5 w-5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm font-semibold text-white">
                                    {service.label}
                                  </div>
                                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                                    {service.projectName}
                                  </div>
                                  <p className="mt-2 text-[13px] leading-5 text-text-muted">
                                    {service.title}
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg font-semibold text-white transition-colors active:bg-white/10 no-underline"
                  >
                    {t('nav', item.labelKey)}
                    <div className="h-2 w-2 rounded-full bg-brand-blue" />
                  </a>
                );
              })}

              <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-5">
                <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-text-muted">
                  <Globe className="h-4 w-4 text-brand-blue" />
                  <span>Language</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {LANGUAGE_OPTIONS.map((languageOption) => (
                    <a
                      key={languageOption}
                      href={getHomePathForLanguage(languageOption)}
                      className={`rounded-xl border px-3 py-3 text-sm font-bold uppercase tracking-[0.18em] transition-all duration-200 ${
                        lang === languageOption
                          ? 'border-brand-blue/50 bg-brand-blue/15 text-white shadow-[0_0_20px_rgba(37,99,235,0.18)]'
                          : 'border-white/10 bg-transparent text-text-muted hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {languageOption}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="brand-button mt-auto flex w-full items-center justify-center gap-3 rounded-2xl border border-brand-blue/40 py-4 text-lg font-bold text-white no-underline transition-transform active:scale-[0.98]"
              >
                {t('nav', 'discuss')}
                <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
