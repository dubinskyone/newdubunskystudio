/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { lazy, Suspense } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoCase } from './components/BentoCase';
import { FilmGrain } from './components/ui/FilmGrain';

const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const ShowcaseMarquee = lazy(() => import('./components/ShowcaseMarquee').then(m => ({ default: m.ShowcaseMarquee })));
const Methodology = lazy(() => import('./components/Methodology').then(m => ({ default: m.Methodology })));
const Transparency = lazy(() => import('./components/Transparency').then(m => ({ default: m.Transparency })));
const Team = lazy(() => import('./components/Team').then(m => ({ default: m.Team })));
const SocialProof = lazy(() => import('./components/SocialProof').then(m => ({ default: m.SocialProof })));
const LeadMagnet = lazy(() => import('./components/LeadMagnet').then(m => ({ default: m.LeadMagnet })));
const Faq = lazy(() => import('./components/Faq').then(m => ({ default: m.Faq })));
const Cta = lazy(() => import('./components/Cta').then(m => ({ default: m.Cta })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  // Minimal scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="lg:[zoom:85%]">
      <FilmGrain />
      <div className="min-h-[100svh] selection:bg-brand-blue selection:text-white transition-colors duration-500 overflow-x-hidden">
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-brand-blue origin-left z-[60]"
          style={{ scaleX }}
        />

        <Header />
        
        <main>
          <section id="about">
            <Hero />
          </section>
          <section id="solutions">
            <BentoCase />
            <Suspense fallback={<div className="h-[200px]" />}>
              <Projects />
              <ShowcaseMarquee />
            </Suspense>
          </section>
          <Suspense fallback={<div className="h-[200px]" />}>
            <section id="platform">
              <Methodology />
            </section>
            <section id="integration">
              <Transparency />
              <Team />
            </section>
            
            <SocialProof />
            <LeadMagnet />
            
            <Cta />
            <Faq />
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-[100px]" />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
