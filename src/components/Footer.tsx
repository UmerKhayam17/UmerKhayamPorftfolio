import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { profile } from "@/data/portfolioData";

const Footer = () => (
  <footer className="relative py-12 px-4 sm:px-6 border-t border-border bg-card/30">
    <div className="container mx-auto max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-bold font-display inline-flex items-center">
            <span className="text-gradient-primary">UK</span>
            <span className="text-primary">.</span>
          </a>
          <p className="text-sm text-muted-foreground mt-2">Full Stack & AI Developer</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300">
            <Github className="w-4 h-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={`mailto:${profile.email}`} className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300">
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground flex items-center justify-center md:justify-end gap-1.5">
            Built<p className="w-3 h-3 text-primary fill-primary" /> by {profile.name}
          </p>
          <p className="text-xs text-muted-foreground mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
