import { useEffect, useState } from 'react';

const LITE_MODE_QUERY =
  '(max-width: 767px), (pointer: coarse), (hover: none), (prefers-reduced-motion: reduce)';

export function useLiteMode() {
  const [isLiteMode, setIsLiteMode] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(LITE_MODE_QUERY);
    const handleChange = () => setIsLiteMode(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return isLiteMode;
}
