import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n';

export const Faq = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      q: t('faq', 'q1'),
      a: t('faq', 'a1')
    },
    {
      q: t('faq', 'q2'),
      a: t('faq', 'a2')
    },
    {
      q: t('faq', 'q3'),
      a: t('faq', 'a3')
    },
    {
      q: t('faq', 'q4'),
      a: t('faq', 'a4')
    },
    {
      q: t('faq', 'q5'),
      a: t('faq', 'a5')
    }
  ];

  return (
    <section className="scroll-mt-28 md:scroll-mt-32 py-24 md:py-32 px-4 bg-transparent relative" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-[#a1a1aa] mb-6 backdrop-blur-md"
          >
            {t('faq', 'badge')}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight"
          >
            {t('faq', 'title')}
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (index * 0.1) }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'bg-[#18181b] border-brand-blue/30 shadow-[0_0_30px_rgba(37,99,235,0.1)]' : 'bg-[#09090b] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none cursor-pointer"
                >
                  <span className={`text-lg md:text-xl font-bold font-display pr-8 transition-colors ${isOpen ? 'text-white' : 'text-[#a1a1aa]'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isOpen ? 'bg-brand-blue/20 text-brand-blue border border-brand-blue/30' : 'bg-white/5 text-white/50 border border-white/10'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 text-[#a1a1aa] leading-relaxed text-base md:text-lg">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
