import { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  r: number;
  vy: number;
  drift: number;
  phase: number;
  alpha: number;
}

/**
 * A calm, self-running ambient bubble field for the hero background.
 * Bubbles drift upward autonomously — no mouse tracking, purely decorative.
 * Respects prefers-reduced-motion.
 */
export default function AmbientBubbleField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let bubbles: Bubble[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      const rect = canvas.getBoundingClientRect();
      const count = Math.max(10, Math.floor((rect.width * rect.height) / 60000));
      bubbles = Array.from({ length: count }, () => spawn(rect, true));
    };

    const spawn = (rect: DOMRect, initial = false): Bubble => ({
      x: Math.random() * rect.width,
      y: initial ? Math.random() * rect.height : rect.height + 20,
      r: 2 + Math.random() * 7,
      vy: 0.15 + Math.random() * 0.35,
      drift: (Math.random() - 0.5) * 0.25,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.08 + Math.random() * 0.18,
    });

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (const b of bubbles) {
        b.y -= b.vy;
        b.phase += 0.01;
        b.x += Math.sin(b.phase) * b.drift;

        if (b.y < -20) {
          Object.assign(b, spawn(rect));
        }

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r * 2.4);
        grad.addColorStop(0, `rgba(86, 221, 216, ${b.alpha})`);
        grad.addColorStop(1, 'rgba(86, 221, 216, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r * 2.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(140, 215, 255, ${b.alpha * 1.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    if (!reduce) {
      rafRef.current = requestAnimationFrame(render);
    } else {
      // static frame for reduced motion
      render();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    }

    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
