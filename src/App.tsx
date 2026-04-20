/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { lazy, Suspense, useEffect, type ReactNode } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CasesShowcase } from './components/CasesShowcase';
import { SectionErrorBoundary } from './components/ui/SectionErrorBoundary';
import { DeferredSection } from './components/ui/DeferredSection';
import { FilmGrain } from './components/ui/FilmGrain';
import { useLiteMode } from './hooks/useLiteMode';

const loadScrollProgressBar = () => import('./components/ui/ScrollProgressBar');
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
  const primaryRootMargin = isLiteMode ? '1400px 0px' : '900px 0px';
  const secondaryRootMargin = isLiteMode ? '1200px 0px' : '720px 0px';
  const tertiaryRootMargin = isLiteMode ? '1000px 0px' : '560px 0px';

  useEffect(() => {
    if (!isLiteMode) {
      return;
    }

    const preloadTimer = window.setTimeout(() => {
      void loadProjects();
      void loadShowcaseMarquee();
      void loadMethodology();
      void loadTransparency();
      void loadTeam();
      void loadSocialProof();
      void loadLeadMagnet();
      void loadFaq();
      void loadCta();
      void loadFooter();
    }, 180);

    return () => window.clearTimeout(preloadTimer);
  }, [isLiteMode]);

  return (
    <div>
      {!isLiteMode && <FilmGrain />}
      <div className="min-h-[100svh] overflow-x-hidden selection:bg-brand-blue selection:text-white transition-colors duration-500">
        {!isLiteMode && (
          <SafeSection fallback={null}>
            <ScrollProgressBar />
          </SafeSection>
        )}

        <Header />

        <main>
          <Hero />

          <SectionErrorBoundary fallback={<SectionFallback height="h-[920px] sm:h-[1260px]" />}>
            <CasesShowcase />
          </SectionErrorBoundary>

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
