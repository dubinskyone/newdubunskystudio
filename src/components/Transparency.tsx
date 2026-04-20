import { motion } from 'motion/react';
import { Activity, Code, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n';

const SECTION_COPY = {
  RU: {
    badge: 'Процесс',
    title1: 'Работа должна быть',
    title2: 'видимой и спокойной',
    desc: 'Когда клиент понимает, что происходит сейчас, что будет дальше и где нужна его реакция, проект движется быстрее и без лишнего напряжения.',
    principles: [
      {
        title: 'Общий канал связи',
        description: 'Оперативные вопросы, решения и апдейты не теряются между разными чатами и ролями.',
      },
      {
        title: 'Открытые приоритеты',
        description: 'Клиент видит, какой сценарий в фокусе, что уже сделано и почему именно это идёт следующим.',
      },
      {
        title: 'Регулярные демо',
        description: 'Прогресс показывается на живом продукте, а не только в сообщениях и красивых обещаниях.',
      },
    ],
    panelTitle: 'Что обычно видно клиенту',
    items: [
      'Текущий фокус спринта',
      'Статус дизайна и разработки',
      'Открытые вопросы, требующие решения',
      'Следующий milestone и ближайшее демо',
    ],
    footerLabel: 'Это снижает хаос и помогает принимать решения вовремя.',
  },
  EN: {
    badge: 'Process',
    title1: 'Work should feel',
    title2: 'visible and calm',
    desc: 'When the client understands what is happening now, what comes next, and where their decision is needed, the project moves faster and with less friction.',
    principles: [
      {
        title: 'One shared channel',
        description: 'Questions, decisions, and updates do not get lost between scattered chats and disconnected roles.',
      },
      {
        title: 'Visible priorities',
        description: 'The client sees which scenario is in focus, what is already done, and why that work matters now.',
      },
      {
        title: 'Regular demos',
        description: 'Progress is shown on a living product, not just described in messages or promises.',
      },
    ],
    panelTitle: 'What the client usually sees',
    items: [
      'Current sprint focus',
      'Design and development status',
      'Open questions that need decisions',
      'Next milestone and upcoming demo',
    ],
    footerLabel: 'This reduces chaos and helps decisions happen on time.',
  },
  UA: {
    badge: 'Процес',
    title1: 'Робота має бути',
    title2: 'видимою і спокійною',
    desc: 'Коли клієнт розуміє, що відбувається зараз, що буде далі й де потрібне його рішення, проєкт рухається швидше та без зайвої напруги.',
    principles: [
      {
        title: 'Спільний канал зв’язку',
        description: 'Оперативні питання, рішення й апдейти не губляться між різними чатами та ролями.',
      },
      {
        title: 'Видимі пріоритети',
        description: 'Клієнт бачить, який сценарій у фокусі, що вже зроблено і чому саме це йде наступним.',
      },
      {
        title: 'Регулярні демо',
        description: 'Прогрес показується на живому продукті, а не лише в повідомленнях чи обіцянках.',
      },
    ],
    panelTitle: 'Що зазвичай бачить клієнт',
    items: [
      'Поточний фокус спринту',
      'Статус дизайну та розробки',
      'Відкриті питання, що потребують рішення',
      'Наступний milestone і найближче демо',
    ],
    footerLabel: 'Це знижує хаос і допомагає вчасно приймати рішення.',
  },
} as const;

const ITEM_ICONS = [Activity, Code, ShieldCheck] as const;

export function Transparency() {
  const { lang } = useLanguage();
  const copy = SECTION_COPY[lang] ?? SECTION_COPY.EN;

  return (
    <section
      className="scroll-mt-28 relative overflow-hidden px-4 py-16 md:scroll-mt-32 md:py-24"
      id="integration"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-brand-purple/5 blur-[150px]" />

      <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 w-fit rounded-full border border-line bg-surface-glass px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-text-muted"
          >
            {copy.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold leading-[1.04] tracking-tight text-text-main md:text-5xl lg:text-6xl"
          >
            {copy.title1} <span className="brand-gradient-text">{copy.title2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl"
          >
            {copy.desc}
          </motion.p>

          <div className="mt-10 space-y-4">
            {copy.principles.map((item, index) => {
              const Icon = ITEM_ICONS[index];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + index * 0.08 }}
                  className="rounded-[28px] border border-line bg-surface-card p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-brand-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">{item.title}</div>
                      <p className="mt-2 text-sm leading-6 text-text-muted">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[38px] border border-line bg-surface-card p-6 md:p-8"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

          <div className="relative z-10">
            <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.24em] text-text-muted">
              {copy.panelTitle}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {copy.items.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-bold text-white/78">
                    0{index + 1}
                  </div>
                  <div className="text-base font-semibold leading-7 text-white/86">{item}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[26px] border border-brand-blue/20 bg-brand-blue/8 px-5 py-4 text-sm font-medium leading-6 text-white/78">
              {copy.footerLabel}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
