import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";

const SPACING = 2.2;
const REPEL_R = 120;
const REPEL_F = 6.5;
const SPRING = 0.038;
const DAMP = 0.8;
const JITTER = 0.18;
const MAX_PTS = 100_000;

type Particle = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  r: number;
  g: number;
  b: number;
  a: number;
  size: number;
  shimmer: boolean;
};

function buildParticles(imgEl: HTMLImageElement, size: number): Particle[] {
  const particles: Particle[] = [];
  const SZ = Math.round(size * 0.72);

  const off = document.createElement("canvas");
  off.width = SZ;
  off.height = SZ;
  const oc = off.getContext("2d");
  if (!oc) return particles;

  oc.save();
  oc.beginPath();
  oc.arc(SZ / 2, SZ / 2, SZ / 2 - 2, 0, Math.PI * 2);
  oc.clip();
  oc.drawImage(imgEl, 0, 0, SZ, SZ);
  oc.restore();

  const data = oc.getImageData(0, 0, SZ, SZ).data;
  const ox0 = size / 2 - SZ / 2;
  const oy0 = size / 2 - SZ / 2;

  for (let y = 0; y < SZ && particles.length < MAX_PTS; y += SPACING) {
    for (let x = 0; x < SZ && particles.length < MAX_PTS; x += SPACING) {
      // clamp: rounding y/x near the edge must not read past the row / buffer
      const px = Math.min(Math.round(x), SZ - 1);
      const py = Math.min(Math.round(y), SZ - 1);
      const idx = (py * SZ + px) * 4;
      if (data[idx + 3] < 40) continue;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2];
      if (r > 235 && g > 235 && b > 235) continue; // skip near-white background

      const wx = ox0 + x, wy = oy0 + y;
      particles.push({
        x: wx + (Math.random() - 0.5),
        y: wy + (Math.random() - 0.5),
        ox: wx,
        oy: wy,
        vx: 0,
        vy: 0,
        r, g, b,
        a: data[idx + 3] / 255,
        size: SPACING * 0.88,
        shimmer: Math.random() < 0.08,
      });
    }
  }
  return particles;
}

type Props = {
  src: string;
  /** Internal drawing resolution in CSS px. The canvas is scaled to fit its className size. */
  size?: number;
  className?: string;
};

const SandParticleAvatar = ({ src, size = 320, className = "" }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    particles: [] as Particle[],
    pointer: { x: -9999, y: -9999 },
    tw: { r: 0 },
    active: false,
    raf: 0,
  });

  const tick = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const { particles, pointer, tw, active } = stateRef.current;
    const C = size / 2;

    ctx.clearRect(0, 0, size, size);

    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(56,189,248,0.07)";
    ctx.beginPath(); ctx.arc(C, C, size * 0.46, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = "rgba(56,189,248,0.04)";
    ctx.beginPath(); ctx.arc(C, C, size * 0.495, 0, Math.PI * 2); ctx.stroke();

    const r2 = tw.r * tw.r;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const dx = p.x - pointer.x, dy = p.y - pointer.y;
      const d2 = dx * dx + dy * dy;

      if (r2 > 0 && d2 < r2 && d2 > 0) {
        const d = Math.sqrt(d2);
        const f = (1 - d / tw.r) * REPEL_F;
        p.vx += (dx / d) * f;
        p.vy += (dy / d) * f;
      }

      p.vx += (p.ox - p.x) * SPRING;
      p.vy += (p.oy - p.y) * SPRING;

      if (active) {
        p.vx += (Math.random() - 0.5) * JITTER;
        p.vy += (Math.random() - 0.5) * JITTER;
      }

      p.vx *= DAMP; p.vy *= DAMP;
      p.x += p.vx; p.y += p.vy;

      // shift toward a sand colour the further a grain is displaced
      const t = Math.min(Math.hypot(p.x - p.ox, p.y - p.oy) / 45, 1);
      const br = p.r, bg = p.g, bb = p.b;
      let fr = br, fg = bg, fb = bb, fa = p.a;
      if (t > 0.02) {
        fr = Math.round(br + (220 - br) * t);
        fg = Math.round(bg + (168 - bg) * t);
        fb = Math.round(bb + (50 - bb) * t);
        fa = p.a * (1 - t * 0.3);
      }
      if (p.shimmer && t > 0.1 && Math.random() > 0.94) {
        fr = 255; fg = 240; fb = 180; fa = 0.9;
      }

      ctx.fillStyle = `rgba(${fr},${fg},${fb},${fa})`;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    }

    stateRef.current.raf = requestAnimationFrame(tick);
  }, [size]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * DPR;
    canvas.height = size * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      stateRef.current.particles = buildParticles(img, size);
      stateRef.current.raf = requestAnimationFrame(tick);
    };
    img.src = src;

    const state = stateRef.current;
    return () => {
      cancelled = true;
      cancelAnimationFrame(state.raf);
      gsap.killTweensOf(state.tw);
    };
  }, [src, size, tick]);

  // Map viewport coords into the canvas's internal `size` coordinate space,
  // since the rendered size (from className) can differ from `size`.
  const setPointer = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const s = stateRef.current;
    s.pointer.x = ((clientX - rect.left) / rect.width) * size;
    s.pointer.y = ((clientY - rect.top) / rect.height) * size;
    if (!s.active) {
      s.active = true;
      gsap.to(s.tw, { r: REPEL_R, duration: 0.35, ease: "power2.out" });
    }
  }, [size]);

  const release = useCallback(() => {
    const s = stateRef.current;
    s.active = false;
    s.pointer.x = -9999;
    s.pointer.y = -9999;
    gsap.to(s.tw, { r: 0, duration: 0.55, ease: "power2.out" });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", cursor: "crosshair" }}
      aria-label="Portrait of Umer Khayam"
      role="img"
      onMouseMove={(e) => setPointer(e.clientX, e.clientY)}
      onMouseLeave={release}
      onTouchMove={(e) => setPointer(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={release}
    />
  );
};

export default SandParticleAvatar;
