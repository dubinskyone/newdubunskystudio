import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useLanguage } from "../i18n";

const testimonials = [
  {
    text: "Мы искали исполнителей, а нашли полноценных партнеров. Команда взяла на себя архитектуру приложения и выпустила MVP на 2 недели раньше дедлайна. Конверсия из триала в плату выросла на 24%.",
    author: "Александр Соколов",
    role: "CEO @ FinTech Core",
    image: "https://picsum.photos/seed/alex/100/100?blur=1",
  },
  {
    text: "Их процесс работы — это эталон. Абсолютная прозрачность, идеальный код и дизайн, который получил Awwwards в первую же неделю после релиза. Стоимость лида упала вдвое.",
    author: "Елена Краснова",
    role: "Founder @ Lumina",
    image: "https://picsum.photos/seed/elena/100/100?blur=1",
  },
  {
    text: "Не просто дизайн ради дизайна. Ребята глубоко погружаются в юнит-экономику проекта и предлагают интерфейсные решения, которые напрямую повышают LTV. Просто топ.",
    author: "Михаил Давыдов",
    role: "CTO @ NEXUS Systems",
    image: "https://picsum.photos/seed/mike/100/100?blur=1",
  },
];

const logos = [
  "NEXUS",
  "FinTech Core",
  "Lumina",
  "Aero",
  "BlockChain.io",
  "Vanguard",
  "Aura",
  "PayOrbit",
  "Global Link",
];

export function SocialProof() {
  const { t, lang } = useLanguage();

  const authorNames = {
    RU: ["Александр Соколов", "Елена Краснова", "Михаил Давыдов"],
    EN: ["Alex Sokolov", "Elena Krasnova", "Michael Davydov"],
    UA: ["Олександр Соколов", "Олена Краснова", "Михайло Давидов"]
  };
  const names = authorNames[lang] || authorNames.EN;

  const currentTestimonials = [
    {
      text: t("social", "text1"),
      author: names[0],
      role: "CEO @ FinTech Core",
      image: "https://picsum.photos/seed/alex/100/100?blur=1",
    },
    {
      text: t("social", "text2"),
      author: names[1],
      role: "Founder @ Lumina",
      image: "https://picsum.photos/seed/elena/100/100?blur=1",
    },
    {
      text: t("social", "text3"),
      author: names[2],
      role: "CTO @ NEXUS Systems",
      image: "https://picsum.photos/seed/mike/100/100?blur=1",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 px-4 bg-transparent relative overflow-hidden"
      id="social-proof"
    >
      {/* Background elements */}
      <div className="absolute left-[-10%] top-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Infinite Logo Marquee */}
      <div className="w-full overflow-hidden mb-24 relative flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-bg to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap items-center gap-16 md:gap-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Double array for seamless loop */}
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="text-2xl md:text-3xl font-display font-medium text-white/40 tracking-tight grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:text-white transition-all cursor-default"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-line bg-surface-glass text-xs font-bold uppercase tracking-widest text-text-muted mb-6 w-fit mx-auto"
          >
            {t("social", "badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-main leading-[1.05] tracking-tight"
          >
            {t("social", "title1")} <br />{" "}
            <span className="font-serif italic text-brand-blue font-normal">
              {t("social", "titleHighlight")}
            </span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {currentTestimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className={`bg-surface-card border border-line rounded-3xl p-8 flex flex-col relative group hover:border-white/20 transition-colors ${
                i === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <Quote className="w-10 h-10 text-brand-blue/20 absolute top-8 right-8 group-hover:text-brand-blue/40 transition-colors" />

              <p className="text-text-main text-lg mb-8 relative z-10 font-medium leading-relaxed">
                "{item.text}"
              </p>

              <div className="mt-auto flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-line group-hover:border-brand-blue/50 transition-colors">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-white font-bold">{item.author}</div>
                  <div className="text-text-muted text-sm">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
