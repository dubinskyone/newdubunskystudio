import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Magnetic } from './ui/Magnetic';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage, Language } from '../i18n';

import { getBentoContent } from '../i18n/bento';

const navItems = [
  { id: 'solutions', labelKey: 'services' },
  { id: 'platform', labelKey: 'process' },
  { id: 'team', labelKey: 'team' },
  { id: 'contact', labelKey: 'contacts' }
];



export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  
  const bentoContent = getBentoContent(lang);
  const solutionsTabs = Object.entries(bentoContent.tabs).map(([id, data]) => ({ id, label: data.label }));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleSolutionSelect = (tabId: string) => {
    setIsSolutionsHovered(false);
    setIsMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent('changeBentoTab', { detail: tabId }));
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-4 pointer-events-none">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={scrolled || isMobileMenuOpen ? {
            backgroundColor: 'rgba(9, 9, 11, 0.85)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)'
          } : {}}
          className={`flex items-center justify-between px-4 sm:px-6 py-3 w-full max-w-6xl pointer-events-auto rounded-full transition-all duration-300 ${
            scrolled || isMobileMenuOpen 
              ? 'border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]' 
              : 'bg-transparent border border-transparent shadow-none'
          }`}
        >
          {/* Logo Section with Placeholder */}
          <div className="flex flex-1 justify-start items-center">
            <motion.a 
              href="#top" 
              className="group flex items-center gap-3 sm:gap-4 no-underline"
              whileHover={{ scale: 1.02 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* Logo Placeholder */}
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-[10px] sm:rounded-xl overflow-hidden bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shrink-0 border border-white/20 shadow-inner group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-shadow">
                 {/* Internal element of the logo placeholder */}
                 <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow-sm" />
                 <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white/20 blur-md rounded-full" />
              </div>
              
              {/* Brand Text */}
              <div className="flex flex-col justify-center">
                <span className="text-white font-logo font-extrabold uppercase tracking-widest text-[11px] sm:text-[13px] leading-tight">
                  Dubinsky
                </span>
                <span className="text-white/50 font-logo text-[9px] sm:text-[10px] uppercase tracking-[0.2em] leading-tight font-bold">
                  Studio
                </span>
              </div>
            </motion.a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex shrink-0 justify-center space-x-1 px-4" onMouseLeave={() => {
            setHoveredIndex(null);
            setIsSolutionsHovered(false);
          }}>
            {navItems.map((item, index) => {
              if (item.id === 'solutions') {
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="relative px-5 py-2.5 cursor-pointer shrink-0 no-underline"
                    onMouseEnter={() => {
                      setHoveredIndex(index);
                      setIsSolutionsHovered(true);
                    }}
                    onMouseLeave={() => setIsSolutionsHovered(false)}
                  >
                    <div className={`flex items-center gap-1.5 transition-colors duration-300 ${isSolutionsHovered ? 'text-white' : 'text-text-muted hover:text-white'}`}>
                      <span className="text-[14px] font-semibold">{t('nav', item.labelKey)}</span>
                      <motion.div animate={{ rotate: isSolutionsHovered ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.div>
                    </div>

                    {hoveredIndex === index && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-x-0 inset-y-1 bg-white/10 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    <AnimatePresence>
                      {isSolutionsHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[60] w-[240px]"
                        >
                          <div className="p-2 bg-[#18181b] border border-white/10 rounded-[24px] shadow-[0_40px_80px_rgba(0,0,0,0.8)] flex flex-col gap-1 relative overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            {solutionsTabs.map((tab) => (
                              <button
                                key={tab.id}
                                onClick={(e) => { e.preventDefault(); handleSolutionSelect(tab.id); }}
                                className="px-4 py-2.5 text-left text-[13px] font-semibold text-text-muted hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                              >
                                {tab.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </a>
                );
              }

              return (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className="relative px-5 py-2.5 text-text-muted text-[14px] font-semibold transition-all duration-300 hover:text-white shrink-0"
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setIsSolutionsHovered(false);
                  }}
                >
                  {t('nav', item.labelKey)}
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex flex-1 justify-end items-center gap-3 md:gap-4">
            
            <div className="hidden md:block">
              <Magnetic>
                <motion.a
                  href="#contact" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-6 py-2.5 h-[40px] rounded-full text-[14px] font-bold transition hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#2563EB] animate-pulse shrink-0" />
                  <span>{t('nav', 'discuss')}</span>
                </motion.a>
              </Magnetic>
            </div>

            {/* Language Selector */}
            <div className="relative group z-50">
              <button 
                className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 text-xs sm:text-[13px] font-bold text-white uppercase tracking-widest transition-all bg-[#18181b] rounded-full border border-white/10 hover:border-brand-blue/50 hover:bg-white/5 shadow-inner hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] h-[40px]"
              >
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-blue group-hover:text-amber-300 transition-colors" />
                <span>{lang}</span>
                <ChevronDown className="w-3.5 h-3.5 text-white/50 group-hover:text-white transition-transform duration-300 group-hover:-rotate-180" />
              </button>
              
              <div className="absolute top-full right-0 mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 min-w-[120px]">
                <div className="p-2 bg-surface-glass backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col gap-1 relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
                  {(['RU', 'EN', 'UA'] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`flex items-center justify-between w-full py-2.5 px-3 rounded-xl text-xs sm:text-[13px] font-bold tracking-widest uppercase transition-all duration-300 ${
                        lang === l 
                          ? 'bg-brand-blue/20 text-white shadow-[inset_0_0_10px_rgba(37,99,235,0.2)]' 
                          : 'text-text-muted hover:text-white hover:bg-white/5 hover:translate-x-1'
                      }`}
                    >
                      {l}
                      {lang === l && <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#2563EB]" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white z-50 hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-surface-bg/95 backdrop-blur-xl md:hidden pt-28 px-4 pb-8 flex flex-col"
          >
            <nav className="flex flex-col gap-2 w-full max-w-sm mx-auto flex-1 overflow-y-auto no-scrollbar pb-8">
              {navItems.map((item, i) => {
                if (item.id === 'solutions') {
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={item.id}
                      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                        className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-white active:bg-white/10 transition-colors"
                        aria-expanded={isMobileSolutionsOpen}
                      >
                        {t('nav', item.labelKey)}
                        <motion.div animate={{ rotate: isMobileSolutionsOpen ? 180 : 0 }}>
                          <ChevronDown className="w-5 h-5 text-brand-blue" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isMobileSolutionsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-black/20"
                          >
                            <div className="flex flex-col px-6 py-2 gap-2">
                              {solutionsTabs.map((tab) => (
                                <button
                                  key={tab.id}
                                  onClick={() => handleSolutionSelect(tab.id)}
                                  className="text-left py-3 text-text-muted hover:text-white font-medium transition-colors border-b border-white/5 last:border-0"
                                >
                                  {tab.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-lg font-semibold text-white active:bg-white/10 transition-colors"
                  >
                    {t('nav', item.labelKey)}
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  </motion.a>
                );
              })}
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-auto w-full py-4 bg-white text-black rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shrink-0 shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-[0.98] transition-transform"
              >
                {t('nav', 'discuss')}
                <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
