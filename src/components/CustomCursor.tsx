import { useEffect, useRef } from 'react';

const HOVER_SEL =
  'a, button, [role="button"], input, textarea, label, .editorial-card, .editorial-card-crimson';

/** Dot + lerped ring cursor. Fine-pointer devices only. */
export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const root = document.documentElement;
    const lerp = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 0.18;

    let mx = -100, my = -100, rx = -100, ry = -100;
    let raf = 0;

    root.classList.add('has-custom-cursor');

    const move = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.style.opacity !== '1') {
        rx = mx; ry = my;
        dot.style.opacity = ring.style.opacity = '1';
      }
    };
    const over = (e: MouseEvent) => {
      const hit = (e.target as Element | null)?.closest?.(HOVER_SEL);
      ring.dataset.hover = hit ? '1' : '0';
      dot.dataset.hover = hit ? '1' : '0';
    };
    const down = () => { dot.dataset.down = ring.dataset.down = '1'; };
    const up = () => { dot.dataset.down = ring.dataset.down = '0'; };
    const leave = () => { dot.style.opacity = ring.style.opacity = '0'; };

    const loop = () => {
      rx += (mx - rx) * lerp;
      ry += (my - ry) * lerp;
      dot.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const opt = { passive: true } as const;
    window.addEventListener('pointermove', move, opt);
    window.addEventListener('mouseover', over, opt);
    window.addEventListener('mousedown', down, opt);
    window.addEventListener('mouseup', up, opt);
    document.documentElement.addEventListener('mouseleave', leave, opt);

    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true"><span /></div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"><span /></div>
    </>
  );
};
