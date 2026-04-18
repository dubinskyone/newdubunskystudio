import { motion } from 'motion/react';
import { Download, Rocket, FileText, ArrowRight } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useLanguage } from '../i18n';
import { usePerformanceMode } from '../hooks/usePerformanceMode';
import { useRevealMotion } from '../hooks/useRevealMotion';

export function LeadMagnet() {
  const { t } = useLanguage();
  const { disableHeavyEffects } = usePerformanceMode();
  const { reveal } = useRevealMotion();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setIsSubmitted(true);
      // In a real app, you would send this to your CRM/Backend
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="perf-section py-16 md:py-24 px-4 bg-transparent relative overflow-hidden" id="lead-magnet">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <motion.div 
          {...reveal({
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
          })}
          className="bg-gradient-to-br from-[#18181b] to-surface-bg border border-line rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-left"
        >
          {/* Abstract Glow */}
          <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] bg-brand-blue/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
          
          <div className="w-full lg:w-1/2 relative z-10 mt-8 md:mt-0">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20">
                 <FileText className="w-5 h-5 text-brand-purple" />
               </div>
               <span className="text-xs font-bold uppercase tracking-widest text-text-muted">{t('lead', 'badge')}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              {t('lead', 'titlePart1')}<span className="font-serif italic text-brand-blue font-normal">{t('lead', 'titleHighlight')}</span>{t('lead', 'titlePart2')}
            </h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              {t('lead', 'desc')}
            </p>

             <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('lead', 'placeholder')}
                className="w-full px-6 py-4 rounded-xl sm:rounded-full bg-black/40 border border-white/10 text-white placeholder:text-[#a1a1aa] focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
              <button 
                type="submit"
                disabled={isSubmitted}
                className="w-full sm:w-auto shrink-0 py-4 px-8 rounded-xl sm:rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <span>{t('lead', 'sent')}</span>
                ) : (
                  <>
                    {t('lead', 'download')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 relative z-10 lg:-order-none order-first mb-8 lg:mb-0">
             <div className={`bg-surface-glass border border-line rounded-[24px] p-6 backdrop-blur-md shadow-2xl max-w-sm mx-auto ${disableHeavyEffects ? '' : 'skew-y-3 lg:skew-y-6 transform hover:skew-y-0 transition-transform duration-500'}`}>
                <div className="flex items-center justify-between border-b border-line pb-4 mb-4">
                   <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                      <div className="w-3 h-3 rounded-full bg-[#eab308]" />
                      <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                   </div>
                   <div className="text-xs font-mono text-text-muted">guideline.pdf</div>
                </div>
                
                <div className="space-y-4">
                   <div className={`h-4 w-3/4 bg-white/10 rounded-full ${disableHeavyEffects ? '' : 'animate-pulse'}`} />
                   <div className="h-4 w-full bg-white/5 rounded-full" />
                   <div className="h-4 w-5/6 bg-white/5 rounded-full" />
                   
                   <div className="pt-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center border-dashed">
                        <Download className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Boost Conversion</div>
                        <div className="text-brand-blue text-xs">PDF • 2.4 MB</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
