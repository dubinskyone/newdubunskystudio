import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { ArrowRight, Mail, User, Building2 } from 'lucide-react';
import { MouseEvent } from 'react';

export function CallToAction() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="relative w-full border-t border-white/5 bg-[#09090b] overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(37,99,235,0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 py-32 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
         {/* Huge Text Content */}
         <div className="flex-1 flex flex-col items-start w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/5 text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-8"
            >
              Следующий шаг
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl sm:text-8xl lg:text-[100px] font-display font-black text-white leading-[0.9] tracking-tighter mb-8"
            >
              ИДЕЯ.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-purple-500">РЕЛИЗ.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-[#a1a1aa] max-w-lg mb-12 font-medium"
            >
              Готовы обсудить ваш концепт? Оставьте заявку, и мы подготовим бесплатную архитектурную оценку и Roadmap проекта.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 shadow-inner">
                <ArrowRight className="w-8 h-8 text-brand-blue rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-1">Написать напрямую</span>
                <a href="mailto:hello@dubinsky.studio" className="text-2xl font-mono font-medium text-white hover:text-brand-blue transition-colors">
                  hello@dubinsky.studio
                </a>
              </div>
            </motion.div>
         </div>

         {/* Form Card */}
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="w-full lg:w-[480px] shrink-0"
         >
           <div className="bg-[#18181b]/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
              <form className="flex flex-col gap-5 relative z-10">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/50 ml-2">Ваше имя</label>
                  <div className="relative group/input">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within/input:text-brand-blue transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Александр"
                      className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:bg-brand-blue/5 transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/50 ml-2">Email</label>
                  <div className="relative group/input">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within/input:text-brand-blue transition-colors" />
                    <input 
                      type="email" 
                      placeholder="alex@company.com"
                      className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:bg-brand-blue/5 transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/50 ml-2">О проекте</label>
                  <div className="relative group/input">
                    <Building2 className="absolute left-4 top-5 w-5 h-5 text-white/30 group-focus-within/input:text-brand-blue transition-colors" />
                    <textarea 
                      rows={3}
                      placeholder="Кратко опишите вашу задачу..."
                      className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:bg-brand-blue/5 transition-all resize-none shadow-inner"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 w-full py-5 bg-white text-black rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-2 group/btn"
                  type="button"
                >
                  Начать проект
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </form>
           </div>
         </motion.div>
      </div>
    </section>
  );
}
