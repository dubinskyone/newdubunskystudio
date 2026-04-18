import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';
import { useEffect, useState } from 'react';
import { Magnetic } from './ui/Magnetic';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n';

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    if (subIndex === words[index].length && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="relative inline-flex items-center">
      {words[index].substring(0, subIndex)}
      <motion.span 
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        className="inline-block w-[3px] sm:w-[5px] h-[0.9em] bg-brand-blue ml-[2px] sm:ml-[4px] rounded-full translate-y-[-2px] sm:translate-y-[-4px]"
      />
    </span>
  );
};

export function Hero() {
  const { t } = useLanguage();
  const titleWordsStr = t('hero', 'titleWords' as any);
  const titleWordsArray = titleWordsStr && titleWordsStr !== 'titleWords' 
    ? titleWordsStr.split('|') 
    : [t('hero', 'title2')];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movements
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Create a radial gradient that follows the mouse
  const background = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.06), transparent 80%)`;

  return (
    <section id="top" className="relative scroll-mt-28 md:scroll-mt-32 pt-32 pb-16 sm:pt-48 sm:pb-20 px-4 flex flex-col items-center justify-center text-center min-h-[85svh] overflow-hidden">
      
      {/* Interactive Cursor Flashlight (follows cursor) */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background }}
      />

      {/* Abstract Orbital Background - Pure CSS Animation */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden bg-surface-bg">

        {/* Floating Abstract Shapes */}
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            x: [0, 30, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-[30vw] max-w-[400px] aspect-square bg-brand-blue/10 rounded-full blur-[80px] mix-blend-screen will-change-transform"
        />
        <motion.div 
          animate={{ 
            y: [0, 40, 0],
            x: [0, -30, 0],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[35vw] max-w-[500px] aspect-square bg-brand-purple/10 rounded-full blur-[100px] mix-blend-screen will-change-transform"
        />

        {/* Soft Ambient Core - Brightened performant radial gradients */}
        <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,rgba(59,130,246,0.02)_50%,transparent_70%)] mix-blend-screen" />
        <div className="absolute w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,rgba(139,92,246,0.02)_50%,transparent_70%)] -ml-40 mix-blend-screen" />
        
        {/* Center illumination */}
        <div className="absolute w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)] mix-blend-screen" />

        {/* Outer Static Data Ring */}
        <div className="absolute w-[90vw] max-w-[1000px] aspect-square border border-line/40 rounded-full" />

        {/* Middle Rotating Orbit with Particles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[70vw] max-w-[750px] aspect-square border border-line/60 border-dashed rounded-full"
        >
          {/* Glowing Particle 1 */}
          <div className="w-2 h-8 bg-brand-blue/80 rounded-full absolute top-[10%] left-[15%] rotate-45 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
          {/* Glowing Particle 2 */}
          <div className="w-3 h-3 bg-brand-purple rounded-full absolute bottom-[20%] right-[10%] shadow-[0_0_15px_rgba(124,58,237,0.8)]" />
        </motion.div>

        {/* Inner Counter-Rotating Core Ring with Node */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[45vw] max-w-[500px] aspect-square border border-line/30 rounded-full"
        >
           {/* Flaring Energy Node */}
           <div className="w-4 h-4 bg-brand-blue rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(37,99,235,1)]" />
        </motion.div>

        {/* Vignette mask to fade out edges smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-bg via-transparent to-surface-bg opacity-50 pointer-events-none" />
      </div>

      <div className="max-w-[1250px] mx-auto flex flex-col items-center relative z-10 mt-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-surface-glass backdrop-blur-md flex items-center gap-3 shadow-[0_0_30px_rgba(37,99,235,0.1)] relative overflow-hidden group hover:border-brand-blue/40 transition-colors cursor-default"
        >
          <motion.div 
            animate={{ x: ['-200%', '200%'] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 skew-x-12" 
          />
          <span className="relative flex h-2.5 w-2.5 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,1)]"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-text-main relative z-10">{t('hero', 'badge')}</span>
        </motion.div>

        <h1 className="text-[14vw] sm:text-7xl lg:text-[5rem] font-display font-bold text-text-main leading-[1.05] mb-8 tracking-tight flex flex-col sm:flex-row flex-wrap items-center sm:justify-center gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2 perspective-1000">
          <motion.span
            initial={{ opacity: 0, rotateX: -90, y: 40 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.0, ease: [0.2, 0.8, 0.2, 1] }}
            className="origin-bottom block pointer-events-none text-center sm:text-left"
          >
            {t('hero', 'title1')}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, rotateX: -90, y: 40 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="origin-bottom block pointer-events-none font-medium text-brand-blue drop-shadow-sm text-center sm:text-left min-h-[1.2em] sm:min-h-0"
          >
            <Typewriter words={titleWordsArray} />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, rotateX: -90, y: 40 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="origin-bottom block pointer-events-none text-center sm:text-left"
          >
            {t('hero', 'title3')}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-text-muted max-w-[700px] mb-10 sm:mb-12 leading-relaxed pointer-events-none"
        >
          {t('hero', 'desc')}<span className="font-medium text-white px-1 drop-shadow-sm">{t('hero', 'descHighlight')}</span>{t('hero', 'descEnding')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full sm:w-auto z-20"
        >
          <Magnetic>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="brand-button relative px-8 py-4 text-white rounded-full font-bold text-[15px] tracking-wide w-full sm:w-auto flex items-center justify-center gap-2 group overflow-hidden transition-all no-underline"
            >
              <motion.div 
                animate={{ x: ['-100%', '200%'] }} 
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} 
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/16 to-transparent z-0 skew-x-12" 
              />
              <span className="relative z-10 flex items-center gap-2">
                {t('hero', 'contact')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </Magnetic>
          
          <Magnetic>
            <motion.a
              href="#solutions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-surface-glass border border-line backdrop-blur-md text-text-main rounded-full font-bold text-[15px] tracking-wide transition-all w-full sm:w-auto hover:bg-white/10 hover:border-white/20 group flex items-center justify-center gap-2 no-underline overflow-hidden"
            >
              <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,255,255,0)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-shadow" />
              <span className="relative z-10 flex items-center gap-2">
                {t('hero', 'cases')}
                <Sparkles className="w-4 h-4 text-text-muted group-hover:text-amber-300 transition-colors" />
              </span>
            </motion.a>
          </Magnetic>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full pt-12 border-t border-line flex flex-col items-center"
        >
          <span className="text-[11px] font-bold text-text-muted uppercase tracking-[0.2em] mb-8">{t('hero', 'trusted')}</span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 transition-all duration-500 hover:opacity-100">
            <span className="font-display font-bold text-xl md:text-2xl text-text-muted hover:text-white transition-colors cursor-default">FinTech Core</span>
            <span className="font-display font-medium text-xl md:text-2xl tracking-tighter text-text-muted hover:text-white transition-colors cursor-default">NEXUS</span>
            <span className="font-sans font-black text-xl md:text-2xl tracking-tight text-text-muted hover:text-white transition-colors cursor-default">Lumina</span>
            <span className="font-display font-semibold text-xl md:text-2xl pr-2 text-text-muted hover:text-white transition-colors cursor-default brand-accent-text">Aero</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
