/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { lazy, Suspense, type ReactNode } from 'react';
import { BentoCaseLite } from './components/BentoCaseLite';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SectionErrorBoundary } from './components/ui/SectionErrorBoundary';
import { DeferredSection } from './components/ui/DeferredSection';
import { FilmGrain } from './components/ui/FilmGrain';
import { useLiteMode } from './hooks/useLiteMode';

const loadScrollProgressBar = () => import('./components/ui/ScrollProgressBar');
const loadBentoCase = () => import('./components/BentoCase');
const loadProjects = () => import('./components/Projects');
const loadShowcaseMarquee = () => import('./components/ShowcaseMarquee');
const loadMethodology = () => import('./components/Methodology');
const loadTransparency = () => import('./components/Transparency');
const loadTeam = () => import('./components/Team');
const loadSocialProof = () => import('./components/SocialProof');
const loadLeadMagnet = () => import('./components/LeadMagnet');
const loadFaq = () => import('./components/Faq');
const loadCta = () => import('./components/Cta');
const loadFooter = () => import('./components/Footer');

const ScrollProgressBar = lazy(() =>
  loadScrollProgressBar().then((m) => ({ default: m.ScrollProgressBar })),
);
const BentoCase = lazy(() =>
  loadBentoCase().then((m) => ({ default: m.BentoCase })),
);
const Projects = lazy(() => loadProjects().then((m) => ({ default: m.Projects })));
const ShowcaseMarquee = lazy(() =>
  loadShowcaseMarquee().then((m) => ({ default: m.ShowcaseMarquee })),
);
const Methodology = lazy(() => loadMethodology().then((m) => ({ default: m.Methodology })));
const Transparency = lazy(() =>
  loadTransparency().then((m) => ({ default: m.Transparency })),
);
const Team = lazy(() => loadTeam().then((m) => ({ default: m.Team })));
const SocialProof = lazy(() => loadSocialProof().then((m) => ({ default: m.SocialProof })));
const LeadMagnet = lazy(() => loadLeadMagnet().then((m) => ({ default: m.LeadMagnet })));
const Faq = lazy(() => loadFaq().then((m) => ({ default: m.Faq })));
const Cta = lazy(() => loadCta().then((m) => ({ default: m.Cta })));
const Footer = lazy(() => loadFooter().then((m) => ({ default: m.Footer })));

function SectionFallback({ height }: { height: string }) {
  return (
    <div className={`${height} relative overflow-hidden`} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.08),transparent_42%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="mx-auto flex h-full max-w-7xl items-center px-4 py-10 sm:py-14">
        <div className="w-full rounded-[32px] border border-line/80 bg-surface-card/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-8">
          <div className="mb-6 h-3 w-28 rounded-full bg-white/10" />
          <div className="mb-4 h-8 w-[68%] max-w-[420px] rounded-full bg-white/12" />
          <div className="mb-10 h-4 w-[88%] max-w-[620px] rounded-full bg-white/8" />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="h-32 rounded-[24px] border border-white/6 bg-white/[0.04]" />
            <div className="h-32 rounded-[24px] border border-white/6 bg-white/[0.035]" />
            <div className="h-32 rounded-[24px] border border-white/6 bg-white/[0.03]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BentoFallback() {
  return (
    <section
      id="solutions"
      className="scroll-mt-28 max-w-7xl px-4 py-8 md:scroll-mt-32 md:py-16 mx-auto"
      aria-hidden="true"
    >
      <div className="relative overflow-hidden rounded-[32px] border border-line bg-surface-card/80 p-4 shadow-[0_0_50px_rgba(0,0,0,0.22)] sm:p-6">
        <div className="absolute right-[12%] top-[8%] h-40 w-40 rounded-full bg-brand-blue/10 blur-[70px]" />
        <div className="mx-auto mb-8 flex w-full max-w-[920px] gap-2 overflow-hidden rounded-2xl border border-white/8 bg-[#09090b]/80 p-2">
          <div className="h-10 flex-1 rounded-full bg-white/10" />
          <div className="h-10 flex-1 rounded-full bg-white/[0.06]" />
          <div className="hidden h-10 flex-1 rounded-full bg-white/[0.05] sm:block" />
        </div>
        <div className="grid gap-6 md:grid-cols-12 md:items-center">
          <div className="space-y-4 md:col-span-5">
            <div className="h-3 w-24 rounded-full bg-brand-blue/30" />
            <div className="h-10 w-[84%] rounded-full bg-white/12" />
            <div className="h-10 w-[72%] rounded-full bg-white/10" />
            <div className="space-y-3 pt-4">
              <div className="h-14 rounded-2xl border border-white/6 bg-white/[0.05]" />
              <div className="h-14 rounded-2xl border border-white/6 bg-white/[0.045]" />
              <div className="h-14 rounded-2xl border border-white/6 bg-white/[0.04]" />
            </div>
            <div className="h-12 w-48 rounded-full bg-white/12" />
          </div>
          <div className="grid min-h-[360px] gap-4 md:col-span-7 md:grid-cols-3 md:grid-rows-2">
            <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(135deg,rgba(20,55,112,0.78),rgba(38,110,210,0.42),rgba(111,201,255,0.16))] md:col-span-2 md:row-span-2" />
            <div className="rounded-[24px] border border-white/8 bg-white/[0.05]" />
            <div className="rounded-[24px] border border-white/8 bg-white/[0.04]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SafeSection({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback: ReactNode;
}) {
  return (
    <SectionErrorBoundary fallback={fallback}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </SectionErrorBoundary>
  );
}

export default function App() {
  const isLiteMode = useLiteMode();
  const primaryRootMargin = isLiteMode ? '0px 0px' : '900px 0px';
  const secondaryRootMargin = isLiteMode ? '0px 0px' : '720px 0px';
  const tertiaryRootMargin = isLiteMode ? '0px 0px' : '560px 0px';

  return (
    <div className="lg:[zoom:85%]">
      {!isLiteMode && <FilmGrain />}
      <div className="min-h-[100svh] selection:bg-brand-blue selection:text-white transition-colors duration-500 overflow-x-hidden">
        {!isLiteMode && (
          <SafeSection fallback={null}>
            <ScrollProgressBar />
          </SafeSection>
        )}

        <Header />
        
        <main>
          <Hero />
          {isLiteMode ? (
            <BentoCaseLite />
          ) : (
            <DeferredSection
              anchorId="solutions"
              className="scroll-mt-28 md:scroll-mt-32"
              rootMargin={primaryRootMargin}
              fallback={<BentoFallback />}
            >
              <SafeSection fallback={<BentoFallback />}>
                <BentoCase />
              </SafeSection>
            </DeferredSection>
          )}

          <DeferredSection
            rootMargin={primaryRootMargin}
            fallback={<SectionFallback height="h-[420px] sm:h-[540px]" />}
          >
            <SafeSection fallback={<SectionFallback height="h-[420px] sm:h-[540px]" />}>
              <Projects />
            </SafeSection>
          </DeferredSection>

          <DeferredSection
            anchorId="showcase"
            className="scroll-mt-28 md:scroll-mt-32"
            rootMargin={secondaryRootMargin}
            fallback={<SectionFallback height="h-[520px] sm:h-[700px]" />}
          >
            <SafeSection fallback={<SectionFallback height="h-[520px] sm:h-[700px]" />}>
              <ShowcaseMarquee />
            </SafeSection>
          </DeferredSection>

          <DeferredSection
            anchorId="platform"
            className="scroll-mt-28 md:scroll-mt-32"
            rootMargin={secondaryRootMargin}
            fallback={<SectionFallback height="h-[680px] sm:h-[920px]" />}
          >
            <SafeSection fallback={<SectionFallback height="h-[680px] sm:h-[920px]" />}>
              <Methodology />
            </SafeSection>
          </DeferredSection>

          <DeferredSection
            rootMargin={tertiaryRootMargin}
            fallback={<SectionFallback height="h-[620px] sm:h-[820px]" />}
          >
            <SafeSection fallback={<SectionFallback height="h-[620px] sm:h-[820px]" />}>
              <Transparency />
            </SafeSection>
          </DeferredSection>

          <DeferredSection
            anchorId="team"
            className="scroll-mt-28 md:scroll-mt-32"
            rootMargin={tertiaryRootMargin}
            fallback={<SectionFallback height="h-[540px] sm:h-[760px]" />}
          >
            <SafeSection fallback={<SectionFallback height="h-[540px] sm:h-[760px]" />}>
              <Team />
            </SafeSection>
          </DeferredSection>

          <DeferredSection
            rootMargin={tertiaryRootMargin}
            fallback={<SectionFallback height="h-[520px] sm:h-[700px]" />}
          >
            <SafeSection fallback={<SectionFallback height="h-[520px] sm:h-[700px]" />}>
              <SocialProof />
            </SafeSection>
          </DeferredSection>

          <DeferredSection
            rootMargin={tertiaryRootMargin}
            fallback={<SectionFallback height="h-[420px] sm:h-[560px]" />}
          >
            <SafeSection fallback={<SectionFallback height="h-[420px] sm:h-[560px]" />}>
              <LeadMagnet />
            </SafeSection>
          </DeferredSection>

          <DeferredSection
            anchorId="contact"
            className="scroll-mt-28 md:scroll-mt-32"
            rootMargin={tertiaryRootMargin}
            fallback={<SectionFallback height="h-[460px] sm:h-[620px]" />}
          >
            <SafeSection fallback={<SectionFallback height="h-[460px] sm:h-[620px]" />}>
              <Cta />
            </SafeSection>
          </DeferredSection>

          <DeferredSection
            rootMargin={tertiaryRootMargin}
            fallback={<SectionFallback height="h-[420px] sm:h-[560px]" />}
          >
            <SafeSection fallback={<SectionFallback height="h-[420px] sm:h-[560px]" />}>
              <Faq />
            </SafeSection>
          </DeferredSection>
        </main>

        <DeferredSection
          rootMargin={tertiaryRootMargin}
          fallback={<SectionFallback height="h-[180px]" />}
        >
          <SafeSection fallback={<SectionFallback height="h-[180px]" />}>
            <Footer />
          </SafeSection>
        </DeferredSection>
      </div>
    </div>
  );
}
