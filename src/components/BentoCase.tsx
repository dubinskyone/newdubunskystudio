import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "motion/react";
import {
  Smartphone,
  MonitorPlay,
  ShoppingCart,
  Activity,
  ShieldCheck,
  Box,
  Zap,
  Search,
  Globe,
  Layers,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useRef, useEffect, MouseEvent } from "react";
import { useLanguage } from "../i18n";
import { getBentoContent } from "../i18n/bento";

type TabKey =
  | "landings"
  | "fintech"
  | "mobile"
  | "branding"
  | "ecommerce"
  | "blockchain"
  | "corporate";

const TAB_ANIMATIONS = {
  landings: {
    initial: { opacity: 0, filter: "blur(4px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(4px)" },
  },
  fintech: {
    initial: { opacity: 0, filter: "blur(4px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(4px)" },
  },
  mobile: {
    initial: { opacity: 0, filter: "blur(4px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(4px)" },
  },
  branding: {
    initial: { opacity: 0, filter: "blur(4px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(4px)" },
  },
  ecommerce: {
    initial: { opacity: 0, filter: "blur(4px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(4px)" },
  },
  blockchain: {
    initial: { opacity: 0, filter: "blur(4px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(4px)" },
  },
  corporate: {
    initial: { opacity: 0, filter: "blur(4px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(4px)" },
  },
};

export function BentoCase() {
  const { lang } = useLanguage();
  const bentoI18n = getBentoContent(lang);
  const TABS_CONTENT = bentoI18n.tabs;

  const [activeTab, setActiveTab] = useState<TabKey>("landings");
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const currentContent = TABS_CONTENT[activeTab];

  // Derive images for slider
  const images = [
    currentContent.project.image,
    `https://picsum.photos/seed/${activeTab}2/800/600`,
    `https://picsum.photos/seed/${activeTab}3/800/600`,
  ];

  const handleNextSlide = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrevSlide = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  // Auto-slide effect
  useEffect(() => {
    if (isHovered) return; // Pause slider when mouse is hovering over the card
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide
    
    return () => clearInterval(timer);
  }, [images.length, activeTab, isHovered]);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Tilt Effect State
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const mouseXSpring = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [0, 1], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-5deg", "5deg"]);
  const glareX = useTransform(mouseXSpring, [0, 1], ["-100%", "200%"]);
  const glareY = useTransform(mouseYSpring, [0, 1], ["-100%", "200%"]);
  const glareOpacity = useMotionValue(0);
  const glareBackground = useMotionTemplate`radial-gradient(
    800px circle at ${glareX} ${glareY},
    rgba(255,255,255,0.4),
    transparent 40%
  )`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / height));
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!isMobile) glareOpacity.set(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    glareOpacity.set(0);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Parallax subtle movement for the image
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleTabChange = (event: Event) => {
      const customEvent = event as CustomEvent<TabKey>;
      setActiveTab(customEvent.detail);

      if (sectionRef.current) {
        const topOfSection = sectionRef.current.offsetTop - 100;
        window.scrollTo({
          top: topOfSection,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("changeBentoTab", handleTabChange);
    return () => window.removeEventListener("changeBentoTab", handleTabChange);
  }, []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="px-4 py-8 md:py-16 max-w-7xl mx-auto flex items-center justify-center"
    >
      <div className="bg-surface-card rounded-[32px] border border-line p-4 md:p-6 shadow-[0_0_50px_rgba(0,0,0,0.3)] w-full relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Premium Top Navigation */}
        <div className="flex flex-nowrap lg:flex-wrap items-center gap-1.5 mb-8 lg:mb-12 w-full lg:w-fit p-1.5 md:p-2 bg-[#09090b]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] ring-1 ring-white/5 rounded-2xl md:rounded-full mx-auto lg:mx-0 overflow-x-auto no-scrollbar snap-x relative z-20">
          {(Object.keys(TABS_CONTENT) as TabKey[]).map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative px-5 py-2.5 sm:py-3 shrink-0 snap-start rounded-full text-sm font-bold transition-all duration-300 z-10 flex items-center gap-2.5 group ${isActive ? "text-white shadow-sm" : "text-[#a1a1aa] hover:text-white"}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="bento-tab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-blue to-[#4B6BFB] rounded-full -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_2px_15px_rgba(37,99,235,0.4)]"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
                {/* Status dot */}
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shadow-sm ${isActive ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-100" : "bg-white/20 scale-75 group-hover:scale-100 group-hover:bg-brand-blue"}`}
                />
                <span className="whitespace-nowrap tracking-wide">
                  {TABS_CONTENT[key].label}
                </span>

                {/* Subtle hover background for inactive items */}
                {!isActive && (
                  <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
                )}
              </button>
            );
          })}
        </div>

        <div
          className="grid md:grid-cols-12 gap-6 lg:gap-8 items-center"
          style={{ perspective: isMobile ? "none" : "2000px" }}
        >
          {/* Left Column - Text & Tags */}
          <div className="md:col-span-5 relative grid h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col col-start-1 row-start-1 justify-center py-4 md:py-0"
              >
                <div className="text-brand-blue font-bold tracking-widest text-xs uppercase mb-4">
                  {currentContent.label}
                </div>
                <h2 className="text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.5rem] font-display font-bold text-text-main leading-tight tracking-tight mb-6 lg:mb-8">
                  {currentContent.title}
                </h2>

                {/* Features stacked */}
                <div className="flex flex-col gap-3 lg:gap-4 mb-8 lg:mb-10">
                  {currentContent.features.map((item: any, i: any) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-4 text-text-muted font-medium text-sm lg:text-base"
                    >
                      <div className="w-10 h-10 rounded-full bg-surface-glass border border-line flex items-center justify-center shrink-0 shadow-inner">
                        <item.icon className="w-4 h-4 text-brand-blue" />
                      </div>
                      {item.text}
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-shadow self-start flex items-center justify-center gap-3 group shrink-0 mt-auto w-full sm:w-auto no-underline"
                >
                  {bentoI18n.startProject}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Grid */}
          <div
            className="md:col-span-7 h-auto md:h-[400px] lg:h-[460px] mt-8 md:mt-0"
            style={{ transformStyle: isMobile ? "flat" : "preserve-3d" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={TAB_ANIMATIONS[activeTab]}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full h-full grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-2 gap-4"
              >
                {/* Project Card */}
                <motion.div
                  className="md:col-span-2 md:row-span-2 min-h-[260px] lg:min-h-[300px] h-full relative rounded-[32px] bg-surface-bg border border-line/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.5)] cursor-crosshair group z-10"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    rotateX: isMobile ? 0 : rotateX,
                    rotateY: isMobile ? 0 : rotateY,
                    transformStyle: isMobile ? "flat" : "preserve-3d",
                  }}
                >
                  <motion.div
                    className="w-full h-full rounded-[32px] overflow-hidden relative"
                    style={{
                      transform: isMobile ? "none" : "translateZ(30px)",
                    }}
                  >
                    {/* Background Image Slider */}
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentSlide}
                        src={images[currentSlide]}
                        alt={`${currentContent.project.name} - slide ${currentSlide + 1}`}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{ y: isMobile ? 0 : parallaxY }}
                        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none group-hover:scale-110 transition-transform duration-[1.5s]"
                      />
                    </AnimatePresence>

                    {/* Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none z-10" />

                    {/* Glare Effect */}
                    {!isMobile && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay"
                        style={{
                          opacity: glareOpacity,
                          background: glareBackground,
                        }}
                      />
                    )}

                    {/* Slider Controls */}
                    <div className="absolute top-4 right-4 z-30 flex items-center gap-2 pointer-events-auto">
                      <button 
                        onClick={handlePrevSlide}
                        className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white transition-all hover:scale-110 active:scale-95"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={handleNextSlide}
                        className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white transition-all hover:scale-110 active:scale-95"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Slider Indicators */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 pointer-events-none">
                      {images.map((_, idx) => (
                        <div 
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentSlide 
                              ? 'w-6 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
                              : 'w-1.5 bg-white/30'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Content Section inside */}
                    <motion.div
                      style={{
                        transform: isMobile ? "none" : "translateZ(40px)",
                      }}
                      className="absolute bottom-0 left-0 w-full p-5 md:p-6 z-30 flex flex-col justify-between gap-4 pointer-events-auto"
                    >
                      <div className="flex flex-col gap-2 max-w-sm">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-[32px] text-white tracking-tight">
                            {currentContent.project.name}
                          </h3>
                          <div className="px-2 py-0.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] uppercase font-bold text-white tracking-wider">
                            {bentoI18n.caseLabel}
                          </div>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed font-medium line-clamp-2 md:line-clamp-none drop-shadow-md">
                          {currentContent.project.desc}
                        </p>
                      </div>

                      <a
                        href={currentContent.project.link === '#' ? '#contact' : currentContent.project.link}
                        className="self-start flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3.5 bg-white/10 hover:bg-white border border-white/20 hover:border-white text-white hover:text-black rounded-full backdrop-blur-md transition-all duration-300 font-bold text-sm tracking-wide group/btn"
                      >
                        {bentoI18n.liveProject}
                        <ExternalLink className="w-4 h-4 text-white group-hover/btn:text-brand-blue transition-colors" />
                      </a>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Vertical Interactive Bento 1 - Stat 1 */}
                <div className="md:col-span-1 md:row-span-1 min-h-[140px] bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 border border-brand-blue/20 rounded-[32px] p-4 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-blue/20 blur-[30px] rounded-full group-hover:scale-150 transition-transform duration-700" />

                  <span className="text-text-muted text-[10px] md:text-xs uppercase font-bold tracking-wider relative z-10">
                    {currentContent.project.stats[0].label}
                  </span>

                  <span className="text-2xl lg:text-3xl xl:text-4xl font-display font-bold text-brand-blue relative z-10 break-words leading-tight drop-shadow-sm pr-2" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                    {currentContent.project.stats[0].value}
                  </span>

                  {/* Micro Infographics setup omitted for brevity in summary, kept intact in DOM */}
                  <div className="absolute bottom-4 right-4 z-0 opacity-80 group-hover:opacity-100 transition-opacity">
                    {activeTab === "fintech" && (
                      <svg
                        viewBox="0 0 100 40"
                        className="w-[80px] h-8"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          d="M0,35 Q10,10 25,25 T50,15 T75,25 T100,5"
                          fill="none"
                          stroke="#2563EB"
                          strokeWidth="2.5"
                        />
                      </svg>
                    )}
                    {activeTab === "landings" && (
                      <div className="flex items-end gap-1.5 h-8">
                        {[100, 75, 45, 20].map((w, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${w}%` }}
                            transition={{ delay: i * 0.1 }}
                            className={`w-1.5 rounded-full ${i === 3 ? "bg-brand-purple" : "bg-brand-blue"}`}
                            style={{ opacity: 1 - i * 0.15 }}
                          />
                        ))}
                      </div>
                    )}
                    {activeTab === "mobile" && (
                      <div className="relative w-8 h-8 flex items-center justify-center">
                        <motion.circle
                          cx="14"
                          cy="14"
                          r="12"
                          fill="none"
                          className="stroke-brand-blue"
                          strokeWidth="2"
                          strokeDasharray="80"
                          strokeLinecap="round"
                          initial={{ strokeDashoffset: 80 }}
                          animate={{ strokeDashoffset: 20 }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewBox="0 0 28 28"
                          as="svg"
                        />
                      </div>
                    )}
                    {activeTab === "branding" && (
                      <div className="relative w-8 h-8 flex items-center justify-end">
                        <motion.div
                          initial={{ scale: 0, opacity: 1 }}
                          animate={{ scale: 3, opacity: 0 }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute right-0 w-3 h-3 rounded-full border border-brand-purple"
                        />
                      </div>
                    )}
                    {activeTab === "blockchain" && (
                      <div className="relative w-12 h-6 flex items-center justify-between">
                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full shadow-[0_0_5px_#2563EB]" />
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          className="h-0.5 bg-line flex-1 mx-1 origin-left"
                        />
                        <div className="w-1.5 h-1.5 bg-brand-purple rounded-full shadow-[0_0_5px_#7C3AED]" />
                      </div>
                    )}
                    {activeTab === "corporate" && (
                      <div className="w-10 h-10 border-[3px] border-line border-t-brand-blue rounded-full animate-spin" />
                    )}
                    {activeTab === "ecommerce" && (
                      <div className="flex items-end gap-1 h-8">
                        {[40, 70, 100].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.4, delay: 0.1 * i }}
                            className="w-2 rounded-t-sm bg-brand-blue/80"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Vertical Interactive Bento 2 - Stat 2 */}
                <div className="md:col-span-1 md:row-span-1 min-h-[140px] bg-surface-card border border-line rounded-[32px] p-4 flex flex-col justify-center relative overflow-hidden group">
                  <span className="text-text-muted text-[10px] md:text-xs uppercase font-bold tracking-wider mb-1">
                    {currentContent.project.stats[1].label}
                  </span>
                  <span className="text-xl lg:text-2xl xl:text-3xl font-display font-bold text-white mb-3 break-words leading-tight pr-2" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                    {currentContent.project.stats[1].value}
                  </span>

                  {/* Progress Line Interactive */}
                  <div className="w-full h-1.5 bg-surface-bg border border-line rounded-full overflow-hidden mt-auto mb-1">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-blue to-brand-purple"
                      initial={{ width: 0 }}
                      animate={{
                        width:
                          activeTab === "landings"
                            ? "88%"
                            : activeTab === "fintech"
                              ? "99%"
                              : "75%",
                      }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
