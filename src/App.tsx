/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { lazy, Suspense } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoCase } from './components/BentoCase';
import { FilmGrain } from './components/ui/FilmGrain';
import { usePerformanceMode } from './hooks/usePerformanceMode';
import { SeoManager } from './components/SeoManager';
import { DeferredSection } from './components/DeferredSection';

const LazyShowcaseBlock = lazy(() => import('./components/lazy/ShowcaseBlock'));
const LazyPlatformSections = lazy(() => import('./components/lazy/PlatformSections'));
const LazyConversionSections = lazy(() => import('./components/lazy/ConversionSections'));

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-brand-blue origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}

function SectionFallback({ minHeight }: { minHeight: number }) {
  return (
    <div
      className="perf-section"
      aria-hidden="true"
      style={{ minHeight }}
    />
  );
}

export default function App() {
  const { disableHeavyEffects } = usePerformanceMode();

  return (
    <div style={{ zoom: disableHeavyEffects ? '100%' : '85%' }}>
      <SeoManager />
      <FilmGrain />
      <div className="min-h-screen selection:bg-brand-blue selection:text-white transition-colors duration-500 overflow-x-hidden">
        {!disableHeavyEffects && <ScrollProgressBar />}

        <Header />
        
        <main>
          <section id="about">
            <Hero />
          </section>
          <section id="solutions">
            <BentoCase />
            <DeferredSection
              minHeight={1400}
              rootMargin="1000px 0px"
              eagerAfterMs={300}
              className="perf-section"
            >
              <Suspense fallback={<SectionFallback minHeight={1400} />}>
                <LazyShowcaseBlock />
              </Suspense>
            </DeferredSection>
          </section>
          <DeferredSection
            minHeight={2600}
            rootMargin="1200px 0px"
            eagerAfterMs={700}
            className="perf-section"
          >
            <Suspense fallback={<SectionFallback minHeight={2600} />}>
              <LazyPlatformSections />
            </Suspense>
          </DeferredSection>
          <DeferredSection
            minHeight={2200}
            rootMargin="1400px 0px"
            eagerAfterMs={1100}
            className="perf-section"
          >
            <Suspense fallback={<SectionFallback minHeight={2200} />}>
              <LazyConversionSections />
            </Suspense>
          </DeferredSection>
        </main>
      </div>
    </div>
  );
}
