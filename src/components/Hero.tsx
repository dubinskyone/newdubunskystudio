import { lazy, Suspense } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n';
import { useLiteMode } from '../hooks/useLiteMode';
import { HeroCopy, TrustedMarks } from './HeroShared';

const HeroRich = lazy(() => import('./HeroRich').then((m) => ({ default: m.HeroRich })));

function HeroLite({ copy, titleWordsArray }: { copy: HeroCopy; titleWordsArray: string[] }) {
  const accentWord = titleWordsArray[0] ?? '';

  return (
    <section
      id="top"
      className="relative flex min-h-[82svh] scroll-mt-28 flex-col items-center justify-center overflow-hidden px-4 pb-14 pt-30 text-center md:scroll-mt-32"
    >
      <div className="absolute inset-0 -z-10 bg-surface-bg" />
      <div className="pointer-events-none absolute left-[6%] top-[14%] h-[36vw] w-[36vw] max-h-[220px] max-w-[220px] rounded-full bg-sky-400/12 blur-[70px]" />
      <div className="pointer-events-none absolute bottom-[12%] right-[8%] h-[42vw] w-[42vw] max-h-[260px] max-w-[260px] rounded-full bg-blue-500/12 blur-[90px]" />
      <div className="pointer-events-none absolute inset-x-0 top-[20%] mx-auto h-[52vw] w-[52vw] max-h-[360px] max-w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(116,207,255,0.12)_0%,rgba(28,93,192,0.05)_48%,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto aspect-square w-[88vw] max-w-[780px] -translate-y-1/2 rounded-full border border-line/30" />

      <div className="relative z-10 mx-auto mt-8 flex max-w-[1120px] flex-col items-center">
        <div className="mb-7 flex items-center gap-3 rounded-full border border-white/10 bg-surface-glass px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-main shadow-[0_0_24px_rgba(35,95,185,0.12)]">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,0.9)]" />
          <span>{copy.badge}</span>
        </div>

        <h1 className="mb-7 flex max-w-[980px] flex-col items-center gap-y-1 text-center text-[14vw] font-sans font-bold leading-[1.02] tracking-tight text-text-main sm:font-display sm:text-7xl lg:text-[5rem]">
          <span>{copy.title1}</span>
          <span className="brand-gradient-text">{accentWord}</span>
          <span>{copy.title3}</span>
        </h1>

        <p className="mb-9 max-w-[700px] text-base leading-relaxed text-text-muted sm:mb-10 sm:text-lg md:text-xl">
          {copy.desc}
          <span className="px-1 font-semibold text-white">{copy.descHighlight}</span>
          {copy.descEnding}
        </p>

        <div className="mb-16 flex w-full flex-col items-center justify-center gap-4 sm:mb-20 sm:w-auto sm:flex-row">
          <a
            href="#contact"
            className="brand-button flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold tracking-wide text-white no-underline sm:w-auto"
          >
            {copy.contact}
            <ArrowRight className="h-5 w-5" />
          </a>

          <a
            href="#solutions"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface-glass px-8 py-4 text-[15px] font-bold tracking-wide text-text-main no-underline sm:w-auto"
          >
            {copy.cases}
            <Sparkles className="h-4 w-4 text-sky-200" />
          </a>
        </div>

        <TrustedMarks trustedLabel={copy.trusted} />
      </div>
    </section>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const isLiteMode = useLiteMode();

  const titleWordsStr = t('hero', 'titleWords' as never);
  const titleWordsArray =
    titleWordsStr && titleWordsStr !== 'titleWords'
      ? titleWordsStr.split('|')
      : [t('hero', 'title2')];

  const copy: HeroCopy = {
    badge: t('hero', 'badge'),
    title1: t('hero', 'title1'),
    title3: t('hero', 'title3'),
    desc: t('hero', 'desc'),
    descHighlight: t('hero', 'descHighlight'),
    descEnding: t('hero', 'descEnding'),
    contact: t('hero', 'contact'),
    cases: t('hero', 'cases'),
    trusted: t('hero', 'trusted'),
  };

  if (isLiteMode) {
    return <HeroLite copy={copy} titleWordsArray={titleWordsArray} />;
  }

  return (
    <Suspense fallback={<HeroLite copy={copy} titleWordsArray={titleWordsArray} />}>
      <HeroRich copy={copy} titleWordsArray={titleWordsArray} />
    </Suspense>
  );
}
