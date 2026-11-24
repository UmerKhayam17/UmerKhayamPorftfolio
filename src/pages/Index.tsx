import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import CommandMenu from "@/components/CommandMenu";
import TechMarquee from "@/components/TechMarquee";
import { useSpotlight } from "@/hooks/use-spotlight";

const Index = () => {
  useSpotlight();
  return (
  <div className="min-h-screen bg-background">
    <CommandMenu />
    <WhatsAppCTA />
    <Navbar />
    <HeroSection />
    <TechMarquee />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    {/* <ResumeSection /> */}
    <ContactSection />
    <Footer />
  </div>
  );
};

export default Index;
