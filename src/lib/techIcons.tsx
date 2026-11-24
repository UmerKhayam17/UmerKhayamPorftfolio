import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiDjango,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiNginx,
  SiGithubactions,
  SiGithub,
  SiDocker,
  SiVercel,
  SiRender,
  SiPostman,
  SiStripe,
  SiPaypal,
  SiFastapi,
  SiPrisma,
  SiExpo,
  SiOllama,
  SiSocketdotio,
  SiOnnx,
  SiYolo,
  SiPm2,
} from "react-icons/si";
import { FaServer } from "react-icons/fa6";

type TechIconMeta = {
  icon: IconType;
  color: string;
};

const iconMap: Record<string, TechIconMeta> = {
  React: { icon: SiReact, color: "#61DAFB" },
  "React.js": { icon: SiReact, color: "#61DAFB" },
  Next: { icon: SiNextdotjs, color: "#111111" },
  "Next.js": { icon: SiNextdotjs, color: "#111111" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Express.js": { icon: SiExpress, color: "#000000" },
  Express: { icon: SiExpress, color: "#000000" },
  Django: { icon: SiDjango, color: "#092E20" },
  Python: { icon: SiPython, color: "#3776AB" },
  TensorFlow: { icon: SiTensorflow, color: "#FF6F00" },
  PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
  OpenCV: { icon: SiOpencv, color: "#5C3EE8" },
  Nginx: { icon: SiNginx, color: "#009639" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  GitHub: { icon: SiGithub, color: "#181717" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Vercel: { icon: SiVercel, color: "#111111" },
  Render: { icon: SiRender, color: "#46E3B7" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Stripe: { icon: SiStripe, color: "#635BFF" },
  PayPal: { icon: SiPaypal, color: "#00457C" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  Prisma: { icon: SiPrisma, color: "#2D3748" },
  Expo: { icon: SiExpo, color: "#000020" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  Ollama: { icon: SiOllama, color: "#111111" },
  "Socket.IO": { icon: SiSocketdotio, color: "#010101" },
  ONNX: { icon: SiOnnx, color: "#005CED" },
  YOLO: { icon: SiYolo, color: "#111F68" },
  PM2: { icon: SiPm2, color: "#2B037A" },
  "REST API": { icon: FaServer, color: "#0EA5E9" },
  "REST APIs": { icon: FaServer, color: "#0EA5E9" },
  "Maps API": { icon: FaServer, color: "#0EA5E9" },
};

/** Near-black brand icons inherit the surrounding text color so they match the UI. */
const isTooDark = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 60;
};

export const getTechIcon = (tech: string): TechIconMeta | null => {
  const meta = iconMap[tech];
  if (!meta) return null;
  return isTooDark(meta.color) ? { ...meta, color: "currentColor" } : meta;
};

/** All mapped techs, deduplicated by icon (e.g. "React" and "React.js" share one). */
export const allTechIcons = () => {
  const seen = new Set<IconType>();
  return Object.entries(iconMap)
    .filter(([, m]) => !seen.has(m.icon) && seen.add(m.icon) && m.icon !== FaServer)
    .map(([name]) => ({ name, ...getTechIcon(name)! }));
};
