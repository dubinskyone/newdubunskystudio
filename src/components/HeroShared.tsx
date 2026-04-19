export type HeroCopy = {
  badge: string;
  title1: string;
  title3: string;
  desc: string;
  descHighlight: string;
  descEnding: string;
  contact: string;
  cases: string;
  trusted: string;
};

export function TrustedMarks({ trustedLabel }: { trustedLabel: string }) {
  return (
    <div className="w-full border-t border-line pt-10 sm:pt-12">
      <div className="flex flex-col items-center">
        <span className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted sm:mb-8">
          {trustedLabel}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-70 sm:gap-10 md:gap-16">
          <span className="font-sans text-lg font-bold text-text-muted sm:font-display sm:text-xl md:text-2xl">
            FinTech Core
          </span>
          <span className="font-sans text-lg font-medium tracking-tighter text-text-muted sm:font-display sm:text-xl md:text-2xl">
            NEXUS
          </span>
          <span className="font-sans text-lg font-black tracking-tight text-text-muted sm:text-xl md:text-2xl">
            Lumina
          </span>
          <span className="brand-accent-text pr-2 font-sans text-lg font-semibold sm:font-display sm:text-xl md:text-2xl">
            Aero
          </span>
        </div>
      </div>
    </div>
  );
}
