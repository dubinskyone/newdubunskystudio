import { ReactNode, startTransition, useEffect, useRef, useState } from 'react';

type DeferredSectionProps = {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
  eagerAfterMs?: number;
  className?: string;
};

export function DeferredSection({
  children,
  minHeight = 0,
  rootMargin = '1200px 0px',
  eagerAfterMs = 1200,
  className = '',
}: DeferredSectionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (isMounted || typeof window === 'undefined') {
      return;
    }

    const reveal = () => {
      if (hasMountedRef.current) {
        return;
      }

      hasMountedRef.current = true;
      startTransition(() => {
        setIsMounted(true);
      });
    };

    const timer = window.setTimeout(reveal, eagerAfterMs);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
        }
      },
      { rootMargin }
    );

    const currentAnchor = anchorRef.current;
    if (currentAnchor) {
      observer.observe(currentAnchor);
    }

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [eagerAfterMs, isMounted, rootMargin]);

  if (isMounted) {
    return <>{children}</>;
  }

  return (
    <div
      ref={anchorRef}
      className={className}
      aria-hidden="true"
      style={{ minHeight }}
    />
  );
}
