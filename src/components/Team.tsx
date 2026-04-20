import { motion } from 'motion/react';
import { Fingerprint, Layers, Terminal } from 'lucide-react';
import { useLanguage } from '../i18n';

const TEAM_COPY = {
  RU: {
    badge: 'Команда',
    title1: 'Над проектом работает',
    title2: 'не случайный набор людей',
    desc: 'Мы не продаём картинку из фотостока. Под каждый продукт собирается компактное senior-ядро: люди, которые понимают продукт, UX, код и выпуск как одну систему.',
    highlights: [
      {
        title: 'Senior core',
        description: 'Ключевые решения не отдаются на критический путь новичкам.',
      },
      {
        title: 'One delivery loop',
        description: 'Дизайн, разработка и product-логика идут в одной связке.',
      },
      {
        title: 'Shared context',
        description: 'Команда понимает не только задачу, но и бизнес-смысл каждого сценария.',
      },
    ],
    rolesTitle: 'Кто обычно подключается к продукту',
    roles: [
      {
        role: 'Product / delivery lead',
        description: 'Формирует рамку проекта, синхронизирует приоритеты и держит коммуникацию в фокусе.',
      },
      {
        role: 'UI/UX designer',
        description: 'Собирает иерархию, сценарии и интерфейс так, чтобы продукт читался быстро и уверенно.',
      },
      {
        role: 'Frontend engineering',
        description: 'Переводит интерфейс в живой продукт без потери качества, логики и скорости.',
      },
      {
        role: 'Backend / release layer',
        description: 'Доводит продукт до рабочего состояния, интеграций и понятного запуска.',
      },
    ],
  },
  EN: {
    badge: 'Team',
    title1: 'A project is handled by',
    title2: 'a focused senior core',
    desc: 'We do not sell stock-photo chemistry. Each product is shaped by a compact senior team: people who treat product logic, UX, code, and release as one system.',
    highlights: [
      {
        title: 'Senior core',
        description: 'Critical decisions are not pushed onto juniors or fragmented teams.',
      },
      {
        title: 'One delivery loop',
        description: 'Design, development, and product logic move together in one rhythm.',
      },
      {
        title: 'Shared context',
        description: 'The team understands not just tasks, but the business meaning of each scenario.',
      },
    ],
    rolesTitle: 'Who typically joins the product',
    roles: [
      {
        role: 'Product / delivery lead',
        description: 'Frames the project, aligns priorities, and keeps communication focused.',
      },
      {
        role: 'UI/UX designer',
        description: 'Builds hierarchy, flows, and interface clarity so the product reads fast and confidently.',
      },
      {
        role: 'Frontend engineering',
        description: 'Turns the interface into a living product without losing logic, quality, or speed.',
      },
      {
        role: 'Backend / release layer',
        description: 'Brings the product to a stable launch state with integrations and release readiness.',
      },
    ],
  },
  UA: {
    badge: 'Команда',
    title1: 'Над проєктом працює',
    title2: 'не випадковий набір людей',
    desc: 'Ми не продаємо картинку зі стоку. Під кожен продукт збирається компактне senior-ядро: люди, які сприймають продукт, UX, код і реліз як одну систему.',
    highlights: [
      {
        title: 'Senior core',
        description: 'Ключові рішення не віддаються на критичний шлях новачкам.',
      },
      {
        title: 'One delivery loop',
        description: 'Дизайн, розробка й product-логіка рухаються в одному ритмі.',
      },
      {
        title: 'Shared context',
        description: 'Команда розуміє не тільки задачі, а й бізнес-сенс кожного сценарію.',
      },
    ],
    rolesTitle: 'Хто зазвичай підключається до продукту',
    roles: [
      {
        role: 'Product / delivery lead',
        description: 'Формує рамку проєкту, синхронізує пріоритети й тримає комунікацію в фокусі.',
      },
      {
        role: 'UI/UX designer',
        description: 'Збирає ієрархію, сценарії та інтерфейс так, щоб продукт читався швидко й упевнено.',
      },
      {
        role: 'Frontend engineering',
        description: 'Перетворює інтерфейс на живий продукт без втрати логіки, якості та швидкості.',
      },
      {
        role: 'Backend / release layer',
        description: 'Доводить продукт до робочого стану, інтеграцій і зрозумілого запуску.',
      },
    ],
  },
} as const;

const HIGHLIGHT_ICONS = [Layers, Terminal, Fingerprint] as const;

export function Team() {
  const { lang } = useLanguage();
  const copy = TEAM_COPY[lang] ?? TEAM_COPY.EN;

  return (
    <section
      className="scroll-mt-28 relative overflow-hidden bg-[#09090b] px-4 py-16 md:scroll-mt-32 md:py-24"
      id="team"
    >
      <div className="pointer-events-none absolute right-[-8%] top-1/2 -z-10 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-brand-blue/5 blur-[130px]" />

      <div className="mx-auto max-w-[92rem]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#a1a1aa]"
            >
              {copy.badge}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-display font-bold leading-[1.04] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {copy.title1} <span className="brand-gradient-text">{copy.title2}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-[#a1a1aa] md:text-xl"
            >
              {copy.desc}
            </motion.p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {copy.highlights.map((item, index) => {
                const Icon = HIGHLIGHT_ICONS[index];

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-blue/20 bg-brand-blue/10 text-brand-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-5 text-lg font-semibold text-white">{item.title}</div>
                    <p className="mt-3 text-sm leading-6 text-[#a1a1aa]">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-line bg-surface-card p-6 md:p-8"
          >
            <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.24em] text-text-muted">
              {copy.rolesTitle}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {copy.roles.map((item, index) => (
                <div
                  key={item.role}
                  className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-bold text-white/72">
                    0{index + 1}
                  </div>
                  <div className="text-xl font-display font-bold text-white">{item.role}</div>
                  <p className="mt-3 text-sm leading-6 text-text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
