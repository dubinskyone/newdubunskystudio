import { useRef, type ReactNode, type MouseEvent } from 'react';
import { useLiteMode } from '../../hooks/useLiteMode';

export function Magnetic({ children, className = '' }: { children: ReactNode, className?: string }) {
  const isLiteMode = useLiteMode();
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    ref.current.style.transform = `translate3d(${middleX * 0.2}px, ${middleY * 0.2}px, 0)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate3d(0, 0, 0)';
  };

  if (isLiteMode) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={className}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{
        transition: 'transform 260ms cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
