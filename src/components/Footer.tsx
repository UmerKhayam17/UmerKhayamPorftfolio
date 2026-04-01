import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="relative py-12 px-6 border-t border-border">
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="text-2xl font-bold font-display">
            <span className="text-gradient-primary">UK</span>
            <span className="text-primary">.</span>
          </a>
          <p className="text-xs text-muted-foreground mt-1">Full Stack & AI Developer</p>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noopener" className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/umerkhayamsatti/" target="_blank" rel="noopener" className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:umerkhayam1717@gmail.com" className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300">
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
          Built with <Heart className="w-3 h-3 text-primary fill-primary" /> by Umer Khayam © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
