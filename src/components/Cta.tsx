import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Mail, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n';

const CTA_COPY = {
  RU: {
    badge: 'Старт диалога',
    title1: 'Обсудим продукт',
    title2: 'без лишнего шума',
    desc: 'Лучший первый шаг — коротко созвониться или списаться, чтобы быстро понять задачу, контекст и ограничения, а затем определить реалистичный формат старта.',
    points: [
      'Подскажем, подходит ли задача под ваш текущий этап.',
      'Обсудим scope, риски и реалистичный формат старта.',
      'При необходимости подключим NDA и более детальный разбор.',
    ],
    direct: 'Прямой контакт',
    directSub: 'Telegram и email без промежуточных форм',
    telegram: 'Написать в Telegram',
    email: 'Написать на email',
    note: 'NDA и более подробный созвон — по запросу.',
  },
  EN: {
    badge: 'Start the conversation',
    title1: 'Let’s discuss the product',
    title2: 'without extra noise',
    desc: 'The best first step is a short call or message exchange to understand the task, context, and constraints, then define a realistic way to start.',
    points: [
      'We quickly assess whether the request fits your current stage.',
      'We discuss scope, risks, and a realistic way to start.',
      'If needed, we move to NDA and a deeper product review.',
    ],
    direct: 'Direct contact',
    directSub: 'Telegram and email without middle layers',
    telegram: 'Message on Telegram',
    email: 'Write by email',
    note: 'NDA and a more detailed product call are available on request.',
  },
  UA: {
    badge: 'Старт діалогу',
    title1: 'Обговоримо продукт',
    title2: 'без зайвого шуму',
    desc: 'Найкращий перший крок — коротко зателефонувати або списатися, щоб швидко зрозуміти задачу, контекст і обмеження, а потім визначити реалістичний формат старту.',
    points: [
      'Підкажемо, чи підходить задача під ваш поточний етап.',
      'Обговоримо scope, ризики та реалістичний формат старту.',
      'За потреби підключимо NDA і глибший розбір продукту.',
    ],
    direct: 'Прямий контакт',
    directSub: 'Telegram та email без проміжних форм',
    telegram: 'Написати в Telegram',
    email: 'Написати на email',
    note: 'NDA і детальніший дзвінок — за запитом.',
  },
} as const;

export function Cta() {
  const { lang } = useLanguage();
  const copy = CTA_COPY[lang] ?? CTA_COPY.EN;

  return (
    <section
      className="relative mx-auto max-w-[92rem] scroll-mt-28 overflow-hidden px-4 py-16 md:scroll-mt-32 md:py-32"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative flex flex-col gap-12 overflow-hidden rounded-[40px] border border-line bg-surface-card px-6 py-12 shadow-[0_0_100px_rgba(37,99,235,0.05)] md:p-16 lg:flex-row lg:items-start lg:gap-16 lg:p-20"
      >
        <div className="pointer-events-none absolute left-[-10%] top-[-18%] -z-10 h-[420px] w-[420px] rounded-full bg-brand-blue/18 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-18%] right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-brand-purple/14 blur-[140px]" />

        <div className="relative z-10 w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2"
          >
            <Sparkles className="h-4 w-4 text-brand-purple" />
            <span className="text-sm font-bold uppercase tracking-widest text-[#E0E0E0]">
              {copy.badge}
            </span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-display font-black leading-[1.05] tracking-tight text-text-main sm:text-5xl lg:text-7xl">
            {copy.title1} <br />
            <span className="brand-gradient-text">{copy.title2}</span>
          </h2>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">
            {copy.desc}
          </p>

          <div className="space-y-3 text-sm font-medium text-text-muted md:text-base">
            {copy.points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#18181b] p-6 shadow-2xl sm:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-brand-blue/10 blur-[60px]" />

            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-blue/30 bg-brand-blue/12">
                <img
                  src="/branding/logo-mark-white.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-auto opacity-95"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-white">{copy.direct}</div>
                <div className="text-sm font-medium text-brand-blue">{copy.directSub}</div>
              </div>
            </div>

            <div className="space-y-4">
              <motion.a
                href="https://t.me/dubinskystudio"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-between rounded-2xl bg-[#2AABEE] px-6 py-4 font-bold text-white shadow-[0_0_30px_rgba(42,171,238,0.2)] transition-all hover:bg-[#229ED9] no-underline md:text-lg"
              >
                <div className="flex items-center gap-3">
                  <Send className="h-5 w-5" />
                  <span>{copy.telegram}</span>
                </div>
                <ArrowRight className="h-5 w-5 opacity-60" />
              </motion.a>

              <motion.a
                href="mailto:hello@dubinsky.studio?subject=New%20project%20request"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 font-bold text-white transition-all hover:border-white/20 hover:bg-white/[0.06] no-underline md:text-lg"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-blue" />
                  <span>{copy.email}</span>
                </div>
                <ArrowRight className="h-5 w-5 opacity-60" />
              </motion.a>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-[24px] border border-white/8 bg-black/20 px-5 py-4 text-sm leading-6 text-text-muted">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
              <span>{copy.note}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
