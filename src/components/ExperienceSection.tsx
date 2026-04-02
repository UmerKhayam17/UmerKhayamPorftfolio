import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/portfolioData";
import { TimelineContent } from "@/components/ui/timeline-animation";

const ExperienceSection = () => {
  const timelineRef = useRef<HTMLElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.14,
        duration: 0.55,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -16,
      opacity: 0,
    },
  };

  return (
    <section id="experience" className="section-padding relative" ref={timelineRef}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          badge="Journey"
          title={<>Experience & <span className="text-gradient-primary">Education</span></>}
          subtitle="My professional journey and academic background."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <TimelineContent
                key={i}
                animationNum={i}
                customVariants={revealVariants}
                timelineRef={timelineRef}
                className="relative pl-12 sm:pl-14"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-5 sm:top-6 w-8 h-8 sm:w-[38px] sm:h-[38px] rounded-full flex items-center justify-center ${
                  exp.current 
                    ? "bg-primary/10 border-2 border-primary shadow-glow" 
                    : "bg-card border-2 border-border"
                }`}>
                  {exp.type === "work" ? (
                    <Briefcase className={`w-4 h-4 ${exp.current ? "text-primary" : "text-muted-foreground"}`} />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>

                <div className={`card-spline p-5 sm:p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  exp.current 
                    ? "bg-card border-primary/15 shadow-card hover:shadow-glow" 
                    : "bg-card/50 border-border hover:border-border"
                }`}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-primary">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-display">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">{exp.org}</p>
                  {exp.points.length > 0 && (
                    <ul className="space-y-2.5">
                      {exp.points.map((p, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-3 leading-relaxed">
                          <span className="text-primary mt-0.5 shrink-0">▹</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </TimelineContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
