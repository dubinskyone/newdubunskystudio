import { motion } from 'motion/react';
import { Network, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../i18n';
import { TiltCard } from './ui/TiltCard';

const dict = {
  RU: {
    badge: "Инженерный фундамент",
    titlePart1: "Как мы строим",
    titleHighlight: "продукты без лишнего техдолга",
    desc: "Берём на себя не только интерфейс, но и архитектуру, надёжность, безопасность и release-ритм. Поэтому продукт не разваливается после первого запуска и спокойно растёт дальше.",
    cards: [
      {
        title: "Архитектура под реальный рост",
        tag: "Architecture",
        desc: "Не переусложняем старт, но сразу закладываем запас под новые роли, модули, интеграции и увеличение нагрузки.",
        icon: Network,
      },
      {
        title: "Надёжность и контроль рисков",
        tag: "Reliability",
        desc: "Продумываем доступы, состояния данных, ошибки и критические сценарии так, чтобы система вела себя спокойно и предсказуемо.",
        icon: Shield,
      },
      {
        title: "Релизы без хаоса",
        tag: "Delivery",
        desc: "Автоматизируем сборку, тесты и выкладку там, где это действительно снижает риск поломок и ускоряет команду.",
        icon: Zap,
      }
    ]
  },
  EN: {
    badge: "Engineering foundation",
    titlePart1: "How we build",
    titleHighlight: "products without unnecessary tech debt",
    desc: "We take responsibility not only for the interface, but also for architecture, reliability, security, and release rhythm. That is why the product stays stable after launch and scales with less friction.",
    cards: [
      {
        title: "Architecture for real growth",
        tag: "Architecture",
        desc: "We do not overengineer the start, but we do leave room for new roles, modules, integrations, and future load.",
        icon: Network,
      },
      {
        title: "Reliability and risk control",
        tag: "Reliability",
        desc: "We think through access, data states, failures, and critical flows so the system behaves calmly and predictably.",
        icon: Shield,
      },
      {
        title: "Releases without chaos",
        tag: "Delivery",
        desc: "We automate build, testing, and deployment where it actually reduces breakage risk and helps the team move faster.",
        icon: Zap,
      }
    ]
  },
  UA: {
    badge: "Інженерний фундамент",
    titlePart1: "Як ми будуємо",
    titleHighlight: "продукти без зайвого техборгу",
    desc: "Беремо на себе не лише інтерфейс, а й архітектуру, надійність, безпеку та release-ритм. Тому продукт не розсипається після запуску і спокійно масштабується далі.",
    cards: [
      {
        title: "Архітектура під реальний ріст",
        tag: "Architecture",
        desc: "Не переускладнюємо старт, але одразу закладаємо запас під нові ролі, модулі, інтеграції та майбутнє навантаження.",
        icon: Network,
      },
      {
        title: "Надійність і контроль ризиків",
        tag: "Reliability",
        desc: "Продумуємо доступи, стани даних, помилки та критичні сценарії так, щоб система поводилася спокійно й передбачувано.",
        icon: Shield,
      },
      {
        title: "Релізи без хаосу",
        tag: "Delivery",
        desc: "Автоматизуємо збірку, тести й викладку там, де це справді знижує ризик поломок і пришвидшує команду.",
        icon: Zap,
      }
    ]
  }
};

export function Projects() {
  const { lang } = useLanguage();
  const t = dict[lang] || dict.EN;

  return (
    <section className="relative scroll-mt-28 bg-transparent px-4 py-18 md:scroll-mt-32 md:py-22 lg:py-24" id="approach">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-line to-transparent" />
      <div className="mx-auto max-w-[92rem]">
        
        <div className="mx-auto mb-16 max-w-[56rem] text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-line bg-surface-glass text-xs font-bold uppercase tracking-widest text-text-muted mb-6 w-fit mx-auto"
          >
            {t.badge}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-display font-bold leading-tight tracking-tight text-text-main md:text-5xl lg:text-6xl xl:text-[4.4rem]"
          >
            {t.titlePart1} <span className="brand-gradient-text font-semibold tracking-[-0.02em]">{t.titleHighlight}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted md:text-xl"
          >
            {t.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {t.cards.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <TiltCard
                className="group bg-surface-glass border border-line rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-[40px] rounded-full group-hover:bg-brand-blue/20 transition-colors" />
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-surface-card border border-line flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-brand-blue/30 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0)] group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                    <project.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-text-main leading-tight group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-text-muted relative z-10 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-card border border-line text-xs font-bold text-text-muted relative z-10 group-hover:border-brand-blue/30 group-hover:text-white transition-colors">
                  {project.tag}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
