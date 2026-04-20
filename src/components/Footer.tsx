import { motion } from 'motion/react';
import { useLanguage, Language } from '../i18n';

export function Footer() {
  const { lang, setLang } = useLanguage();
  const copy = {
    RU: {
      tagline:
        'Студия полного цикла для продуктовых команд. Делаем MVP, интерфейсы и рабочие цифровые продукты без лишнего шума.',
      navTitle: 'Навигация',
      contactsTitle: 'Связаться',
      discuss: 'Обсудить проект',
      links: [
        { name: 'Главная', id: 'top' },
        { name: 'Кейсы', id: 'cases' },
        { name: 'Интерфейсы', id: 'showcase' },
        { name: 'Процесс', id: 'platform' },
        { name: 'Команда', id: 'team' },
        { name: 'Контакты', id: 'contact' },
      ],
      nda: 'NDA и более детальный разбор — по запросу.',
      rights: 'Все права защищены.',
    },
    EN: {
      tagline:
        'A full-cycle studio for product teams. We build MVPs, interfaces, and working digital products without unnecessary noise.',
      navTitle: 'Navigation',
      contactsTitle: 'Contact',
      discuss: 'Discuss project',
      links: [
        { name: 'Home', id: 'top' },
        { name: 'Cases', id: 'cases' },
        { name: 'Interfaces', id: 'showcase' },
        { name: 'Process', id: 'platform' },
        { name: 'Team', id: 'team' },
        { name: 'Contact', id: 'contact' },
      ],
      nda: 'NDA and a deeper product review are available on request.',
      rights: 'All rights reserved.',
    },
    UA: {
      tagline:
        'Студія повного циклу для продуктових команд. Робимо MVP, інтерфейси та робочі цифрові продукти без зайвого шуму.',
      navTitle: 'Навігація',
      contactsTitle: 'Звʼязатися',
      discuss: 'Обговорити проєкт',
      links: [
        { name: 'Головна', id: 'top' },
        { name: 'Кейси', id: 'cases' },
        { name: 'Інтерфейси', id: 'showcase' },
        { name: 'Процес', id: 'platform' },
        { name: 'Команда', id: 'team' },
        { name: 'Контакти', id: 'contact' },
      ],
      nda: 'NDA і детальніший розбір — за запитом.',
      rights: 'Всі права захищені.',
    },
  }[lang];

  return (
    <footer className="bg-surface-bg border-t border-line pt-20 pb-8 px-4 overflow-hidden relative">
      <div className="mx-auto max-w-[92rem]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-line pb-16">
          <div className="col-span-1 md:col-span-5 pr-8">
            <a href="#top" className="mb-6 inline-flex w-fit items-center gap-3.5 no-underline" aria-label="Dubinsky Studio">
              <img
                src="/branding/logo-mark-white.svg"
                alt=""
                aria-hidden="true"
                className="h-8 sm:h-10 w-auto shrink-0 opacity-95"
                loading="lazy"
                decoding="async"
              />
              <span className="flex flex-col justify-center leading-none whitespace-nowrap opacity-95">
                <span className="font-logo text-base sm:text-lg font-semibold uppercase tracking-[0.08em] text-text-main">
                  Dubinsky
                </span>
                <span className="mt-1.5 font-logo text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.38em] text-text-muted">
                  Studio
                </span>
              </span>
            </a>
            <p className="text-text-muted max-w-sm mb-8 text-lg">{copy.tagline}</p>

            {/* Language Switcher */}
            <div className="flex gap-2">
              {['UA', 'RU', 'EN'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l as Language)}
                  aria-label={`Switch language to ${l}`}
                  aria-pressed={lang === l}
                  className={`px-4 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                    lang === l 
                      ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                      : 'bg-surface-glass text-text-muted border border-line hover:border-white/20 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-bold text-text-main mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              {copy.navTitle}
            </h4>
            <div className="flex flex-col gap-4 text-text-muted font-medium">
              {copy.links.map((item) => (
                <motion.a 
                  key={item.name}
                  href={`#${item.id}`} 
                  whileHover={{ x: 5, color: '#FAFAFA' }}
                  className="transition-colors w-fit block"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-4">
            <h4 className="font-bold text-text-main mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-purple" />
              {copy.contactsTitle}
            </h4>
            <div className="flex flex-col gap-4 text-text-muted font-medium">
              <motion.a whileHover={{ x: 5, color: '#FAFAFA' }} href="mailto:hello@dubinsky.studio" className="transition-colors w-fit text-lg">hello@dubinsky.studio</motion.a>
              <div className="h-px w-full bg-line my-1" />
              <motion.a whileHover={{ x: 5, color: '#FAFAFA' }} href="https://t.me/dubinskystudio" target="_blank" rel="noreferrer" className="transition-colors w-fit">Telegram</motion.a>
              <motion.a whileHover={{ x: 5, color: '#FAFAFA' }} href="#contact" className="transition-colors w-fit">{copy.discuss}</motion.a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="text-sm font-medium text-text-muted/70">{copy.nda}</div>
          
          <div className="text-sm text-text-muted/70">
            © {new Date().getFullYear()} Dubinsky Studio. {copy.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
