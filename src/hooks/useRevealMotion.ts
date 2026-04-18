import { usePerformanceMode } from './usePerformanceMode';

type RevealProps = {
  initial?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
  transition?: unknown;
};

export function useRevealMotion() {
  const { disableHeavyEffects } = usePerformanceMode();

  const reveal = <T extends RevealProps>(props: T): Partial<T> => {
    if (disableHeavyEffects) {
      return { initial: false } as Partial<T>;
    }

    return props;
  };

  return { reveal, disableHeavyEffects };
}
