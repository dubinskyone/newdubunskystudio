import { motion } from 'motion/react';
import { ArrowRight, FileText, Mail, Send } from 'lucide-react';
import { useLanguage } from '../i18n';

const SECTION_COPY = {
  RU: {
    badge: 'Полезный материал',
    title: 'Чеклист перед запуском продукта',
    desc: 'Если нужен быстрый независимый взгляд на продукт перед стартом или переработкой, отправим список того, что обычно проверяем в интерфейсе, сценариях и delivery.',
    items: ['Первый пользовательский сценарий', 'Конверсионные узкие места', 'Release-ready состояние продукта'],
    telegram: 'Запросить в Telegram',
    email: 'Запросить по почте',
    requestFormat: 'Формат запроса',
  },
  EN: {
    badge: 'Useful asset',
    title: 'Pre-launch product checklist',
    desc: 'If you need a fast outside look before launch or redesign, we can send the checklist we usually use to review interface clarity, user flows, and delivery readiness.',
    items: ['First user scenario', 'Conversion bottlenecks', 'Release-ready product state'],
    telegram: 'Request on Telegram',
    email: 'Request by email',
    requestFormat: 'Request format',
  },
  UA: {
    badge: 'Корисний матеріал',
    title: 'Чеклист перед запуском продукту',
    desc: 'Якщо потрібен швидкий зовнішній погляд перед стартом або переробкою, надішлемо список того, що зазвичай перевіряємо в інтерфейсі, сценаріях і delivery.',
    items: ['Перший користувацький сценарій', 'Конверсійні вузькі місця', 'Release-ready стан продукту'],
    telegram: 'Запросити в Telegram',
    email: 'Запросити поштою',
    requestFormat: 'Формат запиту',
  },
} as const;

export function LeadMagnet() {
  const { lang } = useLanguage();
  const copy = SECTION_COPY[lang] ?? SECTION_COPY.EN;

  return (
    <section
      className="scroll-mt-28 relative overflow-hidden px-4 py-16 md:scroll-mt-32 md:py-24"
      id="lead-magnet"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="relative overflow-hidden rounded-[40px] border border-line bg-gradient-to-br from-[#18181b] to-surface-bg p-8 text-left md:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[360px] w-[360px] rounded-full bg-brand-blue/10 blur-[100px]" />

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:items-center">
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-purple/20 bg-brand-purple/10">
                  <FileText className="h-5 w-5 text-brand-purple" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  {copy.badge}
                </span>
              </div>

              <h2 className="text-3xl font-display font-bold leading-tight text-white md:text-5xl">
                {copy.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
                {copy.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {copy.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/78"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 rounded-[28px] border border-white/10 bg-surface-glass p-6 shadow-2xl backdrop-blur-md">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-text-muted">
                {copy.requestFormat}
              </div>

              <div className="space-y-4">
                <a
                  href="https://t.me/dubinskystudio"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-[#2AABEE] px-5 py-4 font-bold text-white transition-all hover:bg-[#229ED9] no-underline"
                >
                  <div className="flex items-center gap-3">
                    <Send className="h-5 w-5" />
                    <span>{copy.telegram}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 opacity-60" />
                </a>

                <a
                  href="mailto:hello@dubinsky.studio?subject=Checklist%20request"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4 font-bold text-white transition-all hover:border-white/20 hover:bg-white/[0.04] no-underline"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-brand-blue" />
                    <span>{copy.email}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
