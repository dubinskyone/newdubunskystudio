import { motion } from 'motion/react';
import {
  ArrowRight,
  Blocks,
  Code2,
  Route,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../i18n';

type Step = {
  index: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
};

type Outcome = {
  title: string;
  desc: string;
};

type StepSceneKind = 'context' | 'flow' | 'system' | 'handoff';

type SectionCopy = {
  badge: string;
  titlePart1: string;
  titlePart2: string;
  desc: string;
  boardLabel: string;
  boardTitle: string;
  boardDesc: string;
  steps: Step[];
  outcomesLabel: string;
  outcomes: Outcome[];
  button: string;
};

const OUTCOME_ICONS: readonly LucideIcon[] = [Sparkles, ShieldCheck, Blocks];
const STEP_SCENES: readonly StepSceneKind[] = ['context', 'flow', 'system', 'handoff'];

const SECTION_COPY: Record<'RU' | 'EN' | 'UA', SectionCopy> = {
  RU: {
    badge: 'Интерфейсная архитектура',
    titlePart1: 'Как мы проектируем',
    titlePart2: 'сильные интерфейсы',
    desc:
      'Мы не рисуем экраны в отрыве от продукта. Сначала собираем логику, затем строим UX flow, после этого формируем UI-систему и доводим её до разработки. Поэтому интерфейс выглядит зрелым и на desktop, и на mobile.',
    boardLabel: 'Наш подход',
    boardTitle: 'От продуктовой логики до dev-ready интерфейса',
    boardDesc:
      'Один и тот же подход работает для лендингов, B2B-платформ, fintech и data-heavy продуктов: меньше хаоса, сильнее иерархия, чище решение.',
    steps: [
      {
        index: '01',
        title: 'Контекст продукта',
        desc: 'Разбираем роли, сценарии, бизнес-цели и то, что пользователь должен понять сразу.',
        Icon: Sparkles,
      },
      {
        index: '02',
        title: 'UX flow',
        desc: 'Сокращаем путь к действию, убираем лишнее и выстраиваем понятные приоритеты.',
        Icon: Route,
      },
      {
        index: '03',
        title: 'UI-система',
        desc: 'Собираем визуальную иерархию, компоненты, состояния и motion в целостный язык.',
        Icon: Blocks,
      },
      {
        index: '04',
        title: 'Разработка без потерь',
        desc: 'Передаём не просто макеты, а систему, которая одинаково хорошо работает на desktop и mobile.',
        Icon: Code2,
      },
    ],
    outcomesLabel: 'Что получает продукт',
    outcomes: [
      {
        title: 'Понимание с первого экрана',
        desc: 'Пользователь быстрее считывает суть продукта и не теряется в интерфейсе.',
      },
      {
        title: 'Доверие в сложных сценариях',
        desc: 'Финансы, статусы, таблицы, dashboards и действия выглядят надёжно, а не тревожно.',
      },
      {
        title: 'Система, которая растёт',
        desc: 'Интерфейс не рассыпается, когда продукт расширяется и появляются новые функции.',
      },
    ],
    button: 'Обсудить интерфейс',
  },
  EN: {
    badge: 'Interface architecture',
    titlePart1: 'How we design',
    titlePart2: 'strong interfaces',
    desc:
      'We do not draw screens in isolation. First comes product logic, then UX flow, then the UI system, and only then the handoff to development. That is why the interface feels mature on both desktop and mobile.',
    boardLabel: 'Our approach',
    boardTitle: 'From product logic to a dev-ready interface',
    boardDesc:
      'The same approach works for landing pages, B2B platforms, fintech, and data-heavy products: less chaos, stronger hierarchy, cleaner decisions.',
    steps: [
      {
        index: '01',
        title: 'Product context',
        desc: 'We define roles, scenarios, business goals, and what the user must understand first.',
        Icon: Sparkles,
      },
      {
        index: '02',
        title: 'UX flow',
        desc: 'We shorten the path to action, remove friction, and build clear priorities.',
        Icon: Route,
      },
      {
        index: '03',
        title: 'UI system',
        desc: 'We shape hierarchy, components, states, and motion into one coherent language.',
        Icon: Blocks,
      },
      {
        index: '04',
        title: 'Lossless handoff',
        desc: 'We deliver not just screens, but a system that works equally well on desktop and mobile.',
        Icon: Code2,
      },
    ],
    outcomesLabel: 'What the product gets',
    outcomes: [
      {
        title: 'Understanding from the first screen',
        desc: 'Users grasp the product faster and do not get lost in the interface.',
      },
      {
        title: 'Trust in complex scenarios',
        desc: 'Finances, statuses, tables, dashboards, and actions feel reliable instead of stressful.',
      },
      {
        title: 'A system that scales',
        desc: 'The interface keeps its structure as the product grows and new features appear.',
      },
    ],
    button: 'Discuss your interface',
  },
  UA: {
    badge: 'Інтерфейсна архітектура',
    titlePart1: 'Як ми проєктуємо',
    titlePart2: 'сильні інтерфейси',
    desc:
      'Ми не малюємо екрани у відриві від продукту. Спочатку збираємо логіку, далі будуємо UX flow, потім формуємо UI-систему і лише після цього доводимо її до розробки. Тому інтерфейс виглядає зрілим і на desktop, і на mobile.',
    boardLabel: 'Наш підхід',
    boardTitle: 'Від логіки продукту до dev-ready інтерфейсу',
    boardDesc:
      'Один і той самий підхід працює для лендингів, B2B-платформ, fintech і data-heavy продуктів: менше хаосу, сильніша ієрархія, чистіше рішення.',
    steps: [
      {
        index: '01',
        title: 'Контекст продукту',
        desc: 'Розбираємо ролі, сценарії, бізнес-цілі й те, що користувач має зрозуміти одразу.',
        Icon: Sparkles,
      },
      {
        index: '02',
        title: 'UX flow',
        desc: 'Скорочуємо шлях до дії, прибираємо зайве й вибудовуємо зрозумілі пріоритети.',
        Icon: Route,
      },
      {
        index: '03',
        title: 'UI-система',
        desc: 'Збираємо візуальну ієрархію, компоненти, стани й motion у цілісну мову.',
        Icon: Blocks,
      },
      {
        index: '04',
        title: 'Розробка без втрат',
        desc: 'Передаємо не просто макети, а систему, яка однаково добре працює на desktop і mobile.',
        Icon: Code2,
      },
    ],
    outcomesLabel: 'Що отримує продукт',
    outcomes: [
      {
        title: 'Розуміння з першого екрана',
        desc: 'Користувач швидше зчитує суть продукту й не губиться в інтерфейсі.',
      },
      {
        title: 'Довіра в складних сценаріях',
        desc: 'Фінанси, статуси, таблиці, dashboards і дії виглядають надійно, а не тривожно.',
      },
      {
        title: 'Система, що росте',
        desc: 'Інтерфейс не розсипається, коли продукт масштабується й отримує нові функції.',
      },
    ],
    button: 'Обговорити інтерфейс',
  },
};

function FlowConnector() {
  return (
    <div className="relative hidden h-12 w-14 items-center justify-center xl:flex">
      <div className="absolute left-1 right-1 top-1/2 h-px -translate-y-1/2 bg-white/10" />
      <motion.div
        className="absolute left-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-100 shadow-[0_0_12px_rgba(186,230,253,0.7)]"
        animate={{ x: [0, 18, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

function InterfaceBlueprint() {
  return (
    <div className="pointer-events-none absolute right-6 top-6 hidden xl:block">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full border border-white/8" />
        <motion.div
          className="absolute inset-0 rounded-full border border-cyan-200/22"
          animate={{ scale: [0.7, 1.12, 0.7], opacity: [0, 0.75, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100 shadow-[0_0_16px_rgba(186,230,253,0.7)]" />
        <div className="absolute left-1/2 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-white/70" />
        <div className="absolute bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white/45" />
        <div className="absolute left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/45" />
        <div className="absolute right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/70" />
      </div>
    </div>
  );
}

function StepScene({ kind }: { kind: StepSceneKind }) {
  if (kind === 'context') {
    return (
      <div className="mt-auto pt-6">
        <div className="relative mx-auto h-[164px] w-full max-w-[256px] overflow-hidden rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(111,201,255,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4">
          <div className="absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="relative mt-8 h-[104px]">
            <motion.div
              className="absolute left-1/2 top-0 h-9 w-9 -translate-x-1/2 rounded-full border border-white/10 bg-[#171b23]"
              animate={{ y: [0, 3, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-[11px] rounded-full bg-cyan-100/72" />
            </motion.div>
            <div className="absolute left-1/2 top-9 h-8 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-100/24 to-transparent" />
            <motion.div
              className="absolute left-1/2 top-11 h-[68px] w-[146px] -translate-x-1/2 rounded-[20px] border border-cyan-200/18 bg-[linear-gradient(180deg,rgba(23,33,53,0.96),rgba(11,15,23,0.94))] px-4 py-3"
              animate={{
                y: [0, -4, 0],
                boxShadow: [
                  '0 0 0 rgba(0,0,0,0)',
                  '0 12px 28px rgba(43,103,210,0.16)',
                  '0 0 0 rgba(0,0,0,0)',
                ],
              }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="h-2.5 w-14 rounded-full bg-cyan-100/70" />
              <div className="mt-3 h-2 w-full rounded-full bg-white/12" />
              <div className="mt-2 h-2 w-4/5 rounded-full bg-white/10" />
            </motion.div>

            {['left-6 top-[62px]', 'right-6 top-[62px]'].map((position, index) => (
              <motion.div
                key={position}
                className={`absolute ${position} rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/54`}
                animate={{
                  y: index === 0 ? [0, -6, 0] : [0, 6, 0],
                  opacity: [0.45, 0.9, 0.45],
                }}
                transition={{ duration: 3 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
              >
                Node
              </motion.div>
            ))}

            {[
              'left-[27%] top-[70px] w-10 rotate-6',
              'right-[27%] top-[70px] w-10 -rotate-6',
            ].map((position, index) => (
              <motion.div
                key={position}
                className={`absolute ${position} h-px bg-gradient-to-r from-transparent via-cyan-100/28 to-transparent`}
                animate={{ opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 2.4 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'flow') {
    return (
      <div className="mt-auto pt-6">
        <div className="relative mx-auto h-[164px] w-full max-w-[256px] overflow-hidden rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4">
          <div className="absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="relative mt-7 h-[106px]">
            <div className="absolute left-5 right-5 top-6 h-px bg-gradient-to-r from-white/4 via-white/12 to-white/4" />
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="absolute top-3 h-6 w-6 -translate-x-1/2 rounded-full border border-white/12 bg-[#171a22]"
                style={{ left: `${18 + index * 21}%` }}
                animate={{
                  borderColor: [
                    'rgba(255,255,255,0.12)',
                    'rgba(186,230,253,0.45)',
                    'rgba(255,255,255,0.12)',
                  ],
                  boxShadow: [
                    '0 0 0 rgba(0,0,0,0)',
                    '0 0 24px rgba(59,130,246,0.22)',
                    '0 0 0 rgba(0,0,0,0)',
                  ],
                }}
                transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.18, ease: 'easeInOut' }}
              >
                <div className="absolute inset-[6px] rounded-full bg-white/12" />
              </motion.div>
            ))}

            <motion.div
              className="absolute top-[17px] h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-cyan-100 shadow-[0_0_16px_rgba(186,230,253,0.75)]"
              animate={{ left: ['18%', '81%', '18%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="absolute inset-x-3 bottom-0 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="rounded-[16px] border border-white/8 bg-black/20 px-3 py-3"
                  animate={{ y: [0, -3, 0], opacity: [0.58, 0.92, 0.58] }}
                  transition={{ duration: 2.4 + index * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="h-2 w-8 rounded-full bg-white/22" />
                  <div className="mt-2 h-2 w-full rounded-full bg-white/10" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'system') {
    return (
      <div className="mt-auto pt-6">
        <div className="relative mx-auto h-[164px] w-full max-w-[256px] overflow-hidden rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4">
          <div className="absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className={`rounded-[18px] border border-white/8 p-3 ${
                  index === 1 || index === 2
                    ? 'bg-[linear-gradient(180deg,rgba(34,98,201,0.28),rgba(16,24,38,0.72))]'
                    : 'bg-black/16'
                }`}
                animate={{
                  scale: index === 1 || index === 2 ? [1, 1.03, 1] : [1, 1.01, 1],
                  borderColor: [
                    'rgba(255,255,255,0.08)',
                    index === 1 || index === 2
                      ? 'rgba(125,211,252,0.34)'
                      : 'rgba(255,255,255,0.14)',
                    'rgba(255,255,255,0.08)',
                  ],
                }}
                transition={{ duration: 2.8 + index * 0.12, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="h-2 w-8 rounded-full bg-white/26" />
                <div className="mt-2 h-2 w-full rounded-full bg-white/12" />
                <div className="mt-2 h-2 w-4/5 rounded-full bg-white/10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-auto pt-6">
      <div className="relative mx-auto h-[164px] w-full max-w-[256px] overflow-hidden rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4">
        <div className="absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative mt-8 h-[104px]">
          <div className="absolute left-2 top-2 w-[38%] rounded-[18px] border border-white/8 bg-black/20 p-3">
            <div className="h-2 w-10 rounded-full bg-white/22" />
            <div className="mt-2 h-2 w-full rounded-full bg-white/10" />
            <div className="mt-2 h-10 rounded-[12px] border border-white/6 bg-white/[0.04]" />
          </div>
          <div className="absolute right-2 top-2 w-[38%] rounded-[18px] border border-white/8 bg-black/20 p-3">
            <div className="h-2 w-8 rounded-full bg-cyan-100/54" />
            <div className="mt-2 space-y-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="h-2 rounded-full bg-white/10"
                  style={{ width: `${88 - index * 14}%` }}
                  animate={{ opacity: [0.28, 0.76, 0.28] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.14, ease: 'easeInOut' }}
                />
              ))}
            </div>
          </div>
          <div className="absolute left-1/2 top-[44px] h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-100/34 to-transparent" />
          <motion.div
            className="absolute left-1/2 top-[31px] h-8 w-8 -translate-x-1/2 rounded-full border border-cyan-100/18 bg-[#101722]"
            animate={{ x: [0, 36, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute inset-[9px] rounded-full bg-cyan-100/70" />
          </motion.div>
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {['UI', 'DEV', 'QA'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/40"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShowcaseMarquee() {
  const { lang } = useLanguage();
  const copy = SECTION_COPY[lang as keyof typeof SECTION_COPY] ?? SECTION_COPY.EN;

  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-surface-bg py-16 scroll-mt-28 md:py-24 md:scroll-mt-32"
    >
      <div className="pointer-events-none absolute right-[-100px] top-[10%] h-[420px] w-[420px] rounded-full bg-sky-400/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-[480px] w-[480px] rounded-full bg-blue-500/8 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="max-w-4xl">
          <div className="mb-6 w-fit rounded-full border border-line bg-surface-glass px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-text-muted">
            {copy.badge}
          </div>

          <h2 className="text-4xl font-display font-bold leading-[1.02] tracking-tight text-text-main md:text-5xl lg:text-6xl xl:text-[72px]">
            {copy.titlePart1}
            <br />
            <span className="brand-gradient-text">{copy.titlePart2}</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-muted md:text-lg">
            {copy.desc}
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#101117]/92 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6 lg:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(152,221,255,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(47,135,234,0.12),transparent_42%)]" />
            <InterfaceBlueprint />

            <div className="relative z-10">
              <div className="max-w-3xl">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  {copy.boardLabel}
                </div>
                <h3 className="mt-3 text-2xl font-display font-bold leading-tight text-white sm:text-[30px] xl:text-[34px]">
                  {copy.boardTitle}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/66 sm:text-[15px]">
                  {copy.boardDesc}
                </p>
              </div>

              <div className="mt-8 grid gap-3 xl:flex xl:items-stretch xl:gap-4">
                {copy.steps.map((step, index) => (
                  <div key={step.title} className="contents">
                    <article className="group min-w-0 rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_18px_34px_rgba(0,0,0,0.22)] xl:flex xl:flex-1 xl:flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.07] text-white">
                          <step.Icon className="h-5 w-5" />
                        </div>
                        <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100/74">
                          {step.index}
                        </span>
                      </div>

                      <div className="mt-6 text-[22px] font-display font-bold leading-tight text-white">
                        {step.title}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-white/66">
                        {step.desc}
                      </p>

                      <StepScene kind={STEP_SCENES[index] ?? 'context'} />
                    </article>

                    {index < copy.steps.length - 1 && <FlowConnector />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {copy.outcomes.map((item, index) => {
              const Icon = OUTCOME_ICONS[index] ?? ShieldCheck;

              return (
                <div
                  key={item.title}
                  className="rounded-[30px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] sm:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="mt-5 text-[22px] font-display font-bold leading-tight text-white">
                    {item.title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/64">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <a
            href="#contact"
            className="brand-button group inline-flex items-center justify-center gap-2 self-start rounded-full border border-brand-blue/35 px-6 py-3.5 text-sm font-bold text-white shadow-soft transition-transform no-underline hover:-translate-y-0.5"
          >
            {copy.button}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
