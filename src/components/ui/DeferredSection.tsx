import { useEffect, useRef, useState, type ReactNode } from 'react';

type DeferredSectionProps = {
  children: ReactNode;
  fallback: ReactNode;
  className?: string;
  rootMargin?: string;
  anchorId?: string;
  eager?: boolean;
};

export function DeferredSection({
  children,
  fallback,
  className,
  rootMargin = '500px 0px',
  anchorId,
  eager = false,
}: DeferredSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(eager);

  useEffect(() => {
    if (isVisible) {
      return;
    }

    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, rootMargin]);

  if (isVisible) {
    return <>{children}</>;
  }

  return (
    <div id={anchorId} ref={containerRef} className={className}>
      {fallback}
    </div>
  );
}
