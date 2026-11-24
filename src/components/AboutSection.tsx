import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  GraduationCap,
  Layers,
  MapPin,
  ScanFace,
  Sparkles,
  Bot,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences, profile } from "@/data/portfolioData";

type Highlight = { icon: LucideIcon; title: string; description: string };

const highlights: Highlight[] = [
  {
    icon: Layers,
    title: "SaaS, ERP & CRM",
    description: "Multi-tenant platforms with role-based access, dashboards, billing, and modular backends — built for real users and real data.",
  },
  {
    icon: ScanFace,
    title: "Computer Vision",
    description: "Face recognition, person re-ID, ANPR, pose and object tracking on live CCTV with YOLO, PyTorch, and ONNX on GPU.",
  },
  {
    icon: Bot,
    title: "LLM & Voice Agents",
    description: "AI voice agents for call centers and local-LLM automation (Ollama) — no data leaves the client's servers.",
  },
  {
    icon: Code2,
    title: "Full-Stack Web & Mobile",
    description: "React, Next.js, and React Native front ends on Node.js, Django, or FastAPI APIs with MongoDB or PostgreSQL.",
  },
  {
    icon: Brain,
    title: "Model Training",
    description: "Custom datasets, YOLO detectors, and multimodal fusion networks — trained, calibrated, and evaluated on held-out data.",
  },
  {
    icon: Cloud,
    title: "Production DevOps",
    description: "Linux VPS, Nginx, SSL, PM2, Docker, and CI/CD with GitHub Actions. I own deployments end to end.",
  },
];

const currentRole = experiences.find((e) => e.current);
const education = experiences.find((e) => e.type === "edu");

const facts: { icon: LucideIcon; label: string; value: string }[] = [
  ...(currentRole ? [{ icon: Briefcase, label: "Currently", value: `${currentRole.title} @ ${currentRole.org}` }] : []),
  { icon: MapPin, label: "Based in", value: profile.location },
  ...(education ? [{ icon: GraduationCap, label: "Education", value: `${education.title}, ${education.org}` }] : []),
  { icon: Sparkles, label: "Availability", value: profile.availability },
];

const AboutSection = () => (
  <section id="about" className="section-padding relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container mx-auto max-w-6xl">
      <SectionHeading badge="About" title={<>Know Who <span className="text-gradient-primary">I Am</span></>} />

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
        {/* Bio + facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-28"
        >
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">{profile.summary}</p>

          <dl className="rounded-2xl bg-card border border-border shadow-card divide-y divide-border">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 px-5 py-4">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <dt className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">{label}</dt>
                  <dd className="text-sm font-semibold text-foreground">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* What I do */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="spotlight group card-spline relative p-6 rounded-2xl bg-card border border-border hover:border-primary/25 transition-all duration-500 shadow-card hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                <item.icon className="w-5 h-5 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-bold text-foreground mb-2 font-display text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
