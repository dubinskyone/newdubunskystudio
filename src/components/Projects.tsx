import { motion } from 'motion/react';
import { Network, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../i18n';
import { useRevealMotion } from '../hooks/useRevealMotion';

const dict = {
  RU: {
    badge: "Наш подход",
    titlePart1: "Почему выбирают ",
    titleHighlight: "нашу инженерию",
    desc: "Мы не просто пишем код. Мы проектируем устойчивые цифровые организмы, которые способны эволюционировать вместе с вашим бизнесом.",
    cards: [
      {
        title: "Cloud-Native Архитектура",
        tag: "Инфраструктура",
        desc: "Строим отказоустойчивые системы на базе микросервисов. Независимое масштабирование каждого узла под пиковые нагрузки рынка без деградации скорости.",
        icon: Network,
      },
      {
        title: "Безопасность по умолчанию",
        tag: "SecOps",
        desc: "С самого первого коммита мы внедряем практики Zero-Trust. Регулярные аудиты, глубокое шифрование и защита пользовательских данных по банковским стандартам.",
        icon: Shield,
      },
      {
        title: "Непрерывная поставка",
        tag: "CI/CD & Agile",
        desc: "Автоматизированные конвейеры развертывания и тестирования. Мы обеспечиваем экстремально быстрый релиз без потерь в качестве и надежности кода.",
        icon: Zap,
      }
    ]
  },
  EN: {
    badge: "Our Approach",
    titlePart1: "Why choose ",
    titleHighlight: "our engineering",
    desc: "We don't just write code. We design resilient digital organisms capable of evolving alongside your business.",
    cards: [
      {
        title: "Cloud-Native Architecture",
        tag: "Infrastructure",
        desc: "We build fault-tolerant systems based on microservices. Independent scaling of each node for market peak loads without speed degradation.",
        icon: Network,
      },
      {
        title: "Security by Default",
        tag: "SecOps",
        desc: "From the very first commit, we implement Zero-Trust practices. Regular audits, deep encryption, and banking-standard user data protection.",
        icon: Shield,
      },
      {
        title: "Continuous Delivery",
        tag: "CI/CD & Agile",
        desc: "Automated deployment and testing pipelines. We ensure extremely fast time-to-market without compromising code quality and reliability.",
        icon: Zap,
      }
    ]
  },
  UA: {
    badge: "Наш підхід",
    titlePart1: "Чому обирають ",
    titleHighlight: "нашу інженерію",
    desc: "Ми не просто пишемо код. Ми проєктуємо стійкі цифрові організми, здатні еволюціонувати разом із вашим бізнесом.",
    cards: [
      {
        title: "Cloud-Native Архітектура",
        tag: "Інфраструктура",
        desc: "Будуємо відмовостійкі системи на базі мікросервісів. Незалежне масштабування кожного вузла під пікові навантаження ринку без деградації швидкості.",
        icon: Network,
      },
      {
        title: "Безпека за замовчуванням",
        tag: "SecOps",
        desc: "З самого першого коміту ми впроваджуємо практики Zero-Trust. Регулярні аудити, глибоке шифрування та захист даних користувачів за банківськими стандартами.",
        icon: Shield,
      },
      {
        title: "Безперервна поставка",
        tag: "CI/CD & Agile",
        desc: "Автоматизовані конвеєри розгортання та тестування. Ми забезпечуємо екстремально швидкий реліз без втрат якості та надійності коду.",
        icon: Zap,
      }
    ]
  }
};

export function Projects() {
  const { lang } = useLanguage();
  const { reveal } = useRevealMotion();
  const t = dict[lang] || dict.EN;

  return (
    <section className="perf-section py-24 bg-transparent pt-32 relative" id="approach">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-line to-transparent" />
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            {...reveal({
              initial: { opacity: 0, scale: 0.9 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
            })}
            className="px-4 py-1.5 rounded-full border border-line bg-surface-glass text-xs font-bold uppercase tracking-widest text-text-muted mb-6 w-fit mx-auto"
          >
            {t.badge}
          </motion.div>
          <motion.h2 
            {...reveal({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
            })}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-main mb-6 tracking-tight leading-tight"
          >
            {t.titlePart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">{t.titleHighlight}</span>
          </motion.h2>
          <motion.p 
            {...reveal({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 },
            })}
            className="text-lg md:text-xl text-text-muted"
          >
            {t.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.cards.map((project, index) => (
            <motion.div
              key={index}
              {...reveal({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.1 },
              })}
              className={`group bg-surface-glass border border-line rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 relative overflow-hidden ${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-[40px] rounded-full group-hover:bg-brand-blue/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-surface-card border border-line flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-brand-blue/30 transition-all duration-300">
                  <project.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-text-main leading-tight">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-text-muted relative z-10 mb-6 leading-relaxed">
                {project.desc}
              </p>
              
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-card border border-line text-xs font-bold text-text-muted relative z-10 group-hover:border-brand-blue/30 transition-colors">
                {project.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
