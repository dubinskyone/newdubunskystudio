import { useEffect, useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';
import { HeroCopy, TrustedMarks } from './HeroShared';

const HERO_BACKGROUND_VIDEO = '/cases/transmatika.mp4';
const HERO_BACKGROUND_POSTER = '/cases/transmatika-poster.jpg';

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (!words.length) {
      return;
    }

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
  }, [index, reverse, subIndex, words]);

  return (
    <span className="relative inline-flex items-center">
      {words[index].substring(0, subIndex)}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        className="ml-[2px] inline-block h-[0.9em] w-[3px] translate-y-[-2px] rounded-full bg-brand-blue sm:ml-[4px] sm:h-[0.9em] sm:w-[5px] sm:translate-y-[-4px]"
      />
    </span>
  );
}

export function HeroRich({ copy, titleWordsArray }: { copy: HeroCopy; titleWordsArray: string[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const [useHeroVideo, setUseHeroVideo] = useState(true);
  const [allowHeroVideo, setAllowHeroVideo] = useState(false);
  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const [isHeroInView, setIsHeroInView] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;

    const shouldDisableVideo =
      motionQuery.matches ||
      connection?.saveData === true ||
      ['slow-2g', '2g', '3g'].includes(connection?.effectiveType ?? '');

    setUseHeroVideo(!shouldDisableVideo);
  }, []);

  useEffect(() => {
    if (!useHeroVideo) {
      setAllowHeroVideo(false);
      return;
    }

    const win = window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let timeoutId: number | null = null;
    let idleId: number | null = null;

    const enableVideo = () => setAllowHeroVideo(true);

    if (typeof win.requestIdleCallback === 'function') {
      idleId = win.requestIdleCallback(enableVideo, { timeout: 1800 });
    } else {
      timeoutId = window.setTimeout(enableVideo, 1200);
    }

    return () => {
      if (idleId !== null && typeof win.cancelIdleCallback === 'function') {
        win.cancelIdleCallback(idleId);
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [useHeroVideo]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.18, rootMargin: '120px 0px 120px 0px' },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!useHeroVideo || !allowHeroVideo) {
      setHeroVideoReady(false);
    }
  }, [allowHeroVideo, useHeroVideo]);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video || !useHeroVideo || !allowHeroVideo || !heroVideoReady) {
      return;
    }

    const syncPlayback = () => {
      if (document.hidden || !isHeroInView) {
        video.pause();
        return;
      }

      void video.play().catch(() => {
        setUseHeroVideo(false);
        setAllowHeroVideo(false);
        setHeroVideoReady(false);
      });
    };

    syncPlayback();
    document.addEventListener('visibilitychange', syncPlayback);

    return () => {
      document.removeEventListener('visibilitychange', syncPlayback);
    };
  }, [allowHeroVideo, heroVideoReady, isHeroInView, useHeroVideo]);

  const background = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.06), transparent 80%)`;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[85svh] scroll-mt-28 flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-32 text-center sm:pb-20 sm:pt-48 md:scroll-mt-32"
    >
      <motion.div className="pointer-events-none absolute inset-0 z-0" style={{ background }} />

      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden bg-surface-bg">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="relative h-[74vh] w-[74vw] max-h-[860px] max-w-[1120px] overflow-hidden rounded-[56px] opacity-[0.12]"
            style={{
              maskImage:
                'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.48) 52%, rgba(0,0,0,0.08) 76%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.48) 52%, rgba(0,0,0,0.08) 76%, transparent 100%)',
            }}
          >
            <img
              src={HERO_BACKGROUND_POSTER}
              alt=""
              aria-hidden="true"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover brightness-[0.66] saturate-[0.82]"
            />
            {useHeroVideo && allowHeroVideo ? (
              <video
                ref={heroVideoRef}
                className={`absolute inset-0 h-full w-full object-cover brightness-[0.66] saturate-[0.82] transition-opacity duration-500 ${
                  heroVideoReady ? 'opacity-100' : 'opacity-0'
                }`}
                src={HERO_BACKGROUND_VIDEO}
                poster={HERO_BACKGROUND_POSTER}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                disablePictureInPicture
                disableRemotePlayback
                aria-hidden="true"
                onLoadedData={() => setHeroVideoReady(true)}
                onCanPlay={() => setHeroVideoReady(true)}
                onError={() => {
                  setUseHeroVideo(false);
                  setAllowHeroVideo(false);
                  setHeroVideoReady(false);
                }}
              />
            ) : null}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,15,0.42),rgba(5,8,15,0.18)_38%,rgba(5,8,15,0.6))]" />
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 30, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[10%] top-[15%] aspect-square w-[30vw] max-w-[400px] rounded-full bg-brand-blue/10 blur-[80px] mix-blend-screen will-change-transform"
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -30, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[10%] right-[10%] aspect-square w-[35vw] max-w-[500px] rounded-full bg-brand-purple/10 blur-[100px] mix-blend-screen will-change-transform"
        />

        <div className="absolute h-[80vw] max-h-[800px] w-[80vw] max-w-[800px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,rgba(59,130,246,0.02)_50%,transparent_70%)] mix-blend-screen" />
        <div className="absolute -ml-40 h-[100vw] max-h-[1000px] w-[100vw] max-w-[1000px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,rgba(139,92,246,0.02)_50%,transparent_70%)] mix-blend-screen" />
        <div className="absolute h-[40vw] max-h-[400px] w-[40vw] max-w-[400px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)] mix-blend-screen" />
        <div className="absolute aspect-square w-[90vw] max-w-[1000px] rounded-full border border-line/40" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute aspect-square w-[70vw] max-w-[750px] rounded-full border border-line/60 border-dashed"
        >
          <div className="absolute left-[15%] top-[10%] h-8 w-2 rotate-45 rounded-full bg-brand-blue/80 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
          <div className="absolute bottom-[20%] right-[10%] h-3 w-3 rounded-full bg-brand-purple shadow-[0_0_15px_rgba(124,58,237,0.8)]" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute aspect-square w-[45vw] max-w-[500px] rounded-full border border-line/30"
        >
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue shadow-[0_0_20px_rgba(37,99,235,1)]" />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface-bg via-transparent to-surface-bg opacity-50" />
      </div>

      <div className="relative z-10 mt-10 mx-auto flex max-w-[1250px] flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="group relative mb-8 flex cursor-default items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-surface-glass px-5 py-2.5 shadow-[0_0_30px_rgba(37,99,235,0.1)] backdrop-blur-md transition-colors hover:border-brand-blue/40"
        >
          <motion.div
            animate={{ x: ['-200%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 z-0 w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
          <span className="relative z-10 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,1)]" />
          </span>
          <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-text-main">
            {copy.badge}
          </span>
        </motion.div>

        <h1 className="perspective-1000 mb-8 flex flex-col flex-wrap items-center gap-x-2 gap-y-1 text-[14vw] font-display font-bold leading-[1.05] tracking-tight text-text-main sm:flex-row sm:justify-center sm:gap-x-3 sm:gap-y-2 sm:text-7xl lg:text-[5rem]">
          <motion.span
            initial={{ opacity: 0, rotateX: -90, y: 40 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="origin-bottom pointer-events-none text-center sm:text-left"
          >
            {copy.title1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, rotateX: -90, y: 40 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
            className="min-h-[1.2em] origin-bottom pointer-events-none text-center font-medium text-brand-blue drop-shadow-sm sm:min-h-0 sm:text-left"
          >
            <Typewriter words={titleWordsArray} />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, rotateX: -90, y: 40 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
            className="origin-bottom pointer-events-none text-center sm:text-left"
          >
            {copy.title3}
          </motion.span>
        </h1>

        <p className="pointer-events-none mb-10 max-w-[700px] text-base leading-relaxed text-text-muted sm:mb-12 sm:text-lg md:text-xl">
          {copy.desc}
          <span className="px-1 font-medium text-white drop-shadow-sm">{copy.descHighlight}</span>
          {copy.descEnding}
        </p>

        <div className="z-20 mb-10 flex w-full flex-col items-center justify-center gap-4 sm:mb-12 sm:w-auto sm:flex-row">
          <Magnetic>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="brand-button group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-[15px] font-bold tracking-wide text-white no-underline transition-all hover:-translate-y-0.5 sm:w-auto"
            >
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 z-0 w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/16 to-transparent"
              />
              <span className="relative z-10 flex items-center gap-2">
                {copy.contact}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
          </Magnetic>

          <Magnetic>
            <motion.a
              href="#cases"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-line bg-surface-glass px-8 py-4 text-[15px] font-bold tracking-wide text-text-main no-underline transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 sm:w-auto"
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(106,189,255,0.12),transparent_62%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,255,255,0)] transition-shadow group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
              <span className="relative z-10 flex items-center gap-2">
                {copy.secondaryCta}
                <Sparkles className="h-4 w-4 text-text-muted transition-all duration-300 group-hover:scale-110 group-hover:text-amber-300" />
              </span>
            </motion.a>
          </Magnetic>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.55 }}
          className="mb-16 flex max-w-[780px] flex-wrap items-center justify-center gap-2.5 sm:mb-18"
        >
          {copy.focusItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="w-full"
        >
          <TrustedMarks trustedLabel={copy.trusted} />
        </motion.div>
      </div>
    </section>
  );
}
