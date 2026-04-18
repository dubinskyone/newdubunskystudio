import type { ReactNode } from 'react';
import { motion } from 'motion/react';
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
} from 'lucide-react';
import { useLanguage } from '../i18n';

const SHOWCASE_COPY = {
  RU: {
    badge: 'Галерея интерфейсов',
    titlePart1: 'Интерфейсы,',
    titlePart2: 'задающие тренды',
    button: 'Обсудить дизайн',
    projects: {
      fintech: {
        title: 'Финтех Приложение',
        tag: 'Мобильный интерфейс',
        type: 'Native iOS',
        verified: 'Подтверждено',
        balance: 'Баланс',
        month: 'в этом месяце',
        transfer: 'Перевод',
        pay: 'Оплата',
      },
      crm: {
        title: 'AI CRM Система',
        tag: 'Веб Дашборд',
        type: 'React Frontend',
        analytics: 'Аналитика',
      },
      logistics: {
        title: 'Платформа логистики',
        tag: 'B2B Платформа',
        type: 'Vue Client',
        online: 'Онлайн',
        secure: 'Защищенный Узел',
      },
      social: {
        title: 'Социальная сеть',
        tag: 'React Native',
        type: 'Мобильное Приложение',
        live: 'Прямой эфир',
        follow: 'Подписаться',
      },
    },
  },
  EN: {
    badge: 'Interface Gallery',
    titlePart1: 'Interfaces that',
    titlePart2: 'set the trends',
    button: 'Discuss Design',
    projects: {
      fintech: {
        title: 'FinTech App',
        tag: 'Mobile UI',
        type: 'Native iOS',
        verified: 'Verified',
        balance: 'Total Balance',
        month: 'this month',
        transfer: 'Transfer',
        pay: 'Pay',
      },
      crm: {
        title: 'AI CRM System',
        tag: 'Web Dashboard',
        type: 'React Frontend',
        analytics: 'Analytics',
      },
      logistics: {
        title: 'Logistics Platform',
        tag: 'B2B Platform',
        type: 'Vue Client',
        online: 'Online',
        secure: 'Secure Node',
      },
      social: {
        title: 'Social Network',
        tag: 'React Native',
        type: 'Mobile App',
        live: 'Live',
        follow: 'Follow',
      },
    },
  },
  UA: {
    badge: 'Галерея інтерфейсів',
    titlePart1: 'Інтерфейси,',
    titlePart2: 'що задають тренди',
    button: 'Обговорити дизайн',
    projects: {
      fintech: {
        title: 'Фінтех Додаток',
        tag: 'Мобільний інтерфейс',
        type: 'Native iOS',
        verified: 'Перевірено',
        balance: 'Загальний Баланс',
        month: 'в цьому місяці',
        transfer: 'Переказ',
        pay: 'Оплата',
      },
      crm: {
        title: 'AI CRM Система',
        tag: 'Веб Дашборд',
        type: 'React Frontend',
        analytics: 'Аналітика',
      },
      logistics: {
        title: 'Платформа логістики',
        tag: 'B2B Платформа',
        type: 'Vue Client',
        online: 'Онлайн',
        secure: 'Захищений Вузол',
      },
      social: {
        title: 'Соціальна мережа',
        tag: 'React Native',
        type: 'Мобільний Додаток',
        live: 'Наживо',
        follow: 'Стежити',
      },
    },
  },
} as const;

type ShowcaseCopy = (typeof SHOWCASE_COPY)[keyof typeof SHOWCASE_COPY];

type ProjectCardData = {
  key: string;
  title: string;
  tag: string;
  type: string;
  desktopWidth: string;
  mobileWidth: string;
  gradientClass: string;
  content: ReactNode;
};

function getMockProjects(tLocal: ShowcaseCopy): ProjectCardData[] {
  return [
    {
      key: 'fintech',
      title: tLocal.projects.fintech.title,
      tag: tLocal.projects.fintech.tag,
      type: tLocal.projects.fintech.type,
      desktopWidth: 'w-[282px]',
      mobileWidth: 'w-[82vw] max-w-[312px]',
      gradientClass: 'from-[#0d2340] via-[#1f59af] to-[#70caff]',
      content: (
        <div className="relative z-10 flex h-full flex-col gap-3 p-5">
          <div className="mb-1 flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/12 text-sky-100">
              <CreditCard className="h-5 w-5" />
            </div>
            <div className="rounded-full border border-cyan-200/20 bg-cyan-300/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100">
              {tLocal.projects.fintech.verified}
            </div>
          </div>

          <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-100/68">
            {tLocal.projects.fintech.balance}
          </div>
          <div className="text-[32px] font-bold tracking-[-0.05em] text-white">$124,592.50</div>
          <div className="text-xs font-semibold text-cyan-100/88">
            +12.4% {tLocal.projects.fintech.month}
          </div>

          <div className="mt-auto grid grid-cols-2 gap-3">
            <div className="flex h-14 flex-col items-center justify-center gap-1 rounded-2xl border border-white/12 bg-white/10">
              <Activity className="h-5 w-5 text-sky-100" />
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/72">
                {tLocal.projects.fintech.transfer}
              </span>
            </div>
            <div className="flex h-14 flex-col items-center justify-center gap-1 rounded-2xl border border-cyan-200/18 bg-cyan-300/12">
              <Zap className="h-5 w-5 text-cyan-100" />
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/72">
                {tLocal.projects.fintech.pay}
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 'crm',
      title: tLocal.projects.crm.title,
      tag: tLocal.projects.crm.tag,
      type: tLocal.projects.crm.type,
      desktopWidth: 'w-[392px]',
      mobileWidth: 'w-[88vw] max-w-[356px]',
      gradientClass: 'from-[#0e223d] via-[#1b4b87] to-[#58adff]',
      content: (
        <div className="relative z-10 flex h-full flex-col gap-4 p-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/12 bg-white/10">
                <LayoutDashboard className="h-4 w-4 text-sky-100" />
              </div>
              <div className="h-3 w-20 rounded-full bg-white/18" />
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/12 bg-white/10">
              <Users className="h-3.5 w-3.5 text-cyan-100" />
            </div>
          </div>

          <div className="flex flex-1 gap-4">
            <div className="flex w-[34%] flex-col gap-3 rounded-[18px] border border-white/10 bg-black/12 p-3">
              <div className="h-2 w-full rounded-full bg-cyan-200/48" />
              <div className="h-2 w-3/4 rounded-full bg-white/22" />
              <div className="mt-auto h-2 w-1/2 rounded-full bg-white/16" />
            </div>

            <div className="relative flex w-[66%] flex-col rounded-[18px] border border-white/10 bg-black/10 p-3">
              <div className="flex h-full items-end gap-1.5">
                {[44, 68, 52, 86, 64, 78].map((height, index) => (
                  <div
                    key={height}
                    className={`flex-1 rounded-t-sm ${
                      index === 3 ? 'bg-cyan-200/90' : 'bg-white/24'
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-[10px] font-medium text-white/58">
                <span>{tLocal.projects.crm.analytics}</span>
                <TrendingUp className="h-3.5 w-3.5 text-cyan-100" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 'logistics',
      title: tLocal.projects.logistics.title,
      tag: tLocal.projects.logistics.tag,
      type: tLocal.projects.logistics.type,
      desktopWidth: 'w-[302px]',
      mobileWidth: 'w-[84vw] max-w-[320px]',
      gradientClass: 'from-[#0f2940] via-[#17658d] to-[#6ed3ff]',
      content: (
        <div className="relative z-10 flex h-full flex-col gap-4 overflow-hidden p-5">
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-cyan-200/18 bg-cyan-200/8" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="rounded-xl border border-white/10 bg-black/14 p-2">
              <Search className="h-5 w-5 text-sky-100" />
            </div>
            <div className="rounded-full border border-white/12 bg-white/86 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-900">
              {tLocal.projects.logistics.online}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 rounded-[22px] border border-cyan-200/18 bg-white/12 p-4 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/18">
              <ShieldCheck className="h-6 w-6 text-cyan-100" />
            </div>
            <div>
              <div className="text-base font-semibold text-white">
                {tLocal.projects.logistics.secure}
              </div>
              <div className="mt-1 text-xs text-cyan-100/82">Uptime 99.99%</div>
            </div>
          </div>

          <div className="mt-auto flex items-end justify-between px-1 pb-1">
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-cyan-100" />
              <div className="h-2 w-2 rounded-full bg-cyan-100/38" />
              <div className="h-2 w-2 rounded-full bg-cyan-100/24" />
            </div>
            <PieChart className="h-5 w-5 text-white/42" />
          </div>
        </div>
      ),
    },
    {
      key: 'social',
      title: tLocal.projects.social.title,
      tag: tLocal.projects.social.tag,
      type: tLocal.projects.social.type,
      desktopWidth: 'w-[282px]',
      mobileWidth: 'w-[82vw] max-w-[312px]',
      gradientClass: 'from-[#10243e] via-[#255fa9] to-[#83d4ff]',
      content: (
        <div className="relative z-10 flex h-full flex-col">
          <div className="relative flex h-[46%] items-start justify-between overflow-hidden rounded-t-[24px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_34%),linear-gradient(135deg,rgba(9,18,38,0.45),rgba(24,70,130,0.24),rgba(129,220,255,0.3))] p-4">
            <div className="rounded-full border border-white/12 bg-black/18 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              {tLocal.projects.social.live}
            </div>
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-white/92" />
              <div className="h-2 w-2 rounded-full bg-cyan-100/58" />
            </div>
          </div>

          <div className="relative flex flex-1 flex-col gap-3 bg-[linear-gradient(180deg,rgba(6,12,24,0),rgba(4,11,22,0.22))] p-5">
            <div className="absolute -top-7 left-5 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-cyan-100/45 bg-[linear-gradient(135deg,#102d51,#3f86e7,#8dd7ff)] text-sm font-bold tracking-[0.16em] text-white">
              DS
            </div>

            <div className="mt-7 flex items-start justify-between gap-3">
              <div>
                <div className="h-3 w-24 rounded-full bg-white/90" />
                <div className="mt-2 h-2 w-16 rounded-full bg-white/32" />
              </div>
              <div className="rounded-full border border-cyan-200/18 bg-cyan-200/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-100">
                {tLocal.projects.social.follow}
              </div>
            </div>

            <div className="mt-auto grid grid-cols-2 gap-2">
              <div className="h-10 rounded-xl border border-white/12 bg-white/10" />
              <div className="h-10 rounded-xl border border-cyan-200/18 bg-cyan-200/12" />
            </div>
          </div>
        </div>
      ),
    },
  ];
}

function ShowcaseCard({ project }: { project: ProjectCardData }) {
  return (
    <>
      <div className="showcase-card-shell relative overflow-hidden rounded-[32px] border border-white/8 bg-[#101218] p-2 shadow-[0_18px_48px_rgba(0,0,0,0.34)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,232,255,0.14),transparent_42%)]" />
        <div
          className={`relative flex h-[320px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br ${project.gradientClass}`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04)_24%,transparent_58%)]" />
          {project.content}
        </div>
      </div>

      <div className="relative z-10 mt-7 pl-2 text-left">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/10 bg-[#18181b] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a1a1aa]">
            {project.type}
          </span>
          <span className="rounded-full border border-sky-200/12 bg-sky-200/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-100/84">
            {project.tag}
          </span>
        </div>
        <h3 className="text-[22px] font-display font-medium text-white transition-colors duration-300 group-hover/project:text-sky-100">
          {project.title}
        </h3>
      </div>
    </>
  );
}

export function ShowcaseMarquee() {
  const { lang } = useLanguage();
  const tLocal = SHOWCASE_COPY[lang as keyof typeof SHOWCASE_COPY] ?? SHOWCASE_COPY.EN;
  const projects = getMockProjects(tLocal);
  const desktopTrackItems = [...projects, ...projects];

  return (
    <section
      id="showcase"
      className="relative w-full overflow-hidden bg-surface-bg py-16 scroll-mt-28 md:py-24 md:scroll-mt-32"
    >
      <div className="pointer-events-none absolute right-[-80px] top-0 h-[420px] w-[420px] rounded-full bg-sky-400/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] h-[500px] w-[500px] rounded-full bg-blue-500/8 blur-[140px]" />

      <div className="relative z-10 mx-auto mb-12 flex max-w-7xl flex-col justify-between gap-6 px-4 lg:mb-16 lg:flex-row lg:items-end lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="mb-6 w-fit rounded-full border border-line bg-surface-glass px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-text-muted"
          >
            {tLocal.badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-xl text-4xl font-display font-bold leading-[1.05] tracking-tight text-text-main md:text-5xl"
          >
            {tLocal.titlePart1}
            <br />
            <span className="brand-gradient-text">{tLocal.titlePart2}</span>
          </motion.h2>
        </div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="brand-button group hidden w-fit items-center justify-center gap-2 rounded-full border border-brand-blue/35 px-8 py-4 text-[15px] font-bold text-white shadow-soft transition-transform no-underline sm:flex"
        >
          {tLocal.button}
          <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
        </motion.a>
      </div>

      <div className="relative hidden overflow-hidden py-10 md:block">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-surface-bg to-transparent xl:w-64" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-surface-bg to-transparent xl:w-64" />

        <div className="group flex overflow-hidden">
          <div className="showcase-marquee-track flex w-max gap-8 px-4 will-change-transform">
            {desktopTrackItems.map((project, index) => (
              <article
                key={`${project.key}-${index}`}
                className={`group/project flex shrink-0 flex-col transition-transform duration-300 hover:-translate-y-2 ${project.desktopWidth}`}
              >
                <ShowcaseCard project={project} />
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="scrollbar-hide showcase-mobile-scroll relative -mx-4 overflow-x-auto px-4 pb-2 pt-4 md:hidden">
        <div className="flex w-max gap-4 pr-4">
          {projects.map((project) => (
            <article
              key={project.key}
              className={`group/project snap-start ${project.mobileWidth}`}
            >
              <ShowcaseCard project={project} />
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex px-4 sm:hidden">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="brand-button flex w-full items-center justify-center gap-2 rounded-full border border-brand-blue/35 py-4 text-[15px] font-bold text-white shadow-soft transition-transform no-underline"
        >
          {tLocal.button}
          <ArrowRight className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}
