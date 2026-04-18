/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion, useScroll, useSpring } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoCase } from './components/BentoCase';
import { Projects } from './components/Projects';
import { ShowcaseMarquee } from './components/ShowcaseMarquee';
import { Methodology } from './components/Methodology';
import { Transparency } from './components/Transparency';
import { Team } from './components/Team';
import { SocialProof } from './components/SocialProof';
import { LeadMagnet } from './components/LeadMagnet';
import { Cta } from './components/Cta';
import { Footer } from './components/Footer';
import { FilmGrain } from './components/ui/FilmGrain';
import { usePerformanceMode } from './hooks/usePerformanceMode';
import { SeoManager } from './components/SeoManager';

export default function App() {
  const { disableHeavyEffects } = usePerformanceMode();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div style={{ zoom: disableHeavyEffects ? '100%' : '85%' }}>
      <SeoManager />
      <FilmGrain />
      <div className="min-h-screen selection:bg-brand-blue selection:text-white transition-colors duration-500 overflow-x-hidden">
        {!disableHeavyEffects && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-brand-blue origin-left z-[60]"
            style={{ scaleX }}
          />
        )}

        <Header />
        
        <main>
          <section id="about">
            <Hero />
          </section>
          <section id="solutions">
            <BentoCase />
            <Projects />
            <ShowcaseMarquee />
          </section>
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
        </main>
        <Footer />
      </div>
    </div>
  );
}
