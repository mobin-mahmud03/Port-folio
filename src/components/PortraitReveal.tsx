import { useEffect, useRef, useState } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const DURATION = 1.3; // total seconds
const SETTLE = 0.75; // glitch intensity reaches 0 here, then holds clean
const MAX_SPLIT = 0.035; // max RGB offset, fraction of width
const STRIPS = 16; // horizontal slices that tear sideways

const clamp = (v: number) => Math.min(1, Math.max(0, v));

/** RGB-split glitch reveal, drawn on a canvas that matches the portrait silhouette. */
export const PortraitReveal: React.FC<Props> = ({ src, alt, className }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animating, setAnimating] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (!animating) return;
    const wrap = wrapRef.current!;
    const img = imgRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let raf = 0;
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const W = Math.round(wrap.clientWidth * dpr);
      const H = Math.round(wrap.clientHeight * dpr);
      canvas.width = W;
      canvas.height = H;

      // Draw portrait like object-contain + object-bottom, then split into R, G, B layers
      const nw = img.naturalWidth || 1;
      const nh = img.naturalHeight || 1;
      const s = Math.min(W / nw, H / nh);
      const base = document.createElement('canvas');
      base.width = W;
      base.height = H;
      const bctx = base.getContext('2d', { willReadFrequently: true })!;
      bctx.drawImage(img, (W - nw * s) / 2, H - nh * s, nw * s, nh * s);
      const src = bctx.getImageData(0, 0, W, H);

      const channels = [0, 1, 2].map((ch) => {
        const c = document.createElement('canvas');
        c.width = W;
        c.height = H;
        const out = new ImageData(new Uint8ClampedArray(src.data), W, H);
        for (let i = 0; i < out.data.length; i += 4) {
          for (let k = 0; k < 3; k++) if (k !== ch) out.data[i + k] = 0;
        }
        c.getContext('2d')!.putImageData(out, 0, 0);
        return c;
      });
      const [red, green, blue] = channels;

      const start = performance.now();
      let burst = 0; // frames left in current glitch burst

      const tick = (now: number) => {
        const t = (now - start) / 1000;
        const g = 1 - clamp(t / SETTLE); // glitch intensity 1 -> 0
        if (t >= DURATION) {
          setAnimating(false); // removes canvas, shows the real image
          return;
        }

        ctx.clearRect(0, 0, W, H);
        ctx.globalCompositeOperation = 'lighter';

        if (g > 0) {
          if (burst <= 0 && Math.random() < 0.35) burst = 2 + ((Math.random() * 4) | 0);
          const power = (burst > 0 ? 1 : 0.35) * g;
          burst--;
          const split = MAX_SPLIT * W * power;
          const sh = H / STRIPS;

          for (let i = 0; i < STRIPS; i++) {
            const y = Math.floor(i * sh);
            const h = Math.ceil(sh);
            const tear = Math.random() < 0.4 * power ? (Math.random() - 0.5) * W * 0.12 * power : 0;
            const j = (Math.random() - 0.5) * split * 0.6;
            ctx.drawImage(red, 0, y, W, h, split + tear + j, y, W, h);
            ctx.drawImage(green, 0, y, W, h, tear, y, W, h);
            ctx.drawImage(blue, 0, y, W, h, -split + tear - j, y, W, h);
          }

          // scanlines + occasional crimson flash
          ctx.globalCompositeOperation = 'source-atop';
          ctx.fillStyle = 'rgba(0,0,0,0.22)';
          for (let y = 0; y < H; y += 4) ctx.fillRect(0, y, W, 1);
          if (burst > 0 && Math.random() < 0.3) {
            ctx.fillStyle = 'rgba(216,58,52,0.25)';
            ctx.fillRect(0, 0, W, H);
          }

          canvas.style.opacity = t < 0.12 ? String(Math.random() * 0.6) : String(0.8 + Math.random() * 0.2);
          canvas.style.transform = `translate3d(${(Math.random() - 0.5) * 6 * power}px,0,0)`;
        } else {
          // clean frame, identical to the real image
          ctx.drawImage(red, 0, 0);
          ctx.drawImage(green, 0, 0);
          ctx.drawImage(blue, 0, 0);
          canvas.style.opacity = '1';
          canvas.style.transform = 'none';
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    if (img.complete && img.naturalWidth) run();
    else img.addEventListener('load', run, { once: true });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      img.removeEventListener('load', run);
    };
  }, [animating]);

  return (
    <div ref={wrapRef} className="relative w-full h-full">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={className}
        style={animating ? { opacity: 0 } : undefined}
      />
      {animating && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      )}
    </div>
  );
};
