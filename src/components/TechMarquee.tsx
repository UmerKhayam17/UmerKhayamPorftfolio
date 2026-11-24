import { allTechIcons } from "@/lib/techIcons";

const techs = allTechIcons();

/** Infinite scrolling strip of the stack. The list is rendered twice so the -50% loop is seamless. */
const TechMarquee = () => (
  <section aria-label="Technologies I work with" className="relative py-10 border-y border-border bg-card/40">
    <p className="text-center text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-6">
      Stack I ship with
    </p>
    <div className="marquee overflow-hidden">
      <ul className="marquee-track flex w-max gap-3">
        {[...techs, ...techs].map((t, i) => (
          <li
            key={`${t.name}-${i}`}
            aria-hidden={i >= techs.length}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border bg-card text-sm font-semibold text-secondary-foreground whitespace-nowrap shadow-card"
          >
            <t.icon className="w-5 h-5" style={{ color: t.color }} />
            {t.name}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TechMarquee;
