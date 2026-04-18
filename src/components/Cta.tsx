import { motion } from 'motion/react';
import { ArrowRight, Send, Sparkles, Clock, CircleDollarSign, CheckCircle2, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useLanguage } from '../i18n';

export function Cta() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="px-4 py-16 md:py-32 max-w-7xl mx-auto relative overflow-hidden" id="contact">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-surface-card border border-line rounded-[40px] px-6 py-12 md:p-16 lg:p-20 shadow-[0_0_100px_rgba(37,99,235,0.05)] relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center"
      >
        {/* Dynamic Glowing Aurora Background inside the Card */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 mix-blend-screen opacity-60">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/30 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Left Column: Copy & Anchors */}
        <div className="lg:w-1/2 w-full text-left relative z-10">
          {/* Floating chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2 w-fit"
          >
            <Sparkles className="w-4 h-4 text-brand-purple" />
            <span className="text-sm font-bold uppercase tracking-widest text-[#E0E0E0]">{t('cta', 'badge')}</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-text-main leading-[1.05] tracking-tight mb-6">
            {t('cta', 'title1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue bg-[length:200%_auto] animate-gradient">
              {t('cta', 'title2')}
            </span>
          </h2>

          <p className="text-text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            {t('cta', 'desc')}
          </p>

          {/* Anchors - Budget & Timeline nicely formatted */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex items-center gap-4 px-6 py-4 bg-[#18181b] border border-line rounded-3xl flex-1">
               <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                 <Clock className="w-6 h-6 text-brand-blue" />
               </div>
               <div className="flex flex-col">
                 <span className="text-xs font-bold uppercase tracking-wider text-text-muted mb-1">{t('cta', 'timeline')}</span>
                 <span className="text-white font-medium">{t('cta', 'timelineVal')}</span>
               </div>
            </div>
            <div className="flex items-center gap-4 px-6 py-4 bg-[#18181b] border border-line rounded-3xl flex-1">
               <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                 <CircleDollarSign className="w-6 h-6 text-brand-purple" />
               </div>
               <div className="flex flex-col">
                 <span className="text-xs font-bold uppercase tracking-wider text-text-muted mb-1">{t('cta', 'budget')}</span>
                 <span className="text-white font-medium">{t('cta', 'budgetVal')}</span>
               </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col gap-3 text-sm font-medium text-text-muted">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>{t('cta', 'trust1')}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>{t('cta', 'trust2')}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interaction Form */}
        <div className="lg:w-1/2 w-full relative z-10">
           <div className="bg-[#18181b] border border-white/10 rounded-[32px] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Highlight glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-[60px]" />

              <div className="flex items-center gap-4 mb-8">
                 <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-blue/30">
                       <img 
                         src="https://picsum.photos/seed/ceo/150/150" 
                         alt="CEO Dubinsky Studio" 
                         className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                         referrerPolicy="no-referrer"
                       />
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#18181b] rounded-full" />
                 </div>
                 <div>
                    <div className="text-white font-bold text-lg">{t('cta', 'direct')}</div>
                    <div className="text-brand-blue font-medium text-sm">{t('cta', 'directSub')}</div>
                 </div>
              </div>

              <div className="space-y-4">
                 <motion.a
                    href="https://t.me/dubinskystudio"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-[#2AABEE] text-white rounded-2xl font-bold md:text-lg hover:bg-[#229ED9] transition-all flex items-center justify-between group shadow-[0_0_30px_rgba(42,171,238,0.2)]"
                 >
                    <div className="flex items-center gap-3">
                       <Send className="w-5 h-5" />
                       <span>Telegram</span>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                 </motion.a>

                 <div className="relative flex items-center py-4">
                    <div className="flex-grow border-t border-line" />
                    <span className="flex-shrink-0 mx-4 text-text-muted text-xs uppercase tracking-widest font-bold">{t('cta', 'orMail')}</span>
                    <div className="flex-grow border-t border-line" />
                 </div>

                 <form onSubmit={handleSubmit} className="relative flex flex-col gap-3 sm:flex-row">
                    <div className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 text-text-muted z-10">
                       <Mail className="w-5 h-5" />
                    </div>
                    <input 
                       type="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder={t('cta', 'placeholder')}
                       required
                       className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 sm:pl-12 sm:pr-6 text-white placeholder:text-text-muted focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all text-center sm:text-left"
                    />
                    <button 
                       type="submit"
                       disabled={isSubmitted}
                       className="w-full sm:w-auto shrink-0 py-4 px-8 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
                    >
                       {isSubmitted ? t('cta', 'sent') : t('cta', 'next')}
                    </button>
                 </form>
              </div>
           </div>
        </div>

      </motion.div>
    </section>
  );
}
