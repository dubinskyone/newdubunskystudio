import { motion } from 'motion/react';
import { Activity, Layers, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n';

const SECTION_COPY = {
  RU: {
    badge: 'Как строится работа',
    title1: 'Бизнесу важны',
    title2: 'понятные сигналы качества',
    desc: 'Здесь собраны сигналы качества, которые действительно помогают принять решение о сотрудничестве: кто на связи, как виден прогресс и как держится фокус на результате.',
    portfolioLabel: 'Проекты в портфолио',
    projects: ['Transmatika', 'Swipy', 'KeyTrust', 'NovaBot', 'CoinGem', 'Fungypack'],
    cards: [
      {
        title: 'Прямой диалог',
        description:
          'Важные продуктовые и технические вопросы обсуждаются напрямую, без лишней прослойки между клиентом и командой.',
        detail: 'Стратегия, UX и delivery не расходятся по разным людям.',
      },
      {
        title: 'Видимый прогресс',
        description:
          'Дизайн, разработка, приоритеты и следующие шаги читаются как единая картина, а не как набор отдельных апдейтов.',
        detail: 'Клиент видит движение по продукту, а не слушает обещания.',
      },
      {
        title: 'Фокус на результате',
        description:
          'Решения проходят через призму сценариев, скорости запуска, удобства интерфейса и будущего роста продукта.',
        detail: 'Красота не отрывается от пользы для бизнеса.',
      },
    ],
  },
  EN: {
    badge: 'How collaboration works',
    title1: 'Business owners need',
    title2: 'clear quality signals',
    desc: 'This section focuses on the quality signals that actually matter before a partnership starts: who is involved, how progress stays visible, and how product decisions stay outcome-driven.',
    portfolioLabel: 'Projects in the portfolio',
    projects: ['Transmatika', 'Swipy', 'KeyTrust', 'NovaBot', 'CoinGem', 'Fungypack'],
    cards: [
      {
        title: 'Direct communication',
        description:
          'Important product and technical topics are discussed directly, without unnecessary layers between the client and the team.',
        detail: 'Strategy, UX, and delivery stay aligned in one loop.',
      },
      {
        title: 'Visible progress',
        description:
          'Design, development, priorities, and next steps remain readable as one system instead of fragmented updates.',
        detail: 'The client sees movement in the product, not just hears promises.',
      },
      {
        title: 'Outcome focus',
        description:
          'Decisions are filtered through user journeys, launch speed, interface clarity, and future product scale.',
        detail: 'Visual quality never gets separated from business usefulness.',
      },
    ],
  },
  UA: {
    badge: 'Як будується робота',
    title1: 'Бізнесу потрібні',
    title2: 'зрозумілі сигнали якості',
    desc: 'Тут зібрані сигнали якості, які справді допомагають прийняти рішення про співпрацю: хто на зв’язку, як видно прогрес і як утримується фокус на результаті.',
    portfolioLabel: 'Проєкти в портфоліо',
    projects: ['Transmatika', 'Swipy', 'KeyTrust', 'NovaBot', 'CoinGem', 'Fungypack'],
    cards: [
      {
        title: 'Прямий діалог',
        description:
          'Важливі продуктові та технічні питання обговорюються напряму, без зайвого прошарку між клієнтом і командою.',
        detail: 'Стратегія, UX і delivery не розходяться між різними людьми.',
      },
      {
        title: 'Видимий прогрес',
        description:
          'Дизайн, розробка, пріоритети й наступні кроки читаються як цілісна система, а не як розрізнені апдейти.',
        detail: 'Клієнт бачить рух продукту, а не просто чує обіцянки.',
      },
      {
        title: 'Фокус на результаті',
        description:
          'Рішення проходять через призму сценаріїв, швидкості запуску, ясності інтерфейсу та майбутнього росту продукту.',
        detail: 'Візуальна якість не відривається від користі для бізнесу.',
      },
    ],
  },
} as const;

const CARD_ICONS = [Activity, Layers, ShieldCheck] as const;

export function SocialProof() {
  const { lang } = useLanguage();
  const copy = SECTION_COPY[lang] ?? SECTION_COPY.EN;

  return (
    <section
      className="scroll-mt-28 overflow-hidden px-4 py-16 md:scroll-mt-32 md:py-24"
      id="social-proof"
    >
      <div className="pointer-events-none absolute left-[-12%] top-0 -z-10 h-[480px] w-[480px] rounded-full bg-brand-blue/5 blur-[120px]" />

      <div className="mx-auto max-w-[92rem]">
        <div className="mb-12 max-w-4xl">
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
            className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted md:text-xl"
          >
            {copy.desc}
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {copy.cards.map((card, index) => {
            const Icon = CARD_ICONS[index];

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group rounded-[32px] border border-line bg-surface-card p-8 transition-colors hover:border-white/16"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-brand-blue transition-colors group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-8 text-2xl font-display font-bold text-white">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-text-muted">{card.description}</p>
                <div className="mt-6 rounded-[22px] border border-white/8 bg-white/[0.03] px-5 py-4 text-sm leading-6 text-white/76">
                  {card.detail}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-8 rounded-[32px] border border-line bg-surface-card px-6 py-6"
        >
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-text-muted">
            {copy.portfolioLabel}
          </div>
          <div className="flex flex-wrap gap-3">
            {copy.projects.map((project) => (
              <span
                key={project}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/78"
              >
                {project}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
