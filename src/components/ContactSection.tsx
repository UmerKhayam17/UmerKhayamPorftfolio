import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionHeading
          badge="Contact"
          title={<>Let's Build Something <span className="text-gradient-primary">Amazing</span></>}
          subtitle="Whether you need a full-stack developer, SaaS architect, or AI integration specialist — I'd love to hear about your project."
          center
        />

        <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-16">
          {[
            { icon: Mail, label: "Email", value: "umerkhayam1717@gmail.com", href: "mailto:umerkhayam1717@gmail.com" },
            { icon: Phone, label: "Phone", value: "+92 316 5511251", href: "tel:03165511251" },
            { icon: MapPin, label: "Location", value: "Islamabad, Pakistan", href: "#" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-glow transition-all duration-500 text-center hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-xs text-muted-foreground mb-1 font-mono uppercase tracking-wider">{item.label}</p>
              <p className="text-sm text-foreground font-medium">{item.value}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-wrap items-center gap-4 justify-center">
            <a
              href="mailto:umerkhayam1717@gmail.com"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              Send a Message
            </a>
            <a
              href="https://www.linkedin.com/in/umerkhayamsatti/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
