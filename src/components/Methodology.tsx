import { motion, useScroll, useTransform } from 'motion/react';
import { LineChart, CheckCircle2, Globe, Zap } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '../i18n';
import { useLiteMode } from '../hooks/useLiteMode';

const AnimatedChart = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-[#09090b] overflow-hidden group-hover:scale-105 transition-transform duration-700">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-blue/20 blur-[80px] z-0 rounded-full" />
    <div className="flex items-end gap-3 w-full max-w-[220px] h-32 relative z-10">
      {[40, 70, 50, 90, 60, 100].map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-brand-blue/20 border-t-2 border-brand-blue rounded-t-sm"
          initial={{ height: "10%" }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.1 }}
        />
      ))}
      {/* Animated trend line simulation */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
         <motion.path
            d="M 7 82 C 16 60, 24 36, 36 38 C 47 40, 54 58, 65 54 C 78 48, 86 20, 95 18"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0.35 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0.35, 1, 0.92] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.6 }}
         />
      </motion.svg>
    </div>
  </div>
);

const StaticChart = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#09090b]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_55%)]" />
    <div className="relative z-10 flex h-32 w-full max-w-[220px] items-end gap-3">
      {[18, 20, 22, 34, 36, 56].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm border-t-2 border-brand-blue bg-brand-blue/20"
          style={{ height: `${h}px` }}
        />
      ))}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M 5 80 Q 20 20, 35 40 T 65 20 T 95 10"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
);

const AnimatedTarget = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-[#09090b] overflow-hidden group-hover:scale-105 transition-transform duration-700">
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/20 blur-[80px] z-0 rounded-full" />
     <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
        className="absolute w-40 h-40 rounded-full border border-purple-500/40 z-0"
     />
     <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
        className="absolute w-24 h-24 rounded-full border border-purple-500/50 z-0 bg-purple-500/5"
     />
     <div className="w-8 h-8 bg-brand-purple rounded-full shadow-[0_0_30px_#a855f7] z-10 flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-full" />
     </div>

     <motion.div
       animate={{ x: [60, 0, 60], y: [60, 0, 60] }}
       transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
       className="absolute z-20 pointer-events-none"
     >
       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
         <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="#a855f7"/>
       </svg>
     </motion.div>
  </div>
);

const StaticTarget = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#09090b]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_55%)]" />
    <div className="absolute h-40 w-40 rounded-full border border-purple-500/25" />
    <div className="absolute h-24 w-24 rounded-full border border-purple-500/40 bg-purple-500/5" />
    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brand-purple shadow-[0_0_22px_rgba(168,85,247,0.34)]">
      <div className="h-3 w-3 rounded-full bg-[#09090b]" />
    </div>
    <div className="absolute translate-x-[62px] translate-y-[44px] rotate-[18deg]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="#a855f7"/>
      </svg>
    </div>
  </div>
);

const AnimatedNetwork = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-[#09090b] overflow-hidden group-hover:scale-105 transition-transform duration-700">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-teal-500/20 blur-[80px] z-0 rounded-full" />
    <div className="relative w-48 h-48 flex items-center justify-center">
       {/* Center Node */}
       <div className="w-12 h-12 bg-teal-500/20 border-2 border-teal-500/50 rounded-full flex items-center justify-center z-10 backdrop-blur-md shadow-[0_0_30px_rgba(45,212,191,0.4)]">
          <div className="w-4 h-4 bg-teal-300 rounded-full shadow-[0_0_15px_#5eead4]" />
       </div>

       {/* Orbiting nodes */}
       {[0, 120, 240].map((deg, i) => (
         <div key={i} style={{ transform: `rotate(${deg}deg)` }} className="absolute inset-0 z-0">
            <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               className="w-full h-full absolute inset-0"
            >
               <div className="w-10 h-10 bg-[#09090b] border border-teal-500/40 rounded-full flex items-center justify-center absolute top-0 left-1/2 -ml-5 shadow-[0_0_20px_rgba(45,212,191,0.2)]">
                  <motion.div 
                     animate={{ scale: [1, 1.5, 1] }}
                     transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                     className="w-2 h-2 bg-teal-400 rounded-full" 
                  />
               </div>
               {/* Dash line pointing to center */}
               <div className="w-[1px] h-16 bg-gradient-to-b from-teal-500/50 to-transparent absolute top-10 left-1/2" />
            </motion.div>
         </div>
       ))}
    </div>
  </div>
);

const StaticNetwork = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#09090b]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.14),transparent_55%)]" />
    <div className="relative flex h-48 w-48 items-center justify-center">
      <div className="absolute left-1/2 top-1/2 h-[1px] w-20 -translate-x-[8px] -translate-y-[34px] rotate-[-155deg] bg-teal-400/30" />
      <div className="absolute left-1/2 top-1/2 h-[1px] w-20 translate-x-[4px] -translate-y-[8px] rotate-[-28deg] bg-teal-400/30" />
      <div className="absolute left-1/2 top-1/2 h-[1px] w-18 -translate-x-[2px] translate-y-[28px] rotate-[82deg] bg-teal-400/30" />

      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-teal-500/45 bg-teal-500/15 shadow-[0_0_24px_rgba(45,212,191,0.22)]">
        <div className="h-4 w-4 rounded-full bg-teal-300" />
      </div>
      <div className="absolute left-[22px] top-[58px] flex h-10 w-10 items-center justify-center rounded-full border border-teal-500/30 bg-[#09090b]">
        <div className="h-2 w-2 rounded-full bg-teal-400" />
      </div>
      <div className="absolute right-[18px] top-[34px] flex h-10 w-10 items-center justify-center rounded-full border border-teal-500/30 bg-[#09090b]">
        <div className="h-2 w-2 rounded-full bg-teal-400" />
      </div>
      <div className="absolute bottom-[16px] left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-teal-500/30 bg-[#09090b]">
        <div className="h-2 w-2 rounded-full bg-teal-400" />
      </div>
    </div>
  </div>
);

const AnimatedDeploy = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-[#09090b] overflow-hidden p-6 group-hover:scale-105 transition-transform duration-700">
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500/10 blur-[80px] z-0 rounded-full" />
     <div className="w-full max-w-[280px] bg-[#18181b] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative z-10">
        <div className="h-8 flex items-center px-4 gap-2 bg-white/5 border-b border-white/5">
           <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
           <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="p-6 flex flex-col gap-4">
           <div className="flex items-center gap-2">
             <span className="text-pink-500 font-mono text-xs font-bold">~</span>
             <span className="text-white/80 font-mono text-xs">deploy --production</span>
           </div>
           
           <div className="space-y-3 mt-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-white/50">
                 <span>Building assets...</span>
                 <motion.span 
                   animate={{ opacity: [1, 0, 1] }}
                   transition={{ duration: 1, repeat: Infinity }}
                   className="text-brand-blue"
                 >45%</motion.span>
              </div>
              <div className="w-full bg-black/50 rounded-full h-1.5 overflow-hidden shadow-inner relative">
                 <motion.div 
                   animate={{ width: ["0%", "100%", "0%"] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="bg-gradient-to-r from-brand-blue via-brand-purple to-pink-500 h-full absolute left-0 top-0"
                 />
              </div>
           </div>

           <motion.div 
             animate={{ opacity: [0, 0, 1, 1, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="flex items-center gap-2 mt-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-lg"
           >
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
             <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
               Ready for scale
             </span>
           </motion.div>
        </div>
     </div>
  </div>
);

const StaticDeploy = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#09090b] p-6">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.08),transparent_55%)]" />
    <div className="relative z-10 w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#18181b] shadow-2xl">
      <div className="flex h-8 items-center gap-2 border-b border-white/5 bg-white/5 px-4">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-pink-500">~</span>
          <span className="font-mono text-xs text-white/80">deploy --production</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between font-mono text-[10px] text-white/50">
            <span>Building assets...</span>
            <span className="text-brand-blue">100%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/50 shadow-inner">
            <div className="h-full w-full bg-gradient-to-r from-brand-blue via-brand-purple to-pink-500" />
          </div>
        </div>
        <div className="mt-1 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400">
            Ready for scale
          </span>
        </div>
      </div>
    </div>
  </div>
);

const principles = [
  {
    id: "01",
    idKey: "id01",
    descKey: "desc01",
    icon: LineChart,
    graphic: AnimatedChart,
  },
  {
    id: "02",
    idKey: "id02",
    descKey: "desc02",
    icon: CheckCircle2,
    graphic: AnimatedTarget,
  },
  {
    id: "03",
    idKey: "id03",
    descKey: "desc03",
    icon: Globe,
    graphic: AnimatedNetwork,
  },
  {
    id: "04",
    idKey: "id04",
    descKey: "desc04",
    icon: Zap,
    graphic: AnimatedDeploy,
  }
];

export function Methodology() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const isLiteMode = useLiteMode();

  const currentPrinciples = [
    {
      ...principles[0],
      title: t('methodology', 'id01'),
      desc: t('methodology', 'desc01')
    },
    {
      ...principles[1],
      title: t('methodology', 'id02'),
      desc: t('methodology', 'desc02')
    },
    {
      ...principles[2],
      title: t('methodology', 'id03'),
      desc: t('methodology', 'desc03')
    },
    {
      ...principles[3],
      title: t('methodology', 'id04'),
      desc: t('methodology', 'desc04')
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-32 px-4 bg-transparent relative overflow-hidden" id="platform">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-24 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-[#a1a1aa] mb-6 backdrop-blur-md"
          >
            {t('methodology', 'badge')}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-[1.05]"
          >
            {t('methodology', 'title1')}<br/>
            <span className="text-white/40">{t('methodology', 'title2')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl font-medium"
          >
            {t('methodology', 'desc')}
          </motion.p>
        </div>

        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto flex gap-4 lg:gap-12">
          
          {/* Desktop Timeline Track */}
          <div className="hidden lg:flex w-12 shrink-0 flex-col items-center relative py-10">
            {/* Base line */}
            <div className="absolute top-0 bottom-0 w-[2px] bg-white/5 rounded-full" />
            {/* Animated Glow Line */}
            <motion.div 
              className="absolute top-0 w-[4px] bg-gradient-to-b from-brand-blue via-brand-purple to-pink-500 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.6)] z-10"
              style={{ scaleY: pathHeight, transformOrigin: "top" }}
            />
          </div>

          {/* Cards Stack */}
          <div className="flex-1 flex flex-col gap-10 md:gap-16 relative">
            {currentPrinciples.map((p) => (
              <div key={p.id} className="relative flex group">
                 {/* Timeline Node connected to card */}
                 <div className="hidden lg:flex absolute -left-[76px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#09090b] border-[3px] border-[#18181b] z-20 items-center justify-center shadow-lg transition-colors duration-500 group-hover:border-brand-blue/50 group-hover:bg-brand-blue/10">
                    <span className="text-[#a1a1aa] font-mono font-bold text-sm group-hover:text-white transition-colors">{p.id}</span>
                 </div>

                 {/* Main Card */}
                 {isLiteMode ? (
                   <div className="relative flex w-full flex-col overflow-hidden rounded-[32px] border border-white/5 bg-[#18181b] shadow-2xl lg:flex-row">
                     <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-white/[0.02] to-transparent" />

                     <div className="relative z-10 flex w-full flex-col justify-center p-8 md:p-12 lg:w-1/2">
                       <div className="mb-8 flex items-center gap-4">
                         <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 shadow-inner">
                           <p.icon className="h-6 w-6 text-[#a1a1aa]" />
                         </div>
                         <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-brand-blue lg:hidden">
                           {t('methodology', 'stepLabel')} {p.id}
                         </div>
                       </div>

                       <h3 className="mb-4 text-3xl font-display font-medium tracking-tight text-white lg:text-4xl">
                         {p.title}
                       </h3>
                       <p className="text-lg font-medium leading-relaxed text-[#a1a1aa] lg:text-xl">
                         {p.desc}
                       </p>
                     </div>

                     <div className="relative min-h-[280px] w-full overflow-hidden border-t border-white/5 bg-[#09090b] lg:h-auto lg:min-h-[320px] lg:w-1/2 lg:border-l lg:border-t-0">
                       <p.graphic />
                     </div>
                   </div>
                 ) : (
                   <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="w-full bg-[#18181b] border border-white/5 rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-2xl hover:border-white/10 hover:shadow-[0_0_50px_rgba(255,255,255,0.03)] transition-all duration-500 relative"
                   >
                    {/* Hover Glow Background inside card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

                    {/* Text Area */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
                       <div className="flex items-center gap-4 mb-8">
                         <div className="w-14 h-14 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30">
                            <p.icon className="w-6 h-6 text-[#a1a1aa] group-hover:text-brand-blue transition-colors duration-500" />
                         </div>
                         <div className="lg:hidden px-3 py-1 rounded-full border border-white/10 bg-black/40 text-[10px] font-mono tracking-widest text-brand-blue uppercase">
                            {t('methodology', 'stepLabel')} {p.id}
                         </div>
                       </div>
                       
                       <h3 className="text-3xl lg:text-4xl font-display font-medium text-white mb-4 tracking-tight group-hover:text-brand-blue transition-colors duration-500">{p.title}</h3>
                       <p className="text-[#a1a1aa] leading-relaxed text-lg lg:text-xl font-medium">{p.desc}</p>
                    </div>

                    {/* Infographic Area */}
                    <div className="w-full lg:w-1/2 bg-[#09090b] border-t lg:border-t-0 lg:border-l border-white/5 relative min-h-[280px] lg:min-h-[320px] overflow-hidden lg:h-auto">
                       <p.graphic />
                    </div>
                   </motion.div>
                 )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
