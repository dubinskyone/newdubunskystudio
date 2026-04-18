import { motion } from 'motion/react';
import { Layers, Terminal, Fingerprint } from 'lucide-react';
import { useLanguage } from '../i18n';

const teamNames = {
  RU: { alex: "Алексей Воронов", max: "Максим Лебедев", maria: "Мария Крамер", denis: "Денис Смирнов" },
  EN: { alex: "Alex Voronov", max: "Max Lebedev", maria: "Maria Kramer", denis: "Denis Smirnov" },
  UA: { alex: "Олексій Воронов", max: "Максим Лебедєв", maria: "Марія Крамер", denis: "Денис Смирнов" }
};

export function Team() {
  const { t, lang } = useLanguage();
  const names = teamNames[lang] || teamNames.EN;

  const currentStats = [
    { value: "5+", label: t('team', 'stat1Label'), icon: Layers },
    { value: "12", label: t('team', 'stat2Label'), icon: Terminal },
    { value: "100%", label: t('team', 'stat3Label'), icon: Fingerprint }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-[#09090b] relative overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-[#a1a1aa] mb-6 w-fit"
            >
              {t('team', 'badge')}
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-[1.05] tracking-tight"
            >
              {t('team', 'title1')} <span className="font-serif italic text-brand-blue font-normal">{t('team', 'titleHighlight')}</span><br/>{t('team', 'title2')}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-[#a1a1aa] mb-12 max-w-lg leading-relaxed"
            >
              {t('team', 'desc')}
            </motion.p>

            <div className="flex flex-col gap-6">
               {currentStats.map((stat, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 + idx * 0.1 }}
                     className="flex items-center gap-5"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0">
                        <stat.icon className="w-6 h-6 text-brand-blue" />
                     </div>
                     <div>
                        <div className="text-3xl font-display font-black text-white">{stat.value}</div>
                        <div className="text-sm font-bold text-[#a1a1aa] uppercase tracking-wider">{stat.label}</div>
                     </div>
                  </motion.div>
               ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative grid grid-cols-2 gap-4 h-full"
             >
                {/* 1st photo */}
                <div className="col-span-1 flex flex-col gap-4 pt-12">
                   <div className="relative group rounded-3xl overflow-hidden border border-white/10 aspect-[3/4]">
                      <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img src="https://picsum.photos/seed/team1/400/600" alt="Алексей, Lead React" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" referrerPolicy="no-referrer" />
                      <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="text-xl font-bold text-white mb-1">{names.alex}</div>
                        <div className="text-sm text-brand-blue">Lead Frontend</div>
                      </div>
                   </div>
                   <div className="relative group rounded-3xl overflow-hidden border border-white/10 aspect-square">
                      <div className="absolute inset-0 bg-brand-purple/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img src="https://picsum.photos/seed/team2/400/400" alt="Максим, DevOps Engineer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" referrerPolicy="no-referrer" />
                      <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="text-xl font-bold text-white mb-1">{names.max}</div>
                        <div className="text-sm text-brand-purple">DevOps Architect</div>
                      </div>
                   </div>
                </div>

                {/* 2nd photo column */}
                <div className="col-span-1 flex flex-col gap-4">
                   <div className="relative group rounded-3xl overflow-hidden border border-white/10 aspect-square shadow-[0_0_40px_rgba(37,99,235,0.15)] z-20">
                      <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img src="https://picsum.photos/seed/team3/400/400" alt="Елена, Art Director" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" referrerPolicy="no-referrer" />
                      <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="text-xl font-bold text-white mb-1">{names.maria}</div>
                        <div className="text-sm text-brand-blue">Art Director</div>
                      </div>
                   </div>
                   <div className="relative group rounded-3xl overflow-hidden border border-white/10 aspect-[3/4]">
                      <div className="absolute inset-0 bg-brand-purple/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img src="https://picsum.photos/seed/team4/400/600" alt="Дмитрий, Lead Backend" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" referrerPolicy="no-referrer" />
                      <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="text-xl font-bold text-white mb-1">{names.denis}</div>
                        <div className="text-sm text-brand-purple">Lead Backend</div>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
