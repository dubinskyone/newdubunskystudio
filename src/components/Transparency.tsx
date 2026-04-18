import { motion } from 'motion/react';
import { Activity, Code, ShieldCheck, Users } from 'lucide-react';
import { useLanguage } from '../i18n';
import { usePerformanceMode } from '../hooks/usePerformanceMode';
import { useRevealMotion } from '../hooks/useRevealMotion';

// ... (retain Lottie animations)
const LottieRadar = () => {
   const { disableHeavyEffects } = usePerformanceMode();

   return (
   <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none overflow-hidden mix-blend-screen mix-blend-overlay">
      <div className="w-full h-full relative">
         <div className={`absolute inset-0 border-2 border-brand-blue/30 rounded-full ${disableHeavyEffects ? '' : 'animate-ping animate-duration-[3s]'}`} />
         <div className={`absolute inset-4 border border-brand-blue/20 rounded-full ${disableHeavyEffects ? '' : 'animate-pulse'}`} />
      </div>
   </div>
   );
};

const LottieShield = () => {
   const { disableHoverEffects } = usePerformanceMode();

   return (
   <div className={`absolute top-4 right-4 w-24 h-24 opacity-10 pointer-events-none ${disableHoverEffects ? '' : 'group-hover:opacity-20 transition-opacity'}`}>
      <ShieldCheck className="w-full h-full text-brand-purple" />
   </div>
   );
};

const LottieTeam = () => {
   const { disableHoverEffects } = usePerformanceMode();

   return (
   <div className={`absolute right-0 bottom-0 w-48 h-48 opacity-10 pointer-events-none translate-x-12 translate-y-12 ${disableHoverEffects ? '' : 'group-hover:scale-110 transition-transform duration-700'}`}>
      <Users className="w-full h-full text-brand-blue" />
   </div>
   );
};


const dict = {
  RU: {
    badge: "Процесс",
    title1: "Абсолютная",
    title2: "прозрачность",
    desc: "Никаких черных ящиков. Вы знаете статус своего проекта в любую секунду. Мы снимаем возражения через тотальную открытость процессов.",
    list: [
      { text: "Ежедневные статусы в Telegram", icon: Activity },
      { text: "Открытый бэклог в Jira/Linear", icon: Code },
      { text: "Регулярные демо-созвоны", icon: ShieldCheck }
    ],
    card1Label: "Команда проекта",
    card1Title: "Senior уровень",
    card2Label: "Синхронизация",
    card2Title: "Real-time трекинг",
    card3Label: "Гарантия качества",
    card3Title: "SLA Поддержка"
  },
  EN: {
    badge: "Process",
    title1: "Absolute",
    title2: "transparency",
    desc: "No black boxes. You know the status of your project at any second. We remove objections through total transparency of processes.",
    list: [
      { text: "Daily status updates in Telegram", icon: Activity },
      { text: "Open backlog in Jira/Linear", icon: Code },
      { text: "Regular demo calls", icon: ShieldCheck }
    ],
    card1Label: "Project team",
    card1Title: "Senior level",
    card2Label: "Synchronization",
    card2Title: "Real-time tracking",
    card3Label: "Quality Assurance",
    card3Title: "SLA Support"
  },
  UA: {
    badge: "Процес",
    title1: "Абсолютна",
    title2: "прозорість",
    desc: "Ніяких чорних ящиків. Ви знаєте статус свого проєкту в будь-яку секунду. Ми знімаємо заперечення через тотальну відкритість процесів.",
    list: [
      { text: "Щоденні статуси в Telegram", icon: Activity },
      { text: "Відкритий беклог у Jira/Linear", icon: Code },
      { text: "Регулярні демо-дзвінки", icon: ShieldCheck }
    ],
    card1Label: "Команда проєкту",
    card1Title: "Senior рівень",
    card2Label: "Синхронізація",
    card2Title: "Real-time трекінг",
    card3Label: "Гарантія якості",
    card3Title: "SLA Підтримка"
  }
};

export function Transparency() {
  const { lang } = useLanguage();
  const { disableHoverEffects } = usePerformanceMode();
  const { reveal } = useRevealMotion();
  const t = dict[lang] || dict.EN;

  return (
    <section className="perf-section py-16 md:py-24 px-4 bg-transparent relative overflow-hidden" id="integration">
      {/* Dynamic Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column */}
        <div>
          <motion.div
            {...reveal({
              initial: { opacity: 0, scale: 0.9 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
            })}
            className="px-4 py-1.5 rounded-full border border-line bg-surface-glass text-xs font-bold uppercase tracking-widest text-text-muted mb-6 w-fit"
          >
            {t.badge}
          </motion.div>

          <motion.h2 
            {...reveal({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
            })}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-main mb-8 leading-[1.05] tracking-tight"
          >
            {t.title1}<br/>{t.title2}
          </motion.h2>
          <motion.p 
            {...reveal({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 },
            })}
            className="text-lg md:text-xl text-text-muted mb-12 max-w-lg leading-relaxed"
          >
            {t.desc}
          </motion.p>

          <div className="space-y-5">
            {t.list.map((item, i) => (
              <motion.div 
                key={i}
                {...reveal({
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { delay: 0.2 + (i * 0.1) },
                })}
                className="flex items-center gap-5 text-base md:text-lg font-medium text-text-main py-4 border-b border-line/50 last:border-b-0 max-w-md group hover:pl-2 transition-all cursor-crosshair"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-bg border border-line flex items-center justify-center group-hover:border-brand-blue/50 group-hover:bg-brand-blue/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                {item.text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column (Dark Bento Widget) */}
        <motion.div 
          {...reveal({
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 0.7 },
          })}
          className="bg-surface-card rounded-[40px] p-4 lg:p-8 shadow-soft border border-line relative overflow-hidden"
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

          {/* Inner cards GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            
            {/* Card 1: Team */}
            <motion.a 
              href="#contact"
              whileHover={disableHoverEffects ? undefined : { y: -2 }}
              className="sm:col-span-2 bg-surface-glass border border-line rounded-[32px] p-5 sm:p-6 lg:p-8 flex items-center justify-between cursor-pointer block hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] hover:border-brand-blue/30 transition-all backdrop-blur-md group relative overflow-hidden"
            >
              <LottieTeam />
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:scale-110 transition-all duration-300">
                  <Users className="w-7 h-7 text-brand-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-text-muted text-sm font-bold uppercase tracking-wider mb-1">{t.card1Label}</div>
                  <div className="text-xl sm:text-2xl font-bold text-text-main">{t.card1Title}</div>
                </div>
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-brand-blue relative z-10 ml-4 drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                5+
              </div>
            </motion.a>

            {/* Card 2: Transparency / Sync */}
            <motion.a 
              href="#contact"
              whileHover={disableHoverEffects ? undefined : { y: -2 }}
              className="col-span-1 bg-surface-bg border border-line rounded-[32px] p-6 lg:p-8 flex flex-col justify-between min-h-[240px] cursor-pointer block hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] hover:border-brand-blue/40 transition-all group relative overflow-hidden"
            >
              <LottieRadar />
              <div className="relative z-10">
                <div className="text-brand-blue text-xs font-bold uppercase tracking-wider mb-2">{t.card2Label}</div>
                <div className="text-xl lg:text-2xl font-bold text-text-main leading-tight max-w-[140px]">{t.card2Title}</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-line flex items-center justify-center relative z-10 mt-6 group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors">
                 <Activity className="w-5 h-5 text-text-muted group-hover:text-white transition-colors" />
              </div>
            </motion.a>

            {/* Card 3: SLA */}
            <motion.a 
              href="#contact"
              whileHover={disableHoverEffects ? undefined : { y: -2 }}
              className="col-span-1 bg-gradient-to-br from-brand-purple/10 to-transparent border border-brand-purple/30 rounded-[32px] p-6 lg:p-8 flex flex-col justify-between min-h-[240px] cursor-pointer block hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] hover:border-brand-purple/50 transition-all group relative overflow-hidden"
            >
              <LottieShield />
              <div className="relative z-10 flex justify-end mb-4">
                 <div className="text-5xl lg:text-6xl font-display font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                   100%
                 </div>
              </div>
              <div className="relative z-10 mt-auto">
                <div className="text-brand-purple text-xs font-bold uppercase tracking-wider mb-2">{t.card3Label}</div>
                <div className="text-xl lg:text-2xl font-bold text-text-main leading-tight">{t.card3Title}</div>
              </div>
            </motion.a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
