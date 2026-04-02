import { motion } from "framer-motion";
import { Download } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { downloadResume } from "@/lib/downloadResume";

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding relative bg-card/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto max-w-4xl text-center">
        <SectionHeading
          badge="Resume"
          title={
            <>
              Download My <span className="text-gradient-primary">Professional Resume</span>
            </>
          }
          subtitle="One click download. This resume is generated directly from portfolio data and stays updated automatically."
          center
        />

        <motion.button
          type="button"
          onClick={downloadResume}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all duration-300"
        >
          <Download className="w-4 h-4" />
          Download Resume (PDF)
        </motion.button>
      </div>
    </section>
  );
};

export default ResumeSection;
