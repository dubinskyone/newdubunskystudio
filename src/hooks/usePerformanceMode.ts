import { useEffect, useState } from 'react';

type PerformanceMode = {
  isMobile: boolean;
  isTouch: boolean;
  prefersReducedMotion: boolean;
  saveData: boolean;
  disableHeavyEffects: boolean;
  disableHoverEffects: boolean;
};

const DEFAULT_STATE: PerformanceMode = {
  isMobile: false,
  isTouch: false,
  prefersReducedMotion: false,
  saveData: false,
  disableHeavyEffects: false,
  disableHoverEffects: false,
};

export function usePerformanceMode(): PerformanceMode {
  const [state, setState] = useState<PerformanceMode>(DEFAULT_STATE);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }

    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const touchQuery = window.matchMedia('(hover: none), (pointer: coarse)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      const connection =
        typeof navigator !== 'undefined'
          ? (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
          : undefined;
      const saveData = Boolean(connection?.saveData);

      const isMobile = mobileQuery.matches;
      const isTouch = touchQuery.matches;
      const prefersReducedMotion = reducedMotionQuery.matches;
      const disableHeavyEffects = isMobile || isTouch || prefersReducedMotion || saveData;

      setState({
        isMobile,
        isTouch,
        prefersReducedMotion,
        saveData,
        disableHeavyEffects,
        disableHoverEffects: isTouch || prefersReducedMotion,
      });
    };

    update();

    mobileQuery.addEventListener('change', update);
    touchQuery.addEventListener('change', update);
    reducedMotionQuery.addEventListener('change', update);

    return () => {
      mobileQuery.removeEventListener('change', update);
      touchQuery.removeEventListener('change', update);
      reducedMotionQuery.removeEventListener('change', update);
    };
  }, []);

  return state;
}
