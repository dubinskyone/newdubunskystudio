import { motion } from "motion/react";
import {
  ArrowRight,
  Activity,
  ShieldCheck,
  CreditCard,
  LayoutDashboard,
  Search,
  Zap,
  PieChart,
  TrendingUp,
  Users,
} from "lucide-react";
import { useLanguage } from "../i18n";
import { usePerformanceMode } from "../hooks/usePerformanceMode";

const getMockProjects = (tLocal: any) => [
  {
    title: tLocal.projects.fintech.title,
    tag: tLocal.projects.fintech.tag,
    type: tLocal.projects.fintech.type,
    color: "from-blue-600 via-indigo-600 to-blue-800",
    glowColor: "bg-blue-500/50",
    content: (
      <div className="flex flex-col gap-3 w-full p-5 h-full relative z-10">
        <div className="flex justify-between items-center mb-2">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30">
            <CreditCard className="w-5 h-5 text-blue-100" />
          </div>
          <div className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30">
            {tLocal.projects.fintech.verified}
          </div>
        </div>
        <div className="mt-2 text-blue-100/70 text-[11px] font-bold uppercase tracking-widest">
          {tLocal.projects.fintech.balance}
        </div>
        <div className="text-white text-3xl font-bold font-mono tracking-tighter drop-shadow-md">
          $124,592.50
        </div>
        <div className="text-emerald-400 text-xs font-bold font-mono">
          +12.4% {tLocal.projects.fintech.month}
        </div>

        <div className="flex gap-3 mt-auto">
          <div className="flex-1 h-14 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 flex flex-col items-center justify-center gap-1 hover:bg-white/20 transition-colors shadow-inner">
            <Activity className="w-5 h-5 text-indigo-200" />
            <span className="text-[9px] text-white/70 uppercase">
              {tLocal.projects.fintech.transfer}
            </span>
          </div>
          <div className="flex-1 h-14 rounded-2xl bg-gradient-to-b from-blue-400/20 to-blue-500/5 border border-blue-400/30 flex flex-col items-center justify-center gap-1 hover:bg-blue-400/30 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <Zap className="w-5 h-5 text-blue-200" />
            <span className="text-[9px] text-white/70 uppercase">
              {tLocal.projects.fintech.pay}
            </span>
          </div>
        </div>
      </div>
    ),
    width: "w-[280px]",
    height: "h-[320px]",
  },
  {
    title: tLocal.projects.crm.title,
    tag: tLocal.projects.crm.tag,
    type: tLocal.projects.crm.type,
    color: "from-fuchsia-600 via-purple-600 to-indigo-800",
    glowColor: "bg-fuchsia-500/50",
    content: (
      <div className="flex flex-col gap-4 w-full p-5 h-full relative z-10">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center border border-pink-500/30">
              <LayoutDashboard className="w-4 h-4 text-pink-200" />
            </div>
            <div className="h-3 w-20 bg-white/20 rounded-full" />
          </div>
          <div className="w-6 h-6 rounded-full bg-indigo-500/40 border border-indigo-400/30 flex items-center justify-center">
            <Users className="w-3 h-3 text-indigo-100" />
          </div>
        </div>
        <div className="flex flex-1 gap-4">
          <div className="w-1/3 h-full rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3 p-3 shadow-inner">
            <div className="h-2 w-full bg-pink-400/40 rounded-full mb-1 shadow-[0_0_10px_rgba(244,114,182,0.4)]" />
            <div className="h-2 w-3/4 bg-purple-400/30 rounded-full" />
            <div className="h-2 w-1/2 bg-white/20 rounded-full mt-auto" />
          </div>
          <div className="w-2/3 h-full rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 flex flex-col gap-2 p-3 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-600/20 to-transparent pointer-events-none" />
            <div className="h-full flex items-end gap-1.5 z-10">
              {[40, 70, 45, 90, 65, 80].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm shadow-sm transition-all ${i === 3 ? "bg-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.6)]" : "bg-white/20"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between items-center text-white/50 text-[10px] mt-1 z-10 font-medium">
              <span>{tLocal.projects.crm.analytics}</span>
              <TrendingUp className="w-3 h-3 text-pink-300" />
            </div>
          </div>
        </div>
      </div>
    ),
    width: "w-[400px]",
    height: "h-[320px]",
  },
  {
    title: tLocal.projects.logistics.title,
    tag: tLocal.projects.logistics.tag,
    type: tLocal.projects.logistics.type,
    color: "from-teal-600 via-emerald-600 to-green-800",
    glowColor: "bg-teal-500/50",
    content: (
      <div className="flex flex-col gap-4 w-full p-5 h-full relative overflow-hidden z-10">
        <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full border-[20px] border-emerald-400/10 blur-xl" />
        <div className="absolute -right-2 -top-2 w-24 h-24 rounded-full border border-emerald-400/30 bg-emerald-400/5 backdrop-blur-md" />

        <div className="flex justify-between items-center relative z-10">
          <div className="p-2 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10">
            <Search className="w-5 h-5 text-teal-100" />
          </div>
          <div className="px-2.5 py-1 bg-white/90 text-teal-900 rounded-full text-[10px] font-bold uppercase shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            {tLocal.projects.logistics.online}
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 mt-6 shadow-[0_10px_30px_rgba(16,185,129,0.2)]">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
            <ShieldCheck className="w-6 h-6 text-white drop-shadow-md" />
          </div>
          <div>
            <div className="text-white text-base font-bold drop-shadow-sm">
              {tLocal.projects.logistics.secure}
            </div>
            <div className="text-teal-200 text-xs font-medium">
              Uptime 99.99%
            </div>
          </div>
        </div>

        <div className="flex-1 mt-auto flex items-end justify-between px-2 pb-2">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            <div className="w-2 h-2 rounded-full bg-emerald-400/30" />
            <div className="w-2 h-2 rounded-full bg-emerald-400/30" />
          </div>
          <PieChart className="w-5 h-5 text-teal-200/50" />
        </div>
      </div>
    ),
    width: "w-[300px]",
    height: "h-[320px]",
  },
  {
    title: tLocal.projects.social.title,
    tag: tLocal.projects.social.tag,
    type: tLocal.projects.social.type,
    color: "from-orange-500 via-rose-500 to-pink-700",
    glowColor: "bg-rose-500/50",
    content: (
      <div className="flex flex-col w-full h-full relative z-10">
        <div className="w-full h-[45%] bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=75&w=900&auto=format&fit=crop')] bg-cover bg-center rounded-t-2xl flex items-start justify-end p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-rose-900/80" />
          <div className="px-3 py-1.5 backdrop-blur-md bg-black/40 rounded-full flex items-center gap-2 border border-white/20 shadow-lg relative z-10">
            <div className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,1)] animate-pulse" />
            <span className="text-white text-[10px] font-bold uppercase tracking-wider">
              {tLocal.projects.social.live}
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-2 relative flex-1 bg-gradient-to-b from-transparent to-black/20">
          <div className="absolute -top-10 left-5 w-16 h-16 rounded-full bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=75&w=320&auto=format&fit=crop')] bg-cover bg-center border-[3px] border-rose-600 shadow-xl" />
          <div className="mt-6 flex justify-between items-center">
            <div>
              <div className="h-3 w-24 bg-white/90 rounded-full shadow-sm" />
              <div className="h-2 w-16 bg-white/40 rounded-full mt-2" />
            </div>
            <div className="px-3 py-1 bg-rose-500 text-white rounded-full text-[10px] font-bold shadow-[0_0_15px_rgba(244,63,94,0.4)]">
              {tLocal.projects.social.follow}
            </div>
          </div>
          <div className="flex gap-2 mt-auto">
            <div className="flex-1 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-inner hover:bg-white/20 transition-colors" />
            <div className="flex-1 h-10 rounded-xl bg-rose-500/20 border border-rose-400/30 flex items-center justify-center shadow-inner hover:bg-rose-500/30 transition-colors" />
          </div>
        </div>
      </div>
    ),
    width: "w-[280px]",
    height: "h-[320px]",
  },
];

export function ShowcaseMarquee() {
  const { lang, t } = useLanguage();
  const { disableHeavyEffects, disableHoverEffects } = usePerformanceMode();

  const content = {
    RU: {
      badge: "Галерея интерфейсов",
      titlePart1: "Интерфейсы,",
      titlePart2: "задающие тренды",
      button: "Обсудить дизайн",
      projects: {
        fintech: {
          title: "Финтех Приложение",
          tag: "Мобильный интерфейс",
          type: "Native iOS",
          verified: "Подтверждено",
          balance: "Баланс",
          month: "в этом месяце",
          transfer: "Перевод",
          pay: "Оплата",
        },
        crm: {
          title: "AI CRM Система",
          tag: "Веб Дашборд",
          type: "React Frontend",
          analytics: "Аналитика",
        },
        logistics: {
          title: "Платформа логистики",
          tag: "B2B Платформа",
          type: "Vue Client",
          online: "Онлайн",
          secure: "Защищенный Узел",
        },
        social: {
          title: "Социальная сеть",
          tag: "React Native",
          type: "Мобильное Приложение",
          live: "Прямой эфир",
          follow: "Подписаться",
        },
      },
    },
    EN: {
      badge: "Interface Gallery",
      titlePart1: "Interfaces that",
      titlePart2: "set the trends",
      button: "Discuss Design",
      projects: {
        fintech: {
          title: "FinTech App",
          tag: "Mobile UI",
          type: "Native iOS",
          verified: "Verified",
          balance: "Total Balance",
          month: "this month",
          transfer: "Transfer",
          pay: "Pay",
        },
        crm: {
          title: "AI CRM System",
          tag: "Web Dashboard",
          type: "React Frontend",
          analytics: "Analytics",
        },
        logistics: {
          title: "Logistics Platform",
          tag: "B2B Platform",
          type: "Vue Client",
          online: "Online",
          secure: "Secure Node",
        },
        social: {
          title: "Social Network",
          tag: "React Native",
          type: "Mobile App",
          live: "Live",
          follow: "Follow",
        },
      },
    },
    UA: {
      badge: "Галерея інтерфейсів",
      titlePart1: "Інтерфейси,",
      titlePart2: "що задають тренди",
      button: "Обговорити дизайн",
      projects: {
        fintech: {
          title: "Фінтех Додаток",
          tag: "Мобільний інтерфейс",
          type: "Native iOS",
          verified: "Перевірено",
          balance: "Загальний Баланс",
          month: "в цьому місяці",
          transfer: "Переказ",
          pay: "Оплата",
        },
        crm: {
          title: "AI CRM Система",
          tag: "Веб Дашборд",
          type: "React Frontend",
          analytics: "Аналітика",
        },
        logistics: {
          title: "Платформа логістики",
          tag: "B2B Платформа",
          type: "Vue Client",
          online: "Онлайн",
          secure: "Захищений Вузол",
        },
        social: {
          title: "Соціальна мережа",
          tag: "React Native",
          type: "Мобільний Додаток",
          live: "Наживо",
          follow: "Стежити",
        },
      },
    },
  };

  const tLocal = content[lang as keyof typeof content] || content.EN;
  const marqueeItems = getMockProjects(tLocal);
  const itemsArray = disableHeavyEffects
    ? marqueeItems
    : [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="perf-section py-16 md:py-24 w-full overflow-hidden bg-surface-bg relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-16 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-line bg-surface-glass text-xs font-bold uppercase tracking-widest text-text-muted mb-6 w-fit"
          >
            {tLocal.badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-text-main max-w-xl leading-[1.05] tracking-tight"
          >
            {tLocal.titlePart1}
            <br />
            <span className="text-text-muted">{tLocal.titlePart2}</span>
          </motion.h2>
        </div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={disableHoverEffects ? undefined : { scale: 1.05 }}
          whileTap={disableHoverEffects ? undefined : { scale: 0.95 }}
          className="px-8 py-4 bg-surface-glass border border-line text-text-main rounded-full font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-white/5 hover:text-white transition-colors group whitespace-nowrap hidden sm:flex shadow-soft w-fit no-underline"
        >
          {tLocal.button}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>

      <div className={`relative w-full flex group py-10 ${disableHeavyEffects ? 'overflow-x-auto perf-scroller' : 'overflow-hidden'}`}>
        {!disableHeavyEffects && <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-surface-bg to-transparent z-20 pointer-events-none" />}
        {!disableHeavyEffects && <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-surface-bg to-transparent z-20 pointer-events-none" />}

        <motion.div
          animate={disableHeavyEffects ? undefined : { x: ["0%", "-33.333333%"] }}
          transition={disableHeavyEffects ? undefined : { ease: "linear", duration: 35, repeat: Infinity }}
          className={`flex gap-6 md:gap-8 px-3 ${disableHeavyEffects ? 'min-w-max pb-2' : 'group-hover:[animation-play-state:paused]'}`}
        >
          {itemsArray.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={disableHoverEffects ? undefined : { y: -10 }}
              className={`flex-shrink-0 flex flex-col group cursor-pointer relative ${project.width}`}
            >
              <div
                className={`w-full ${project.height} rounded-[32px] p-2 bg-[#18181b] border border-white/5 shadow-2xl relative overflow-visible transition-all duration-500`}
              >
                {/* Glowing underlay that becomes highly visible on hover */}
                <div
                  className={`absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${project.color} blur-3xl -z-10`}
                />

                {/* Inner screen */}
                <div
                  className={`w-full h-full rounded-[24px] overflow-hidden bg-gradient-to-br ${project.color} border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] relative flex flex-col`}
                >
                  {/* Subtle glare overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent opacity-80 z-20 pointer-events-none mix-blend-overlay" />

                  {project.content}
                </div>
              </div>

              {/* Card Meta below */}
              <div className="mt-8 pl-2 flex flex-col gap-1.5 relative z-10 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1aa] px-2 py-0.5 rounded border border-white/10 bg-[#18181b] shadow-sm">
                    {project.type}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue drop-shadow-sm">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-[22px] font-display font-medium text-white group-hover:text-brand-blue transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-4 px-4 flex sm:hidden">
        <motion.a
          href="#contact"
          whileHover={disableHoverEffects ? undefined : { scale: 1.05 }}
          whileTap={disableHoverEffects ? undefined : { scale: 0.95 }}
          className="w-full py-4 bg-surface-glass border border-line text-text-main rounded-full font-bold text-[15px] flex items-center justify-center gap-2 active:bg-white/5 transition-colors group shadow-soft no-underline"
        >
          {tLocal.button}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}
