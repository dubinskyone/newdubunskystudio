import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Coins,
  ExternalLink,
  Gamepad2,
  Heart,
  Landmark,
  LineChart,
  LoaderCircle,
  Package2,
  Play,
  Truck,
  WalletCards,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage, type Language } from '../i18n';
import { getCasesContent, type CaseStudy, type CaseStudyId } from '../content/cases';
import {
  CASE_META,
  CASE_PUBLIC_LINKS,
  CASE_SECTION_UI_COPY,
  CASE_VIDEO_POSTERS,
  CASE_VIDEO_SOURCES,
  getLocalizedText,
  type CaseFilterId,
} from '../content/caseMeta';

const CASE_ICONS: Record<CaseStudyId, LucideIcon> = {
  transmatika: Truck,
  swipy: Heart,
  keytrust: Landmark,
  novabot: LineChart,
  spin: Gamepad2,
  'liquidity-pools': WalletCards,
  coingem: Coins,
  fungypack: Package2,
};

type PreviewMode = 'hover' | 'manual';

type PreviewUiCopy = {
  hintHover: string;
  hintManual: string;
  loading: string;
  active: string;
};

const PREVIEW_UI_COPY: Record<'RU' | 'EN' | 'UA', PreviewUiCopy> = {
  RU: {
    hintHover: 'Наведи для preview',
    hintManual: 'Нажми, чтобы загрузить preview',
    loading: 'Загружаем preview',
    active: 'Preview active',
  },
  EN: {
    hintHover: 'Hover to preview',
    hintManual: 'Tap to load preview',
    loading: 'Loading preview',
    active: 'Preview active',
  },
  UA: {
    hintHover: 'Наведи для preview',
    hintManual: 'Натисни, щоб завантажити preview',
    loading: 'Завантажуємо preview',
    active: 'Preview active',
  },
};

// Poster кадры для кейсов сняты с этой же точки, поэтому старт preview-видео
// держим на том же таймкоде, чтобы переход poster -> video был бесшовным.
const VIDEO_PREVIEW_START_TIME = 1;

type ConnectionLike = {
  saveData?: boolean;
  effectiveType?: string;
  addEventListener?: (type: string, listener: EventListenerOrEventListenerObject) => void;
  removeEventListener?: (type: string, listener: EventListenerOrEventListenerObject) => void;
};

type LegacyMediaQueryList = MediaQueryList & {
  addListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
  removeListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
};

function getLinkCaption(link?: string) {
  if (!link) {
    return null;
  }

  try {
    return new URL(link).hostname.replace(/^www\./, '');
  } catch {
    return link;
  }
}

function CardPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
      {children}
    </span>
  );
}

function DetailPanel({
  label,
  value,
  accent,
  highlight = false,
}: {
  label: string;
  value: string;
  accent: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-[20px] border px-4 py-4"
      style={{
        borderColor: 'rgba(255,255,255,0.08)',
        backgroundImage: highlight
          ? `linear-gradient(135deg, ${accent}, rgba(255,255,255,0.02) 34%, rgba(0,0,0,0) 68%)`
          : `linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))`,
      }}
    >
      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
        {label}
      </div>
      <p className="mt-2 text-sm leading-6 text-white/82">{value}</p>
    </div>
  );
}

function SnapshotStat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-[18px] border bg-white/[0.02] px-4 py-3"
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/42">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold text-white/86" style={{ color: accent.includes('rgba') ? undefined : accent }}>
        {value}
      </div>
    </div>
  );
}

function TagGroup({
  label,
  items,
  accent,
}: {
  label: string;
  items: string[];
  accent: string;
}) {
  return (
    <div
      className="rounded-[20px] border bg-white/[0.02] px-4 py-4"
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
        {label}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={`${label}-${item}`}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] font-semibold tracking-[0.04em] text-white/78"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function VideoPreview({
  src,
  posterSrc,
  title,
  isActive,
  mode,
  uiCopy,
  onActivate,
  onDeactivate,
}: {
  src: string;
  posterSrc?: string;
  title: string;
  isActive: boolean;
  mode: PreviewMode;
  uiCopy: PreviewUiCopy;
  onActivate: () => void;
  onDeactivate: () => void;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const previewStartTimeRef = useRef(0);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [hasRequestedLoad, setHasRequestedLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [hasLoadTimeout, setHasLoadTimeout] = useState(false);

  const shouldLoad = isNearViewport && (hasRequestedLoad || isActive);

  useEffect(() => {
    const node = wrapperRef.current;

    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsNearViewport(true);
        } else {
          setIsNearViewport(false);
        }
      },
      { rootMargin: '320px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) {
      return;
    }

    setHasRequestedLoad(true);
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad || isReady || loadError) {
      setHasLoadTimeout(false);
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setHasLoadTimeout(true);
    }, 2600);

    return () => window.clearTimeout(timeoutId);
  }, [shouldLoad, isReady, loadError]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad || loadError) {
      return;
    }

    if (!isActive) {
      video.pause();
      try {
        video.currentTime = previewStartTimeRef.current;
      } catch {
        // Ignore reset failures on partially loaded media.
      }
      return;
    }

    if (!isReady) {
      return;
    }

    const playback = video.play();
    if (playback) {
      playback.catch(() => {});
    }
  }, [isActive, isReady, shouldLoad, loadError]);

  const syncVideoToPreviewStart = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    const previewStartTime =
      duration > VIDEO_PREVIEW_START_TIME
        ? VIDEO_PREVIEW_START_TIME
        : 0;

    previewStartTimeRef.current = previewStartTime;

    if (Math.abs(video.currentTime - previewStartTime) <= 0.04) {
      setIsReady(true);
      return;
    }

    setIsReady(false);

    try {
      video.currentTime = previewStartTime;

      if (video.readyState >= 2) {
        setIsReady(true);
      }
    } catch {
      setIsReady(true);
    }
  };

  const markVideoReady = () => {
    setIsReady(true);
    setHasLoadTimeout(false);
  };

  const hintLabel = mode === 'hover' ? uiCopy.hintHover : uiCopy.hintManual;

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 z-[1] overflow-hidden"
      onPointerEnter={() => {
        if (mode === 'hover') {
          onActivate();
        }
      }}
      onPointerLeave={() => {
        if (mode === 'hover') {
          onDeactivate();
        }
      }}
    >
      {posterSrc ? (
        <img
          src={posterSrc}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isReady && isActive && !loadError ? 'opacity-0' : 'opacity-100'
          }`}
        />
      ) : null}

      {shouldLoad && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isReady && isActive ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          loop
          playsInline
          poster={posterSrc}
          preload={isActive ? 'auto' : 'metadata'}
          disablePictureInPicture
          disableRemotePlayback
          aria-label={title}
          onLoadedMetadata={syncVideoToPreviewStart}
          onLoadedData={markVideoReady}
          onCanPlay={markVideoReady}
          onPlaying={markVideoReady}
          onSeeked={markVideoReady}
          onError={() => setLoadError(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,16,0.08),transparent_32%,rgba(8,10,16,0.18))]" />

      {!loadError && !isActive && (
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/34 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72 backdrop-blur-md">
          <Play className="h-3.5 w-3.5 shrink-0 text-white/78" />
          <span>{hintLabel}</span>
        </div>
      )}

      {shouldLoad && !isReady && !loadError && !hasLoadTimeout && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/34 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72 backdrop-blur-md">
            <LoaderCircle className="h-3.5 w-3.5 animate-spin text-white/78" />
            <span>{uiCopy.loading}</span>
          </div>
        </div>
      )}

      {mode === 'manual' && !loadError && (
        <button
          type="button"
          onClick={() => {
            if (isActive) {
              onDeactivate();
              return;
            }

            setHasRequestedLoad(true);
            onActivate();
          }}
          className="absolute inset-0 z-30 cursor-pointer bg-transparent"
          aria-label={isActive ? uiCopy.active : hintLabel}
        />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,15,23,0.12),transparent_42%,rgba(12,15,23,0.28))]" />
    </div>
  );
}

function PreviewShell({
  project,
  large = false,
  isActive,
  previewMode,
  uiCopy,
  onActivate,
  onDeactivate,
}: {
  project: CaseStudy;
  large?: boolean;
  isActive: boolean;
  previewMode: PreviewMode;
  uiCopy: PreviewUiCopy;
  onActivate: () => void;
  onDeactivate: () => void;
}) {
  const Icon = CASE_ICONS[project.id];
  const videoSrc = CASE_VIDEO_SOURCES[project.id];
  const posterSrc = CASE_VIDEO_POSTERS[project.id];
  const hasMediaPreview = Boolean(videoSrc || posterSrc);
  const glowStyle = {
    background: `radial-gradient(circle at top right, ${project.accentSoft} 0%, transparent 52%)`,
  };
  const baseSize = large ? 'h-[260px] sm:h-[300px] xl:h-[320px]' : 'h-[220px] sm:h-[260px]';
  const watermarkSize = large ? 'text-[46px] sm:text-[60px]' : 'text-[30px] sm:text-[38px]';

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0f17] ${baseSize}`}
    >
      {!hasMediaPreview && <div className="absolute inset-0" style={glowStyle} />}
      {!hasMediaPreview && (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_42%,rgba(255,255,255,0.01))]" />
      )}
      {videoSrc ? (
        <VideoPreview
          src={videoSrc}
          posterSrc={posterSrc}
          title={`${project.name} preview`}
          isActive={isActive}
          mode={previewMode}
          uiCopy={uiCopy}
          onActivate={onActivate}
          onDeactivate={onDeactivate}
        />
      ) : posterSrc ? (
        <img
          src={posterSrc}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      {!hasMediaPreview && (
        <>
          <div className="absolute left-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
            <Icon className="h-5 w-5" style={{ color: project.accent }} />
          </div>

          <div className="absolute right-5 top-5 z-10">
            <CardPill>{project.category}</CardPill>
          </div>

          <div className={`absolute bottom-4 left-5 right-5 z-10 ${watermarkSize} font-display font-bold tracking-[-0.04em] text-white/[0.07]`}>
            {project.name}
          </div>

          {project.visual === 'operations' && (
            <>
              <div className="absolute left-6 top-22 h-[56%] w-[44%] rounded-[24px] border border-white/10 bg-white/[0.04]" />
              <div className="absolute left-10 top-28 flex gap-2">
                <span className="h-2 w-14 rounded-full bg-white/18" />
                <span className="h-2 w-8 rounded-full bg-white/10" />
              </div>
              <div className="absolute left-10 top-38 h-20 w-24 rounded-[20px] border border-white/10 bg-[rgba(125,211,252,0.12)]" />
              <div className="absolute bottom-8 right-8 h-[42%] w-[38%] rounded-[24px] border border-white/10 bg-white/[0.04]" />
              <div className="absolute right-12 top-34 h-px w-28 bg-white/12" />
              <div className="absolute right-12 top-42 h-3 w-18 rounded-full bg-white/15" />
              <div className="absolute right-12 top-48 h-3 w-24 rounded-full" style={{ backgroundColor: project.accent }} />
            </>
          )}

          {project.visual === 'social' && (
            <>
              <div className="absolute left-[18%] top-[28%] h-[48%] w-[28%] rotate-[-8deg] rounded-[30px] border border-white/10 bg-white/[0.04]" />
              <div className="absolute left-[34%] top-[22%] z-10 h-[54%] w-[32%] rounded-[32px] border border-white/10 bg-[rgba(255,255,255,0.06)] shadow-[0_18px_40px_rgba(0,0,0,0.28)]" />
              <div className="absolute right-[15%] top-[30%] h-[44%] w-[24%] rotate-[8deg] rounded-[28px] border border-white/10 bg-white/[0.04]" />
              <div className="absolute left-[40%] top-[30%] h-3 w-16 rounded-full bg-white/18" />
              <div className="absolute left-[40%] top-[37%] h-2 w-22 rounded-full bg-white/10" />
              <div className="absolute left-[40%] top-[43%] h-2 w-18 rounded-full bg-white/10" />
              <div className="absolute left-[42%] top-[58%] flex gap-2">
                <span className="h-9 w-9 rounded-full bg-white/[0.06] ring-1 ring-white/10" />
                <span className="h-9 w-9 rounded-full" style={{ backgroundColor: project.accent, boxShadow: `0 0 18px ${project.accentSoft}` }} />
                <span className="h-9 w-9 rounded-full bg-white/[0.06] ring-1 ring-white/10" />
              </div>
            </>
          )}

          {project.visual === 'exchange' && (
            <>
              <div className="absolute left-7 top-24 h-[52%] w-[45%] rounded-[26px] border border-white/10 bg-white/[0.04]" />
              <svg className="absolute left-11 top-32 h-26 w-40" viewBox="0 0 160 104" fill="none" aria-hidden="true">
                <path
                  d="M6 76C23 60 31 34 52 34C73 34 74 70 98 70C120 70 127 30 154 30"
                  stroke={project.accent}
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute right-7 top-26 h-24 w-[34%] rounded-[22px] border border-white/10 bg-white/[0.05]" />
              <div className="absolute right-10 top-34 h-2 w-18 rounded-full bg-white/12" />
              <div className="absolute right-10 top-40 h-3 w-24 rounded-full" style={{ backgroundColor: project.accent }} />
              <div className="absolute right-10 top-48 h-2 w-20 rounded-full bg-white/12" />
              <div className="absolute right-7 bottom-8 grid w-[34%] grid-cols-2 gap-3">
                <span className="h-11 rounded-[16px] bg-white/[0.05]" />
                <span className="h-11 rounded-[16px] bg-[rgba(147,197,253,0.16)]" />
                <span className="h-11 rounded-[16px] bg-white/[0.05]" />
                <span className="h-11 rounded-[16px] bg-white/[0.05]" />
              </div>
            </>
          )}

          {project.visual === 'trading' && (
            <>
              <div className="absolute left-7 top-24 h-[58%] w-[52%] rounded-[26px] border border-white/10 bg-white/[0.04]" />
              <div className="absolute bottom-12 left-11 flex items-end gap-4">
                {[48, 72, 58, 98, 84].map((height, index) => (
                  <span
                    key={`${project.id}-bar-${index}`}
                    className="w-8 rounded-t-[12px] bg-white/18"
                    style={{ height }}
                  />
                ))}
              </div>
              <svg className="absolute left-10 top-30 h-30 w-52" viewBox="0 0 208 120" fill="none" aria-hidden="true">
                <path
                  d="M8 86C32 70 44 40 72 40C100 40 104 74 132 74C158 74 170 34 200 34"
                  stroke={project.accent}
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute right-8 top-28 flex w-[28%] flex-col gap-3">
                <span className="h-14 rounded-[18px] bg-white/[0.05]" />
                <span className="h-14 rounded-[18px] bg-white/[0.05]" />
                <span className="h-14 rounded-[18px] bg-[rgba(56,189,248,0.14)]" />
              </div>
            </>
          )}

          {project.visual === 'game' && (
            <>
              <div className="absolute left-8 top-28 flex items-end gap-5">
                {[36, 74, 52, 112, 88, 128].map((height, index) => (
                  <span
                    key={`${project.id}-game-${index}`}
                    className="w-9 rounded-t-[12px] bg-[rgba(129,140,248,0.2)]"
                    style={{ height }}
                  />
                ))}
              </div>
              <svg className="absolute left-8 top-24 h-38 w-[72%]" viewBox="0 0 360 160" fill="none" aria-hidden="true">
                <path
                  d="M20 126C48 94 66 54 108 54C154 54 162 118 210 118C256 118 276 30 338 30"
                  stroke={project.accent}
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute right-10 top-28 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                Live loop
              </div>
            </>
          )}

          {project.visual === 'liquidity' && (
            <>
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-26 w-26 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12" style={{ boxShadow: `0 0 34px ${project.accentSoft}` }} />
              <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ backgroundColor: project.accent }} />
              <div className="absolute left-[28%] top-[34%] h-12 w-12 rounded-full border border-white/10 bg-white/[0.05]" />
              <div className="absolute right-[26%] top-[58%] h-12 w-12 rounded-full border border-white/10 bg-white/[0.05]" />
              <div className="absolute left-[30%] bottom-[22%] h-12 w-12 rounded-full border border-white/10 bg-white/[0.05]" />
              <div className="absolute left-[34%] top-[40%] h-px w-26 bg-white/10" />
              <div className="absolute left-[46%] top-[54%] h-px w-20 rotate-[34deg] bg-white/10" />
              <div className="absolute left-[41%] top-[61%] h-px w-24 -rotate-[38deg] bg-white/10" />
            </>
          )}

          {project.visual === 'voting' && (
            <>
              <div className="absolute left-7 top-24 flex w-[54%] flex-col gap-4">
                {[70, 84, 58, 92].map((width, index) => (
                  <div key={`${project.id}-vote-${index}`} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] text-[11px] font-semibold text-white/70">
                      {index + 1}
                    </span>
                    <span className="h-3 rounded-full bg-white/12" style={{ width }} />
                  </div>
                ))}
              </div>
              <div className="absolute right-8 top-26 flex h-32 w-[26%] items-center justify-center rounded-[22px] border border-white/10 bg-[rgba(245,158,11,0.12)]">
                <span className="text-3xl font-display font-bold text-white/90">92</span>
              </div>
              <div className="absolute right-8 bottom-8 h-16 w-[26%] rounded-[20px] border border-white/10 bg-white/[0.05]" />
            </>
          )}

          {project.visual === 'nft' && (
            <>
              <div className="absolute left-[18%] top-[30%] h-[40%] w-[24%] rounded-[24px] border border-white/10 bg-white/[0.04]" />
              <div className="absolute left-[40%] top-[24%] h-[48%] w-[28%] rounded-[28px] border border-white/10 bg-[rgba(167,139,250,0.14)]" />
              <div className="absolute right-[16%] top-[32%] h-[38%] w-[22%] rounded-[24px] border border-white/10 bg-white/[0.04]" />
              <div className="absolute bottom-10 left-[22%] h-12 w-12 rounded-[18px] bg-white/[0.05]" />
              <div className="absolute bottom-12 left-[46%] flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: project.accent, boxShadow: `0 0 18px ${project.accentSoft}` }}>
                <span className="h-3 w-3 rounded-full bg-[#0c0f17]" />
              </div>
              <div className="absolute bottom-10 right-[18%] h-12 w-12 rounded-[18px] bg-white/[0.05]" />
            </>
          )}
        </>
      )}
    </div>
  );
}

export function CasesShowcase() {
  const { lang } = useLanguage();
  const currentLang = lang as Language;
  const content = getCasesContent(lang);
  const previewUiCopy = PREVIEW_UI_COPY[lang] ?? PREVIEW_UI_COPY.EN;
  const sectionUiCopy = CASE_SECTION_UI_COPY[currentLang] ?? CASE_SECTION_UI_COPY.EN;
  const [previewMode, setPreviewMode] = useState<PreviewMode>('manual');
  const [activePreviewId, setActivePreviewId] = useState<CaseStudyId | null>(null);
  const [activeFilter, setActiveFilter] = useState<CaseFilterId>('all');

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)') as LegacyMediaQueryList;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)') as LegacyMediaQueryList;
    const connection = (
      navigator as Navigator & { connection?: ConnectionLike }
    ).connection;

    const syncPreviewMode = () => {
      const slowConnection =
        connection?.saveData === true ||
        ['slow-2g', '2g', '3g'].includes(connection?.effectiveType ?? '');
      const shouldUseHover =
        hoverQuery.matches && !motionQuery.matches && !slowConnection;

      setPreviewMode(shouldUseHover ? 'hover' : 'manual');
      setActivePreviewId(null);
    };

    syncPreviewMode();

    if (typeof hoverQuery.addEventListener === 'function') {
      hoverQuery.addEventListener('change', syncPreviewMode);
      motionQuery.addEventListener('change', syncPreviewMode);
    } else {
      hoverQuery.addListener?.(syncPreviewMode);
      motionQuery.addListener?.(syncPreviewMode);
    }

    connection?.addEventListener?.('change', syncPreviewMode);

    return () => {
      if (typeof hoverQuery.removeEventListener === 'function') {
        hoverQuery.removeEventListener('change', syncPreviewMode);
        motionQuery.removeEventListener('change', syncPreviewMode);
      } else {
        hoverQuery.removeListener?.(syncPreviewMode);
        motionQuery.removeListener?.(syncPreviewMode);
      }

      connection?.removeEventListener?.('change', syncPreviewMode);
    };
  }, []);

  useEffect(() => {
    setActivePreviewId(null);
  }, [activeFilter]);

  const visibleCases = useMemo(
    () =>
      content.cases.filter((project) => {
        if (activeFilter === 'all') {
          return true;
        }

        return CASE_META[project.id].filters.includes(activeFilter);
      }),
    [activeFilter, content.cases],
  );

  return (
    <section
      id="cases"
      className="relative scroll-mt-28 overflow-hidden bg-transparent px-4 py-16 md:scroll-mt-32 md:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-12 h-40 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.07),transparent_72%)]" />

      <div className="relative mx-auto max-w-[88rem]">
        <div className="pointer-events-none absolute -left-20 top-16 h-40 w-40 rounded-full bg-sky-500/8 blur-[90px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-blue-500/8 blur-[100px]" />

        <div className="mb-8 grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)] xl:items-end">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9fd2ff]">
              <span className="h-2 w-2 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,0.72)]" />
              {content.badge}
            </span>
            <h2 className="max-w-[760px] text-[2rem] font-display font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-[2.6rem] xl:text-[3.35rem]">
              {content.title}
            </h2>
          </div>
          <p className="max-w-[500px] text-sm leading-7 text-text-muted sm:text-base">
            {content.desc}
          </p>
        </div>

        <div className="mb-6">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/42">
            {sectionUiCopy.filterLabel}
          </div>
          <div className="rounded-[26px] border border-white/10 bg-white/[0.02] p-2">
            <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {sectionUiCopy.filters.map((filter) => {
              const isActive = filter.id === activeFilter;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-200 ${
                    isActive
                      ? 'border-brand-blue/35 bg-brand-blue/16 text-white shadow-[0_0_24px_rgba(37,99,235,0.16)]'
                      : 'border-white/10 bg-white/[0.03] text-white/62 hover:border-white/16 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:items-start">
          {visibleCases.map((project, index) => {
            const meta = CASE_META[project.id];
            const liveUrl = CASE_PUBLIC_LINKS[project.id];
            const hasLiveProject = Boolean(liveUrl);
            const liveCaption = getLinkCaption(liveUrl);
            const isMediaLeft = index % 2 === 1;
            const accessLabel =
              meta.access === 'live'
                ? content.liveStatusLabel
                : meta.access === 'private'
                  ? content.privateStatusLabel
                  : content.demoStatusLabel;
            const accessNote = getLocalizedText(meta.accessNote, currentLang);
            const proofItems = meta.proof.map((item) => ({
              label: getLocalizedText(item.label, currentLang),
              value: getLocalizedText(item.value, currentLang),
            }));
            const desktopLayout = isMediaLeft
              ? 'xl:grid-cols-[minmax(340px,1fr)_minmax(0,0.88fr)]'
              : 'xl:grid-cols-[minmax(0,0.88fr)_minmax(340px,1fr)]';

            return (
              <motion.article
                key={project.id}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="group relative self-start overflow-hidden rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(14,16,23,0.84),rgba(14,16,23,0.96))] p-4 text-left shadow-[0_20px_56px_rgba(0,0,0,0.24)] transition-colors duration-300 hover:border-white/12 sm:p-5 lg:p-6"
              >
                <div
                  className="pointer-events-none absolute inset-x-10 top-0 h-px opacity-65"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
                  }}
                />
                <div
                  className={`pointer-events-none absolute top-[-3.5rem] h-32 w-32 rounded-full blur-3xl opacity-35 ${
                    isMediaLeft ? '-left-16' : '-right-16'
                  }`}
                  style={{ backgroundColor: project.accentSoft }}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%,rgba(255,255,255,0.01))]"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: isMediaLeft
                      ? `radial-gradient(circle at top left, ${project.accentSoft} 0%, transparent 52%)`
                      : `radial-gradient(circle at top right, ${project.accentSoft} 0%, transparent 52%)`,
                  }}
                />

                <div className={`relative grid gap-5 xl:items-start ${desktopLayout}`}>
                  <div className={`flex h-full flex-col ${isMediaLeft ? 'xl:order-2' : ''}`}>
                    <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div
                          className="text-[11px] font-semibold uppercase tracking-[0.2em]"
                          style={{ color: project.accent }}
                        >
                          {project.category}
                        </div>
                        <h3 className="mt-2 text-[clamp(1.8rem,3vw,2.8rem)] font-display font-bold leading-[0.96] tracking-[-0.045em] text-white">
                          {project.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap justify-end gap-2">
                        <span
                          className="rounded-full border bg-white/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/82"
                          style={{ borderColor: project.accentSoft, boxShadow: `inset 0 0 0 1px ${project.accentSoft}` }}
                        >
                          {accessLabel}
                        </span>
                        {project.badges.map((badge) => (
                          <span
                            key={`${project.id}-${badge}`}
                            className="rounded-full border bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70"
                            style={{ borderColor: project.accentSoft }}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="max-w-[38rem] text-[15px] leading-7 text-text-muted sm:text-base">
                      {project.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.facts.map((fact) => (
                        <span
                          key={`${project.id}-${fact}`}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-[11px] font-semibold tracking-[0.04em] text-white/72"
                          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                        >
                          {fact}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/42">
                      {sectionUiCopy.proofLabel}
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {proofItems.map((item) => (
                        <div key={`${project.id}-${item.label}`}>
                          <SnapshotStat
                            label={item.label}
                            value={item.value}
                            accent={project.accentSoft}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-[20px] border bg-white/[0.02] px-4 py-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                        {sectionUiCopy.accessNoteLabel}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/78">{accessNote}</p>
                    </div>

                    <div className="mt-auto pt-5">
                      <div className="grid gap-3 sm:grid-cols-2">
                        <a
                          href={liveUrl ?? '#contact'}
                          target={hasLiveProject ? '_blank' : undefined}
                          rel={hasLiveProject ? 'noreferrer' : undefined}
                          className="group/action flex items-center justify-between gap-3 rounded-[20px] border border-white/10 bg-white/[0.02] px-4 py-4 text-sm font-semibold text-white no-underline transition-all duration-300 hover:border-white/16 hover:bg-white/[0.05]"
                          style={{
                            boxShadow: hasLiveProject
                              ? `inset 0 0 0 1px ${project.accentSoft}`
                              : 'none',
                          }}
                        >
                          <span className="min-w-0">
                            <span className="block truncate">
                              {hasLiveProject ? content.liveProjectLabel : content.requestAccessLabel}
                            </span>
                            <span className="mt-1 block truncate text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
                              {hasLiveProject ? liveCaption : accessLabel}
                            </span>
                          </span>
                          {hasLiveProject ? (
                            <ExternalLink
                              className="h-4 w-4 shrink-0 text-white/60 transition-transform duration-300 group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5 group-hover/action:text-white"
                            />
                          ) : (
                            <ArrowRight
                              className="h-4 w-4 shrink-0 text-white/60 transition-transform duration-300 group-hover/action:translate-x-1 group-hover/action:text-white"
                            />
                          )}
                        </a>

                        <a
                          href="#contact"
                          className="brand-button group/contact flex items-center justify-between rounded-[20px] border border-brand-blue/30 px-4 py-4 text-sm font-semibold text-white no-underline transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          <span>{content.contactProjectLabel}</span>
                          <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/contact:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={isMediaLeft ? 'xl:order-1' : ''}>
                    <PreviewShell
                      project={project}
                      large
                      isActive={activePreviewId === project.id}
                      previewMode={previewMode}
                      uiCopy={previewUiCopy}
                      onActivate={() => setActivePreviewId(project.id)}
                      onDeactivate={() =>
                        setActivePreviewId((currentId) =>
                          currentId === project.id ? null : currentId
                        )
                      }
                    />

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <DetailPanel
                        label={content.businessTaskLabel}
                        value={project.modal.businessTask}
                        accent={project.accentSoft}
                      />
                      <TagGroup
                        label={content.modulesLabel}
                        items={project.modal.modules}
                        accent={project.accentSoft}
                      />
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.85fr)]">
                      <div
                        className="rounded-[20px] border bg-white/[0.02] px-4 py-4"
                        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                      >
                        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          {content.valueLabel}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-white/80">{project.modal.value}</p>
                      </div>

                      <TagGroup
                        label={content.deliveryLabel}
                        items={project.modal.delivery}
                        accent={project.accentSoft}
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
