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
  "REST API": { icon: FaServer, color: "#0EA5E9" },
  "REST APIs": { icon: FaServer, color: "#0EA5E9" },
  "Maps API": { icon: FaServer, color: "#0EA5E9" },
};

export const getTechIcon = (tech: string): TechIconMeta | null => iconMap[tech] ?? null;
